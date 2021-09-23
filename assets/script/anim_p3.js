/*jshint esversion: 6 */
import {globalCheckButtonDecstopPages_2,fun_page_2,AboutDesktop} from './anim_p2.js';
import {global} from './burger.js';
import {hidePage4,hidePage6} from './bufPage_4.js';
import {hidingPages5} from './anim_p5.js';
import {hidingPages6} from './anim_p6.js';
import {hidingPages5_modile} from './mobile_5.js';
import {hidingPages6_modile} from './mobile_6.js';


$('#contact_linked').on('click', () => {
  const url_linked = "http://www.linkedin.com/in/kimencel";
  window.open(url_linked, '_blank');
});
$('#contact_twiter').on('click', () => {
  const url_twiter = "http://www.linkedin.com/in/kimencel";
  window.open(url_twiter, '_blank');
});


var globalCheckButtonDecstopPages_3={
  globalCheckButtonDecstop : true
};
let LetsStart = 0;

$('#Contact').on('click', function (){ 
    
  globalCheckButtonDecstopPages_2.globalCheckButtonDecstop=true;
   
    if(globalCheckButtonDecstopPages_3.globalCheckButtonDecstop==true){
      $('.page__3').css('visibility','visible'); 
      $('.page__3').css('z-index','1000');
      hidePage4();
      hidingPages5();
      hidingPages6();
      hidePage6();
      ShowPage_3();
      AboutDesktop();
      fun_page_2();
    }
    globalCheckButtonDecstopPages_3.globalCheckButtonDecstop=false;
  });
  export {globalCheckButtonDecstopPages_3};

   function ShowPage_3(){
    $('#Hi,#gif_2,#gif_1,#About_me,#small__project,#large__project,#touch,#gif_3,.about_me_p2,.about_meIfo_p2,#gif_4,#back_Home,#foto').finish();
    //откат при првом нажатии
    if(LetsStart==0){
        // $('#touch').animate({'margin-left': '-300px'});
        $('#touch').css('margin-left','-100px'); 
        LetsStart++;
    }
    //Lets chat показ
    $('#touch').animate({'margin-left': '0px',opacity: "1"},700,)
      ////////////мозайка
    $('#mosaic_1,#mosaic_2,#mosaic_3,#mosaic_4,#mosaic_5,#mosaic_6,#mosaic_7,#mosaic_8,#mosaic_9,#mosaic_10,#mosaic_11,#mosaic_12,#mosaic_13,#mosaic_14').finish();
       
    $('#mosaic_1').animate({'margin-top': '-243px',opacity: "1"},900);
    $('#mosaic_2').animate({'margin-top': '-243px',opacity: "1"},950);
    $('#mosaic_3').animate({'margin-top': '-211px',opacity: "1"},600);
    $('#mosaic_4').animate({'margin-top': '-211px',opacity: "1"},720);
    $('#mosaic_5').animate({'margin-top': '-130px',opacity: "1"},620);
    $('#mosaic_6').animate({'margin-top': '-130px',opacity: "1"},720);
    $('#mosaic_7').animate({'margin-top': '-128px',opacity: "1"},720);
    $('#mosaic_8').animate({'margin-top': '-128px',opacity: "1"},820);
    $('#mosaic_9').animate({'margin-top': '-76px',opacity: "1"},920);
    $('#mosaic_10').animate({'margin-top': '-46px',opacity: "1"},620);
    $('#mosaic_11').animate({'margin-top': '-20px',opacity: "1"},720);
    $('#mosaic_12').animate({'margin-top': '-20px',opacity: "1"},727);
    $('#mosaic_13').animate({'margin-top': '-20px',opacity: "1"},770);
    $('#mosaic_14').animate({'margin-top': '-20px',opacity: "1"},720);


    // $('#Mail').css('margin-left','500px');
    // $('#Phone').css('margin-left','600px');
    // $('#Linked').css('margin-left','700px');
    // $('#Twitter').css('margin-left','800px');

    // $('#Mail').animate({'margin-left': '0px',opacity: "1"},700);
    // $('#Phone').animate({'margin-left': '0px',opacity: "1"},700);
    // $('#Linked').animate({'margin-left': '0px',opacity: "1"},700);
    // $('#Twitter').animate({'margin-left': '0px',opacity: "1"},700);

    $('#Mail').css('margin-left','500px');
    $('#Phone').css('margin-left','530px');
    $('#Linked').css('margin-left','560px');
    $('#Twitter').css('margin-left','590px');

    $('#Mail').animate({'margin-left': '0px',opacity: "1"},700);
    $('#Phone').animate({'margin-left': '0px',opacity: "1"},700);
    $('#Linked').animate({'margin-left': '0px',opacity: "1"},700);
    $('#Twitter').animate({'margin-left': '0px',opacity: "1"},700);

    $('#mailLine,#phoneLine,#LinkedLine,#TwitterLine,#footerLine').css('margin-left','700px'); 
    $('#mailLine,#phoneLine,#LinkedLine,#TwitterLine,#footerLine').animate({'margin-left': '0px',opacity: "1"},700,);
  }

  export function fun_page_Contacts(){ 
    $('#Mail,#Phone,#Linked,#Twitter,#mailLine,#phoneLine,#LinkedLine,#TwitterLine,#footerLine').finish();
    $('#mosaic_1,#mosaic_2,#mosaic_3,#mosaic_4,#mosaic_5,#mosaic_6,#mosaic_7,#mosaic_8,#mosaic_9,#mosaic_10,#mosaic_11,#mosaic_12,#mosaic_13,#mosaic_14').finish();
    // $('#Mail').animate({'margin-left': '500px',opacity: "0"},700);
    // $('#Phone').animate({'margin-left': '600px',opacity: "0"},700);
    // $('#Linked').animate({'margin-left': '700px',opacity: "0"},700);
    // $('#Twitter').animate({'margin-left': '800px',opacity: "0"},700);
    $('#Mail').animate({'opacity': "0",'margin-left': '500px'},500);
    $('#Phone').animate({'opacity': "0",'margin-left': '530px'},500);
    $('#Linked').animate({'opacity': "0",'margin-left': '560px'},500);
    $('#Twitter').animate({'opacity': "0",'margin-left': '590px'},500);

   
    $('#mailLine,#phoneLine,#LinkedLine,#TwitterLine,#footerLine').animate({'opacity': "0",'margin-left': '590px'},400);
   
    $('.page__3').css('z-index','-1');
    
  
  $('#mosaic_1').animate({'margin-top': '0px',opacity: "0"},800);
  $('#mosaic_2').animate({'margin-top': '0px',opacity: "0"},800);
  $('#mosaic_3').animate({'margin-top': '0px',opacity: "0"},700);
  $('#mosaic_4').animate({'margin-top': '0px',opacity: "0"},660);
  $('#mosaic_5').animate({'margin-top': '0px',opacity: "0"},650);
  $('#mosaic_6').animate({'margin-top': '0px',opacity: "0"},640);
  $('#mosaic_7').animate({'margin-top': '0px',opacity: "0"},630);
  $('#mosaic_8').animate({'margin-top': '0px',opacity: "0"},620);
  $('#mosaic_9').animate({'margin-top': '0px',opacity: "0"},520);
  $('#mosaic_10').animate({'margin-top': '0px',opacity: "0"},520);
  $('#mosaic_11').animate({'margin-top': '0px',opacity: "0"},520);
  $('#mosaic_12').animate({'margin-top': '0px',opacity: "0"},527);
  $('#mosaic_13').animate({'margin-top': '0px',opacity: "0"},470);
  $('#mosaic_14').animate({'margin-top': '0px',opacity: "0"},620);
}

