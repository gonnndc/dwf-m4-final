(function main() {
    const SPACE_ID = '0st4abi5p45t'
    const ACCESS_TOKEN = 'RJOV5zuvs3RV0DLfRYbElRCetkVsyKJG_SLPI2y_RSg'
    const ENVIRONMENT_ID = 'master'

    //HTML Elements
    const navbar = document.querySelector('.navbar')
    const navbarContainer = document.querySelector('.navbar__container')
    const headerContainer = document.querySelector('.header__container')
    const contactContainer = document.querySelector('.contact__container')
    const footerContainer = document.querySelector('.footer__container')


    //COMPONENTS
    NavbarComponent(navbarContainer)
    HeaderComponent(headerContainer, "Bienvenidxs a mi sitio")
    FormComponent(contactContainer, 'Escribime')
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
        const limit = window.outerWidth > 769 ? 150 : 500
        const currentScroll = window.pageYOffset;
        if (currentScroll >= limit) {
            navbar.classList.add('navbar__bg')
        }
        if (currentScroll < limit) {
            navbar.classList.remove('navbar__bg')
        }
    });



    //ROTA TITULO PARA EVITAR CHOQUE CON NAVBAR

    window.addEventListener("scroll", () => {
        // const limit = window.outerWidth > 769 ? 150 : 500
        const titleHeader = document.querySelector('.header__title')
        const currentScroll = window.pageYOffset;
        if (currentScroll >= 100) {
            titleHeader.classList.add('desaparecer__title')
        }
        if (currentScroll < 100) {
            titleHeader.classList.remove('desaparecer__title')
        }
    });




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


    //FORM
    const miFormEl = document.querySelector('.contact__form')
    miFormEl.addEventListener('submit', (e) => {
        e.preventDefault()
        const formData = new FormData(miFormEl)
        const mensaje = formData.get("mensaje")
        let url = 'https://apx-api.vercel.app/api/utils/dwf';
        var data = {
            "to": "gdcabrera93@gmail.com",
            "message": mensaje
        };

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    })

})()