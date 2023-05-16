let navIconEl = document.getElementById('navIcon');
let navDropEl = document.getElementById('navDrop');
let homeEl = document.getElementById('Home');
let addBtnEl = document.getElementById('addBtn');
let subBtnEl = document.getElementById('subBtn');
let multiBtnEl = document.getElementById('multiBtn')
let divBtnEL = document.getElementById('divBtn')
let gameEl = document.getElementById('Game');
let PlayMiniHomeEl = document.getElementById('PlayMiniHome');
let logoHomeEl = document.getElementById('logoHome');
let itemHomeEl = document.getElementById('itemHome');
let itemAboutEl = document.getElementById('itemAbout')
let dropHomeEl = document.getElementById('dropHome');
let dropAboutEl = document.getElementById('dropAbout')
let dropContactEl = document.getElementById('dropContact')
let arrowBtnEl = document.getElementById('arrowBtn')
let addGameEl = document.getElementById('addGame')
let subGameEl = document.getElementById('subGame')
let multiGameEl = document.getElementById('multiGame')
let divGameEl = document.getElementById('divGame')
navIconEl.addEventListener('click', function() {
    navDropEl.classList.toggle('nav-drop-toggle');
    navIconEl.classList.toggle("fa-xmark");
});
PlayMiniHomeEl.addEventListener('click', function() {
    homeEl.classList.remove('homeEl')
    gameEl.classList.add('game-container')
    subGameEl.classList.remove('btn')
    addGameEl.classList.remove('btn')
    multiGameEl.classList.remove('btn')
    divGameEl.classList.remove('btn')
});
logoHomeEl.addEventListener('click', function() {
    homeEl.classList.remove('homeEl')
    gameEl.classList.add('game-container')
    subGameEl.classList.remove('btn')
    addGameEl.classList.remove('btn')
    multiGameEl.classList.remove('btn')
    divGameEl.classList.remove('btn')
})
itemHomeEl.addEventListener('click', function() {
    homeEl.classList.remove('homeEl')
    gameEl.classList.add('game-container')
    subGameEl.classList.remove('btn')
    addGameEl.classList.remove('btn')
    multiGameEl.classList.remove('btn')
    divGameEl.classList.remove('btn')
})
itemAboutEl.addEventListener('click', function() {
    homeEl.classList.remove('homeEl')
    gameEl.classList.add('game-container')
    subGameEl.classList.remove('btn')
    addGameEl.classList.remove('btn')
    multiGameEl.classList.remove('btn')
    divGameEl.classList.remove('btn')
})
dropHomeEl.addEventListener('click', function() {
    homeEl.classList.remove('homeEl')
    gameEl.classList.add('game-container')
    subGameEl.classList.remove('btn')
    addGameEl.classList.remove('btn')
    multiGameEl.classList.remove('btn')
    divGameEl.classList.remove('btn')
    navDropEl.classList.toggle('nav-drop-toggle');
    navIconEl.classList.toggle("fa-xmark");
})
dropAboutEl.addEventListener('click', function() {
    homeEl.classList.remove('homeEl')
    gameEl.classList.add('game-container')
    subGameEl.classList.remove('btn')
    addGameEl.classList.remove('btn')
    multiGameEl.classList.remove('btn')
    divGameEl.classList.remove('btn')
    navDropEl.classList.toggle('nav-drop-toggle');
    navIconEl.classList.toggle("fa-xmark");
})

dropContactEl.addEventListener('click', function() {
    navDropEl.classList.toggle('nav-drop-toggle');
    navIconEl.classList.toggle("fa-xmark");
})

arrowBtnEl.addEventListener('click', function() {
    homeEl.classList.remove('homeEl')
    gameEl.classList.add('game-container')
    subGameEl.classList.remove('btn')
    addGameEl.classList.remove('btn')
    multiGameEl.classList.remove('btn')
    divGameEl.classList.remove('btn')
})


let restartButtonAddEl = document.getElementById('restartButtonAdd')
let addnum1 = document.getElementById("firstNumber")
let addnum2 = document.getElementById("secondNumber")
let addans = document.getElementById("userInput")
let addresult = document.getElementById("gameResult")
let rand1 = Math.ceil(Math.random() * 100)
let rand2 = Math.ceil(Math.random() * 100)
addnum1.textContent = rand1
addnum2.textContent = rand2
let addre = rand1 + rand2
let addinpEl = document.getElementById('userInput');

function Check() {
    if (parseInt(addans.value) === addre) {
        addresult.textContent = "Congratulations! You got it right"
        addresult.style.backgroundColor = "#028a0f"
    } else {
        addresult.textContent = "Please try again!"
        addresult.style.backgroundColor = "#1e217c"
    }
}

