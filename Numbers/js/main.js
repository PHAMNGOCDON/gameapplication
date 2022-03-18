(function(){
  'use strict';

   // var board = document.getElementById('board');

   var SIZE = 3;
   // var SIZE = 2;
   // var SIZE = 3;
   // var i;
   var currentNum = 0;
   var PANEL_WIDTH = 50;
   var BOARD_PADDING = 10;
   var startTime;
   var timerId;


   // var panels = [];
   // var panel;

   function createPanel(num){

     var panel;
     panel = document.createElement('div');
     panel.className = 'panel hidden';
     panel.textContent = num;
     panel.addEventListener('click', function(){
       if((this.textContent - 0) === currentNum){
         this.className = 'panel flipped';
         currentNum++;
       }
       if (currentNum === SIZE * SIZE ) {
         clearTimeout(timerId);
       }
     });
     return panel;
     // board.appendChild(panel);
   }

   function initBoard(){
     var board = document.getElementById('board');
     var i;
     var panels = [];
     var panel;

     document.getElementById('container').style.width = PANEL_WIDTH * SIZE + BOARD_PADDING * 2 +'px';

     while (board.firstChild) {
       board.removeChild(board.firstChild);
     }



   for (i = 0; i < SIZE * SIZE; i++){
     // board.appendChild(createPanel(i));
     panels.push(createPanel(i));
   }

   while (panels.length) {
     panel = panels.splice(Math.floor(Math.random()*panels.length), 1);
     board.appendChild(panel[0]);
   }
 }

 function runTimer(){
   document.getElementById('score').textContent = ((Date.now() - startTime) / 1000).toFixed(2);
   timerId = setTimeout(function(){
     runTimer();
   }, 10);
 }

 initBoard();

   document.getElementById('btn').addEventListener('click', function(){
     var panels = document.getElementsByClassName('panel');
     var i ;
     if (typeof timerId !== 'undefined') {
       clearTimeout(timerId);
     }
     currentNum = 0;
     initBoard();
     for ( i = 0; i <panels.length; i++) {
       panels[i].className = 'panel';
     }
     this.textContent = 'RESTART?';
     this.className = 'restart';
     startTime = Date.now();
     runTimer();
   });
  })();





// (function(){
//   'use strict';
//
//   var panels = document.getElementsByClassName('panel');
//   var spin = document.getElementById('spin');
//
//
//   var cards =[
//     'seven.png',
//     'bell.png',
//     'cherry.png'
//   ];
// var timers =[];
//
// var stopCount = 0;
//
// function runSlot(n){
//   timers[n] = setTimeout(function(){
//     panels[n].children[0].src=
//     'img/'+
//     cards[Math.floor(Math.random()*cards.length)];
//     runSlot(n);
//   },50);
// }
//
// function initPanel(){
//   var i;
//   for (var i = 0; i < panels.length; i++) {
//     panels[i].children[1].addEventListener('click', function(){
//       if(this.className.indexOf('inactive') !== -1){
//         return;
//       }
//       clearTimeout(timers[this.dataset.index]);
//       stopCount++;
//       this.className = 'stop inactive';
//       if(stopCount === panels.length){
//         stopCount = 0;
//         checkResults();
//         spin.className = '';
//       }
//     });
//   }
// }
//
// function checkResults(){
//   var img0 = panels[0].children[0];
//   var img1 = panels[1].children[0];
//   var img2 = panels[2].children[0];
//
//   if (img0.src !== img1.src && img0.src !== img2.src){
//     img0.className = 'unmatched';
//   }
//   if (img1.src !== img0.src && img1.src !== img2.src){
//     img1.className = 'unmatched';
//   }
//   if (img2.src !== img0.src && img2.src !== img1.src){
//     img2.className = 'unmatched';
//   }
// }
//
// initPanel();
//
//   spin.addEventListener('click', function(){
//     var i;
//     if(this.className.indexOf('inactive') !== -1){
//       return;
//     }
//     this.className = 'inactive';
//     for(i = 0; i<panels.length;i++){
//       runSlot(i);
//       panels[i].children[0].className = '';
//       panels[i].children[1].className = 'stop';
//     }
//
//   });
//   })();


//
//   function init(){
//     var i
//     for ( i = 0; i < boxes.length; i++) {
//       boxes[i].addEventListener('click', function(){
//
//         var j;
//
//         if (this.className.indexOf('shake')===-1){
//           return;
//         }
//
//         for (j= 0; j < boxes.length; j++) {
//           boxes[j].src = 'img/' + contents[Math.floor(Math.random()*contents.length)];
//           boxes[j].className = 'box disabled';
//         }
//         // this.src = 'img/' + contents[Math.floor(Math.random()*contents.length)];
//         // // this.src = 'img/coin.png';
//         this.className = 'box';
//         document.getElementById('btn').className='';
//       });
//     }
//   }
//   init();
//
// })();
