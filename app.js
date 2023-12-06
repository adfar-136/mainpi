const express = require("express");
const passport = require("passport");
const app = express();
require('dotenv').config();
const fast2sms = require("fast-two-sms");
const multer = require("multer");
const path = require("path");
const flash = require("express-flash");
const expressSession = require("express-session");
const { User,Register } = require("./database");
const bodyParser = require("body-parser");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(flash());
app.use(bodyParser.urlencoded({ extended: true }));
const { initializePassport, isAuthenticated } = require("./passportconfig");
initializePassport(passport);
app.use(expressSession({ secret: "secret", resave: false }));
app.use(passport.initialize());
app.use(passport.session());
app.set("view engine", "ejs");
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  // res.sendFile(__dirname + "/views/index.html");
  const user = req.user; // Access the authenticated user
  res.render("index", { user }); // Pass the user data to the template
});


app.post("/signup", async (req, res) => {
  const { name, username, password } = req.body;

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(username)) {
    return res.render("signup", { error: "Invalid email format", name });
  }

  // Check if the user already exists
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.render("signup", { error: "User already exists", name });
  }

  // Create a new user
  const newUser = await User.create({ name, username, password });
  res.status(201).redirect("/");
});
app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      // Authentication failed, display error message only if info is available
      if (info && info.message) {
        return res.render("login", { errorMessage: info.message });
      } else {
        return res.render("login", { errorMessage: "Invalid email or password" });
      }
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      // Authentication successful, redirect to the home page or profile
      return res.redirect("/");
    });
  })(req, res, next);
});

// app.use(express.static(path.join(__dirname, "uploads")));
const storage = multer.diskStorage({
  destination: "public/uploads", // Use path.join to define the destination directory
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post("/profile", isAuthenticated, upload.single("profileImage"), (req, res) => {
  const user = req.user;

  // Update fields only if they are not empty
  if (req.body.phoneNumber) {
    user.phoneNumber = req.body.phoneNumber;
  }
  if (req.body.username) {
    user.username = req.body.username;
  }
  if (req.body.address) {
    user.address = req.body.address;
  }
  if (req.body.about) {
    user.about = req.body.about;
  }

  // Validate education fields
  // if (req.body.education) {
  //   user.education = {
  //     degree: req.body.education.degree || "",
  //     school: req.body.education.school || "",
  //     graduationYear: req.body.education.graduationYear || null,
  //   };
  // } else {
  //   user.education = {};
  // }

  // Validate skills and interests
  if (req.body.skills) {
    const newSkills = req.body.skills.split(',').map(skill => skill.trim());
    // Filter out skills that already exist
    const uniqueSkills = newSkills.filter(skill => !user.skills.includes(skill));
    user.skills = [...user.skills, ...uniqueSkills];
  }
  if (req.body.interests) {
    const newInterests = req.body.interests.split(',').map(interest => interest.trim());
    // Filter out interests that already exist
    const uniqueInterests = newInterests.filter(interest => !user.interests.includes(interest));
    user.interests = [...user.interests, ...uniqueInterests];
  }

  // Check if a file was uploaded
  if (req.file) {
    const relativeImagePath = path.relative(__dirname, req.file.path).replace(/\\/g, "/").replace(/^public\//, "");
    user.profileImage = relativeImagePath;
  }

  user
    .save()
    .then(() => {
      res.redirect("/profile");
    })
    .catch((err) => {
      // Handle any errors that occur during the update process
      console.error(err);
      res.status(500).send("Error updating profile");
    });
});


app.get("/profile", isAuthenticated, (req, res) => {
  const user = req.user; // Access the authenticated user from req.user
  res.render("profile", { user });
});
app.get("/signup", (req, res) => {
  res.render("signup", { error: null, name: "" });
});
app.get("/login",(req, res) => {
  // If user is already authenticated, redirect to profile
  if (req.isAuthenticated()) {
    setTimeout(() => {
      res.redirect("/profile");
    }, 1000); // Redirect after 2 seconds
  } else {
    // If not authenticated, render the login page
    return res.render("login", { errorMessage: "" });

  }
});
app.post("/",async (req, res) => {
  // const user = req.user; // Access the authenticated user
  // const phoneNumber = req.body.phoneNumber; // Assuming the phone number is sent as a POST parameter
  // console.log(phoneNumber)
  // // Generate a random 6-digit OTP
  // const otp = Math.floor(100000 + Math.random() * 900000);
  // console.log(otp)
  // // Send the OTP via SMS
  // const options = {
  //   authorization: "0oxhdOfeZkS29QLiJsyanguMW4CmKjUAN5tr3HETRYqDwG7V6bIAsKUxYtagH7mhGMRQ2zkCDVLXN3yq",
  //   message: `Your OTP is ${otp}`,
  //   numbers: [phoneNumber]
  // };

  // fast2sms.sendMessage(options)
  //   .then(() => {
  //     console.log("OTP sent successfully");
  //     // You can save the OTP in the database or session for verification later
  //     res.render("index", { otp:otp,user:user }); // Render a new page for OTP verification
  //   })
  //   .catch(err => {
  //     console.log("Error sending OTP:", err);
  //     res.send("index",{err:err});
  //   });
  const { fullName, phoneNumber} = req.body;
  const newUser = await Register.create({ fullName, phoneNumber});
  res.status(201).redirect("/about");
});
app.post("/fsd",async (req, res) => {
  const { fullName,email, phoneNumber} = req.body;
  const newUser = await Register.create({ fullName,email,phoneNumber});
  res.status(201).redirect("/");
});
app.post("/datascience",async (req, res) => {
  const { fullName,email, phoneNumber} = req.body;
  const newUser = await Register.create({ fullName,email,phoneNumber});
  res.status(201).redirect("/");
});
app.get("/logout", (req, res) => {
  req.logout(() => {});
  res.redirect("/");
});
app.get("/about",(req,res)=>{
  const user = req.user; // Access the authenticated user from req.user
  res.render("about",{user})
})
app.get("/fsd",(req,res)=>{
  const user = req.user; // Access the authenticated user from req.user
  res.render("fsd",{user})
})
app.get("/datascience",(req,res)=>{
  const user = req.user; // Access the authenticated user from req.user
  res.render("datascience",{user})
})
app.listen(PORT, () => {
  console.log("connected to 3000 port");
});
