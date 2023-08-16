// PROMĚNNÉ

// HEADER

const menuIcon = document.querySelector(".menu-icon")
const menuList = document.querySelector("nav")
const hamburgerIcon = document.querySelector(".fa-solid")

const firstMenuItem = document.querySelector(".first-menu-item")
const secondMenuItem = document.querySelector(".second-menu-item")
const thirdMenuItem = document.querySelector(".third-menu-item")

// CELÉ SEKCE

const home = document.querySelector(".home")
const aboutMe = document.querySelector (".about-me")
const contact = document.querySelector(".contact")

// SEKCE 1 - Domovská stránka

const firstCircle = document.getElementById("first-circle")
const firstCircleP = document.querySelector(".first-circle-p")
const firstHomeText = document.querySelector(".first-home-text")

const secondCircle = document.getElementById("second-circle")
const secondCircleP = document.querySelector(".second-circle-p")
const secondHomeText = document.querySelector(".second-home-text")

const thirdCircle = document.getElementById("third-circle")
const thirdCircleP = document.querySelector(".third-circle-p")
const thirdHomeText = document.querySelector(".third-home-text")

// SEKCE 2 - O mně

const aboutButton = document.querySelector(".about-arrow-button")
const aboutText = document.querySelector(".about-text")
const aboutContent = document.querySelector (".about-content")
const aboutArrow = document.querySelector(".about-arrow-button .fa-solid")

// SEKCE 3 - Kontakt

// Desktop

const hoursIconDesktopButton = document.querySelector(".hours-icon-desktop")
const hoursIconDesktop = document.querySelector(".hours-icon-desktop i")
const hours = document.querySelector (".hours")

const adressIconDesktopButton = document.querySelector(".adress-icon-desktop")
const adressIconDesktop = document.querySelector(".adress-icon-desktop i")
const adress = document.querySelector (".adress")

const phoneIconDesktopButton = document.querySelector(".phone-icon-desktop")
const phoneIconDesktop = document.querySelector(".phone-icon-desktop i")
const phone = document.querySelector (".phone")

const emailIconDesktopButton = document.querySelector(".email-icon-desktop")
const emailIconDesktop = document.querySelector(".email-icon-desktop i")
const email = document.querySelector (".email")

// Mobile

const hoursIconMobileButton = document.querySelector(".hours-icon-mobile")
const hoursIconMobile = document.querySelector(".hours-icon-mobile i")

const adressIconMobileButton = document.querySelector(".adress-icon-mobile")
const adressIconMobile = document.querySelector(".adress-icon-mobile i")

const phoneIconMobileButton = document.querySelector(".phone-icon-mobile")
const phoneIconMobile = document.querySelector(".phone-icon-mobile i")

const emailIconMobileButton = document.querySelector(".email-icon-mobile")
const emailIconMobile = document.querySelector(".email-icon-mobile i")

// FUNKCE

// HEADER - Responzivní menu

menuIcon.addEventListener ("click", () => {
    if (hamburgerIcon.classList [1] === "fa-bars-staggered") {
            hamburgerIcon.classList.add("fa-xmark")
            hamburgerIcon.classList.remove("fa-bars-staggered")
            firstMenuItem.style.transform = ("translateX(0)")
            firstMenuItem.style.transition = ("0.25s ease")
            secondMenuItem.style.transform = ("translateX(0)")
            secondMenuItem.style.transition = ("0.5s ease")
            thirdMenuItem.style.transform = ("translateX(0)")
            thirdMenuItem.style.transition = ("0.75s ease")
    } else {
            hamburgerIcon.classList.add("fa-bars-staggered")
            hamburgerIcon.classList.remove("fa-xmark")
            firstMenuItem.style.transform = ("translateX(150px)")
            firstMenuItem.style.transition = ("0.75s ease")
            secondMenuItem.style.transform = ("translateX(150px)")
            secondMenuItem.style.transition = ("0.5s ease")
            thirdMenuItem.style.transform = ("translateX(150px)")
            thirdMenuItem.style.transition = ("0.25s ease")
    }
})

// HEADER - Přepínání mezi sekcemi stránky přes menu

firstMenuItem.addEventListener ("click", () => {
    home.style.display = ("flex")
    aboutMe.style.display = ("none")
    contact.style.display = ("none")
})    
secondMenuItem.addEventListener ("click", () => {
    home.style.display = ("none")
    aboutMe.style.display = ("flex")
    contact.style.display = ("none")
})
thirdMenuItem.addEventListener ("click", () => {
    home.style.display = ("none")
    aboutMe.style.display = ("none")
    contact.style.display = ("flex")
})

// SEKCE 2 - Zobrazení doplňkového textu najetím na kruh

firstCircle.addEventListener ("mouseenter", () => {
    firstCircle.style.backgroundColor = ("rgba(50, 50, 50, 0.9)")
    firstCircleP.style.color = ("#f9f4f4")
    firstCircle.style.transform = ("scale(1.1")
    firstHomeText.style.display = ("block")
})

firstCircle.addEventListener ("mouseleave", () => {
    firstCircle.style.backgroundColor = ("rgba(249, 244, 244, 0.9)")
    firstCircleP.style.color = ("#404040")
    firstCircle.style.transform = ("scale(1)")
    firstHomeText.style.display = ("none")
})

secondCircle.addEventListener ("mouseenter", () => {
    secondCircle.style.backgroundColor = ("rgba(50, 50, 50, 0.9)")
    secondCircleP.style.color = ("#f9f4f4")
    secondCircle.style.transform = ("scale(1.1")
    secondHomeText.style.display = ("block")
})

