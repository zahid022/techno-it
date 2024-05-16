const sideLink = document.getElementById('side-links')
const darkModeBtn = document.getElementById('dark-mode')
const sec3Content = document.getElementById('sec3-content')
const sec8Content = document.getElementById('sec8-contain')
const sec10Content = document.getElementById('sec10-contain')
const priceList = document.querySelectorAll('.price-list')
const sec5Card1 = document.querySelectorAll('.sec5-card1')
const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')
const number3 = document.getElementById('number3')
const accordioncontainer = document.getElementById('accordion-container')
let interval = setInterval(count, 8)

let rating = ''
for (let i = 0; i < 5; i++) {
  rating += `<i class="fa-solid fa-star"></i>`
}

let testimonialsData = [
  {
    "image": "testimonial-1.jpg",
    "name": "Jhone Doe",
    "status": "CFO",
    "rating": rating,
    "text": `<i class="fa-solid fa-quote-left"></i> Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam. <i class="fa-solid fa-quote-right"></i>`,
  },
  {
    "image": "testimonial-2.jpg",
    "name": "Afa Rose",
    "status": "Web Designer",
    "rating": rating,
    "text": `<i class="fa-solid fa-quote-left"></i> Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam. <i class="fa-solid fa-quote-right"></i>`,
  },
  {
    "image": "testimonial-3.jpg",
    "name": "Keena Lara",
    "status": "Store Owner",
    "rating": rating,
    "text": `<i class="fa-solid fa-quote-left"></i> Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam. <i class="fa-solid fa-quote-right"></i>`,
  },
  {
    "image": "testimonial-4.jpg",
    "name": "Fizzi Brandon",
    "status": "Freelancer",
    "rating": rating,
    "text": `<i class="fa-solid fa-quote-left"></i> Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam. <i class="fa-solid fa-quote-right"></i>`,
  },
]

let teamData = [
  {
    "image": "team-1.jpg",
    "name": "Jhone Bi",
    "status": "Application Manager",
  },
  {
    "image": "team-2.jpg",
    "name": "Sani Awesome",
    "status": "Social Media",
  },
  {
    "image": "team-3.jpg",
    "name": "Andrio Willi",
    "status": "Content Writer",
  },
  {
    "image": "team-4.jpg",
    "name": "Afa Jonson",
    "status": "Business Manager",
  },
]

let accordionData = [
  {
    "LeftIcon": `<i class="fas fa-chevron-circle-right"></i>`,
    "title": "What is web domain and hosting?",
    "RightIcon": `<i class="fas fa-chevron-down"></i>`,
    "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, in quaerat illo cum sit illum repudiandae beatae necessitatibus minima, culpa consequatur quos consectetur vitae corporis ipsum accusamus et eaque perspiciatis?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, in quaerat illo cum sit illum repudiandae beatae necessitatibus minima, culpa consequatur quos consectetur vitae corporis ipsum accusamus et eaque perspiciatis?"
  },
  {
    "LeftIcon": `<i class="fas fa-chevron-circle-right"></i>`,
    "title": "Which server is best for websites linux or windows?",
    "RightIcon": `<i class="fas fa-chevron-down"></i>`,
    "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, in quaerat illo cum sit illum repudiandae beatae necessitatibus minima, culpa consequatur quos consectetur vitae corporis ipsum accusamus et eaque perspiciatis?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, in quaerat illo cum sit illum repudiandae beatae necessitatibus minima, culpa consequatur quos consectetur vitae corporis ipsum accusamus et eaque perspiciatis?"
  },
  {
    "LeftIcon": `<i class="fas fa-chevron-circle-right"></i>`,
    "title": "Google cloud or Amazon server which one is best and fast?",
    "RightIcon": `<i class="fas fa-chevron-down"></i>`,
    "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, in quaerat illo cum sit illum repudiandae beatae necessitatibus minima, culpa consequatur quos consectetur vitae corporis ipsum accusamus et eaque perspiciatis?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, in quaerat illo cum sit illum repudiandae beatae necessitatibus minima, culpa consequatur quos consectetur vitae corporis ipsum accusamus et eaque perspiciatis?"
  },
  {
    "LeftIcon": `<i class="fas fa-chevron-circle-right"></i>`,
    "title": "Why Organic SEO is important for all businesses?",
    "RightIcon": `<i class="fas fa-chevron-down"></i>`,
    "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, in quaerat illo cum sit illum repudiandae beatae necessitatibus minima, culpa consequatur quos consectetur vitae corporis ipsum accusamus et eaque perspiciatis?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, in quaerat illo cum sit illum repudiandae beatae necessitatibus minima, culpa consequatur quos consectetur vitae corporis ipsum accusamus et eaque perspiciatis?"
  },
]

let blogData = [
  {
    "image": "blog-1.jpg",
    "status": "Domain & Hosting",
    "text": "How to host website on any hosting provider?",
    "name": "William Bla",
    "date": "Feb 1, 2022"
  },
  {
    "image": "blog-2.jpg",
    "status": "Advertisement",
    "text": "How to create add on google adwords?",
    "name": "Jobi Ret",
    "date": "Oct 5, 2022"
  },
  {
    "image": "blog-3.jpg",
    "status": "Marketing",
    "text": "What is digital marketing and why is important?",
    "name": "Main Dow",
    "date": "Dec 22, 2022"
  },
]

let navLinks = ["Home", "Services", "Portfolio", "Testimonials", "Team", "Menu", "News"]
let images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]
let sideAccLinks = ["About", "Pricing", "FAQs", "Terms & Conditions", "Privacy Policy", "Blogs", "Blog Detail Page"]
let PriceLink = ["Unlimited GB Space", "30 Domain Names", "Free SSL", "Daily Backup", "Free Templates", "Free Email", "10 Databases", "Unlimited Email Address", "Live Support"]
let sideKod = ''
let x = 0
let y = 0
let z = 0

