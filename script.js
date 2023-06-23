function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 11000;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function navDisplay() {
  let menuList = document.getElementById("menuList");
  menuList.style.display = "none";
  if (menuList.style.display == "none") {
    menuList.style.display = "block";
  } else {
    menuList.style.display = "none";
  }
  console.log("Clicked");
}

let buttonClick = () => {
  window.location.href = "https://implifi.vercel.app/login";
};

$("ul.nav-options")
  .find("a")
  .click(function () {
    var $href = $(this).attr("href");
    var $anchor = $("#" + $href).offset();
    $("body").animate({ scrollTop: $anchor.top });
    return false;
  });
