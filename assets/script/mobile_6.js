/*jshint esversion: 6 */
import {hidingPages5} from './anim_p5.js';
import {showLarge__project} from './bufPage_4.js';
import {hidingPages5_modile} from './mobile_5.js';

$('#mobileButton').on('click', function (){
  if(window.innerWidth<=490){
     setTimeout(butonLP,500);
  }
  
});

function butonLP(){
  // hidingPages5();
    // showLarge__project();
    // hidingPages5_modile();
    // $('#clik').css('visibility','hidden');
    $('#clik').css('visibility','hidden');
    // $('#small__project').css( 'pointer-events','none');
    // $('#large__project').css( 'pointer-events','none');
    $('.page__6').css('display','block');

    $('.page__6').css('visibility','visible');
    $('.page__5').css('position','fixed');
    $('.page__6').css('position','relative');  

    $('.page__6BigProd').css('z-index','10');

    if(window.innerWidth>490){
      hidingPages5();
    }else{
      hidingPages5_modile();
      $('.heading1_6').css('margin-top','100px');
      $('.text1_6').css('margin-top','5px');
      $('.line1_6').css('margin-top','5px');
  
      $('.heading2_6').css('margin-top','100px');
      $('.text2_6').css('margin-top','5px');
      $('.line2_6').css('margin-top','5px');
  
      $('.heading3_6').css('margin-top','100px');
      $('.text3_6').css('margin-top','5px');
      $('.line3_6').css('margin-top','5px');
  
      $('.heading4_6').css('margin-top','100px');
      $('.text4_6').css('margin-top','5px');
      $('.line4_6').css('margin-top','5px');
  
      $('.heading5_6').css('margin-top','100px');
      $('.text5_6').css('margin-top','5px');
      $('.line5_6').css('margin-top','5px');
  
      $('.heading6_6').css('margin-top','100px');
      $('.text6_6').css('margin-top','5px');
      $('.line6_6').css('margin-top','5px');
  
      $('.heading7_6').css('margin-top','100px');
      $('.text7_6').css('margin-top','5px');
      $('.line7_6').css('margin-top','5px');
  
      $('.heading8_6').css('margin-top','100px');
      $('.text8_6').css('margin-top','5px');
      $('.line8_6').css('margin-top','5px');

      $('.masaic_6').css("margin-top","0px");
    }
    showLarge__project();
    
}
// $('#large__project').on('click', function (){
//   if(screenWidth<=441){
//     hidingPages5();
//     showLarge__project();
//     hidingPages5_modile();
//     $('#clik').css('visibility','hidden');
//   }
// });


let activatePage6 = false;
function AppPages_4Buf(){
    activatePage6=true; 
}
    
let posX = 0;
let posY = 0;
const screenWidth = window.screen.width;

document.addEventListener('touchmove', event => {
 
    if(screenWidth<=490){
        
        const { clientX, clientY } = event.touches[0];
       
       if($('.page__6BigProd').css('visibility')=='visible'){      
      activatePage6=true; 
    }
        if (posY > clientY) {
            //верх
            if(activatePage6==true){
                handleDown();          
          }   
        }
    
        if (posY < clientY) {
            //низ
            if(activatePage6==true){                       
               handleAp();          
          }    
         
        }     
        posX = clientX;
        posY = clientY;
    }
});


let lastCall = 0;
function handle2() {
    let now = Date.now();

  if(now - lastCall > 600){
   AppPages_4Buf(); 
    lastCall = now;
  }
}

function handleDown() {
    let now = Date.now();

  if(now - lastCall > 600){
 
    TextDown();
    lastCall = now;
  }
}

function handleAp() {
    let now = Date.now();
  
    if(now - lastCall > 600){

        TextAp();
      lastCall = now;
    }
  }

let i=0;

const time1=900;
const time2=900;
const time3=900;

