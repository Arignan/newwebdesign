function displayAlert() {
    alert('Welcome to the Career Path Page!');
}

function changeColor() {
    document.getElementById('intro').style.color = 'blue';
}

//for salary section 
const salaries = {
    USA: {
        junior: { ai_ml: "$150,000", data_science: "$140,000", full_stack: "$120,000" },
        mid: { ai_ml: "$200,000", data_science: "$180,000", full_stack: "$150,000" },
        senior: { ai_ml: "$250,000", data_science: "$220,000", full_stack: "$200,000" }
    },
    Canada: {
        junior: { ai_ml: "$130,000", data_science: "$120,000", full_stack: "$100,000" },
        mid: { ai_ml: "$180,000", data_science: "$160,000", full_stack: "$140,000" },
        senior: { ai_ml: "$220,000", data_science: "$200,000", full_stack: "$180,000" }
    },
    UK: {
        junior: { ai_ml: "£90,000", data_science: "£80,000", full_stack: "£70,000" },
        mid: { ai_ml: "£120,000", data_science: "£110,000", full_stack: "£100,000" },
        senior: { ai_ml: "£150,000", data_science: "£140,000", full_stack: "£130,000" }
    },
    Australia: {
        junior: { ai_ml: "$110,000", data_science: "$100,000", full_stack: "$95,000" },
        mid: { ai_ml: "$150,000", data_science: "$140,000", full_stack: "$130,000" },
        senior: { ai_ml: "$200,000", data_science: "$180,000", full_stack: "$160,000" }
    },
    Germany: {
        junior: { ai_ml: "€85,000", data_science: "€80,000", full_stack: "€75,000" },
        mid: { ai_ml: "€110,000", data_science: "€100,000", full_stack: "€90,000" },
        senior: { ai_ml: "€140,000", data_science: "€130,000", full_stack: "€120,000" }
    }
};

function updateSalaries(country) {
    if (salaries[country]) {
        const roles = ['junior', 'mid', 'senior'];
        roles.forEach(level => {
            document.getElementById(`ai_ml_${level}`).textContent = salaries[country][level].ai_ml;
            document.getElementById(`data_science_${level}`).textContent = salaries[country][level].data_science;
            document.getElementById(`full_stack_${level}`).textContent = salaries[country][level].full_stack;
        });
    }
}



function validateForm() {
    let isValid = true; // Flag to track overall form validity

    // Clear previous errors
    document.querySelectorAll('.error').forEach(span => span.textContent = "");

    // Name Validation
    const name = document.getElementById('name').value.trim();
    if (!name) {
        document.getElementById('nameError').textContent = "Please enter your name.";
        isValid = false;
    }

    // Email Validation (using a simple regex)
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    if (!email) {
        document.getElementById('emailError').textContent = "Please enter your email.";
        isValid = false;
    } else if (!emailRegex.test(email)) {
      document.getElementById('emailError').textContent = "Please enter a valid email address.";
      isValid = false;
    }

    // Career Path Validation (radio buttons)
    const careerRadios = document.querySelectorAll('input[name="career"]');
    let careerSelected = false;
    careerRadios.forEach(radio => {
        if (radio.checked) {
            careerSelected = true;
        }
    });
    if (!careerSelected) {
        document.getElementById('careerError').textContent = "Please select a career path.";
        isValid = false;
    }

    // Interests Validation (at least one checkbox)
    const interestsCheckboxes = document.querySelectorAll('input[name="interests"]');
    let interestsSelected = false;
    interestsCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            interestsSelected = true;
        }
    });
    if (!interestsSelected) {
        document.getElementById('interestsError').textContent = "Please select at least one interest.";
        isValid = false;
    }

    // Date Validation
    const dateValue = document.getElementById('date').value;
    if (!dateValue) {
        document.getElementById('dateError').textContent = "Please select a start date.";
        isValid = false;
    }

    return isValid; // Return true only if all validations pass
}


const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');


let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});

canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

function draw(e) {
  if (!isDrawing) return; // Stop the function if they are not drawing
  ctx.beginPath();
  ctx.moveTo(lastX, lastY); // start from
  ctx.lineTo(e.offsetX, e.offsetY); // go to
  ctx.stroke(); // draw it!
  lastX = e.offsetX;
  lastY = e.offsetY;
}


const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

function setActiveLink() {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight/3) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveLink);

