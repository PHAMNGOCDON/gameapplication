(function(){
  'use strict';

  var boxes = document.getElementsByClassName('box');

  var contents =[
    'coin.png',
    'empty.png',
    'cobra.png'
  ];

  function init(){
    var i;
    for ( i = 0; i < boxes.length; i++) {
      boxes[i].addEventListener('click', function(){

        var j;
        //
        if (this.className.indexOf('shake')===-1){
          return;
        }
        //
        for (j= 0; j < boxes.length; j++) {
          boxes[j].src = 'img/' + contents[Math.floor(Math.random()*contents.length)];
          boxes[j].className = 'box disabled';
        }
        // this.src = 'img/' + contents[Math.floor(Math.random()*contents.length)];
        // // this.src = 'img/coin.png';
        this.className = 'box';
        document.getElementById('btn').className='';
      });
    }
  }
  init();

})();