secondCircle.addEventListener ("mouseleave", () => {
    secondCircle.style.backgroundColor = ("rgba(249, 244, 244, 0.9)")
    secondCircleP.style.color = ("#404040")
    secondCircle.style.transform = ("scale(1)")
    secondHomeText.style.display = ("none")
})

thirdCircle.addEventListener ("mouseenter", () => {
    thirdCircle.style.backgroundColor = ("rgba(50, 50, 50, 0.9)")
    thirdCircleP.style.color = ("#f9f4f4")
    thirdCircle.style.transform = ("scale(1.1")
    thirdHomeText.style.display = ("block")
})

thirdCircle.addEventListener ("mouseleave", () => {
    thirdCircle.style.backgroundColor = ("rgba(249, 244, 244, 0.9)")
    thirdCircleP.style.color = ("#404040")
    thirdCircle.style.transform = ("scale(1)")
    thirdHomeText.style.display = ("none")
})

//Sekce 2 - zasouvání a vysouvání textu

aboutButton.addEventListener ("click", () => {
    if (aboutArrow.classList [1] === "fa-chevron-up") {
        aboutArrow.classList.add("fa-chevron-down")
        aboutArrow.classList.remove("fa-chevron-up")
        aboutContent.style.transform = ("translateY(0)")
    } else {
        aboutArrow.classList.add("fa-chevron-up")
        aboutArrow.classList.remove("fa-chevron-down")
        aboutContent.style.transform = ("translateY(calc(100% - 68px))")
    }
    })

//Menu s kontakty - desktop verze

hoursIconDesktopButton.addEventListener ("click", () => {
    if (hoursIconDesktop.classList [1] === "fa-chevron-left") {
        hoursIconDesktop.classList.add("fa-chevron-right")
        hoursIconDesktop.classList.remove("fa-chevron-left")
        hours.style.transform = ("translateX(0px)")
    } else {
        hoursIconDesktop.classList.add("fa-chevron-left")
        hoursIconDesktop.classList.remove("fa-chevron-right")
        hours.style.transform = ("translatex(278px)")
    }
})

adressIconDesktopButton.addEventListener ("click", () => {
    if (adressIconDesktop.classList [1] === "fa-chevron-left") {
        adressIconDesktop.classList.add("fa-chevron-right")
        adressIconDesktop.classList.remove("fa-chevron-left")
        adress.style.transform = ("translateX(0px)")
    } else {
        adressIconDesktop.classList.add("fa-chevron-left")
        adressIconDesktop.classList.remove("fa-chevron-right")
        adress.style.transform = ("translatex(278px)")
    }
})


phoneIconDesktopButton.addEventListener ("click", () => {
    if (phoneIconDesktop.classList [1] === "fa-chevron-left") {
        phoneIconDesktop.classList.add("fa-chevron-right")
        phoneIconDesktop.classList.remove("fa-chevron-left")
        phone.style.transform = ("translateX(0px)")
    } else {
        phoneIconDesktop.classList.add("fa-chevron-left")
        phoneIconDesktop.classList.remove("fa-chevron-right")
        phone.style.transform = ("translatex(278px)")
    }
})

emailIconDesktopButton.addEventListener ("click", () => {
    if (emailIconDesktop.classList [1] === "fa-chevron-left") {
        emailIconDesktop.classList.add("fa-chevron-right")
        emailIconDesktop.classList.remove("fa-chevron-left")
        email.style.transform = ("translateX(0px)")
    } else {
        emailIconDesktop.classList.add("fa-chevron-left")
        emailIconDesktop.classList.remove("fa-chevron-right")
        email.style.transform = ("translatex(278px)")
    }
})

// Mobil

hoursIconMobileButton.addEventListener ("click", () => {
    if (hoursIconMobile.classList [1] === "fa-chevron-up") {
        hoursIconMobile.classList.add("fa-chevron-down")
        hoursIconMobile.classList.remove("fa-chevron-up")
        hours.style.height = ("72px")
    } else {
        hoursIconMobile.classList.add("fa-chevron-up")
        hoursIconMobile.classList.remove("fa-chevron-down")
        hours.style.height = ("32px")
    }
})

adressIconMobileButton.addEventListener ("click", () => {
    if (adressIconMobile.classList [1] === "fa-chevron-up") {
        adressIconMobile.classList.add("fa-chevron-down")
        adressIconMobile.classList.remove("fa-chevron-up")
        adress.style.height = ("72px")
    } else {
        adressIconMobile.classList.add("fa-chevron-up")
        adressIconMobile.classList.remove("fa-chevron-down")
        adress.style.height = ("32px")
    }
})

phoneIconMobileButton.addEventListener ("click", () => {
    if (phoneIconMobile.classList [1] === "fa-chevron-up") {
        phoneIconMobile.classList.add("fa-chevron-down")
        phoneIconMobile.classList.remove("fa-chevron-up")
        phone.style.height = ("72px")
    } else {
        phoneIconMobile.classList.add("fa-chevron-up")
        phoneIconMobile.classList.remove("fa-chevron-down")
        phone.style.height = ("32px")
    }
})

emailIconMobileButton.addEventListener ("click", () => {
    if (emailIconMobile.classList [1] === "fa-chevron-up") {
        emailIconMobile.classList.add("fa-chevron-down")
        emailIconMobile.classList.remove("fa-chevron-up")
        email.style.height = ("72px")
    } else {
        emailIconMobile.classList.add("fa-chevron-up")
        emailIconMobile.classList.remove("fa-chevron-down")
        email.style.height = ("32px")
    }
})


