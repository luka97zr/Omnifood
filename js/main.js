const navLinks = document.querySelector('.nav__links');
const nav = document.querySelector('.nav__main')
const header = document.querySelector('.header__wrapper--main');
const burgerNav = document.querySelector('.nav_burger');
const navMenu = document.querySelector('.nav__menu');

const allSections = document.querySelectorAll('.section')

function clearClassActive(){
    burgerNav.classList.remove('active')
    navMenu.classList.remove('active')
}

//Navigation
navLinks.addEventListener('click',function(e){
    e.preventDefault()
    if(e.target.classList.contains('nav__link')){
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior:'smooth'})
        clearClassActive()
    }

})

const stickyNav = function(entries){
    const [entry] = entries;
    if(!entry.isIntersecting) nav.classList.add('sticky')
    else nav.classList.remove('sticky')


}

const navIntersect = new IntersectionObserver(stickyNav, {
    root:null,
    threshold:0
})
navIntersect.observe(header)

//Section entering


<<<<<<< HEAD
const sectionReveal = function(entries,observe){
    const [entry] = entries;
    console.log(entry.target)
    if(!entry.isIntersecting) return;
    entry.target.classList.remove('section_hide')
}

const revealSection = new IntersectionObserver(sectionReveal,{
    root:null,
    threshold:0.2
})
allSections.forEach(sec => {
    sec.classList.add('section_hide')
    revealSection.observe(sec)
})
=======
 const sectionReveal = function(entries,observe){
     const [entry] = entries;
    console.log(entry.target)
    if(!entry.isIntersecting) return;
     entry.target.classList.remove('section_hide')
     }

const revealSection = new IntersectionObserver(sectionReveal,{
     root:null,
     threshold:0.2
 })
 allSections.forEach(sec => {
     sec.classList.add('section_hide')
     revealSection.observe(sec)
 })
>>>>>>> 1d714866b03bc1ec2d3dbaf24454e351bb47b579

burgerNav.addEventListener('click',()=>{
    navMenu.classList.toggle('active')
    burgerNav.classList.toggle('active')

})
