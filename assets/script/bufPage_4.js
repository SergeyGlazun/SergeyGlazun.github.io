/*jshint esversion: 6 */
import {globalCheckButtonDecstopPages_2,fun_page_2,AboutDesktop} from './anim_p2.js';
import {global} from './burger.js';
import{globalCheckButtonDecstopPages_3,fun_page_Contacts,modileNotShowPage_3} from './anim_p3.js';
import {hidingPages6} from './anim_p6.js';
import {hidingPages5} from './anim_p5.js';
import {hidingPages5_modile} from './mobile_5.js';
import {hidingPages6_modile} from './mobile_6.js';


$('#small__project').on('click', function (){
  // window.scrollTo(0,0);
  // $('#clik').css('visibility','hidden');

  $('.page__5').css('display','block');

  $('.page__5').css('visibility','visible');
  $('.page__6').css('position','fixed');
  $('.page__5').css('position','relative');

  $('.page__4SmalProd').css('z-index','2000');
  
  if(window.innerWidth>490){
    hidingPages6();   
  }else{
    hidingPages6_modile();
    // $('.HedingText').css('margin-top','100px');
    // $('.text_p5').css('margin-top','100px');  
    // $('.line_p5').css('margin-top','100px'); 

    $('.heading1').css('margin-top','100px');
    $('.text1').css('margin-top','5px');
    $('.line1').css('margin-top','5px');

    $('.heading2').css('margin-top','100px');
    $('.text2').css('margin-top','5px');
    $('.line2').css('margin-top','5px');

    $('.heading3').css('margin-top','100px');
    $('.text3').css('margin-top','5px');
    $('.line3').css('margin-top','5px');

    $('.heading4').css('margin-top','100px');
    $('.text4').css('margin-top','5px');
    $('.line4').css('margin-top','5px');

    $('.heading5').css('margin-top','100px');
    $('.text5').css('margin-top','5px');
    $('.line5').css('margin-top','5px');

    $('.heading6').css('margin-top','100px');
    $('.text6').css('margin-top','5px');
    $('.line6').css('margin-top','5px');

    $('.heading7').css('margin-top','100px');
    $('.text7').css('margin-top','5px');
    $('.line7').css('margin-top','5px');

    $('.heading8').css('margin-top','100px');
    $('.text8').css('margin-top','5px');
    $('.line8').css('margin-top','5px');

    $('.masaic_5').css("margin-top","0px");
  }
  
  if(window.innerWidth==500){
   

    $('.page__4SmalProd').css('visibility','visible');
    $('.page__4SmalProd').animate({'opacity':'1'},1000);
    showPagesBuf_4();
    AboutDesktop();
  } 
else
    if(window.innerWidth>490){
    
    $('#small__project').css( 'pointer-events','none');
    $('#large__project').css( 'pointer-events','none');

    $('.page__4SmalProd').css('visibility','visible');
    $('.page__4SmalProd').css('opacity','1');
    
    $('#TitleText_pages4').css('padding-right','200px');
    $('#TitleText_pages4').css('opacity','0');

    $('#Text_pages4').css('padding-top','200px');
    $('#Text_pages4').css('opacity','0');
    $('#Line_pages4').css('margin-top','500px');

    showPagesBuf_4();
    AboutDesktop(); 
  
    }else{
    
        $('#small__project').css( 'pointer-events','none');
        $('#large__project').css( 'pointer-events','none');
    
        $('.page__4SmalProd').css('visibility','visible');
        $('.page__4SmalProd').css('opacity','1');
        
        $('.page__4SmalProd').css('margin-top','80px');
        $('#TitleText_pages4').css('left','-300px');
        $('#Text_pages4').css('left','-500px');
        $('#Line_pages4').css('margin-top','300px');      

        $('#TitleText_pages4,#Text_pages4,#Line_pages4').finish();

        $('#TitleText_pages4').animate({'left':'20px'},1000);
        $('#Text_pages4').animate({'left':'20px'},1000);
        $('#Line_pages4').animate({'margin-top':'340px'},1000);

    
        AboutDesktop();
        
    } 
   
  });

  function showPagesBuf_4(){
    $('#TitleText_pages4,#Text_pages4,#Line_pages4').finish();

    $('#TitleText_pages4').animate({'padding-right':'0px','opacity':'1'},1000);   
    $('#Text_pages4').animate({'padding-top':'0px','opacity':'1'},1000);
    $('#Line_pages4').animate({'margin-top':'530px'},1000);
  }

  //прячим 4 страницу
  export function hidePage4(){
    $('.page__4SmalProd').finish();
    $('.page__4SmalProd').css('z-index','-10');
    $.when( 
        $('.page__4SmalProd').animate({'opacity': "0"},500)
            ).then(function () { 
                $('.page__4SmalProd').css('visibility','hidden'); 
            });
            // $('.page__4SmalProd').css('margin-top','86px'); 
            $('.page__4SmalProd').css('margin-top','0px'); 
  }
  /////////////////////////////

  $('#large__project').on('click', function (){
    // $('#clik').css('visibility','hidden');
    // $('#small__project').css( 'pointer-events','none');
    // $('#large__project').css( 'pointer-events','none');
    // window.scrollTo(0,0);
  

    
    $('.page__6').css('visibility','visible');
    $('.page__5').css('position','fixed');
    $('.page__6').css('position','relative');  

    $('.page__6BigProd').css('z-index','2000');

    $('.page__6').css('display','block');
 
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
  });

