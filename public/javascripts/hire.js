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
  
    
  
  // Start JavaScript For  Image Slider
  var indexValue = 0;
  function slideShow(){
    setTimeout(slideShow, 2000);
    var x;
    // For SLider 1
    const img1 = document.querySelectorAll(".content-2>.ads>.images > img");
    for(x = 0; x < img1.length; x++){
      img1[x].style.display = "none";
    }
    indexValue++;
    if(indexValue > img1.length){indexValue = 1}
    img1[indexValue -1].style.display = "block";
  
  
    // For Slider 2
    const img2 = document.querySelectorAll(".box>.ads>.images > img");
    for(x = 0; x < img2.length; x++){
      img2[x].style.display = "none";
    }
    indexValue++;
    if(indexValue > img2.length){indexValue = 1}
    img2[indexValue -1].style.display = "block";
  }
  slideShow();
    // End JavaScript For  Image Slider
  
  
  
  
  
  
    //  Dynamic Change
  
    function showSubscription(subscriptionType) {
      window.location.href = "/apply?subscription=" + subscriptionType;
    }

  