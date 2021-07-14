/*==================== MENU SHOW Y HIDDEN ====================*/

const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.querySelectorAll('.skills__content')
const skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){

    if(this.parentElement.classList.contains('skills__opened')){
        this.parentElement.classList.remove('skills__opened')
        this.parentElement.classList.add('skills__closed')
    }
    else{
    for(i=0;i<skillsContent.length;i++){
        if(skillsContent[i].classList.contains('skills__opened')){
            skillsContent[i].classList.remove('skills__opened')
            skillsContent[i].classList.add('skills__closed')
        }
    }
    this.parentElement.classList.add('skills__opened')   
}}

skillsHeader.forEach((el)=>el.addEventListener('click',toggleSkills))

/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 