navLinks.forEach(item => sideLink.innerHTML += `<li>
                                                <a ${item == "Menu" ? "onclick=sideacc()" : ""} href="#" class="nav-link">
                                                    ${item} ${item == "Menu" ? `<i class="fas fa-chevron-down sideacc-icon"></i>` : ''}
                                                </a>
                                                ${item == "Menu" ? `<ul class="side-accordion"></ul>` : ''}
                                            </li>`)

const sideAccordion = document.querySelector('.side-accordion')
const sideaccIcon = document.querySelector('.sideacc-icon')
const navBarLinks = document.querySelectorAll('.nav-link')

sideAccLinks.forEach(item => sideAccordion.innerHTML += ` <li><a class="acc-link">${item}</a>  </li>`)

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector("nav").style.background = "#ffffff";
    navBarLinks.forEach((item) => item.style.color = "#000")
    darkModeBtn.classList.add('dark-mode-active')
  } else {
    document.querySelector("nav").style.background = "transparent";
    navBarLinks.forEach((item) => item.style.color = "#fff")
    darkModeBtn.classList.remove('dark-mode-active')
  }
}

function sidebarBtn() {
  document.getElementById('sidebar').classList.toggle('sidebar-active')
}

function sideacc() {
  document.querySelector('.side-accordion').classList.toggle('side-accordion-active')
  sideaccIcon.classList.toggle('sideacc-icon-active')
}
ShowAllImg()

function ShowAllImg(a) {
  sec3Content.innerHTML = ''
  for (let i = 0; i < images.length; i++) {
    const element = images[i];
    sec3Content.innerHTML += `
      <div class="portfolio-img">
        <img src="img/${element}" />
      </div>
      `
    if (a === i) {
      break
    }
  }
}

function ShowPriceList() {
  for (let i = 0; i < priceList.length; i++) {
    const element = priceList[i];
    PriceLink.forEach((item) => {
      element.innerHTML += `<li><i class="far fa-check-circle"></i> ${item}</li>`
    })
  }
}
ShowPriceList()

function ShowSec5Card() {
  for (let i = 0; i < sec5Card1.length; i++) {
    testimonialsData.map((item, a) => {
      if (i === a) {
        sec5Card1[i].innerHTML += sec5Card(item)
      }
    })
  }
}
ShowSec5Card()

function sec5Card(item) {
  return (` <div class="sec5-item-title">
              <div class="sec5-img">
                  <img src="img/${item.image}" />
              </div>
              <div class="sec5-name">
                  <h3>${item.name}</h3>
                  <h5>${item.status}</h5>
                  <div class="rating">${item.rating}</div>
              </div>
          </div>
          <div class="sec5-item-content">
              <p>${item.text}</p>
          </div>`)
}

function ShowTeamCard() {
  teamData.map((item) => {
    sec8Content.innerHTML += `<div class="sec8-card col-s-6 col-lg-3">
                                <div class="sec8-img">
                                  <img width="100%" src="img/${item.image}" />
                                </div>
                                <div class="sec8-text">
                                  <h3>${item.name}</h3>
                                  <h5>${item.status}</h5>
                                </div>
                                <div class="sec8-links">
                                  <span><i class="fab fa-twitter"></i></span>
                                  <span><i class="fab fa-facebook"></i></span>
                                  <span><i class="fab fa-linkedin"></i></span>
                                  <span><i class="fab fa-instagram"></i></span>
                                </div>
                              </div>`
  })
}
ShowTeamCard()

function count() {
  if (window.scrollY > 3500) {
    if (x < 232) {
      x++
    }
    if (z < 453) {
      z++
    }
    if (y < 521) {
      y++
    } else {
      clearInterval(interval)
    }
  }
  number1.innerHTML = x
  number2.innerHTML = y
  number3.innerHTML = z
}

function ShowAccordion() {
  accordionData.map((item, i) => {
    accordioncontainer.innerHTML += `<div class="accordion-item">
                                        <button onclick="accOPen(${i})" class="accordion-title">
                                           <div class="accordion-left">
                                            <span>${item.LeftIcon}</span>
                                            <h2>${item.title}</h2>
                                           </div> 
                                           <div class="accordion-right">
                                            <span>${item.RightIcon}</span>
                                           </div> 
                                        </button>  
                                        <div class="accordion-content ${i == 0 ? "accordion-active" : ''}">
                                          <p>${item.text}</p>
                                        </div>    
                                    </div>`
  })
}
ShowAccordion()

const accordionItem = document.querySelectorAll('.accordion-content')
function accOPen(z) {
  for (let i = 0; i < accordionItem.length; i++) {
    const element = accordionItem[i];
    if (i === z) {
      element.classList.toggle('accordion-active');
    } else {
      element.classList.remove('accordion-active');
    }
  }
}

function showSec10Card() {
  blogData.map((item) => {
    sec10Content.innerHTML += `
    <div class="col-s-6 col-lg-4">
      <div class="sec10-card">
        <div class="sec10-img">
          <img width="100%" src="img/${item.image}" />
        </div>
        <div class="sec10-text">
          <p>${item.status}</p>
          <h2>${item.text}</h2>
          <p>${item.name}</p>
          <span>${item.date}</span>
        </div>
      </div>
    </div>`
  })
}
showSec10Card()

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
    }
  },
});

var swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    992: {
      slidesPerView: 5,
      spaceBetween: 30,
    }
  },
});