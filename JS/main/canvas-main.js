'use strict'
const gElTopLine = document.querySelector('.top-text-input')
const gElBottomLine = document.querySelector('.botton-text-input')

function renderMeme() {
    renderTemplateImage()
    renderText()
}
function renderTemplateImage() {
    let template = getSelectedTemplate()
    gCtx.drawImage(template, 0, 0, template.width, template.height)
}
function renderText() {
    let lineArray = getAllTextLines()
    for (let i = 0; i < lineArray.length; i++) {
        let text = lineArray[i]
        gCtx.textBaseline = text.textBaseline
        gCtx.textAlign = text.textAlign
        gCtx.font = `${text.fontSize}px ${text.fontFamily}`
        gCtx.strokeStyle = text.strokeStyle
        gCtx.fillStyle = text.fillStyle
        gCtx.strokeText(text.strokeText, text.x, text.y)
        gCtx.fillText(text.strokeText, text.x, text.y)
    }
    console.log(lineArray)
    return gCtx
}
function clearCanvas() {
    const canvas = getElCanvas()
    gCtx.clearRect(0, 0, canvas.width, canvas.height);
}
function setTemplateToCanvas(elSelectedTemplate) {
    createGMeme()
    getMeme().templateSrc = elSelectedTemplate
    renderMeme()
    _showEl(true, getElCanvasModal())
}

function closeCanvasModal() {
    _showEl(false, getElCanvasModal())
}

function updateTopText(textInput) {
    const topText = getAllTextLines()[0]
    topText.strokeText = textInput.value
    topText.fillText = textInput.value
    clearCanvas()
    renderText()
    renderMeme()
}
function updateBottomText(textInput) {
    const bottomText = getAllTextLines()[1]
    bottomText.strokeText = textInput.value
    bottomText.fillText = textInput.value
    clearCanvas()
    renderText()
    renderMeme()
}
function deleteTopText() {
    const elButton = document.querySelector('.top-text-input')
    elButton.value = ''
    updateTopText(elButton)
    renderMeme()
}
function deleteBottomText() {
    const elButton = document.querySelector('.botton-text-input')
    elButton.value = ''
    updateBottomText(elButton)
    renderMeme()
}
function changeTextAlign(el) {
    let align = el.getAttribute('data-align')
    let lineArray = getAllTextLines()
    lineArray.forEach(element => element.textAlign = align)
    renderMeme()
}
function changeTextColor(el) {
    let color = el.value
    let lineArray = getAllTextLines()
    lineArray.forEach(element => element.fillStyle = color)
    renderMeme()
}
function changeFont(el) {
    let font = el.value
    let lineArray = getAllTextLines()
    lineArray.forEach(element => element.fontFamily = font)
    renderMeme()
}
function toggleUpperCase(el) {
    let isTrue = el
    let lineArray = getAllTextLines()
    if (isTrue.classList.contains('uppercase')) {
        lineArray.forEach(element => element.strokeText = element.strokeText.toLowerCase())
        lineArray.forEach(element => element.fillText = element.fillText.toLowerCase())
        el.classList.remove('uppercase')
        el.innerText = 'lowercase'
    } else {
        lineArray.forEach(element => element.strokeText = element.strokeText.toUpperCase())
        lineArray.forEach(element => element.fillText = element.fillText.toUpperCase())
        el.classList.add('uppercase')
        el.innerText = 'uppercase'
    }
    renderMeme()
}
function placeSticker(el) {
    let lineArray = getAllTextLines()
    let stickerTxt = el.value
    let newSticker = {
        textBaseline: 'middle',
        textAlign: 'center',
        fontSize: 50,
        fontFamily: 'impact',
        strokeStyle: 'black',
        fillStyle: 'white',
        strokeText: stickerTxt,
        x: 270,
        y: 230,
        fillText: stickerTxt,
        isDragale: false,
        isMarked: true
    }
    lineArray.push(newSticker)
    renderMeme()
}
function increaseFontSize() {
    let lineArray = getAllTextLines()
    lineArray.forEach(element => element.fontSize = element.fontSize + 5)
    renderMeme()
}
function decreaseFontSize() {
    let lineArray = getAllTextLines()
    lineArray.forEach(element => element.fontSize = element.fontSize - 5)
    renderMeme()
}
function toggleMarked(el) {
    let currTextLine = el
    if (currTextLine.classList.contains('marked')) {
        currTextLine.classList.remove('marked')
    } else {
        currTextLine.classList.add('marked')
    }
}
function switchLine() {
    if (gElTopLine.classList.contains('marked')) {
        gElTopLine.classList.remove('marked') 
        gElBottomLine.classList.add('marked')
    } else {
        gElTopLine.classList.add('marked') 
        gElBottomLine.classList.remove('marked')
    }
}
