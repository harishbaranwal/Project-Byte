document.querySelector("#files").addEventListener("change", (e) => {
  //CHANGE EVENT FOR UPLOADING PHOTOS
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    //CHECK IF FILE API IS SUPPORTED
    const files = e.target.files; //FILE LIST OBJECT CONTAINING UPLOADED FILES
    const output = document.querySelector("#result");
    output.innerHTML = "";
    for (let i = 0; i < files.length; i++) {
      // LOOP THROUGH THE FILE LIST OBJECT
      if (!files[i].type.match("image")) continue; // ONLY PHOTOS (SKIP CURRENT ITERATION IF NOT A PHOTO)
      const picReader = new FileReader(); // RETRIEVE DATA URI
      picReader.addEventListener("load", function (event) {
        // LOAD EVENT FOR DISPLAYING PHOTOS
        const picFile = event.target;
        const div = document.createElement("div");
        div.innerHTML = `<img class="thumbnail" src="${picFile.result}" title="${picFile.name}"/>`;
        output.appendChild(div);
      });
      picReader.readAsDataURL(files[i]); //READ THE IMAGE
    }
  } else {
    alert("Your browser does not support File API");
  }
});




// JavaScript For Showing Order Details

document.getElementById('showOrderDetails').addEventListener('click', function() {
let orderDetails = document.querySelector('.order-details ul');
let showButton = document.getElementById('showOrderDetails');
let hideButton = document.getElementById('hideOrderDetails');
if (orderDetails.style.display === 'none' || orderDetails.style.display === '') {
    orderDetails.style.display = 'block';
    showButton.style.display = 'none';
    hideButton.style.display = 'block';
}
});

// JavaScript For Hiding Order Details

document.getElementById('hideOrderDetails').addEventListener('click', function() {
let orderDetails = document.querySelector('.order-details ul');
let showButton = document.getElementById('showOrderDetails');
let hideButton = document.getElementById('hideOrderDetails');
if (orderDetails.style.display === 'block') {
    orderDetails.style.display = 'none';
    showButton.style.display = 'block';
    hideButton.style.display = 'none';
}
});



// JavaScript For Dynamic Update The Order Details

document.addEventListener("DOMContentLoaded", function() {
const subscriptionTitle = document.querySelector('.order-details h2');
const orderTotal = document.querySelector('.order-details .order-total');
const orderList = document.querySelector('.order-details ul');

  // Parse the query parameter to get the subscription type //
const urlParams = new URLSearchParams(window.location.search);
const subscriptionType = urlParams.get('subscription');

  // Update the content based on the subscription type //
if (subscriptionType === 'Graphic Designer') {
subscriptionTitle.textContent = 'Graphic Designer';
orderTotal.innerHTML = `
<span>₹</span>
<span>30K - 50K</span>
<span>/month</span>
`;
orderList.innerHTML = `
<li>Minimum 1 year of experience as a graphic designer</li>
<li>Good understanding of visual elements (layouts, typefaces, hierarchy, contrast, colour theory, etc)</li>
<li>Knowledge of design techniques, such as prototyping
</li>
<li>Ability to work well within a team </li>
`;
} else if (subscriptionType === 'Content Creator') {
subscriptionTitle.textContent = 'Content Creator';
orderTotal.innerHTML = `
<span>₹</span>
<span>25K - 45K</span>
<span>/month</span>
`;
orderList.innerHTML = `

<li>Excellent writing and editing skills</li>
<li>Ability to research and write on a variety of topics</li>
<li>Familiarity with SEO best practices</li>
<li>Strong attention to detail and ability to meet deadlines</li>
<li>Experience with content management systems (e.g., WordPress)</li>
`;
} else if (subscriptionType === 'Social Media Manager') {
subscriptionTitle.textContent = 'Social Media Manager';
orderTotal.innerHTML = `
<span>₹</span>
<span>25K - 60K</span>
<span>/month</span>
`;
orderList.innerHTML = `
<li>Proficiency in social media platforms (Facebook, Twitter, Instagram, LinkedIn)</li>
<li>Excellent communication and interpersonal skills</li>
<li>Ability to think creatively and generate new ideas</li>
<li>Knowledge of social media analytics and reporting</li>
`;
} else if (subscriptionType === 'Video Editor') {
subscriptionTitle.textContent = 'Video Editor';
orderTotal.innerHTML = `
<span>₹</span>
<span>30K - 50K</span>
<span>/month</span>
`;
orderList.innerHTML = `
<li>Proficiency in video editing software (e.g., Adobe Premiere Pro, Final Cut Pro)</li>
<li>Strong understanding of video editing techniques, including pacing, transitions, and effects.</li>
<li>Strong attention to detail and ability to work under tight deadlines
</li>
<li>Familiarity with motion graphics and animation is a plus.</li>
`;
} else if (subscriptionType === 'UI/UX Designer') {
subscriptionTitle.textContent = 'UI/UX Designer';
orderTotal.innerHTML = `
<span>₹</span>
<span>30K - 45K</span>
<span>/month</span>
`;
orderList.innerHTML = `
<li>Proficiency in design tools such as Sketch, Adobe XD, or Figma</li>
<li>Excellent in UX/UI design principles</li>
<li>Ability to create wireframes, prototypes, and mockups
</li>
<li>Experience with user research and usability testing
</li>

<li>Minimum 1 year of experience as a UI/UX designer</li>
`;
} else if (subscriptionType === 'Web Designer') {
subscriptionTitle.textContent = 'Web Designer)';
orderTotal.innerHTML = `
<span>₹</span>
<span>35K - 60K</span>
<span>/month</span>
`;
orderList.innerHTML = `
<li>Hands-on experience and proficiency in Wireframing, design, prototyping tools like Figma, Photoshop, Adobe
XD etc.</li>
<li>Familiarity with version control systems (e.g., Git)</li>
<li>Experience with responsive design and CSS frameworks (e.g., Bootstrap)</li>
<li>Excellent communication and teamwork abilities</li>
`;
}
});