function TextAp(){  
    $('.heading1_6,.heading2_6,.heading3_6,.heading4_6,.heading5_6,.heading6_6,.heading7_6,.heading8_6,.heading9_6').finish(); 
    $('.text1_6,.text2_6,.text3_6,.text4_6,.text5_6,.text6_6,.text7_6,.text8_6,.text9_6').finish();
    $('.line1_6,.line2_6,.line3_6,.line4_6,.line5_6,.line6_6,.line7_6,.line8_6').finish();
    $('.page__6BigProd').finish();   
    $('.page__6').css('z-index','5');
    $('#masaic_6_0,#masaic_6_1,#masaic_6_2,#masaic_6_3,#masaic_6_4,#masaic_6_5,#masaic_6_6,#masaic_6_7,#masaic_6_8,#masaic_6_9,#masaic_6_10,#masaic_6_11,#masaic_6_12,#masaic_6_13,.mosaickBlocPage6').finish();  
    i++;
    if(i>=9){
        i=9;
    }   

    if(i==1){ 
      $('#masaic_6_0,#masaic_6_1,#masaic_6_2,#masaic_6_3,#masaic_6_4,#masaic_6_5,#masaic_6_6,#masaic_6_7,#masaic_6_8,#masaic_6_9,#masaic_6_10,#masaic_6_11,#masaic_6_12,#masaic_6_13,.mosaickBlocPage6').css('visibility','visible');
      $('.contener1_6,.contener2_6,.contener3_6,.contener4_6,.contener5_6,.contener6_6,.contener7_6,.contener8_6,.contener9_6').css('visibility','visible');

        $('.heading1_6').animate({'margin-top':'-880px'},time1);
        $('.text1_6').animate({'margin-top':'5px'},time2);
        $('.line1_6').animate({'margin-top':'5px'},time3);
       
        $('.page__6BigProd').animate({'margin-top':'-700px'},900);       
        $('.masaick_6').css('visibility','visible');



        $('#masaic_6_0').animate({'margin-top': '-900px'},700);
        $('#masaic_6_1').animate({'margin-top':'-900px'},time1);

    }else
    if(i==2){
        $('.heading2_6').animate({'margin-top':'-610px'},time1);
        $('.text2_6').animate({'margin-top':'5px'},time2);
        $('.line2_6').animate({'margin-top':'5px'},time3);
        
        $('#masaic_6_2').animate({'margin-top':'-880px'},time1);
    }else
    if(i==3){    
      animationTextApp('.heading1_6','.text1_6','.line1_6',
                        '.heading2_6','.text2_6','.line2_6',
                        '.heading3_6','.text3_6','.line3_6');

      $('#masaic_6_3').animate({'margin-top':'-884px'},time1);
    }else
    if(i==4){     
      // animationTextApp('.heading2_6','.text2_6','.line2_6',
      //                  '.heading3_6','.text3_6','.line3_6',
      //                  '.heading4_6','.text4_6','.line4_6');

                       $('.heading2_6').animate({'margin-top':'-1450px'},time1);
                       $(".text2_6").animate({'margin-top':'5px'},time2);
                       $('.line2_6').animate({'margin-top':'5px'},time3);
                     
                       $('.heading3_6').animate({'margin-top':'-880px'},time1);
                       $('.text3_6').animate({'margin-top':'5px'},time2);
                       $('.line3_6').animate({'margin-top':'5px'},time3);
                     
                       $('.heading4_6').animate({'margin-top':'-600px'},time1);
                       $('.text4_6').animate({'margin-top':'5px'},time2);
                       $('.line4_6').animate({'margin-top':'5px'},time3);


                       $('#masaic_6_4').animate({'margin-top':'-834px'},time1);
    }else
    if(i==5){     
      animationTextApp('.heading3_6','.text3_6','.line3_6',
                       '.heading4_6','.text4_6','.line_6',
                       '.heading5_6','.text5_6','.line5_6');
                       $('#masaic_6_5').animate({'margin-top':'-819px'},time1);
                       $('#masaic_6_6').animate({'margin-top':'-800px'},time1); 
                       $('#masaic_6_7').animate({'margin-top':'-800px'},time1); 
    
    }else
    if(i==6){     
      animationTextApp('.heading4_6','.text4_6','.line4_6',
                       '.heading5_6','.text5_6','.line5_6',
                       '.heading6_6','.text6_6','.line6_6');
                       $('#masaic_6_8').animate({'margin-top':'-778px'},time1);
                       $('#masaic_6_9').animate({'margin-top':'-778px'},time1); 
   
    }else
    if(i==7){     
      animationTextApp('.heading5_6','.text5_6','.line5_6',
                       '.heading6_6','.text6_6','.line6_6',
                       '.heading7_6','.text7_6','.line7_6');

                       $('#masaic_6_10').animate({'margin-top':'-756px'},time1);
    
    }else
    if(i==8){     
      animationTextApp('.heading6_6','.text6_6','.line6_6',
                       '.heading7_6','.text7_6','.line7_6',
                       '.heading8_6','.text8_6','.line8_6');
                       $('#masaic_6_11').animate({'margin-top':'-706px'},time1);
                     
    }
    if(i==9){
      $('.heading7_6').animate({'margin-top':'-1850px'},time1);
      $('.text7_6').animate({'margin-top':'5px'},time2);
      $('.line7_6').animate({'margin-top':'5px'},time3);   
      $('.heading8_6').animate({'margin-top':'-1450px'},time1);
      $('.text8_6').animate({'margin-top':'5px'},time2);
      $('.line8_6').animate({'margin-top':'5px'},time3);

      $('.heading9_6').animate({'margin-top':'-810px'},time1);
      $('.text9_6').animate({'margin-top':'10px'},time3);

      $('#masaic_6_12').animate({'margin-top':'-709px'},time1);
      $('.masaic_5_6').css("fill","#3D37CD");     
      $('.mosaickBlocPage6').animate({'margin-top':'105px'},time3);

      $('.masaic_6').css("fill","#28C65C");
      
      $('.page__6').css('z-index','500');
      $('#clik').css('visibility','visible');
    }
}