function ResetAdd() {
    rand1 = Math.ceil(Math.random() * 100)
    rand2 = Math.ceil(Math.random() * 100)
    addre = rand1 + rand2
    addnum1.textContent = rand1
    addnum2.textContent = rand2
    addresult.textContent = ""
    addinpEl.value = ''
}

let subnum1 = document.getElementById("firstNumberSub")
let subnum2 = document.getElementById("secondNumberSub")
let subans = document.getElementById("userInputSub")
let subresult = document.getElementById("gameResultSub")
subnum1.textContent = rand1
subnum2.textContent = rand2
let subre = rand1 - rand2
let subinpEl = document.getElementById('userInputSub');

function CheckSub() {
    if (parseInt(subans.value) === subre) {
        subresult.textContent = "Congratulations! You got it right"
        subresult.style.backgroundColor = "#028a0f"
    } else {
        subresult.textContent = "Please try again!"
        subresult.style.backgroundColor = "#1e217c"
    }
}

function ResetSub() {
    rand1 = Math.ceil(Math.random() * 100)
    rand2 = Math.ceil(Math.random() * 100)
    subre = rand1 - rand2
    subnum1.textContent = rand1
    subnum2.textContent = rand2
    subresult.textContent = ""
    subinpEl.value = ''
}
let multinum1 = document.getElementById("firstNumberMulti")
let multinum2 = document.getElementById("secondNumberMulti")
let multians = document.getElementById("userInputMulti")
let multiresult = document.getElementById("gameResultMulti")
multinum1.textContent = rand1
multinum2.textContent = rand2
let multire = rand1 * rand2
let multiinpEl = document.getElementById('userInputMulti');

function CheckMulti() {
    if (parseInt(multians.value) === multire) {
        multiresult.textContent = "Congratulations! You got it right"
        multiresult.style.backgroundColor = "#028a0f"
    } else {
        multiresult.textContent = "Please try again!"
        multiresult.style.backgroundColor = "#1e217c"
    }
}

function ResetMulti() {
    rand1 = Math.ceil(Math.random() * 100)
    rand2 = Math.ceil(Math.random() * 100)
    multire = rand1 * rand2
    multinum1.textContent = rand1
    multinum2.textContent = rand2
    multiresult.textContent = ""
    multiinpEl.value = ''
}

let divnum1 = document.getElementById("firstNumberDiv")
let divnum2 = document.getElementById("secondNumberDiv")
let divans = document.getElementById("userInputDiv")
let divresult = document.getElementById("gameResultDiv")
divnum1.textContent = rand1
divnum2.textContent = rand2
let divre = Math.round(rand1 / rand2)
let divinpEl = document.getElementById('userInputDiv');

function CheckDiv() {
    if (parseInt(divans.value) === divre) {
        divresult.textContent = "Congratulations! You got it right"
        divresult.style.backgroundColor = "#028a0f"
    } else {
        divresult.textContent = "Please try again!"
        divresult.style.backgroundColor = "#1e217c"
    }
}

function ResetDiv() {
    rand1 = Math.ceil(Math.random() * 100)
    rand2 = Math.ceil(Math.random() * 100)
    divre = Math.round(rand1 / rand2)
    divnum1.textContent = rand1
    divnum2.textContent = rand2
    divresult.textContent = ""
    divinpEl.value = ''
}



addBtnEl.addEventListener('click', function() {
    homeEl.classList.add('homeEl')
    gameEl.classList.remove('game-container')
    subGameEl.classList.toggle('btn')
    multiGameEl.classList.toggle('btn')
    divGameEl.classList.toggle('btn')
});
subBtnEl.addEventListener('click', function() {
    homeEl.classList.add('homeEl')
    gameEl.classList.remove('game-container')
    addGameEl.classList.toggle('btn')
    multiGameEl.classList.toggle('btn')
    divGameEl.classList.toggle('btn')
})
multiBtnEl.addEventListener('click', function() {
    homeEl.classList.add('homeEl')
    gameEl.classList.remove('game-container')
    addGameEl.classList.toggle('btn')
    subGameEl.classList.toggle('btn')
    divGameEl.classList.toggle('btn')
})
divBtnEL.addEventListener('click', function() {
    homeEl.classList.add('homeEl')
    gameEl.classList.remove('game-container')
    addGameEl.classList.toggle('btn')
    subGameEl.classList.toggle('btn')
    multiGameEl.classList.toggle('btn')
})