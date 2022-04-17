'use strict'
const elCanvasModal = document.querySelector('.editor-modal')
const gElCanvas = document.querySelector('#canvas')
const gCtx = gElCanvas.getContext('2d')
let gTopText
let gBottomText
let gMeme
const gAllTextLines = []
const gMarkedTextLines = []

function createGMeme() {
    return gMeme = {
        templateSrc: '',
        topText: createGTopText(),
        bottonText: createGBottomText()
    }
}
function createGTopText() {
    gAllTextLines.push(gTopText = {
        textBaseline: 'middle',
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'impact',
        strokeStyle: 'black',
        fillStyle: 'white',
        strokeText: 'TOP TEXT',
        x: 150,
        y: 30,
        fillText: 'TOP TEXT',
        isDragale: false,
        isMarked: true
    }
    )
}
function createGBottomText() {
    gAllTextLines.push(gBottomText = {
        textBaseline: 'middle',
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'impact',
        strokeStyle: 'black',
        fillStyle: 'white',
        strokeText: 'BOTTOM TEXT',
        x: 150,
        y: 270,
        fillText: 'BOTTOM TEXT',
        isDragale: false,
        isMarked: true
    }
    )
}

function getElCanvasModal() {
    return elCanvasModal
}
function getElCanvas() {
    return gElCanvas
}
function getMeme() {
    return gMeme
}
function getTopText() {
    return gTopText
}
function getBottomText() {
    return gMeme.bottonText
}
function resetBottomText() {
    gMeme.bottonText = ''
}
function getSelectedTemplate() {
    return gMeme.templateSrc
}
function getAllTextLines() {
    return gAllTextLines
}
function getCMarkedLine() {
    return gMarkedTextLines
}
