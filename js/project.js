const num = [
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
        [0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0],
        [0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0],
        [0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0],
        [0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0],
        [0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0],
        [0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ], //0
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ,0,0,0], //1
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0],
        [0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ], //2
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0],
        [0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ], //3
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0],
        [0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0],
        [0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ], //4
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ], //5
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0],
        [0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0],
        [0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ], //6
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ], //7
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0],
        [0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0],
        [0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0],
        [0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0],
        [0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ], //8
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0],
        [0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0],
        [0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ], //9
];

// var width = 48;
// var hight = 16;

if(localStorage.horizontal == undefined) {
    localStorage.horizontal = 3;
}
var horizontal = localStorage.horizontal;
var vertical = 1;
var width = horizontal * 16;
var hight = vertical * 16;
document.getElementById("widthInput").value = horizontal;document.getElementById("hightInput").value = vertical;


function mergeChar(charIn) {
    charIn = charIn + "";
    var eachChar = charIn.split("");
    // 每行
    var charOut = []
    for(var a = 0; a < 16; a++) {
        var line = []
        // 每个字符
        for(var b = 0; b < eachChar.length; b++) {
            var charNo = Number(eachChar[b]);
            line = line.concat(num[charNo][a]);
        }
        charOut.push(line);
    }
    
    return(charOut);
}


function print() {
    var numberIn = document.getElementById("numberInput").value;
    if(numberIn != "") {
        numberIn = numberIn.match(/\d+/g).join('');
        document.getElementById("numberInput").value = numberIn;
        var char = mergeChar(numberIn);
        var ifnull = false;
    } else {
        var ifnull = true;
    }
    var htmlOutput = "";
    // 每行
    for(var i = 0; i < hight; i++) {
        var lineOutput = "";
        // 每列
        for(var j = 0; j < width; j++) {
            if(ifnull == false && char[i][j] == 1) {
                lineOutput = lineOutput + "<div class='on'></div>";
            } else {
                lineOutput = lineOutput + "<div class='off'></div>";
            }
        }
        htmlOutput = htmlOutput + "<div class='line'>" + lineOutput + "</div>";
    }
    document.getElementById("htmlOutput").innerHTML = htmlOutput;
}

function changeWidth() {
    vertical = document.getElementById("widthInput").value;
    width = Math.round(vertical * 16);
    vertical = width / 16;
    document.getElementById("widthInput").value = vertical
    localStorage.horizontal = vertical;
    print()
}

function clearIn() {
    document.getElementById("numberInput").value = "";
    print();
}

print();