/*jshint esversion: 6 */
import {hidingPages5} from './anim_p5.js';
import {showLarge__project} from './bufPage_4.js';

$('.baton_LP').on('click', function (){
  if(window.innerWidth>490){
    $('.page__6').css('visibility','visible');
  $('.page__5').css('position','fixed');
  $('.page__6').css('position','relative');  
  $('.page__6').css('display','block');
  
  showLarge__project();
  hidingPages5();
 
  $('.page__6BigProd').css('z-index','10');
  }
 
});

let activatePage6 = false;
function AppPages_4Buf(){
    activatePage6=true; 
}
  
document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case "ArrowUp":
      if(activatePage6==true){
       
        TextDown_6();
      }
        break;
    case "ArrowDown":
      if($('.page__6BigProd').css('visibility')=='visible'){
        TextAp_6();
        activatePage6=true;     
        $('.page__6BigProd').css('z-index','-10');
      }else
      if(activatePage6==true){
        
        TextAp_6();
      }
        break;
}
});




$('.button_down').on('click', function () { 
  if(activatePage6==true){          
    TextAp_6();
}  
})

$('.button_up').on('click', function () {  
  // TextDown();
  if(activatePage6==true){
    TextDown_6();    
}      
});

$('.page__6BigProd').on('click touchstart', function () { 
  TextAp_6();
  activatePage6=true;   
  $('.page__6BigProd').css('z-index','-10');
})



function debounce(func, timeout = 100) {
  let timer;
  return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}
function saveInputDown_6() {
  TextDown_6();
}
function saveInputUp_6() {
  TextAp_6();
}
const processChangeDown_6 = debounce(() => saveInputDown_6());
const processChangeUp_6 = debounce(() => saveInputUp_6());



function detectTrackPad_6(event) {
  var isTrackpad = false;
  if (event.wheelDeltaY) {
    if (Math.abs(event.wheelDeltaY) !== 120) {
      isTrackpad = true;
      move_6(1200,1200,event);
    } else {
      move_6(600,600,event);
}
  }
  else if (event.deltaMode === 0) {
    isTrackpad = true;
  }
}

document.addEventListener("mousewheel", detectTrackPad_6, false);
document.addEventListener("DOMMouseScroll", detectTrackPad_6, false);


function move_6( up ,down,event){
  if($('.page__6BigProd').css('visibility')=='visible'){      
    activatePage6=true;
  }
  if (event.wheelDeltaY > 0 || event.wheelDeltaX< 0){  


    if(activatePage6==true){
      // processChangeDown_6();  
        handleDown(down);            
    }  

    // if (document.documentElement.clientHeight > 580 )
    
    //   if(activatePage6==true){
    //     // processChangeDown_6();  
    //       handleDown(down);            
    //   }               
   }
   else { 
    // if (document.documentElement.clientHeight > 580 ) 
    //   if(activatePage6==true){          
    //     // processChangeUp_6();
     
    //       handleAp(up);
    //   }  
    
    if(activatePage6==true){          
      // processChangeUp_6();
   
        handleAp(up);
    }       
   }

}









// $(window).bind('mousewheel DOMMouseScroll', function(event){
 
//     if($('.page__6BigProd').css('visibility')=='visible'){      
//       activatePage6=true;
//     }
//     if (event.wheelDeltaY > 0 || event.wheelDeltaX< 0)  {  
  
//       if (document.documentElement.clientHeight > 580 )
      
//         if(activatePage6==true){
//           // processChangeDown_6();  
//             handleDown();            
//         }               
//      }
//      else { 
//       if (document.documentElement.clientHeight > 580 ) 
//         if(activatePage6==true){          
//           // processChangeUp_6();      
//             handleAp();
//         }                
//      }

// });


let lastCall = 0;
function handle2() {
    let now = Date.now();

  if(now - lastCall > 900){
   AppPages_4Buf(); 
    lastCall = now;
  }
}

