"use strict";

var tmr; // Timer
var tmrcont = 0; // Timer
var tmrscond = 500; // 0.9 seconde
var etp; // etap
var samtGeneral;
var samtSelected = 1;
var changsaamt = 0;
var qeElement = []; // har element
var qepoint= []; // samt har noghat 
var divAffich;
// var etpBody; // etap
var etpcont = 1; // etap
var clstmr;
var mikiposition;
var clsSnack;
var sncTop = 440;
var sncLeft = 430;
qeElement[0] ={top:440,left:430, direction:samtSelected};
qeElement[1] ={top:460,left:430, direction:samtSelected};
qeElement[2] ={top:480,left:430, direction:samtSelected};
qeElement[3] ={top:500,left:430, direction:samtSelected};
qepoint[0] = {top:420,left:430, direction:samtSelected}; //


clsSnack = document.querySelector(".miki");

document.addEventListener("keydown", fncKeypress);

// console.log(qeElement);
function start() {
    divAffich = '';
    clearInterval(tmr);
    // ba key avaz mishe
    // if (changsaamt == 5) {
    //     do {
    //         var samtGeneral1 = getRandom(1,4);
    //     } while ((samtGeneral-2 == samtGeneral1) || (samtGeneral+2 == samtGeneral1));
    
    //     samtGeneral = samtGeneral1;
    //     changsaamt = 0;
    // }else{
    //     changsaamt++;
    // }

    // // // // if ((samtGeneral-2 == samtSelected) || (samtGeneral+2 == samtSelected)){
    // // // //     window.alert("Tu as perdu!!!!");
    // // // //     clearInterval(tmr);
    // // // // }

    // console.log(samtGeneral+'---'+samtSelected);
    // samtGeneral = samtSelected;
        
    // }
    // console.log(qeElement);
    // console.log(JSON.stringify(qeElement+"-------"+qepoint));

    // qeElement.unshift

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
    // qeElement.push({top:qeElement[0].top+sncTop,left:qeElement[0].left+sncLeft, direction:1});
    // var = 
    qeElement.unshift({top:sncTop,left:sncLeft, direction:1});
    qeElement.pop();


    console.log("qeElement");
    // console.log(qepoint);
    // console.log(qeElement.length);
    
    for (var ii = 0; ii < qeElement.length; ii++) {

        // for (var jj = 0; jj < qepoint.length; jj++) {
        //     // console.log(typeof qepoint[jj].top);
        //     if (typeof qepoint[jj] != "undefined") {
        //         // console.log(qepoint[jj].top);
                
        //         if (qeElement[ii].top == qepoint[jj].top && qeElement[ii].left == qepoint[jj].left ){
        //             // console.log(qepoint[jj].direction);
        //             qeElement[ii].direction = qepoint[jj].direction;

        //             if (jj + 1 == qepoint.length) {
        //                 delete qepoint[jj];
        //             }
        //             break;
        //         }
        //     }
            
        // }
        // console.log(qepoint);
        console.log(qeElement);
        console.log(samtSelected);
        // console.log(ii);
        

        
    

        

        var sncTopdiv = qeElement[ii].top ;
        var sncLeftdiv = qeElement[ii].left ;
        // console.log(divAffich);

        divAffich = divAffich + '<div class="snack" style="top: '+sncTopdiv+'px;left: '+sncLeftdiv+'px;"></div>';
        // console.log(divAffich);
     
    }


    clsSnack.innerHTML = divAffich;
    tmr = setInterval(start, tmrscond);
    
}

function fncKeypress(event) {
    switch (event.key) {
        case "ArrowDown":
        samtSelected = 3;
            // sncTop = sncTop + 20;
            // clsSnack.style = 'top: '+sncTop+'px;left: '+sncLeft+'px;';
            break;
        case "ArrowUp":
        samtSelected = 1;
        
            // sncTop = sncTop - 20;
            // clsSnack.style = 'top: '+sncTop+'px;left: '+sncLeft+'px;';
            break;
        case "ArrowLeft":
        samtSelected = 4;
        
            // sncLeft = sncLeft - 20;
            // clsSnack.style = 'top: '+sncTop+'px;left: '+sncLeft+'px;';
            break;
        case "ArrowRight":
        samtSelected = 2;
        
            // sncLeft = sncLeft + 20;
            // clsSnack.style = 'top: '+sncTop+'px;left: '+sncLeft+'px;';
            break;
        default:
        return; // Quit when this doesn't handle the key event.
    }

    if (typeof qepoint[0] == "undefined" || qepoint[0].direction != samtSelected) {
        
        qepoint.unshift({top:qeElement[0].top,left:qeElement[0].left, direction:samtSelected})
    }
    start();
};

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

tmr = setInterval(start, tmrscond);














