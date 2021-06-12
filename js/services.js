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
    HeaderComponent(headerContainer, "Servicios")
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
    navbar.classList.add('navbar__bg')




    //CMS TITLE-SERVICE

    fetch(`https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/entries?access_token=${ACCESS_TOKEN}`)
        .then(res => {
            return res.json()
        })
        .then(json => {
            const sectionProject = document.querySelector('.services')
            const titleService = json.items.find(item => item.fields.hasOwnProperty('misServicios'))
            TitleComponent(titleService.fields.misServicios, sectionProject)
        })

    //CMS SERVICE

    fetch(`https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/entries?access_token=${ACCESS_TOKEN}&content_type=servicio`)
        .then(res => {
            return res.json()
        })
        .then(json => {
            const sectionContainer = document.querySelector('.services__container')
            const services = json.includes.Asset
            services.forEach(item => {
                ServiceComponent(item.fields, sectionContainer)
            })
        })



})()