function handleDown(down) {
    let now = Date.now();

  if(now - lastCall > down){
 
    TextDown_6();
    lastCall = now;
  }
}

function handleAp(up) {
    let now = Date.now();
  
    if(now - lastCall > up){

        TextAp_6();
      lastCall = now;
    }
  }

let i=0;

const time1=900;
const time2=900;
const time3=900;

function TextAp_6(){  
    $('.heading1_6,.heading2_6,.heading3_6,.heading4_6,.heading5_6,.heading6_6,.heading7_6,.heading8_6,.heading9_6,.button_down,.buttonPages_5_6').finish(); 
    $('.text1_6,.text2_6,.text3_6,.text4_6,.text5_6,.text6_6,.text7_6,.text8_6,.text9_6').finish();
    $('.line1_6,.line2_6,.line3_6,.line4_6,.line5_6,.line6_6,.line7_6,.line8_6').finish();
    $('.page__6BigProd').finish();   
    $('.page__6').css('z-index','5');
    $('#masaic_6_0,#masaic_6_1,#masaic_6_2,#masaic_6_3,#masaic_6_4,#masaic_6_5,#masaic_6_6,#masaic_6_7,#masaic_6_8,#masaic_6_9,#masaic_6_10,#masaic_6_11,#masaic_6_12,#masaic_6_13,.mosaickBlocPage6').finish(); 
    $('.contener1_6,.contener2_6,.contener3_6,.contener4_6,.contener5_6,.contener6_6,.contener7_6,.contener8_6,.contener9_6').finish();  
    i++;
    if(i>=9){
        i=9;
    }   
     
    if(i==1){   
      $('.contener1_6').css('visibility','visible');
      $('.contener1_6').css('opacity','1');

        $('.heading1_6').animate({'margin-top':'-800px'},time1);
        $('.text1_6').animate({'margin-top':'15px'},time2);
        $('.line1_6').animate({'margin-top':'15px'},time3);
       
        $('.page__6BigProd').animate({'margin-top':'-700px'},900);
        $('.page__6BigProd').css('z-index','-10');

        $('.masaick_6').css('visibility','visible');

        $('#masaic_6_0').css('visibility','visible');
        $('#masaic_6_1').css('visibility','visible');
        $('#masaic_6_0').animate({'margin-top': '-800px','opacity': "1"},700);
        $('#masaic_6_1').animate({'margin-top':'-800px','opacity': "1"},time1);

        $('.buttonPages_5_6').css('visibility','visible');
        $('.button_down').css('visibility','visible');
        $('.button_up').css('visibility','visible');
        $('.buttonPages_5_6').animate({'opacity': "1"},500);
       
    }else
    if(i==2){
      $('.contener2_6').css('visibility','visible');
      $('.contener2_6').css('opacity','1');

        $('.heading2_6').animate({'margin-top':'-460px'},time1);
        $('.text2_6').animate({'margin-top':'15px'},time2);
        $('.line2_6').animate({'margin-top':'15px'},time3);
        
        $('#masaic_6_2').css('visibility','visible');       
        $('#masaic_6_2').animate({'margin-top':'-735px','opacity': "1"},time1);
    }else
    if(i==3){  
      $('.contener3_6').css('visibility','visible'); 
      $('.contener3_6').css('opacity','1'); 

      animationTextApp('.heading1_6','.text1_6','.line1_6',
                        '.heading2_6','.text2_6','.line2_6',
                        '.heading3_6','.text3_6','.line3_6');

                        $('#masaic_6_3').css('visibility','visible'); 
      $('#masaic_6_3').animate({'margin-top':'-680px','opacity': "1"},time1);
    }else
    if(i==4){     
      $('.contener4_6').css('visibility','visible');  
      $('.contener4_6').css('opacity','1');

      animationTextApp('.heading2_6','.text2_6','.line2_6',
                       '.heading3_6','.text3_6','.line3_6',
                       '.heading4_6','.text4_6','.line4_6');

                       $('#masaic_6_4').css('visibility','visible'); 
                       $('#masaic_6_4').animate({'margin-top':'-680px','opacity': "1"},time1);
    }else
    if(i==5){  
      $('.contener5_6').css('visibility','visible'); 
      $('.contener5_6').css('opacity','1');    

      animationTextApp('.heading3_6','.text3_6','.line3_6',
                       '.heading4_6','.text4_6','.line_6',
                       '.heading5_6','.text5_6','.line5_6');

                       $('#masaic_6_5').css('visibility','visible'); 
                       $('#masaic_6_6').css('visibility','visible'); 
                       $('#masaic_6_7').css('visibility','visible'); 
                       $('#masaic_6_5').animate({'margin-top':'-545px','opacity': "1"},time1);
                       $('#masaic_6_6').animate({'margin-top':'-479px','opacity': "1"},time1); 
                       $('#masaic_6_7').animate({'margin-top':'-479px','opacity': "1"},time1); 
    
    }else
    if(i==6){  
      $('.contener6_6').css('visibility','visible');
      $('.contener6_6').css('opacity','1');  

      animationTextApp('.heading4_6','.text4_6','.line4_6',
                       '.heading5_6','.text5_6','.line5_6',
                       '.heading6_6','.text6_6','.line6_6');

                       $('#masaic_6_8').css('visibility','visible'); 
                       $('#masaic_6_9').css('visibility','visible'); 
                       $('#masaic_6_8').animate({'margin-top':'-411px','opacity': "1"},time1);
                       $('#masaic_6_9').animate({'margin-top':'-411px','opacity': "1"},time1); 
   
    }else
    if(i==7){  
      $('.contener7_6').css('visibility','visible');
      $('.contener7_6').css('opacity','1');     

      animationTextApp('.heading5_6','.text5_6','.line5_6',
                       '.heading6_6','.text6_6','.line6_6',
                       '.heading7_6','.text7_6','.line7_6');

                       $('#masaic_6_10').css('visibility','visible');
                       $('#masaic_6_10').animate({'margin-top':'-344px','opacity': "1"},time1);
    
    }else
    if(i==8){ 
      $('.contener8_6').css('visibility','visible'); 
      $('.contener8_6').css('opacity','1'); 

      animationTextApp('.heading6_6','.text6_6','.line6_6',
                       '.heading7_6','.text7_6','.line7_6',
                       '.heading8_6','.text8_6','.line8_6');

                       $('#masaic_6_11').css('visibility','visible');
                       $('#masaic_6_11').animate({'margin-top':'-270px','opacity': "1"},time1);
                     
    }
    if(i==9){
      $('.contener9_6').css('visibility','visible');
      $('.contener9_6').css('opacity','1');

      $('#masaic_6_12').css('visibility','visible');
      $.when( 
      $('.heading7_6').animate({'margin-top':'-1850px'},time1),
      $('.text7_6').animate({'margin-top':'15px'},time2),
      $('.line7_6').animate({'margin-top':'15px'},time3),   
      $('.heading8_6').animate({'margin-top':'-1450px'},time1),
      $('.text8_6').animate({'margin-top':'15px'},time2),
      $('.line8_6').animate({'margin-top':'15px'},time3),

      $('.heading9_6').animate({'margin-top':'-700px'},time1),
      $('.text9_6').animate({'margin-top':'10px'},time3),

     
      $('#masaic_6_12').animate({'margin-top':'-203px','opacity': "1"},time1),
      $('.masaic_5_6').css("fill","#3D37CD"),   
      $('.mosaickBlocPage6').animate({'margin-top':'-100px'},time3),

      $('.masaic_6').css("fill","#28C65C"),

      $('.button_down').css('visibility','hidden') 
            ).then(function () { 
              $('.page__6').css('z-index','500');
            });

      // $('.heading7_6').animate({'margin-top':'-1850px'},time1);
      // $('.text7_6').animate({'margin-top':'15px'},time2);
      // $('.line7_6').animate({'margin-top':'15px'},time3);   
      // $('.heading8_6').animate({'margin-top':'-1450px'},time1);
      // $('.text8_6').animate({'margin-top':'15px'},time2);
      // $('.line8_6').animate({'margin-top':'15px'},time3);

      // $('.heading9_6').animate({'margin-top':'-700px'},time1);
      // $('.text9_6').animate({'margin-top':'10px'},time3);

      // $('#masaic_6_12').animate({'margin-top':'-203px'},time1);
      // $('.masaic_5_6').css("fill","#3D37CD");     
      // $('.mosaickBlocPage6').animate({'margin-top':'-100px'},time3);

      // $('.masaic_6').css("fill","#28C65C"); 

      // $('.button_down').css('visibility','hidden'); 



      // $('.page__6').css('z-index','500');
    
    }
}

