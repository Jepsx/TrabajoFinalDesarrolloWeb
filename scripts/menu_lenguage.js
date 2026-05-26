// 1. Menú Móvil
const menuBtn = document.getElementById('mobile-menu-button');
const mobileNav = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});



let currentLang =  localStorage.getItem('selectedLang') || 'es';

function applyLanguage(lang){
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerHTML = translations[currentLang][key];
    });

    document.getElementById('flag-icon-desktop').src = translations[currentLang].flagImg;
    document.getElementById('flag-icon-mobile').src = translations[currentLang].flagImg;
   
    if (typeof updateSlide === 'function') {
        updateSlide(currentIdx, false);
    }
    localStorage.setItem('selectedLang',lang)
}


function toggleLang() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    applyLanguage(currentLang)

}


window.addEventListener('DOMContentLoaded',()=>{
    applyLanguage(currentLang)
})

document.getElementById('lang-toggle-desktop').addEventListener('click', toggleLang);
document.getElementById('lang-toggle-mobile').addEventListener('click', toggleLang);