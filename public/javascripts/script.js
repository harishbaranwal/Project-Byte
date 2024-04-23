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
    const img1 = document.querySelectorAll(".heading-section>.ads>.images > img");
    const img2 = document.querySelectorAll(".box>.ads>.images > img");
    for(x = 0; x < img1.length; x++){
      img1[x].style.display = "none";
    }
    for(x = 0; x < img2.length; x++){
      img2[x].style.display = "none";
    }
    indexValue++;
    if(indexValue > img1.length){indexValue = 1}
    img1[indexValue -1].style.display = "block";
    if(indexValue > img2.length){indexValue = 1}
    img2[indexValue -1].style.display = "block";
  }
  slideShow();
  // End JavaScript For Image Slider
  
  
  
  // Start JavaScript For Creating Smooth Scrolling Behavior For Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });
  // End JavaScript For Creating Smooth Scrolling Behavior For Anchor Links
  
  // Start JavaScript For Scrolling Navbar 
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
  // End JavaScript For Scrolling Navbar


  
// Start Pre-Loader 

var loader=document.getElementById("preloader");
window.addEventListener("load",function(){
  loader.style.display="none";
})

//End Pre-Loader




// JavaScript for Number counter animation 


const counters = document.querySelectorAll('.counter');
const durations = [150, 80, 120, 100];

// Function to update the count
const updateCount = (counter, target, increment) => {
    let count = 0;
    const increaseCount = () => {
        count += increment;
        counter.innerText = Math.ceil(count) + '+';
        if (count < target) {
            requestAnimationFrame(increaseCount);
        } else {
            counter.innerText = target + '+';
        }
    };
    increaseCount();
};

// Intersection Observer callback
const onEntry = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.getAttribute('data-target');
            const index = Array.from(counters).indexOf(counter);
            const increment = target / durations[index];
            updateCount(counter, target, increment);
            observer.unobserve(counter); // Stop observing after animation
        }
    });
};

//Intersection observer instance
const observer = new IntersectionObserver(onEntry, {
    threshold: 0.5 // Trigger when 50% of the element is visible
});

// Observe each counter
counters.forEach(counter => {
    observer.observe(counter);
});


//End JavaScript for Number counter animation 







document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll(".nav-link");
  const footerLinks = document.querySelectorAll(".box2 a");
  const contentItems = document.querySelectorAll(".content-item");

  navbarLinks.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          const targetCategories = this.getAttribute("data-target").split(" ");
          contentItems.forEach(item => {
              const itemCategories = item.classList;
              if (targetCategories.includes("all") || targetCategories.some(category => itemCategories.contains(category))) {
                  item.style.display = "block";
              } else {
                  item.style.display = "none";
              }
          });

          const targetId = this.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
              targetElement.scrollIntoView({ behavior: "smooth" });
          }
      });
  });

  footerLinks.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          contentItems.forEach(item => {
              if (item.classList.contains(targetId)) {
                  item.style.display = "block";
              } else {
                  item.style.display = "none";
              }
          });
      });
  });
});