function TextDown(){

  $('.heading1_6,.heading2_6,.heading3_6,.heading4_6,.heading5_6,.heading6_6,.heading7_6,.heading8_6,.heading9_6').finish(); 
  $('.text1_6,.text2_6,.text3_6,.text4_6,.text5_6,.text6_6,.text7_6,.text8_6,.text9_6').finish();
  $('.line1,.line2,.line3,.line4,.line5,.line6,.line7,.line8').finish();
  $('.page__6BigProd').finish();   
  $('#masaic_6_0,#masaic_6_1,#masaic_6_2,#masaic_6_3,#masaic_6_4,#masaic_6_5,#masaic_6_6,#masaic_6_7,#masaic_6_8,#masaic_6_9,#masaic_6_10,#masaic_6_11,#masaic_6_12,#masaic_6_13,.mosaickBlocPage6').finish();
    i--;

  if(i<=0){ 
      i=0;  
    }

    if(i==0){
        $('.page__6BigProd').finish(); 
        $('.page__6BigProd').animate({'margin-top':'80px'},900);

        $('.heading1_6').animate({'margin-top':'0px'},time1);
        $('.text1_6').animate({'margin-top':'5px'},time2);
        $('.line1_6').animate({'margin-top':'5px'},time3);
    
        
        $('.masaick_6').css('visibility','visible');
        $('#masaic_6_0').animate({'margin-top': '0px'},700);
        $('#masaic_6_1').animate({'margin-top':'0px'},time1);
    }
    else
    if(i==1){
        $('.heading2_6').animate({'margin-top':'0px'},time1);
        $('.text2_6').animate({'margin-top':'5px'},time2);
        $('.line2_6').animate({'margin-top':'5px'},time3);

        $('#masaic_6_2').animate({'margin-top':'0px'},time1);
    }
    else
    if(i==2){
      animationTextDown('.heading1_6','.text1_6','.line1_6',
                        '.heading2_6','.text2_6','.line2_6',
                        '.heading3_6','.text3_6','.line3_6');

                        $('#masaic_6_3').animate({'margin-top':'0px'},time1);
    
    }else
    if(i==3){
      animationTextDown('.heading2_6','.text2_6','.line2_6',
                    '.heading3_6','.text3_6','.line3_6',
                    '.heading4_6','.text4_6','.line4_6');
    
    $('#masaic_6_4').animate({'margin-top':'0px'},time1);
   
  }else
  if(i==4){     
    // animationTextDown('.heading3_6','.text3_6','.line3_6',
    //                   '.heading4_6','.text4_6','.line4_6',
    //                   '.heading5_6','.text5_6','.line5_6');

    $('.heading3_6').animate({'margin-top':'-880px'},time1);
    $('.text3_6').animate({'margin-top':'5px'},time2);
    $('.line3_6').animate({'margin-top':'5px'},time3);

    $( '.heading4_6').animate({'margin-top':'-600px'},time1);
    $('.text4_6').animate({'margin-top':'5px'},time2);
    $('.line4_6').animate({'margin-top':'5px'},time3);

    $('.heading5_6').animate({'margin-top':'0px'},time1);
    $('.text5_6').animate({'margin-top':'5px'},time2);
    $('.line5_6').animate({'margin-top':'5px'},time3);

                      $('#masaic_6_5').animate({'margin-top':'0px'},time1);
                      $('#masaic_6_6').animate({'margin-top':'0px'},time1); 
                      $('#masaic_6_7').animate({'margin-top':'0px'},time1);                     
    
  }else
  if(i==5){     
    animationTextDown('.heading4_6','.text4_6','.line4_6',
                      '.heading5_6','.text5_6','.line5_6',
                      '.heading6_6','.text6_6','.line6_6');
                      $('#masaic_6_8').animate({'margin-top':'0px'},time1);
                      $('#masaic_6_9').animate({'margin-top':'0px'},time1); 
   
  }else
  if(i==6){     
    animationTextDown('.heading5_6','.text5_6','.line5_6',
                      '.heading6_6','.text6_6','.line6_6',
                      '.heading7_6','.text7_6','.line7_6');
                      $('#masaic_6_10').animate({'margin-top':'0px'},time1);
 
  }else
  if(i==7){     
    animationTextDown('.heading6_6','.text6_6','.line6_6',
                      '.heading7_6','.text7_6','.line7_6',
                      '.heading8_6','.text8_6','.line8_6');
                      $('#masaic_6_11').animate({'margin-top':'0px'},time1);
                     
  }else
  if(i==8){
    // $('#clik').css('visibility','hidden');
    $('.heading7_6').animate({'margin-top':'-850px'},time1);
    $('.text7_6').animate({'margin-top':'5px'},time2);
    $('.line7_6').animate({'margin-top':'5px'},time3);
                
    $('.heading8_6').animate({'margin-top':'-600px'},time1);
    $('.text8_6').animate({'margin-top':'5px'},time2);
    $('.line8_6').animate({'margin-top':'5px'},time3);

    $('.heading9_6').animate({'margin-top':'100px'},time1);
    $('.text9_6').animate({'margin-top':'15px'},time3);

    $('#masaic_6_12').animate({'margin-top':'0px'},time1);
    $('.mosaickBlocPage6').animate({'margin-top':'0px'},time3);

    color(); 
    $('.page__6').css('z-index','-1');
  }
}
 
