'use strict'

function _showEl(show, el) {
    if (!show) {
        el.classList.add('hidden')
    }
    else {
        el.classList.remove('hidden')
    }
}

function _makeId(length) {
    var txt = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

function turnStrToObject(str) {
    return JSON.parse(str)
}