function FormValidation(event) {

const first_name = document.getElementById('first_name').value;
const last_name = document.getElementById('last_name').value;
const email = document.getElementById('email').value;
const phone_no = document.getElementById('phone').value;
const job_rol = document.getElementById('job_rol').value;
const link = document.getElementById('link').value;
const address = document.getElementById('address').value;
const city = document.getElementById('city').value;
const pin = document.getElementById('pin').value;
const date = document.getElementById('date').value;
const file = document.getElementById('files').value; // fixed id for file input

// Reset error messages
document.getElementById('first_name_error').innerText = '';
document.getElementById('last_name_error').innerText = '';
document.getElementById('email_error').innerText = '';
document.getElementById('phone_error').innerText = '';
document.getElementById('job_error').innerText = '';
document.getElementById('link_error').innerText = '';
document.getElementById('address_error').innerText = '';
document.getElementById('city_error').innerText = '';
document.getElementById('pin_error').innerText = '';
document.getElementById('date_error').innerText = '';
document.getElementById('file_error').innerText = '';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10}$/;
const pinRegex = /^[0-9]{6}$/;

if (first_name === "") {
    document.getElementById('first_name_error').innerText = 'Please enter your first name.';
    event.preventDefault();
    return false;
}

if (last_name === "") {
    document.getElementById('last_name_error').innerText = 'Please enter your last name.';
    event.preventDefault();
    return false;
}

if (!emailRegex.test(email)) {
    document.getElementById('email_error').innerText = 'Please enter a valid email address.';
    event.preventDefault();
    return false;
}

if (!phoneRegex.test(phone_no)) {
    document.getElementById('phone_error').innerText = 'Please enter a valid 10-digit phone number.';
    event.preventDefault();
    return false;
}


if (job_rol === "") {
  document.getElementById('job_error').innerText = 'Please choose your job role.';
  event.preventDefault();
  return false;
}


if (link === "") {
  document.getElementById('link_error').innerText = 'Please enter your portfolio link.';
  event.preventDefault();
  return false;
}


if (address === "") {
    document.getElementById('address_error').innerText = 'Please enter your address.';
    event.preventDefault();
    return false;
}

if (city === "") {
    document.getElementById('city_error').innerText = 'Please enter your city.';
    event.preventDefault();
    return false;
}
if (!pinRegex.test(pin)) {
  document.getElementById('pin_error').innerText = 'Please enter your 6-digit pin code.';
  event.preventDefault();
  return false;
}


if (date === "") {
  document.getElementById('date_error').innerText = 'Please select a date.';
  event.preventDefault();
  return false;
}

if (file === "") {
  document.getElementById('file_error').innerText = 'Please upload your CV as pdf.';
  event.preventDefault();
  return false;
}

document.getElementById('success_message').style.display = 'block';

 return true;
}