function TextDown_6(){

  $('.heading1_6,.heading2_6,.heading3_6,.heading4_6,.heading5_6,.heading6_6,.heading7_6,.heading8_6,.heading9_6,.button_down,.buttonPages_5_6').finish(); 
  $('.text1_6,.text2_6,.text3_6,.text4_6,.text5_6,.text6_6,.text7_6,.text8_6,.text9_6').finish();
  $('.line1,.line2,.line3,.line4,.line5,.line6,.line7,.line8').finish();
  $('.page__6BigProd').finish();   
  $('#masaic_6_0,#masaic_6_1,#masaic_6_2,#masaic_6_3,#masaic_6_4,#masaic_6_5,#masaic_6_6,#masaic_6_7,#masaic_6_8,#masaic_6_9,#masaic_6_10,#masaic_6_11,#masaic_6_12,#masaic_6_13,.mosaickBlocPage6').finish();
  $('.contener1_6,.contener2_6,.contener3_6,.contener4_6,.contener5_6,.contener6_6,.contener7_6,.contener8_6,.contener9_6').finish(); 
  heidingMasaic_6();
  i--;
   
  if(i<=0){ 
      i=0;  
    }

    if(i==0){
        $('.page__6BigProd').finish(); 
        $('.contener1_6').animate({'opacity': "0"},700);

        $.when( 
          $('.page__6BigProd').animate({'margin-top':'0px'},900),
          $('.page__6BigProd').css('z-index','2000'),
  
          $('.heading1_6').animate({'margin-top':'0px'},time1),
          $('.text1_6').animate({'margin-top':'15px'},time2),
          $('.line1_6').animate({'margin-top':'15px'},time3),
             
          $('.masaick_6').css('visibility','visible'),
          $('#masaic_6_0').animate({'margin-top': '-100px','opacity': "0"},700),
          $('#masaic_6_1').animate({'margin-top':'-110px','opacity': "0"},time1)
              ).then(function () { 
                // $('#masaic_6_0,#masaic_6_1').css('visibility','hidden');
                // $('.contener1_6').css('visibility','hidden');
              });

        // $('.page__6BigProd').animate({'margin-top':'0px'},900);
        // $('.page__6BigProd').css('z-index','10');

        // $('.heading1_6').animate({'margin-top':'0px'},time1);
        // $('.text1_6').animate({'margin-top':'15px'},time2);
        // $('.line1_6').animate({'margin-top':'15px'},time3);
           
        // $('.masaick_6').css('visibility','visible');
        // $('#masaic_6_0').animate({'margin-top': '0px'},700);
        // $('#masaic_6_1').animate({'margin-top':'0px'},time1);

        $('.buttonPages_5_6').css('visibility','visible');

        $.when( 
          $('.buttonPages_5_6').animate({'opacity': "-100"},500)
              ).then(function () { 
                $('.buttonPages_5_6').css('visibility','hidden'); 
              });
    }
    else
    if(i==1){

      $('.contener2_6').animate({'opacity': "0"},700);

      $.when(            
        $('.heading2_6').animate({'margin-top':'0px'},time1),
        $('.text2_6').animate({'margin-top':'15px'},time2),
        $('.line2_6').animate({'margin-top':'15px'},time3),

        $('#masaic_6_2').animate({'margin-top':'-100px','opacity': "0"},time1)
            ).then(function () { 
              // $('#masaic_6_2').css('visibility','hidden');
              // $('.contener2_6').css('visibility','hidden');
              // $('#masaic_6_2').css('opacity','0');
              // $('.contener2_6').css('opacity','0');
            });

        // $('.heading2_6').animate({'margin-top':'0px'},time1);
        // $('.text2_6').animate({'margin-top':'15px'},time2);
        // $('.line2_6').animate({'margin-top':'15px'},time3);

        // $('#masaic_6_2').animate({'margin-top':'0px'},time1);
    }
    else
    if(i==2){

      $('.contener3_6').animate({'opacity': "0"},700);

      $.when( 
        animationTextDown('.heading1_6','.text1_6','.line1_6',
        '.heading2_6','.text2_6','.line2_6',
        '.heading3_6','.text3_6','.line3_6'),

        $('#masaic_6_3').animate({'margin-top':'-100px','opacity': "0"},time1)
            ).then(function () { 
              // $('#masaic_6_3').css('opacity','0');
              // $('.contener3_6').css('opacity','0');
            });

      // animationTextDown('.heading1_6','.text1_6','.line1_6',
      //                   '.heading2_6','.text2_6','.line2_6',
      //                   '.heading3_6','.text3_6','.line3_6');

      //                   $('#masaic_6_3').animate({'margin-top':'0px'},time1);
    
    }else
    if(i==3){
      $('.contener4_6').animate({'opacity': "0"},700);

      $.when( 
        animationTextDown('.heading2_6','.text2_6','.line2_6',
                    '.heading3_6','.text3_6','.line3_6',
                    '.heading4_6','.text4_6','.line4_6'),
    
    $('#masaic_6_4').animate({'margin-top':'-100px','opacity': "0"},time1)
            ).then(function () { 
              // $('#masaic_6_4').css('opacity','0');
              // $('.contener4_6').css('opacity','0');
            });

    //   animationTextDown('.heading2_6','.text2_6','.line2_6',
    //                 '.heading3_6','.text3_6','.line3_6',
    //                 '.heading4_6','.text4_6','.line4_6');
    
    // $('#masaic_6_4').animate({'margin-top':'0px'},time1);
   
  }else
  if(i==4){  
    $('.contener5_6').animate({'opacity': "0"},700);
    
    $.when( 
      animationTextDown('.heading3_6','.text3_6','.line3_6',
      '.heading4_6','.text4_6','.line4_6',
      '.heading5_6','.text5_6','.line5_6'),

      $('#masaic_6_5').animate({'margin-top':'-100px','opacity': "0"},time1),
      $('#masaic_6_6').animate({'margin-top':'-95px','opacity': "0"},time1), 
      $('#masaic_6_7').animate({'margin-top':'-90px','opacity': "0"},time1)                   

          ).then(function () { 
            // $('#masaic_6_5,#masaic_6_6,#masaic_6_7').css('opacity','0');
            // $('.contener5_6').css('opacity','0');
          });


    // animationTextDown('.heading3_6','.text3_6','.line3_6',
    //                   '.heading4_6','.text4_6','.line4_6',
    //                   '.heading5_6','.text5_6','.line5_6');
    //                   $('#masaic_6_5').animate({'margin-top':'0px'},time1);
    //                   $('#masaic_6_6').animate({'margin-top':'0px'},time1); 
    //                   $('#masaic_6_7').animate({'margin-top':'0px'},time1);                     
    
  }else
  if(i==5){  
    $('.contener6_6').animate({'opacity': "0"},700);
    
    $.when( 
      animationTextDown('.heading4_6','.text4_6','.line4_6',
      '.heading5_6','.text5_6','.line5_6',
      '.heading6_6','.text6_6','.line6_6'),

      $('#masaic_6_8').animate({'margin-top':'-100px','opacity': "0"},time1),
      $('#masaic_6_9').animate({'margin-top':'-90px','opacity': "0"},time1)                    

          ).then(function () { 
            // $('#masaic_6_8,#masaic_6_9').css('opacity','0');
            // $('.contener6_6').css('opacity','0');
          });

    // animationTextDown('.heading4_6','.text4_6','.line4_6',
    //                   '.heading5_6','.text5_6','.line5_6',
    //                   '.heading6_6','.text6_6','.line6_6');
    //                   $('#masaic_6_8').animate({'margin-top':'0px'},time1);
    //                   $('#masaic_6_9').animate({'margin-top':'0px'},time1); 
   
  }else
  if(i==6){ 
    $('.contener7_6').animate({'opacity': "0"},700);

    $.when( 
      animationTextDown('.heading5_6','.text5_6','.line5_6',
      '.heading6_6','.text6_6','.line6_6',
      '.heading7_6','.text7_6','.line7_6'),

      $('#masaic_6_10').animate({'margin-top':'-100px','opacity': "0"},time1)                

          ).then(function () { 
            // $('#masaic_6_10').css('opacity','0');
            // $('.contener7_6').css('opacity','0');
          });

    // animationTextDown('.heading5_6','.text5_6','.line5_6',
    //                   '.heading6_6','.text6_6','.line6_6',
    //                   '.heading7_6','.text7_6','.line7_6');
    //                   $('#masaic_6_10').animate({'margin-top':'0px'},time1);
 
  }else
  if(i==7){ 
    $('.contener8_6').animate({'opacity': "0"},700);

    $.when( 
      animationTextDown('.heading6_6','.text6_6','.line6_6',
      '.heading7_6','.text7_6','.line7_6',
      '.heading8_6','.text8_6','.line8_6'),

      $('#masaic_6_11').animate({'margin-top':'-100px','opacity': "0"},time1)            

          ).then(function () { 
            // $('#masaic_6_11').css('opacity','0');
            // $('.contener8_6').css('opacity','0');
          });

    // animationTextDown('.heading6_6','.text6_6','.line6_6',
    //                   '.heading7_6','.text7_6','.line7_6',
    //                   '.heading8_6','.text8_6','.line8_6');
    //                   $('#masaic_6_11').animate({'margin-top':'0px'},time1);
                     
  }else
  if(i==8){
    $('.contener9_6').animate({'opacity': "0"},700);

    $.when( 
      $('.heading7_6').animate({'margin-top':'-850px'},time1),
      $('.text7_6').animate({'margin-top':'15px'},time2),
      $('.line7_6').animate({'margin-top':'15px'},time3),
                  
      $('.heading8_6').animate({'margin-top':'-460px'},time1),
      $('.text8_6').animate({'margin-top':'15px'},time2),
      $('.line8_6').animate({'margin-top':'15px'},time3),
  
      $('.heading9_6').animate({'margin-top':'100px'},time1),
      $('.text9_6').animate({'margin-top':'15px'},time3),
  
      $('#masaic_6_12').animate({'margin-top':'-100px','opacity': "0"},time1),
      $('.mosaickBlocPage6').animate({'margin-top':'0px'},time3)
          ).then(function () { 
            // $('#masaic_6_12').css('opacity','0');
            // $('.contener9_6').css('opacity','0');
          });   

    // $('.heading7_6').animate({'margin-top':'-850px'},time1);
    // $('.text7_6').animate({'margin-top':'15px'},time2);
    // $('.line7_6').animate({'margin-top':'15px'},time3);
                
    // $('.heading8_6').animate({'margin-top':'-460px'},time1);
    // $('.text8_6').animate({'margin-top':'15px'},time2);
    // $('.line8_6').animate({'margin-top':'15px'},time3);

    // $('.heading9_6').animate({'margin-top':'100px'},time1);
    // $('.text9_6').animate({'margin-top':'15px'},time3);

    // $('#masaic_6_12').animate({'margin-top':'0px'},time1);
    // $('.mosaickBlocPage6').animate({'margin-top':'0px'},time3);

    $.when( 
      $('.button_down').css('visibility','visible')   
          ).then(function () { 
            $('.button_down').animate({'opacity': "1"},500);
          });
          
    color(); 
  }
}
 
