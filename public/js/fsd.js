function showContent(section) {
    // Define your curriculum content here for each section
    const curriculum = {
        html: `
          <h2>HTML Curriculum Content</h2>
          <p>Learn the basics of HTML, including:</p>
          <ul>
            <li>Understanding HTML Basics</li>
            <li>Document Structure and Tags</li>
            <li>Text Formatting and Hyperlinks</li>
            <li>Images and Multimedia Integration</li>
            <li>List and Table Structures</li>
            <li>Forms for User Input</li>
            <li>Introduction to HTML5 Elements</li>
            <li>Creating Responsive Designs</li>
            <li>Effective Linking and Navigation</li>
          </ul>
        `,
        css: `
          <h2>CSS Curriculum Content</h2>
          <p>Explore the fundamentals of CSS, covering:</p>
          <ul>
            <li>Understanding CSS Fundamentals</li>
            <li>Selectors and Styling Elements</li>
            <li>Box Model and Layout</li>
            <li>CSS Flexbox and Grid</li>
            <li>Responsive Design with Media Queries</li>
            <li>Transitions and Animations</li>
            <li>Working with Fonts and Colors</li>
            <li>CSS Variables and Custom Properties</li>
            <li>Best Practices for Maintainable Stylesheets</li>
          </ul>
        `,
        js: `
          <h2>JavaScript Curriculum Content</h2>
          <p>Dive into the world of JavaScript with topics such as:</p>
          <ul>
            <li>JavaScript Fundamentals and Syntax</li>
            <li>Variables, Data Types, and Operators</li>
            <li>Control Flow and Looping</li>
            <li>Functions and Scope</li>
            <li>Working with Arrays and Objects</li>
            <li>DOM Manipulation and Event Handling</li>
            <li>Asynchronous JavaScript and Promises</li>
            <li>AJAX and Fetch API</li>
            <li>Introduction to ES6+ Features</li>
          </ul>
        `,
        react: `
          <h2>React Curriculum Content</h2>
          <p>Master the art of building powerful web experiences using React:</p>
          <ul>
            <li>Introduction to React and JSX</li>
            <li>Components and Props</li>
            <li>State and Lifecycle</li>
            <li>Handling Events and Forms</li>
            <li>Conditional Rendering</li>
            <li>List and Keys</li>
            <li>React Hooks</li>
            <li>Routing in React</li>
            <li>State Management with Redux</li>
          </ul>
        `,
        node: `
          <h2>Node.js Curriculum Content</h2>
          <p>Explore the backend brilliance of Node.js:</p>
          <ul>
            <li>Node.js Fundamentals</li>
            <li>CommonJS Modules and ES6 Modules</li>
            <li>npm and Package Management</li>
            <li>Asynchronous Programming in Node.js</li>
            <li>File System Operations</li>
            <li>Building RESTful APIs</li>
            <li>Connecting to Databases</li>
            <li>Authentication and Security in Node.js</li>
            <li>Event Emitters and Streams</li>
          </ul>
        `,
        express: `
          <h2>Express.js + MongoDB Curriculum Content</h2>
          <p>Delve into building backend excellence with Express.js and MongoDB:</p>
          <ul>
            <li>Express.js Introduction and Setup</li>
            <li>Routing in Express.js</li>
            <li>Middleware and Request Handling</li>
            <li>Working with npm and Package Management in Express.js</li>
            <li>Asynchronous Programming in Node.js and Express.js</li>
            <li>Connecting to MongoDB with Mongoose</li>
            <li>Building RESTful APIs with Express.js and MongoDB</li>
            <li>Authentication and Authorization in Express.js</li>
            <li>Securing Express.js Applications</li>
          </ul>
        `,
        dsa: `
          <h2>DSA Curriculum Content</h2>
          <p>Enhance your coding prowess with Data Structures and Algorithms:</p>
          <ul>
            <li>Introduction to Data Structures</li>
            <li>Arrays and Lists</li>
            <li>Stacks and Queues</li>
            <li>Basic Sorting Algorithms</li>
            <li>Searching Techniques</li>
            <li>Introduction to Trees</li>
            <li>Graph Fundamentals</li>
            <li>Basic Dynamic Programming</li>
            <li>Hashing and Hash Tables</li>
          </ul>
        `,
        interview: `
          <h2>Interview Prep Curriculum Content</h2>
          <p>Master technical and behavioral interviews with topics like:</p>
          <ul>
            <li>Technical Interview Overview</li>
            <li>Common Data Structures Questions</li>
            <li>Basic Algorithms and Problem Solving</li>
            <li>Introduction to System Design</li>
            <li>Behavioral Interview Preparation</li>
            <li>Soft Skills for Interviews</li>
            <li>Mock Interview Practice</li>
            <li>Feedback and Improvement Strategies</li>
            <li>Building Confidence and Communication</li>
          </ul>
        `,
      };
      
  
    // Get the content container
    const contentContainer = document.getElementById("contentContainer");
  
    // Update the content based on the clicked section
    contentContainer.innerHTML = `<div class="content">${curriculum[section]}</div>`;
    const buttons = document.querySelectorAll('.timeline-buttons button');
  buttons.forEach(button => button.classList.remove('selected'));

  // Add the 'selected' class to the clicked button
  const clickedButton = document.getElementById(`${section}Btn`);
  clickedButton.classList.add('selected');
  contentContainer.innerHTML = `<div class="content">${curriculum[section]}</div>`;

  // Change the background color of the content box based on the selected section
  const backgroundColors = {
    html: '#3498db',       // Blue
    css: '#2ecc71',        // Green
    js: '#e74c3c', // Red
    react: '#f39c12',      // Yellow
    node: '#9b59b6',       // Purple
    express: '#1abc9c',    // Turquoise
    dsa: '#34495e',        // Dark Blue
    interview: '#e67e22'   // Orange
  };
  const colors = {
    html: "#0085aa",
    css: "#14a353",
    js: "#fbcc05",
    react: "#ea4335",
    node: "#673ab7",
    express: "#795548",
    dsa: "#2196F3",
    interview: "#FF5722",
  };
  
  const selectedButton = document.getElementById(`${section}Btn`);
  contentContainer.style.backgroundColor = backgroundColors[section];
  selectedButton.classList.add('selected');
  selectedButton.style.backgroundColor = backgroundColors[section];
  const contentSection = document.querySelector(".content-section");
  contentSection.style.backgroundColor = colors[section];
  }
  showContent('html');
  