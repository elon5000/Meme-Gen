'use strict'

function toggleNightMode(el) {
    let body = document.querySelector('body').classList
    if (body.contains('nightmode')) {
        body.remove('nightmode')
        el.innerText = 'Nightmode OFF'
    } else {
        body.add('nightmode')
        el.innerText = 'Nightmode ON'
    }
}

function openSavedModal() {
    const elSavedModal = document.querySelector('.saved-gallery')
    if (elSavedModal.classList.contains('hidden')) {
         elSavedModal.classList.remove('hidden')
    } else {
        elSavedModal.classList.add('hidden')

    }
}