export function showLarge__project(){
  // $('.page__6').css('visibility','visible');
  // $('.page__5').css('position','fixed');
  // $('.page__6').css('position','relative');  

  if(window.innerWidth==500){
    $('#small__project').css( 'pointer-events','none');
    $('#large__project').css( 'pointer-events','none');

    $('.page__6BigProd').css('visibility','visible');
    $('.page__6BigProd').animate({'opacity':'1'},1000);
    showPagesBuf_6();
    AboutDesktop();
  } 
else
  if(window.innerWidth>490){

  $('#large__project').css( 'pointer-events','none');
  $('#large__project').css( 'pointer-events','none');

  $('.page__6BigProd').css('visibility','visible');
  $('.page__6BigProd').css('opacity','1');
  
  $('#TitleText_pages6').css('padding-right','200px');
  $('#TitleText_pages6').css('opacity','0');

  $('#Text_pages6').css('padding-top','250px');
  $('#Text_pages6').css('opacity','0');
  $('#Line_pages6').css('margin-top','480px');

  showPagesBuf_6();
  AboutDesktop();     
  }else{
     

      $('#small__project').css( 'pointer-events','none');
      $('#large__project').css( 'pointer-events','none');
  
      $('.page__6BigProd').css('visibility','visible');
      $('.page__6BigProd').css('opacity','1');
      
      $('.page__6BigProd').css('margin-top','80px');
      $('#TitleText_pages6').css('left','-300px');
      $('#Text_pages6').css('left','-500px');
      $('#Line_pages6').css('margin-top','300px');      

      $('#TitleText_pages6,#Text_pages6,#Line_pages6').finish();

      $('#TitleText_pages6').animate({'left':'10px'},1000);
      $('#Text_pages6').animate({'left':'10px'},1000);
      $('#Line_pages6').animate({'margin-top':'310px'},1000);

      // hidingPages6_modile();
      // hidingPages5_modile();
 
      AboutDesktop();
  } 
}

  function showPagesBuf_6(){
    $('#TitleText_pages6,#Text_pages6,#Line_pages6').finish();

    $('#TitleText_pages6').animate({'padding-right':'0px','opacity':'1'},1000);   
    $('#Text_pages6').animate({'padding-top':'0px','opacity':'1'},1000);
    $('#Line_pages6').animate({'margin-top':'500px'},1000);
  }

  //прячим 4 страницу
  export function hidePage6(){

    $.when( 
        $('.page__6BigProd').animate({'opacity': "0"},500)
            ).then(function () { 
                $('.page__6BigProd').css('visibility','hidden'); 
            });
            // $('.page__6BigProd').css('margin-top','86px');
            $('.page__6BigProd').css('margin-top','0px');
  }


