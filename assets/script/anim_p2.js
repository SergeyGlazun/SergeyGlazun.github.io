/*jshint esversion: 6 */
import {global} from './burger.js';
import{globalCheckButtonDecstopPages_3,fun_page_Contacts,modileNotShowPage_3} from './anim_p3.js';
import {hidePage4,hidePage6} from './bufPage_4.js';
import {hidingPages5} from './anim_p5.js';
import {hidingPages6} from './anim_p6.js';
import {hidingPages5_modile} from './mobile_5.js';
import {hidingPages6_modile} from './mobile_6.js';

var globalCheckButtonDecstopPages_2={
  globalCheckButtonDecstop : true
};

$('#About').on('click', function (){ 

  if(globalCheckButtonDecstopPages_2.globalCheckButtonDecstop==true){
    $('.page__2').css('visibility','visible'); 
  
    hidePage4();
    hidingPages5();
    hidePage6();
    hidingPages6();

    fun_page_Contacts();
    AboutDesktop();
    ShowPage_2();
  

  }
  globalCheckButtonDecstopPages_3.globalCheckButtonDecstop=true;
  globalCheckButtonDecstopPages_2.globalCheckButtonDecstop=false;
});

 //показываем About
function ShowPage_2(){ 
  $('.about_me_p2,.about_me_p2,#gif_3,.about_meIfo_p2,#gif_4,#gif_4,#foto,#touch').finish();
  //контролируем 3 странцу в зависимости от перехода
  $('#touch').animate({'margin-left': '400px',opacity: "0"},700)
  $.when( 
    $('.about_me_p2').css('margin-left','-400px'), 
    $('#foto').css('margin-left','-200px'),
    $('.about_meIfo_p2').css('margin-top','300px')
        ).then(function () { 
          $('#foto').css('display','block'); 
          $('.page__2').css('visibility','visible');   
          $('#gif_3').animate({'opacity': "1"},700);
          $('#gif_4').animate({'opacity': "1"},700);
          $('.about_me_p2').animate({'margin-left': "0px",'opacity': "1"},700);
          $('#foto').animate({'margin-left': "0px",'opacity': "1"},700);
          $('.about_meIfo_p2').animate({'margin-top': "0px",'opacity': "1"},700);
        });
}

export {globalCheckButtonDecstopPages_2};

  //прячим главную после выключаем
export function AboutDesktop(){
  
  $('#Hi,#gif_2,#gif_1,#About_me,#small__project,#large__project,#gif_3,.about_meIfo_p2,#gif_4,#foto,.page__2').finish();

   $.when(
   $('#gif_1').animate({'margin-left': '-700px',opacity: "0"}, 800,),
   $('#gif_2').animate({'margin-left': '700px', opacity: "0"}, 800 ),
    
   $('#Hi').animate({ 'margin-left': '240px',opacity: "0"}, 800 ),
   $('#About_me').animate({ 'margin-top': '-40px',opacity: "0"},400),
   $('#small__project').animate({ 'margin-top': '100px',opacity: "0"}, 800 ),
   $('#large__project').animate({ 'margin-top': '150px',opacity: "0"}, 800 ) 
       ).then(function () {     
         $('#gif_1,#gif_2,#Hi,#About_me,#small__project,#large__project').css('visibility','hidden');        
       });
}

//прячим About
export function fun_page_2(){  

  $.when(
    $('.page__2,.about_me_p2,.about_me_p2,#gif_3,.about_meIfo_p2,#gif_4,#gif_4,#foto').finish(),
    $('#gif_3').animate({'opacity': "0"},700),
    $('#gif_4').animate({'opacity': "0"},700),
    $('.about_me_p2').animate({'margin-left': "-300px",'opacity': "0"},700),
    $('#foto').animate({'margin-left': "-200px",'opacity': "0"},700),
    $('.about_meIfo_p2').animate({'margin-top': "300px",'opacity': "0"},700)
  ).then(function () {     
    $('.page__2').css('visibility','hidden');
    // $('#foto').css('display','none');        
  });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

$('#About_mobile').on('click touchend', function (){
    hidingPages5_modile();
    hidingPages6_modile();
  $('.about_me_p2,.about_meIfo_p2,.burger__button,#gif_1,#gif_3').finish();

  $('.page__2').css('visibility','visible'); 

  $('.about_me_p2').animate({'margin-top': '-50px'}, 600 );
  $('.about_meIfo_p2').animate({'margin-top': '-50px'}, 600);
  $('#gif_3').animate({'margin-left': '0px'}, 600);
  $('#gif_3').animate({'opacity': "1"});

  // $('#foto').css('display','block');
 
  $('#foto').css('margin-left',' 0px');
  $('#foto').css('opacity','1');  
  $('#foto').css('margin-top','-320px');


  $('.page__2').css('visibility','visible'); 
  $('#gif_3').animate({'opacity': "1"},400);
  $('#gif_4').animate({'opacity': "1"},400);
  $('.about_me_p2').animate({'margin-left': "10px",'opacity': "1"},400);
  $('.about_meIfo_p2').animate({'opacity': "1"},400);

  $.when(
    $('.burger__button').animate({'margin-left': '370px'}, 600),
    $('#gif_1').animate({'opacity': "0"}, 800),   
  ).then(function (){
      // $('.burger__button').css('display','none');
     
  });

 
  global.mobile_butten_red = false;
  global.mobile_butten_yeloy = true;
  global.mobile_butten_green = false;
  

  $('#clik').css('visibility','visible');
  $('#clik_1').css('visibility','hidden');
  $('#clik_2').css('visibility','hidden');
  $('#clik_3').css('visibility','hidden');

  hidePage4();
  hidePage6();
  modileNotShowPage_3();
});

$('#clik_2').on('click', function (){
  
  $('.about_me_p2,.about_meIfo_p2,.burger__button,#gif_3').finish()

  $('.about_me_p2').animate({'margin-top': '-50px'}, 600);
  $('.about_meIfo_p2').animate({'margin-top': '-50px'}, 600);
  $('#gif_3').animate({'margin-left': '0px'}, 600);
  $('.burger__button').animate({'margin-left': '370px'}, 600);
  $('#foto').animate({'margin-top': '-320px'}, 600);

  $('#clik').css('visibility','visible');
  $('#clik_2').css('visibility','hidden');
  $('#gif_3').css('visibility','visible');
 
});