//////////////////////////////////////////////////////////////////////////

// const heightPage3 = document.documentElement.clientHeight-80;
const heightPage3 = document.documentElement.innerHeight-80;

$('#Contact_mobile').on('click touchend', function (){ 
  $('.burger__button,#gif_1,.contacts').finish();
  global.mobile_butten_red = true;
  global.mobile_butten_yeloy = false;
  global.mobile_butten_green = false;


  // $('.page__3').css('height',heightPage3+'px');
  $('.page__3').css('height',heightPage3+'px');
  
  

  $('.burger__button').animate({'margin-left': '370px'}, 600);
  $('#clik').css('visibility','visible');
  $('#clik_1').css('visibility','hidden');
  $('#clik_2').css('visibility','hidden');
  $('#clik_3').css('visibility','hidden');

  $('.mosaic_mobile').css('visibility','visible');
  $('#gif_1').animate({'opacity': "0"}, 800);
  $('.page__3').css('visibility','visible'); 
  $('.page__3').css('z-index','1000');
  hidePage4();
  hidePage6();
  move_contect_p3();
  fun_page_2();
  ShowPage_3();

  hidingPages5_modile();
  hidingPages6_modile();
  
  $('.contacts').animate({'margin-top': '130px'}, 600);
});

$('#clik_3').on('click', function (){
  $('#clik').css('visibility','visible');
  $('#clik_3').css('visibility','hidden');
  move_contect_p3();
  $('.burger__button').animate({'margin-left': '370px'}, 600);
  $('.contacts').animate({'margin-top': '130px'}, 600);
});

function move_contect_p3(){
  $('.cont_1,.cont_2,.cont_3,.cont_4,#mosaic_2_mobile,#mosaic_3_mobile,#mosaic_4_mobile').finish();
  $('#touch').animate({'margin-top': '0px'}, 600);
 

  $('#mosaic_2_mobile').animate({'padding-left': '50px'}, 600);
  $('#mosaic_3_mobile').animate({'padding-left': '20px'}, 600);
  $('#mosaic_4_mobile').animate({'padding-left': '20px'}, 600);
}

 /////////////////////////////////прячим 3 мобайл
export function modileNotShowPage_3(){
$('.contacts').finish();
$('.contacts').css('margin-top','130px');  
$('.page__3').css('visibility','hidden'); 
$('.mosaic_mobile').css('visibility','hidden');

}