function animationTextApp(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9){
  $(obj1).animate({'margin-top':'-1450px'},time1);
  $(obj2).animate({'margin-top':'15px'},time2);
  $(obj3).animate({'margin-top':'15px'},time3);

  $(obj4).animate({'margin-top':'-800px'},time1);
  $(obj5).animate({'margin-top':'15px'},time2);
  $(obj6).animate({'margin-top':'15px'},time3);

  $(obj7).animate({'margin-top':'-430px'},time1);
  $(obj8).animate({'margin-top':'15px'},time2);
  $(obj9).animate({'margin-top':'15px'},time3);
}
function animationTextDown(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9){
      $(obj1).animate({'margin-top':'-800px'},time1);
      $(obj2).animate({'margin-top':'15px'},time2);
      $(obj3).animate({'margin-top':'15px'},time3);

      $(obj4).animate({'margin-top':'-430px'},time1);
      $(obj5).animate({'margin-top':'15px'},time2);
      $(obj6).animate({'margin-top':'15px'},time3);

      $(obj7).animate({'margin-top':'100px'},time1);
      $(obj8).animate({'margin-top':'15px'},time2);
      $(obj9).animate({'margin-top':'15px'},time3);
}

export function hidingPages6(){
  $('#masaic_6_0,#masaic_6_1,#masaic_6_2,#masaic_6_3,#masaic_6_4,#masaic_6_5,#masaic_6_6,#masaic_6_7,#masaic_6_8,#masaic_6_9,#masaic_6_10,#masaic_6_11,#masaic_6_12,#masaic_6_13,.mosaickBlocPage6').css('visibility','hidden');
  $('.contener1_6,.contener2_6,.contener3_6,.contener4_6,.contener5_6,.contener6_6,.contener7_6,.contener8_6,.contener9_6').css('visibility','hidden');
  $('.page__6').css('z-index','-1'); 
  $('.HedingText_6').css('margin-top','0px');
  $('.text_6').css('margin-top','0px');  
  $('.page__6').css('visibility','hidden');
  $('.page__6BigProd').css('visibility','hidden');
  lastCall = 0;
  i=0;
  activatePage6 = false; 
  $('.masaick_6').css('visibility','hidden'); 
  $('.masaic_6').css("fill","#3D37CD");
  $('.mosaickBlocPage6').css("margin-top","0px");
  $('.masaic_6').css("margin-top","0px");
  $('.button_down').css('visibility','hidden');
  $('.button_up').css('visibility','hidden');
  $('.buttonPages_5_6').css('visibility','hidden'); 
  color(); 
  $('html').css('overflow-x','hidden');
  // $('html').css('overflow-y','hidden');
  $('body').animate({'margin-top': '0px' }, 900);
  // window.pageXOffset=0;
  // window.pageYOffset=0;
  $('.page__6').css('display','none');


  window.scrollTo(0,0);
}

