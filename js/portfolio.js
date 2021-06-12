(function main() {
    const SPACE_ID = '0st4abi5p45t'
    const ACCESS_TOKEN = 'RJOV5zuvs3RV0DLfRYbElRCetkVsyKJG_SLPI2y_RSg'
    const ENVIRONMENT_ID = 'master'

    //HTML Elements
    const navbar = document.querySelector('.navbar')
    const navbarContainer = document.querySelector('.navbar__container')
    const headerContainer = document.querySelector('.header__container')
    const footerContainer = document.querySelector('.footer__container')


    //COMPONENTS
    NavbarComponent(navbarContainer)
    HeaderComponent(headerContainer, "Portfolio")
    FooterComponent(footerContainer)



    //MENU

    const menu = document.querySelector('.navbar__menu--icon')
    const exitMenu = document.querySelector('.navbar__menu--icon2')

    menu.addEventListener('click', () => {
        navbarContainer.classList.add('menu-mobile')
    })

    exitMenu.addEventListener('click', () => {
        navbarContainer.classList.remove('menu-mobile')
    })



    //BACKGROUND NAVBAR
    //MOBILE SE COLOCA A PARTIR DE LOS 500PX SCROLLEADOS
    //DESKTOP SE COLOCA A PARTIR DE LOS 150PX SCROLLEADOS

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll >= 100) {
            navbar.classList.add('navbar__bg')
        }
        if (currentScroll < 100) {
            navbar.classList.remove('navbar__bg')
        }
    });


    //CMS TITLE-PROJECT

    fetch(`https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/entries?access_token=${ACCESS_TOKEN}`)
        .then(res => {
            return res.json()
        })
        .then(json => {
            const sectionProject = document.querySelector('.project')
            const titleProject = json.items.find(item => item.fields.hasOwnProperty('proyectos'))
            TitleComponent(titleProject.fields.proyectos, sectionProject)
        })
    
    //CMS PROJECTS

    fetch(`https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/entries?access_token=${ACCESS_TOKEN}&content_type=project`)
        .then(res => {
            return res.json()
        })
        .then(json => {
            const sectionContainer = document.querySelector('.project__container')
            const projects = json.includes.Asset
            projects.forEach(item => {
                ProjectComponent(item.fields, sectionContainer)
            })
        })


})()