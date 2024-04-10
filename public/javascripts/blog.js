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
  
  

  // Start JavaScript For Scroll NavBar

  function scrollNavbar(direction) {
    const navbar = document.getElementById('navbar');
    const allAnchors = document.querySelectorAll('.navbar a');
    const totalWidth = Array.from(allAnchors).reduce((acc, anchor) => acc + anchor.offsetWidth, 0);
    const visibleWidth = navbar.clientWidth;
    const scrollDistance = direction === 'left' ? -visibleWidth : visibleWidth;
    navbar.scrollLeft += scrollDistance;
  }
    // End JavaScript For Scroll NavBar




  // Start JavaScript For Slider with dots
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active"); 
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].classList.add("active"); 
    setTimeout(showSlides, 6000); 
  }
  dots[0].classList.add("active");

    // End JavaScript For Slider with dots
  