'use strict'

const elGallery = document.querySelector('.gallery-grid')
let gTemplateImages = []
let gKeyWords = []

function getElGallery() {
    return elGallery
}
function getTemplateImages() {
    return gTemplateImages
}
function getKeyWords() {
    return gKeyWords
}

function createTemplates(url, keywords) {
    return {
        url: url,
        id: _makeId(4),
        tags: keywords
    }
}

function pushTemplates() {
    gTemplateImages.push(createTemplates("/Graphics/Images/meme-imgs (square)/1.jpg", ['trump', 'celeb', 'politics', 'angry', 'טראמפ', 'כועס', 'פוליטיקה']));
    gTemplateImages.push(createTemplates("/Graphics/Images/meme-imgs (square)/2.jpg", ['dog', 'cute', 'animal', 'כלב', 'חמוד', 'חיות']));
    gTemplateImages.push(createTemplates("/Graphics/Images/meme-imgs (square)/3.jpg", ['cute', 'tierd', , 'animal', 'baby', 'dog', 'חמוד', 'עייף', 'חיות', 'תינוק', 'כלב']));
    gTemplateImages.push(createTemplates("/Graphics/Images/meme-imgs (square)/4.jpg", ['cat', 'tierd', 'animal', 'cute', 'חתול', 'עייף', 'חיות', 'חמוד']));
    gTemplateImages.push(createTemplates("/Graphics/Images/meme-imgs (square)/5.jpg", ['sucsses', 'baby', 'cute', 'הצלחה', 'תינוק', 'חמוד']));
    gTemplateImages.push(createTemplates("/Graphics/Images/meme-imgs (square)/6.jpg", ['aliens', 'history', 'chanel', 'guy', 'חייזרים', 'היסטוירה', 'ערוץ', 'בחור']));
    gTemplateImages.push(createTemplates("/Graphics/Images/meme-imgs (square)/7.jpg", ['baby', 'supriesed', 'funny', 'cute', 'תינוק', 'מופתע', 'מצחיק', 'חמוד']));
    gTemplateImages.push(createTemplates("/Graphics/Images/meme-imgs (square)/8.jpg", ['tell', 'about', 'willi', 'wonka', 'ספר', 'על  זה', 'וילי', 'וונקה']));
    gTemplateImages.push(createTemplates("/Graphics/Images/meme-imgs (square)/9.jpg", ['evil', 'laugh', 'baby', 'cute', 'רשע', 'צחוק', 'תינוק', 'חמוד']));
    gTemplateImages.push(createTemplates("/Graphics/Images/meme-imgs (square)/10.jpg", ['presidant', 'Obama', 'laugh', 'smile', 'נשיא', 'אובמה', 'צחוק', 'חיוך']));
    gTemplateImages.push(createTemplates("/Graphics/Images/meme-imgs (square)/11.jpg", ['kiss', 'men', 'basketball', 'נשיקה', 'גברים', 'כדורסל']));
    gTemplateImages.push(createTemplates("/Graphics/Images/meme-imgs (square)/12.jpg", ['Haim', 'Hacht', 'finger', 'point', 'חיים', 'הכט', 'אצבע', 'מצביע']));
    gTemplateImages.push(createTemplates("/Graphics/Images/meme-imgs (square)/13.jpg", ['Leo', 'Decaprio', 'cheers', 'smile', 'לאונרדו', 'דיקאפריו', 'לחיים', 'חיוך']));
    gTemplateImages.push(createTemplates("/Graphics/Images/meme-imgs (square)/14.jpg", ['Murphius', 'Matrix', 'sunglasses', 'מורפיוס', 'מטריקס', 'משקפי שמש']));
    gTemplateImages.push(createTemplates("/Graphics/Images/meme-imgs (square)/15.jpg", ['LOTR', 'Mordor', 'man', 'שר הטבעות', 'מורדור', 'גבר']));
    gTemplateImages.push(createTemplates("/Graphics/Images/meme-imgs (square)/16.jpg", ['StarTrack', 'man', 'smile', 'מסע בכוכבים', 'איש', 'חיוך']));
    gTemplateImages.push(createTemplates("/Graphics/Images/meme-imgs (square)/17.jpg", ['Putin', 'Suit', 'Two', 'פוטין', 'שתי', 'חליפה']));
    gTemplateImages.push(createTemplates("/Graphics/Images/meme-imgs (square)/18.jpg", ['Toystory', 'Buzz', 'Woddy', 'Everywhere', 'צעצוע של סיפור', 'באז', 'וודי', 'כל מקום']));
}

function createKeyWordsBank() {
    let arr = []
    for (let i = 0; i < gTemplateImages.length; i++) {
        arr.push([gTemplateImages[i]["tags"]])
    }
    Array.prototype.push.apply(gKeyWords, arr.flat(2))
}


function initGallery() {
    pushTemplates()
    createKeyWordsBank()
}