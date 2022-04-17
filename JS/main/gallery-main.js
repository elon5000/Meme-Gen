'use strict'

function renderGallery(templates) {
    var strHTML = templates.map(function (template) {
        return `<img class="gallery-item img-${_makeId(3)}" src="${template.url}" onclick="setTemplateToCanvas(this)">`
    });
    var str = strHTML.join('');
    getElGallery().innerHTML = str.split('>,<').join('><');
}

function addNewTemplate() {
    let url = getUploadedImageSrc()
    let keywords = document.querySelector('.tags-input').value
    gTemplateImages.push(createTemplates(url, keywords))
    renderGallery(getTemplateImages())
}

function filterTemplates(elInput) {
    let templates = getTemplateImages()
    let inputVal = elInput.value
    let fillteredTemplates = [];
    if (inputVal === '') {
        return
    }
    for (let i = 0; i < templates.length; i++) {
        if (templates[i].tags.includes(inputVal)) {
            fillteredTemplates.push(templates[i]);
        }
    }
    renderGallery(fillteredTemplates)
}


initGallery()
renderGallery(getTemplateImages())