function animationTextApp(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9){
  $(obj1).animate({'margin-top':'-1450px'},time1);
  $(obj2).animate({'margin-top':'5px'},time2);
  $(obj3).animate({'margin-top':'5px'},time3);

  $(obj4).animate({'margin-top':'-880px'},time1);
  $(obj5).animate({'margin-top':'5px'},time2);
  $(obj6).animate({'margin-top':'5px'},time3);

  $(obj7).animate({'margin-top':'-620px'},time1);
  $(obj8).animate({'margin-top':'5px'},time2);
  $(obj9).animate({'margin-top':'5px'},time3);
}
function animationTextDown(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9){
      $(obj1).animate({'margin-top':'-880px'},time1);
      $(obj2).animate({'margin-top':'5px'},time2);
      $(obj3).animate({'margin-top':'5px'},time3);

      $(obj4).animate({'margin-top':'-620px'},time1);
      $(obj5).animate({'margin-top':'5px'},time2);
      $(obj6).animate({'margin-top':'5px'},time3);

      $(obj7).animate({'margin-top':'0px'},time1);
      $(obj8).animate({'margin-top':'5px'},time2);
      $(obj9).animate({'margin-top':'5px'},time3);
}

export function hidingPages6_modile(){
  $('.page__6').css('z-index','-1'); 
  $('.HedingText_6').css('margin-top','100px');
  $('.text_6').css('margin-top','100px');  
  $('.page__6').css('visibility','hidden');
  $('.page__6BigProd').css('visibility','hidden');
  lastCall = 0;
  i=0;
  activatePage6 = false; 
  $('.masaick_6').css('visibility','hidden'); 
  $('.masaic_6').css("fill","#3D37CD");
  $('.mosaickBlocPage6').css("margin-top","0px");
  $('.masaic_6').css("margin-top","0px");
  $('.page__6').css('z-index','-1');
  color(); 
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