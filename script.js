

var mainCount = 0;
var banknoteCount = 0;
var coinCount = 0;

function increaseCounter(value) {
    return value + 20;
}

function mainCountIncrease() {
    mainCount += 20
    document.getElementById("mainCount").innerHTML = mainCount;
    changeJar()
}

function coinButtonCallback() {
    coinCount +=20
    document.getElementById("coinCount").innerHTML = coinCount;
    mainCountIncrease()
}

function banknoteButtonCallback() {
    banknoteCount +=20
    document.getElementById("banknoteCount").innerHTML = banknoteCount;
    mainCountIncrease()
}

function resetPage() {
    var reset = confirm("Are you sure you want to claim the prize and reset the count?");
    if (reset == true) {
        mainCount = 0;
        banknoteCount = 0;
        coinCount = 0;
        document.getElementById("mainCount").innerHTML = mainCount;
        document.getElementById("banknoteCount").innerHTML = banknoteCount;
        document.getElementById("coinCount").innerHTML = coinCount;
        changeJar()
    }
}

function changeJar() {
    var image = document.getElementById("jarPic");
    switch(mainCount) {
        case 0: image.src = "images/jar.png";
                break;
        case 20: image.src = "images/jar1.png";
                break;
        case 40: image.src = "images/jar2.png";
                break;
        case 60: image.src = "images/jar3.png";
                break;
        case 200: image.src = "images/jar4.png";
                break;
        case 400: image.src = "images/jar5.png";
                break;
        case 600: image.src = "images/jar6.png";
                break;
        case 800: image.src = "images/jar7.png";
                break;
        case 1200: image.src = "images/jar8.png";
                break;
    }
}

document.getElementById("banknoteButton").addEventListener("click", banknoteButtonCallback)
document.getElementById("coinButton").addEventListener("click", coinButtonCallback)
document.getElementById("medalButton").addEventListener("click", resetPage)
