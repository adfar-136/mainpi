


  function showContent(section) {
    // Define your curriculum content here for each section
    const curriculum = {
      dsMath: `
      <h2>Mathematics for Data Science</h2>
      <p>Explore essential mathematical concepts for data science, including:</p>
      <ul>
        <li>Linear Algebra</li>
        <li>Calculus</li>
        <li>Probability Theory</li>
        <li>Statistics</li>
        <li>Optimization</li>
      </ul>
    `,
    dsProg: `
      <h2>Programming with Python</h2>
      <p>Learn Python programming for data science:</p>
      <ul>
        <li>Python Basics</li>
        <li>Data Types and Structures</li>
        <li>Control Flow and Functions</li>
        <li>Libraries for Data Science (NumPy, Pandas)</li>
        <li>File Handling and Data Manipulation</li>
      </ul>
    `,
    dsStats: `
      <h2>Statistics and Probability</h2>
      <p>Master statistical concepts crucial for data analysis:</p>
      <ul>
        <li>Descriptive Statistics</li>
        <li>Inferential Statistics</li>
        <li>Hypothesis Testing</li>
        <li>Probability Distributions</li>
        <li>Regression Analysis</li>
      </ul>
    `,
    dsML: `
      <h2>Machine Learning Basics</h2>
      <p>Introduction to machine learning:</p>
      <ul>
        <li>Supervised Learning</li>
        <li>Unsupervised Learning</li>
        <li>Feature Engineering</li>
        <li>Model Evaluation</li>
        <li>Ensemble Learning</li>
      </ul>
    `,
    dsDL: `
      <h2>Deep Learning Fundamentals</h2>
      <p>Delve into deep learning techniques:</p>
      <ul>
        <li>Neural Networks</li>
        <li>Convolutional Neural Networks (CNN)</li>
        <li>Recurrent Neural Networks (RNN)</li>
        <li>Transfer Learning</li>
        <li>Generative Adversarial Networks (GAN)</li>
      </ul>
    `,
    dsViz: `
      <h2>Data Visualization Techniques</h2>
      <p>Communicate insights through effective data visualization:</p>
      <ul>
        <li>Introduction to Data Visualization</li>
        <li>Tools like Matplotlib and Seaborn</li>
        <li>Interactive Visualization with Plotly</li>
        <li>Dashboards and Storytelling</li>
      </ul>
    `,
    dsSQL: `
      <h2>SQL for Data Science</h2>
      <p>Master SQL for data manipulation and analysis:</p>
      <ul>
        <li>Database Basics</li>
        <li>SQL Queries</li>
        <li>Joins and Subqueries</li>
        <li>Database Design</li>
        <li>Data Extraction and Transformation</li>
      </ul>
    `,
    dsProj: `
      <h2>Real-world Projects</h2>
      <p>Apply your skills to real-world data science projects:</p>
      <ul>
        <li>Project Planning and Scope</li>
        <li>Data Collection and Cleaning</li>
        <li>Exploratory Data Analysis (EDA)</li>
        <li>Model Building and Evaluation</li>
        <li>Deployment and Presentation</li>
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
    dsMath: '#3498db',       // Blue
    dsProg: '#2ecc71',        // Green
    dsStats: '#e74c3c', // Red
    dsML: '#f39c12',      // Yellow
    dsDL: '#9b59b6',       // Purple
    dsViz: '#1abc9c',    // Turquoise
    dsSQL: '#34495e',        // Dark Blue
    dsProj: '#e67e22'   // Orange
  };
  const colors = {
     dsMath: "#0085aa",
     dsProg:"#14a353",
     dsStats:"#fbcc05",
     dsML : "#ea4335",
     dsDL : "#673ab7",
     dsViz: "#795548",
     dsSQL:"#2196F3",
     dsProj: "#FF5722",
  };
  
  const selectedButton = document.getElementById(`${section}Btn`);
  contentContainer.style.backgroundColor = backgroundColors[section];
  selectedButton.classList.add('selected');
  selectedButton.style.backgroundColor = backgroundColors[section];
  const contentSection = document.querySelector(".content-section");
  contentSection.style.backgroundColor = colors[section];
  }
  showContent('dsMath');
  