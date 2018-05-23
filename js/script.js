"use strict";

var tmr; // Timer
var tmrcont = 0; // Timer
var tmrscond = 100; // 0.9 seconde
var tmrPoint = 3000; // 0.9 seconde
var etp; // etap
var samtGeneral;
var samtSelected = 1;
var changsaamt = 0;
var qeElement = []; // har element
var qepoints= []; // samt har noghat 
var divAffich;
// var etpBody; // etap
var etpcont = 1; // etap
var clstmr;
var mikiposition;
var clsSnack;
var sncTop = 440;
var sncLeft = 420;
qeElement[0] ={top:440,left:420};
qeElement[1] ={top:460,left:420};
qeElement[2] ={top:480,left:420};
qeElement[3] ={top:500,left:420};
// qepoints[0] = {top:420,left:420, direction:samtSelected}; //


clsSnack = document.querySelector(".miki");

clsSnack.classList.c

document.addEventListener("keydown", fncKeypress);

// console.log(qeElement);
function start() {
    divAffich = '';
    clearInterval(tmr);

    if ((samtGeneral-2 == samtSelected) || (samtGeneral+2 == samtSelected)){
        window.alert("Tu as perdu!!!!");
        clearInterval(tmr);
        tmr = false;
        return;
    }

    samtGeneral = samtSelected;

    switch (samtSelected) {
        case 1: // up
            sncTop = sncTop-20;
            break;

        case 2: // right
            sncLeft =  qeElement[0].left+20;
            break;
    
        case 3: // down
            sncTop =  sncTop+20;
            break;

        case 4: // left
            sncLeft = qeElement[0].left-20;
            break;
    
        default:
            break;
    }

    if (sncTop >= 880) {
        sncTop = 0;
    }else if (sncTop < 0) {
        sncTop = 880;sncTop
    }else if (sncLeft < 0) {
        sncLeft = 860;
    }else if (sncLeft > 860) {
        sncLeft = 0;
    }

    // https://stackoverflow.com/a/8073687
    qeElement.unshift({top:sncTop,left:sncLeft});

    var ret = IScompare();
    if (ret != 'true'){
        qepoints.splice(ret, 1)
    }else{
        qeElement.pop();
    }

    divAffich = '';

    var nmbr = document.querySelector(".nombr");
    nmbr.textContent = qeElement.length;
    

    for (var ii = 0; ii < qeElement.length; ii++) {
        var sncTopdiv = qeElement[ii].top ;
        var sncLeftdiv = qeElement[ii].left ;
        // console.log(divAffich);

        divAffich +=  '<div class="snack" style="top: '+sncTopdiv+'px;left: '+sncLeftdiv+'px;"></div>';
    }

    for (var i = 0; i < qepoints.length; i++) {
        var sncTopdivPoin = qepoints[i].top ;
        var sncLeftdivPoin = qepoints[i].left ;

        divAffich += '<div class="snac-point" style="top: '+sncTopdivPoin+'px;left: '+sncLeftdivPoin+'px;"></div>';
    }

    clsSnack.innerHTML = divAffich;
    tmr = setInterval(start, tmrscond);
}

function fncKeypress(event) {
    if (tmr == false) {
        return;
    }
    switch (event.key) {
        case "ArrowDown":
        samtSelected = 3;
            break;
        case "ArrowUp":
        samtSelected = 1;
            break;
        case "ArrowLeft":
        samtSelected = 4;
            break;
        case "ArrowRight":
        samtSelected = 2;
            break;
        default:
        return; // Quit when this doesn't handle the key event.
    }

    // if (typeof qepoint[0] == "undefined" || qepoint[0].direction != samtSelected) {
        
    //     qepoint.unshift({top:qeElement[0].top,left:qeElement[0].left, direction:samtSelected})
    // }
    start();
}

function CreatPoint() {
    var PointTop = getRandom(0,44)*20;
    var PointLeft = getRandom(0,43)*20;
    // console.log(tmrPoint);


    if (qepoints.length > 2) {
        qepoints.pop();
    }else{
        qepoints.unshift({top:PointTop,left:PointLeft});
    }
}

function IScompare() {
    for (let ipon = 0; ipon < qepoints.length; ipon++) {
        if (qepoints[ipon].top == qeElement[0].top && qepoints[ipon].left == qeElement[0].left) {
            return ipon;
        }
    }
    return 'true';
}
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

tmr = setInterval(start, tmrscond);
tmrPoint = setInterval(CreatPoint, tmrPoint);














