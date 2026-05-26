document.getElementById('btn-load-more').addEventListener('click', function() {
    // 1. Datos de los nuevos platos
    const nuevosPlatos = [
        {
            id: "feijoada",
            titulo: "Feijoada",
            img: "TrabajoFinalDesarrolloWeb/img/feijoada.webp",
            imgMob: "TrabajoFinalDesarrolloWeb/img/mobile_feijoada.webp",
            keyDesc: "feijoadaDesc", 
            textoDefault: "La feijoada es un guiso de frijoles negros con carne de cerdo, considerado el plato nacional de Brasil."
        },
        {
            id: "moqueca",
            titulo: "Moqueca",
            img: "TrabajoFinalDesarrolloWeb/img/moqueca.webp",
            imgMob: "TrabajoFinalDesarrolloWeb/img/mobile_moqueca.webp",
            keyDesc: "moquecaDesc",
            textoDefault: "Un delicioso cocido de pescado, camarones, leche de coco y aceite de palma (dendê)."
        }
    ];

    const container = document.getElementById('food-container');

    nuevosPlatos.forEach(plato => {
        const article = document.createElement('article');
        article.id = plato.id;
        article.className = 'article-food';

        article.innerHTML = `
            <picture>
                <source srcset="${plato.imgMob}" media="(max-width: 768px)">
                <img src="${plato.img}" alt="${plato.titulo}" class="food-bg">
            </picture>
            <h2 class="food-title">${plato.titulo}</h2>
            
            <div class="food-card-container">
                <div class="glass-card">
                    <p data-i18n="${plato.keyDesc}">${plato.textoDefault}</p>
                </div>
            </div>
        `;

        container.appendChild(article);
    });

    if (typeof applyLanguage === 'function') {
        applyLanguage(currentLang);
    }

    const parentSection = this.closest('.load-more-section');
    if (parentSection) {
        parentSection.style.display = 'none';
    }
});
