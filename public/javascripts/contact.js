// Start JavaScript For Showing Side Navbar Using Hamburger
function openNav() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var sidenavWidth = (screenWidth < 400) ? "100px" : "150px";
  document.getElementById("mySidenav").style.width = sidenavWidth;
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

document.querySelector('.hamburger').addEventListener('click', function() {
  openNav();
});
// End JavaScript For Showing Side Navbar Using Hamburger






// Start JavaScript For Image Slider
var indexValue = 0;
function slideShow(){
  setTimeout(slideShow, 2000);
  var x;
 const img = document.querySelectorAll(".box>.ads>.images > img");

  for(x = 0; x < img.length; x++){
    img[x].style.display = "none";
  }
  indexValue++;
  if(indexValue > img.length){indexValue = 1}
  img[indexValue -1].style.display = "block";
}
slideShow();
// End JavaScript For Image Slider


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY;
  document.querySelectorAll('a[href^="#"]').forEach(function (el) {
      var section = document.querySelector(el.getAttribute('href'));
      if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          el.classList.add('active');
      } else {
          el.classList.remove('active');
      }
  });
});




function FormValidation(event) {

  const first_line = document.getElementsByClassName('first-line')[0];
  const second_line = document.getElementsByClassName('second-line')[0];
  const name = document.getElementById('name').value;
  const phone_no = document.getElementById('phone').value;
  const email = document.getElementById('EMail').value;
  const address = document.getElementById('Address').value;
  const subject = document.getElementById('Subject').value;
  const description = document.getElementById('description').value;
  // Reset error messages
  document.getElementById('nameError').innerText = '';
  document.getElementById('phoneError').innerText = '';
  document.getElementById('addressError').innerText = '';
  document.getElementById('subjectError').innerText = '';
  document.getElementById('emailError').innerText = '';
  document.getElementById('descriptionError').innerText = '';
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+91[0-9]{10}$/;

  if (name === "") {
      document.getElementById('nameError').innerText = 'Please enter your name.';
      first_line.style.marginBottom="20px";
      event.preventDefault();
      return false;
  }
  else {
    first_line.style.marginBottom = ""; // Remove margin if no error
}

  if (!emailRegex.test(email)) {
      document.getElementById('emailError').innerText = 'Please enter a valid e-mail address.';
      first_line.style.marginBottom="20px";
      event.preventDefault();
      return false;
  }
  else {
    first_line.style.marginBottom = ""; // Remove margin if no error
}


  if (address === "") {
      document.getElementById('addressError').innerText = 'Please enter your address.';
      second_line.style.marginBottom="20px";
      event.preventDefault();
      return false;
  }
  else {
    second_line.style.marginBottom = ""; // Remove margin if no error
}

  if (!phoneRegex.test(phone_no)) {
      document.getElementById('phoneError').innerText = 'Please enter a valid 10-digit phone number.';
      second_line.style.marginBottom="20px";
      event.preventDefault();
      return false;
  }
  else {
    second_line.style.marginBottom = ""; // Remove margin if no error
}


  if (subject === "") {
      document.getElementById('subjectError').innerText = 'Please enter your subject.';
      event.preventDefault();
      return false;
  }

  if (description.trim() === "") {
      document.getElementById('descriptionError').innerText = 'Please enter your description.';
      event.preventDefault();
      return false;
  }

  // Handle form submission or display success message
  // Example: document.getElementById('successMessage').innerText = 'Form submitted successfully.';
  return true;


  function resetForm() {
    document.getElementById('RegForm').reset();
    document.getElementById('nameError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('addressError').innerText = '';
    document.getElementById('subjectError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('descriptionError').innerText = '';
    document.getElementsByClassName('first-line')[0].style.marginBottom = "";
    document.getElementsByClassName('second-line')[0].style.marginBottom = "";
} 
}
