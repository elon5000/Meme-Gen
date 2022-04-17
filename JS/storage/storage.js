'use strict'

const elGSavedGallery = document.querySelector('.saved-memes-gallery')
let gStrHTML=''

function saveMeme(elSaveButton) {
    const download = elSaveButton;
    download.addEventListener('click', function (e) {
        console.log(canvas.toDataURL())
        const link = document.createElement('a')
        link.download = 'download.png'
        link.href = canvas.toDataURL()
        addSavedImageToGallery(canvas.toDataURL())
        link.click();
        link.delete;
    })
}

function addSavedImageToGallery(url) {
    gStrHTML += `<img class="gallery-item img-${_makeId(3)}" src="${url}" >`
    var str = gStrHTML
    elGSavedGallery.innerHTML = str.split('>,<').join('><');
}