function color (){
  $('#masaic_6_0').css("fill","#333333");
  $('#masaic_6_1').css("fill","#28C65C");
  $('#masaic_6_2').css("fill","#FF0000");
  $('#masaic_6_3').css("fill","#3D37CD");
  $('#masaic_6_4').css("fill","#28C65C");
  $('#masaic_6_5').css("fill","#FFBC00");
  $('#masaic_6_6').css("fill","#FFBC00");
  $('#masaic_6_7').css("fill","#FFBC00");
  $('#masaic_6_8').css("fill","#FF0000");
  $('#masaic_6_9').css("fill","#FF0000");
  $('#masaic_6_10').css("fill","#3D37CD");
  $('#masaic_6_11').css("fill","#FFBC00");      
  $('#masaic_6_12').css("fill","#3D37CD"); 
}

export function heidingMasaic_6(){
  if($('#masaic_6_0').css('margin-top')>-100){
    $('#masaic_6_0').css('visibility','hidden');
  }else if($('#masaic_6_0').css('margin-top') =='0px'){
    $('#masaic_6_0').css('visibility','hidden');
  }

  if($('#masaic_6_1').css('margin-top')>-100){
    $('#masaic_6_1').css('visibility','hidden');
  } else  if($('#masaic_6_1').css('margin-top') =='0px'){
    $('#masaic_6_1').css('visibility','hidden');
  }

  if($('#masaic_6_2').css('margin-top')>-100){
    $('#masaic_6_2').css('visibility','hidden');
  } else if($('#masaic_6_2').css('margin-top') =='0px'){
    $('#masaic_6_2').css('visibility','hidden');
  }

  if($('#masaic_6_3').css('margin-top')>-100){
    $('#masaic_6_3').css('visibility','hidden');
  } else if($('#masaic_6_3').css('margin-top') =='0px'){
    $('#masaic_6_3').css('visibility','hidden');
  }

  if($('#masaic_6_4').css('margin-top')>-100){
    $('#masaic_6_4').css('visibility','hidden');
  } else  if($('#masaic_6_4').css('margin-top')=='0px'){
    $('#masaic_6_4').css('visibility','hidden');
  }

  if($('#masaic_6_5').css('margin-top')>-100){
    $('#masaic_6_5').css('visibility','hidden');
  } else  if($('#masaic_6_5').css('margin-top') =='0px'){
    $('#masaic_6_5').css('visibility','hidden');
  }

  if($('#masaic_6_6').css('margin-top')>-100){
    $('#masaic_6_6').css('visibility','hidden');
  } else if($('#masaic_6_6').css('margin-top')=='0px'){
    $('#masaic_6_6').css('visibility','hidden');
  }


  if($('#masaic_6_7').css('margin-top')>-100){
    $('#masaic_6_7').css('visibility','hidden');
  } else if($('#masaic_6_7').css('margin-top')=='0px'){
    $('#masaic_6_7').css('visibility','hidden');
  }

  if($('#masaic_6_8').css('margin-top')>-100){
    $('#masaic_6_8').css('visibility','hidden');
  } else  if($('#masaic_6_8').css('margin-top')=='0px'){
    $('#masaic_6_8').css('visibility','hidden');
  }

  if($('#masaic_6_9').css('margin-top')>-100){
    $('#masaic_6_9').css('visibility','hidden');
  } else   if($('#masaic_6_9').css('margin-top')=='0px'){
    $('#masaic_6_9').css('visibility','hidden');
  }

  if($('#masaic_6_10').css('margin-top')>-100){
    $('#masaic_6_10').css('visibility','hidden');
  } else   if($('#masaic_6_10').css('margin-top')=='0px'){
    $('#masaic_6_10').css('visibility','hidden');
  }

  if($('#masaic_6_11').css('margin-top')>-100){
    $('#masaic_6_11').css('visibility','hidden');
  } else   if($('#masaic_6_11').css('margin-top')=='0px'){
    $('#masaic_6_11').css('visibility','hidden');
  }

  if($('#masaic_6_12').css('margin-top')>-100){
    $('#masaic_6_12').css('visibility','hidden');
  } else  if($('#masaic_6_12').css('margin-top')=='0px'){
    $('#masaic_6_12').css('visibility','hidden');
  }

  if($('#masaic_6_13').css('margin-top')>-100){
    $('#masaic_6_13').css('visibility','hidden');
  } else if($('#masaic_6_13').css('margin-top')=='0px'){
    $('#masaic_6_13').css('visibility','hidden');
  }
}