/*jshint esversion: 6 */
import { globalCheckButtonDecstopPages_2, fun_page_2 } from './anim_p2.js';
import { global } from './burger.js';
import { globalCheckButtonDecstopPages_3, fun_page_Contacts, modileNotShowPage_3 } from './anim_p3.js';
import { hidePage4, hidePage6 } from './bufPage_4.js';
import { hidingPages5,heidingMasaic } from './anim_p5.js';
import { hidingPages6,heidingMasaic_6 } from './anim_p6.js';
import { hidingPages5_modile } from './mobile_5.js';
import { hidingPages6_modile } from './mobile_6.js';
const screenWidth = window.innerWidth;//ширина экрана

$('#logo').on('click', function () {
   
    globalCheckButtonDecstopPages_2.globalCheckButtonDecstop = true;
    globalCheckButtonDecstopPages_3.globalCheckButtonDecstop = true;
  
    if (screenWidth >= 500) {
        $('#gif_2').css('display', 'block'); 
        $.when(
            hidePage4(),
            hidePage6(),
            hidingPages6(),
            hidingPages5(),
            fun_page_2(),
            back_HomeDecstop(),
            fun_page_Contacts()
        ).then(function () {
            setTimeout(blocButton, 1200);
        });
    }

});

$('#back_Home_mobile,.logo_mibile').on('click', function () {
    if (screenWidth < 500) {
        $.when(
            hidePage4(),
            hidePage6(),
            hidingPages6(),
            hidingPages5(),
            home_mobile(),
            back_HomeDecstop()
        ).then(function () {         
            setTimeout(blocButton, 1000);
        });     
    }
});



function blocButton() {
    $('#small__project').css('pointer-events', 'visible');
    $('#large__project').css('pointer-events', 'visible');
}

function back_HomeDecstop() {
    //возрат главной 
    //   $('.burger__button').css('display','none');

    //контроль 3 страницы(в лево)
    $('#touch').finish();
    $('#touch').animate({ 'margin-left': '-400px', opacity: "0" }, 700);

    $.when(
        $('#Hi,#gif_2,#gif_1,#About_me,#small__project,#large__project').finish()
    ).then(function () {
        $('#gif_1,#gif_2,#Hi,#About_me,#small__project,#large__project').css('visibility', 'visible');
        $('#gif_1').animate({ 'margin-left': '0px', opacity: "1" }, 800);
        $('#gif_2').animate({ 'margin-left': '0px', opacity: "1" }, 800);
        $('#Hi').animate({ 'margin-left': '0px', opacity: "1" }, 800);
        $('#About_me').animate({ 'margin-top': '0px', opacity: "1" }, 800);
        $('#small__project').animate({ 'margin-top': '0px', opacity: "1" }, 800);
        $('#large__project').animate({ 'margin-top': '0px', opacity: "1" }, 800);

    });

}


$('header').click(function (e) {
    //  $('#foto').animate({'margin-left': "-400px",'opacity': "1"},800);
    if(window.innerWidth<490){
        var target = this.getBoundingClientRect();
        var x = e.clientX - target.left;
    
        if (x > 14 && x < 128) {
            // home_mobile();
            $("#logo_1").css("fill", "#FE0000");
            setTimeout(colorBeck, 700);
        }
    }
   
});


function colorBeck() {
    $("#logo_1").css("fill", "#333333");
}

const heightPage3 = document.documentElement.clientHeight;
function home_mobile() {

    global.mobile_butten_red = false;
    global.mobile_butten_yeloy = false;
    global.mobile_butten_green = true;
       
    $('.grid').css('height',heightPage3+'px');
 
  
     
    $('#touch,#gif_3,.about_I,.burger__button,#gif_1').finish();

    $('.page__2').css('visibility', 'hidden');
    $('#gif_3').animate({ 'opacity': "0" });

    $('#clik').css('visibility', 'visible');
    $('#clik_1').css('visibility', 'hidden');
    $('#clik_2').css('visibility', 'hidden');
    $('#clik_3').css('visibility', 'hidden');


    $('#Hi,#gif_2,#gif_1,#About_me,#small__project,#large__project').finish();
    $('.about_I').animate({ 'margin-top': '0px', opacity: "1", 'z-index': '100' }, 600);
    $('.burger__button').animate({ 'margin-left': '370px' }, 600);
    $('#gif_1').animate({ 'opacity': "1" });
    $('#gif1').animate({ 'margin-left': '0px' }, 600);

    modileNotShowPage_3();
    hidingPages5_modile();
    hidingPages6_modile();
}

let height;

$(window).on('resize', function () {
    $('body').finish();
  
    if(document.documentElement.clientWidth < 1200  && ($('.page__4SmalProd').css('visibility')=='visible')||$('.page__6BigProd').css('visibility')=='visible'){
        window.pageXOffset=0;
        $('html').css('overflow-x','scroll');
        $('#gif_2').css('display', 'none');
       
      }else{      
        window.pageXOffset=0;
        $('html').css('overflow-x','hidden');
        $('#gif_2').css('display', 'block');          
      }
    //   if (document.documentElement.clientHeight >= 540 )
      if (document.documentElement.clientHeight >= 540 ){
        $('html').css('overflow-x','hidden');
        $('html').css('overflow-y','hidden');
        $('body').animate({'margin-top': '0px' }, 900);
        // window.pageXOffset=0;
        // window.pageYOffset=0;
        window.scrollTo(0,0);
      }else{
        $('html').css('overflow-y','scroll');
      }
    //   if (document.documentElement.clientHeight >=580 )
      if (document.documentElement.clientHeight >=580 ){
        $('html').css('overflow-y','hidden');
        $('.page__5').css('margin-top','986px');
        $('.page__6').css('margin-top','986px');     
        window.scrollTo(0,0);     
      }else{
        heidingMasaic();
        heidingMasaic_6();
      }
});


$('body').hover(function() {
    $("html").css("overflow","hidden");
  }, function() {
    if (document.documentElement.clientHeight <=800 )
     $("html").css("overflow","auto");
  });







let position = 110;

function up() {
    position = 110;
    $('body').animate({'margin-top': '0px' }, 700);
}
function doun() {
    position = position + 80;

    if (position > 150) {
        position = 150;
    }
    $('body').animate({ 'margin-top': '-' + position + 'px' }, 600);
}

function debounce(func, timeout = 700) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}
function saveInputDown() {
    doun();
}
function saveInputUp() {
    up();
}



// $(window).bind('mousewheel DOMMouseScroll', function(event){
    
//       if (document.documentElement.clientHeight < 580){  
//         $('html').css('overflow-y', 'scroll');
//       }
//     });

