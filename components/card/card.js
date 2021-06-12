const CardComponent = (params) => {
    return ` <article class="card">
        <img
            class="card__image"
            src=${params.file.url}
            alt=""
        />
        <h4 class="card__title">${params.title}</h4>
        <p class="card__description">
                    ${params.description}
        </p>
    </article>`
}