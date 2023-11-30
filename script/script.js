// show header
const nav = document.querySelector(".nav-center");
const header = document.querySelector(".header-2");
const links = document.querySelectorAll(".nav-links");
const shopBtn = document.querySelector(".nav-btn");
const logo = document.querySelector(".logo");
const header2 = document.querySelector("header");
const mainNav = document.querySelector("nav");
console.log(header2);

nav.children[1].onmouseenter = () => {
  header.classList.add("active");

  for (let item of links) {
    item.style.color = "white";
  }
  shopBtn.style.backgroundColor = "#B9E2BF";
  logo.src = "./icons/logo-white.svg";
};

header.onmouseleave = () => {
  if (pageYOffset > 129) {
    header.classList.remove("active");

    shopBtn.style.backgroundColor = "#B9E2BF";
    logo.src = "./icons/logo-white.svg";
    for (let item of links) {
      item.style.color = "white";
    }
    // shopBtn.style.backgroundColor = "white";
    // logo.src = "./icons/logo.svg";
  } else {
    for (let item of links) {
      item.style.color = "";
    }

    logo.src = "./icons/logo.svg";
    shopBtn.style.backgroundColor = "";
    header.classList.remove("active");
  }
};

// cleaver show
const cleaver = document.querySelectorAll(".cleaver");
const cleaver2 = document.querySelectorAll(".cleaver2");
const cleaver3 = document.querySelectorAll(".cleaver3");
console.log(cleaver2);
console.log(cleaver);

function scrollActive() {
  window.onscroll = () => {
    if (pageYOffset >= 130) {
      mainNav.style.paddingBottom = "10px";
      mainNav.style.background = "#3a173c";
      for (let item of links) {
        item.style.color = "white";
      }
      for (let item of burgerItem) {
        item.style.background = "white";
      }

      shopBtn.style.backgroundColor = "#B9E2BF";
      logo.src = "./icons/logo-white.svg";

      // header.onmouseleave = () =>{
      //   for (let item of links) {
      //     item.style.color = "white";
      //   }
    } else {
      mainNav.style.paddingBottom = "0px";
      mainNav.style.background = "";
      for (let item of burgerItem) {
        item.style.background = "";
      }
      for (let item of links) {
        item.style.color = "";
      }
      shopBtn.style.backgroundColor = "";
      logo.src = "./icons/logo.svg";
    }
    for (let item of cleaver) {
      if (pageYOffset >= 150) {
        cleaver[0].classList.add("active-cleaver");
      }
      if (pageYOffset >= 6700) {
        cleaver2[0].classList.add("cleaver-active3");
      }
      if (pageYOffset >= 7200) {
        cleaver[1].classList.add("active-cleaver2");
      }
      if (pageYOffset >= 8600) {
        cleaver2[1].classList.add("cleaver-active3");
      }
      if (pageYOffset >= 11190) {
        cleaver2[2].classList.add("cleaver-active3");
      }
      if (pageYOffset >= 12150) {
        cleaver[2].classList.add("active-cleaver2");
      }
    }
  };
}
scrollActive();
const eyeVector = document.querySelector(".eye-vector");
const eye = document.querySelector(".eye");
const circle = eye.querySelector(".eye-iris");
let posX;
let posY;

eyeVector.addEventListener("mousemove", (e) => {
  posX = e.pageX - e.target.offsetLeft;
  posY = e.pageY - e.target.offsetTop;

  if (posX < 515) {
    circle.style.transform = "translate(-25%)";
  } else if (posX < 1135) {
    circle.style.transform = "translate(25%)";
  }
  if (posY < 50) {
    circle.style.transform = "translateY(-25%)";
  }

  // else if(posY<225){
  //   circle.style.transform = "translateY(25%)";

  // }
});
eye.addEventListener("mousemove", (e) => {
  posX = e.pageX - e.target.offsetLeft;
  posY = e.pageY - e.target.offsetTop;
});

eyeVector.addEventListener("mouseleave", (e) => {
  circle.style.transform = "translate(0%)";
});

eye.addEventListener("mouseenter", function () {
  eye.style.transform = "matrix(1,0,0,0.8,0,9.999999999277)";
  circle.style.transform = "translateY(0%)";
});
eye.addEventListener("mouseleave", function () {
  eye.style.transform = "";
});

// AOS EFFECT
let aos = document.querySelectorAll("[data-aos]");
for (let item of aos) {
  item.style.transition = "1s";
}

let openBtn = document.querySelector(".open-btn");

let openLinks = document.querySelectorAll(".open-links");
let li = document.querySelector(".open-hide-links");

openLinks[1].addEventListener("click", function () {
  li.classList.toggle("active2");

  if (li.classList.contains("active2")) {
    openBtn.innerHTML = "↓";
    openBtn.style.transition = "500ms";
  } else {
    openBtn.innerHTML = "→";

    openBtn.style.transition = "500ms";
  }
});
let burgerItem = document.querySelectorAll(".burger-item");
burgerWrapper = document.querySelector(".burger-open");
let burger = document.querySelector(".burger-menu");
burger.addEventListener("click", function () {
  burgerWrapper.classList.toggle("burger-active");
  burgerItem[1].classList.toggle("item-active");
  if (burgerWrapper.classList.contains("burger-active")) {
    for (let item of burgerItem) {
      item.style.background = "white";
    }
    document.body.style.overflow = "hidden";
    logo.src = "./icons/logo-white.svg";
    shopBtn.style.color = "white";
  } else {
    for (let item of burgerItem) {
      item.style.background = "#3a173c";
      logo.src = "./icons/logo.svg";
      shopBtn.style.color = "";
      document.body.style.overflow = "";
    }
    if (pageYOffset >= 130) {
      mainNav.style.paddingBottom = "10px";
      mainNav.style.background = "#3a173c";
      for (let item of links) {
        item.style.color = "white";
      }
      for (let item of burgerItem) {
        item.style.background = "white";
      }

      shopBtn.style.backgroundColor = "#B9E2BF";
      logo.src = "./icons/logo-white.svg";
    }
  }
});



