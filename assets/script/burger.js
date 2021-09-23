/*jshint esversion: 6 */
import {hidingPages5_modile} from './mobile_5.js';
import {hidingPages6_modile} from './mobile_6.js';

var global={
    mobile_butten_red :false,
    mobile_butten_yeloy :false,
    mobile_butten_green : true
 };

$('#clik').on('click', function (){
    $('.about_I').animate({'margin-top': '-10px',opacity: "0",'z-index': '-1'}, 600);
    $('.burger__button').animate({'margin-left': '-390px','z-index': '1200'}, 600);   
    $('#gif1').animate({'margin-left': '-150px'}, 600);  
   
    // hidingPages6();
    if(global.mobile_butten_green==true){    
        $('#clik').css('visibility','hidden');
        $('#clik_1').css('visibility','visible');
        backGraubnBurgerBatoon('background-color','#00C753','#3D34D2','#3D34D2');
        $('.page__3').css('z-index','-1');
        // hidingPages5_modile();
    }
            

    if(global.mobile_butten_red==true){
        $('#clik').css('visibility','hidden');
        $('#clik_3').css('visibility','visible');
        backGraubnBurgerBatoon('background-color','#3D34D2','#3D34D2','#FE0000'); 
        
        $('#touch').animate({'margin-top': '-190px'}, 600);
        $('.cont_1').animate({'margin-top': '-30px'}, 600);
        $('.cont_2').animate({'margin-top': '-30px'}, 600);
        $('.cont_3').animate({'margin-top': '-30px'}, 600);
        $('.cont_4').animate({'margin-top': '-30px'}, 600);

        $('#mosaic_2_mobile').animate({'padding-left': '0px'}, 600);
        $('#mosaic_3_mobile').animate({'padding-left': '0px'}, 600);
        $('#mosaic_4_mobile').animate({'padding-left': '0px'}, 600);
 
        $('.page__3').css('z-index','-1');
        $('.contacts').animate({'margin-top': '-100px'}, 600);
        hidingPages5_modile();
        hidingPages6_modile();
    }

    if(global.mobile_butten_yeloy==true){
        $('.about_me_p2').animate({'margin-top': '-100px'}, 600);
        $('.about_meIfo_p2').animate({'margin-top': '-100px'}, 600);
        

        $('#gif_3').animate({'margin-left': '100px'}, 600);
        $('#foto').animate({'margin-top': '-550px'}, 600);
        backGraubnBurgerBatoon('background-color','#3D34D2','#FFBD00','#3D34D2'); 

        $('#clik').css('visibility','hidden');
        $('#clik_1').css('visibility','hidden');
        $('#clik_3').css('visibility','hidden');
        $('#clik_2').css('visibility','visible');
        $('.page__3').css('z-index','-1');   
        
        hidingPages5_modile();
        hidingPages6_modile();
    }
    $('header').css('z-index', '5200');
  
});

$('#clik_1').on('click', function (){

    $.when(
        $('.about_I').animate({'margin-top': '0px',opacity: "1",'z-index': '100'}, 600),
        $('.burger__button').animate({'margin-left': '390px'}, 600),   
        $('#gif_1').animate({'left': '150px'}, 600)
    ).then(function (){
    // $('.burger__button').css('display','none');
    $('#small__project').css('visibility','visible');
    $('#large__project').css('visibility','visible');
    $('#clik').css('visibility','visible');
    $('#clik_1').css('visibility','hidden');
    });
    $('#gif1').animate({'margin-left': '0px'}, 600); 
    
});


 export {global};

 function backGraubnBurgerBatoon(style,color1,color2,color3){
    $('#back_Home_mobile').css(style,color1);
    $('#About_mobile').css(style,color2);
    $('#Contact_mobile').css(style,color3);
 }

 
// $( window ).resize(function() {
//     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//         window.location.reload();
//       }  
// });


window.addEventListener("orientationchange", function() {
$( window ).resize(function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.location.reload();
      }  
});
// if(window.orientation==90){  
//       $('#gif1').css('visibility','hidden');
// }else{
//     $('#gif1').css('visibility','visible');
// }

}, false);

