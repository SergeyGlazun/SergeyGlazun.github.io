/*jshint esversion: 6 */

let activatePage5 = false;
function AppPages_4Buf() {
  activatePage5 = true;
}

document.addEventListener('keydown', function (event) {
  switch (event.key) {
    case "ArrowUp":
      if (activatePage5 == true) {

        TextDown_5();
      }
      break;
    case "ArrowDown":
      if ($('.page__4SmalProd').css('visibility') == 'visible') {
        TextAp_5();
        activatePage5 = true;
        $('.page__4SmalProd').css('z-index', '-10');
      } else
        if (activatePage5 == true) {

          TextAp_5();
        }
      break;
  }
});

$('.button_down').on('click', function () {

  if (activatePage5 == true) {
    // handleAp();
    TextAp_5();
  }

})

$('.button_up').on('click', function () {

  if (activatePage5 == true) {
    // handleDown();
    TextDown_5();
  }

});

$('.page__4SmalProd').on('click', function () {
  TextAp_5();
  activatePage5 = true;
  $('.page__4SmalProd').css('z-index', '-10');
})



function debounce(func, timeout = 40) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}
function saveInputDown_5() {
  TextDown_5();
}
function saveInputUp_5() {
  TextAp_5();
}
const processChangeDown_5 = debounce(() => saveInputDown_5());
const processChangeUp_5 = debounce(() => saveInputUp_5());




// function save1() {
//   if(window.pageYOffset>250){     
//     $('html').css('overflow-y','hidden');
//    }
// }

// function save2() {
//   if(window.pageYOffset>250){     
//     $('html').css('overflow-y','scroll');
//    }
// }

// const process =  debounce(() => save1());
// const process1 =  debounce(() => save2());
// const processChangeUp_5 = debounce(() => saveInputUp_5());



// $(window).bind(' mousewheel', function(event){

//   if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail< 0) {

// console.log()
//     console.log("df");
//   }  else{
//     console.log("df1");
//   }
//   });



function detectTrackPad(event) {
  var isTrackpad = false;
  if (event.wheelDeltaY) {
    if (Math.abs(event.wheelDeltaY) !== 120) {
      isTrackpad = true;
      move(1200, 1200, event);
    } else {  
      move(600, 600, event);      
    }
  }
  else if (event.deltaMode === 0) {
    isTrackpad = true;
  }

  // $('html').css('overflow-y', 'hidden');
}

document.addEventListener("mousewheel", detectTrackPad, false);
document.addEventListener("DOMMouseScroll", detectTrackPad, false);



function move(up, down, event) {
  if ($('.page__4SmalProd').css('visibility') == 'visible') {
    activatePage5 = true;
  }


  if (event.wheelDeltaY > 0 || event.wheelDeltaX < 0) {

       if (activatePage5 == true) {
       
        handleDown(down);
        // handleDown(down);
      }
    
    // if (document.documentElement.clientHeight > 580) {
    //   if (activatePage5 == true) {
       
    //     handleDown(down);
    //     // handleDown(down);
    //   }
    // }
    // else {
    //   $('html').css('overflow-y', 'scroll');
    // }

  }
  else {
    if (activatePage5 == true) {
      handleAp(up);
    }

    // if (document.documentElement.clientHeight > 580) {
    //   if (activatePage5 == true) {
    //     handleAp(up);
    //   }
    // }
    
  }

  
}






// $(window).scroll(function () {

//   if (window.pageYOffset >=300) {   
//     $('html').css('overflow-y', ' hidden');  
//   } else {
//     $('html').css('overflow-y', 'scroll');    
//   }
// });


// $(window).bind('mousewheel DOMMouseScroll', function(event){

// if($('.page__4SmalProd').css('visibility')=='visible'){             
//   activatePage5=true;      
// }

// if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail< 0) {

//   if (document.documentElement.clientHeight > 580 ) {
//     if(activatePage5==true){
//       // setTimeout(handleDown, 1000);


//       handleDown();  
//       // processChangeDown_5();   
//   }   
//   } 
//   else{
//     // process1();
//     $('html').css('overflow-y','scroll');
//   }

// }
// else { 
//   console.log("sd");
//   if (document.documentElement.clientHeight > 580 ) {
//     if(activatePage5==true){  
//       // setTimeout(handleAp, 1000);           
//       handleAp();
//       // processChangeUp_5();  
//   }   
//   }else{
//       $('html').css('overflow-y','scroll'); 
//       // process1();
//       // process();   
//       // if(window.pageYOffset>250){     
//       //   $('html').css('overflow-y','hidden');
//       //  }
//     }             
// }  
// });



let lastCall = 0;
function handle2() {
  let now = Date.now();

  if (now - lastCall > 1200) {
    AppPages_4Buf();
    lastCall = now;
  }
}

function handleDown(itemDown) {
  let now = Date.now();

  if (now - lastCall > itemDown) {
    TextDown_5();
    lastCall = now;
  }
}

function handleAp(itemUp) {
  let now = Date.now();

  if (now - lastCall > itemUp) {
    TextAp_5();
    lastCall = now;
  }
}

export { i };

let i = 0;

const time1 = 900;
const time2 = 900;
const time3 = 900;


function TextAp_5() {
  $('.heading1,.heading2,.heading3,.heading4,.heading5,.heading6,.heading7,.heading8,.heading9,.button_down,.buttonPages_5_6').finish();
  $('.text1,.text2,.text3,.text4,.text5,.text6,.text7,.text8,.text9').finish();
  $('.line1,.line2,.line3,.line4,.line5,.line6,.line7,.line8').finish();
  $('.page__4SmalProd').finish();
  $('.page__5').css('z-index', '5');
  $('#masaic_5_0,#masaic_5_1,#masaic_5_2,#masaic_5_3,#masaic_5_4,#masaic_5_5,#masaic_5_6,#masaic_5_7,#masaic_5_8,#masaic_5_9,#masaic_5_10,#masaic_5_11,#masaic_5_12,#masaic_5_13,.mosaickBlocPage5').finish();
  $('.contener1,.contener2,.contener3,.contener4,.contener5,.contener6,.contener7,.contener8,.contener9').finish();

  i++;
  if (i >= 9) {
    i = 9;
  }

  if (i == 1) {

    $('.contener1').css('visibility', 'visible');
    $('.contener1').animate({'opacity': "1"},700);

    $('.heading1').animate({ 'margin-top': '-800px' }, time1);
    $('.text1').animate({ 'margin-top': '15px' }, time2);
    $('.line1').animate({ 'margin-top': '15px' }, time3);

    $('.page__4SmalProd').animate({ 'margin-top': '-700px' }, 900);
    $('.page__4SmalProd').css('z-index', '-10');

    $('.masaick_5').css('visibility', 'visible');

    $('#masaic_5_0').css('visibility', 'visible');
    $('#masaic_5_1').css('visibility', 'visible');
    $('#masaic_5_0').animate({ 'margin-top': '-800px', 'opacity': "1" }, 700);
    $('#masaic_5_1').animate({ 'margin-top': '-800px', 'opacity': "1" }, time1);

    // $('#masaic_5_0,#masaic_5_1').css('visibility','visible');


    $('.buttonPages_5_6').css('visibility', 'visible');
    $('.button_down').css('visibility', 'visible');
    $('.button_up').css('visibility', 'visible');
    $('.buttonPages_5_6').animate({ 'opacity': "1" }, 500);
    // $('.contener1').animate({'opacity': "1"},500);

    if (document.documentElement.clientWidth < 800) {
      $('html').css('overflow-x', 'scroll');
    }
    // if(document.documentElement.clientHeight < 540){
    //   $('html').css('overflow-y','scroll');
    // }
  } else
    if (i == 2) {
      $('.contener2').css('visibility', 'visible');
      $('.contener2').animate({'opacity': "1"},700);

      $('.heading2').animate({ 'margin-top': '-460px' }, time1);
      $('.text2').animate({ 'margin-top': '15px' }, time2);
      $('.line2').animate({ 'margin-top': '15px' }, time3);

      $('#masaic_5_2,#masaic_5_3').css('visibility', 'visible');
      $('#masaic_5_2').animate({ 'margin-top': '-771px', 'opacity': "1" }, 700);
      $('#masaic_5_3').animate({ 'margin-top': '-771px', 'opacity': "1" }, 800);

    } else
      if (i == 3) {
        $('.contener3').css('visibility', 'visible');
  $('.contener3').animate({'opacity': "1"},700);

        animationTextApp('.heading1', '.text1', '.line1',
          '.heading2', '.text2', '.line2',
          '.heading3', '.text3', '.line3');
        $('#masaic_5_4,#masaic_5_5').css('visibility', 'visible');
        $('#masaic_5_4').animate({ 'margin-top': '-686px', 'opacity': "1" }, 700);
        $('#masaic_5_5').animate({ 'margin-top': '-686px', 'opacity': "1" }, 800);
      } else
        if (i == 4) {
          $('.contener4').css('visibility', 'visible');
          $('.contener4').animate({'opacity': "1"},700);

          animationTextApp('.heading2', '.text2', '.line2',
            '.heading3', '.text3', '.line3',
            '.heading4', '.text4', '.line4');
          $('#masaic_5_6').css('visibility', 'visible');

          $('#masaic_5_6').animate({ 'margin-top': '-686px', 'opacity': "1" }, 800);
        } else
          if (i == 5) {
            $('.contener5').css('visibility', 'visible');
            $('.contener5').animate({'opacity': "1"},700);

            animationTextApp('.heading3', '.text3', '.line3',
              '.heading4', '.text4', '.line4',
              '.heading5', '.text5', '.line5');
            $('#masaic_5_7').css('visibility', 'visible');
            $('#masaic_5_7').animate({ 'margin-top': '-686px', 'opacity': "1" }, 800);
          } else
            if (i == 6) {
              $('.contener6').css('visibility', 'visible');
  $('.contener6').animate({'opacity': "1"},700);

              animationTextApp('.heading4', '.text4', '.line4',
                '.heading5', '.text5', '.line5',
                '.heading6', '.text6', '.line6');

              $('#masaic_5_8').css('visibility', 'visible');

              $('#masaic_5_8').animate({ 'margin-top': '-630px', 'opacity': "1" }, 800);
            } else
              if (i == 7) {
                $('.contener7').css('visibility', 'visible');
                $('.contener7').animate({'opacity': "1"},700);

                animationTextApp('.heading5', '.text5', '.line5',
                  '.heading6', '.text6', '.line6',
                  '.heading7', '.text7', '.line7');

                $('#masaic_5_9').css('visibility', 'visible');

                $('#masaic_5_9').animate({ 'margin-top': '-600px', 'opacity': "1" }, 800);
              } else
                if (i == 8) {
                  $('.contener8').css('visibility', 'visible');
  $('.contener8').animate({'opacity': "1"},700);

                  animationTextApp('.heading6', '.text6', '.line6',
                    '.heading7', '.text7', '.line7',
                    '.heading8', '.text8', '.line8');
                  $('#masaic_5_10,#masaic_5_11').css('visibility', 'visible');
                  $('#masaic_5_10').animate({ 'margin-top': '-572px', 'opacity': "1" }, 700);
                  $('#masaic_5_11').animate({ 'margin-top': '-572px', 'opacity': "1" }, 600);
                }
  if (i == 9) {
    $('.contener9').css('visibility', 'visible');
  $('.contener9').animate({'opacity': "1"},700);

    $('#masaic_5_12,#masaic_5_13').css('visibility', 'visible');
    $.when(
      $('.heading7').animate({ 'margin-top': '-1850px' }, time1),
      $('.text7').animate({ 'margin-top': '15px' }, time2),
      $('.line7').animate({ 'margin-top': '15px' }, time3),
      $('.heading8').animate({ 'margin-top': '-1450px' }, time1),
      $('.text8').animate({ 'margin-top': '15px' }, time2),
      $('.line8').animate({ 'margin-top': '15px' }, time3),

      $('.heading9').animate({ 'margin-top': '-700px' }, time1),
      $('.text9').animate({ 'margin-top': '10px' }, time3),

      $('#masaic_5_12').animate({ 'margin-top': '-572px', 'opacity': "1" }, 700),
      $('#masaic_5_13').animate({ 'margin-top': '-572px', 'opacity': "1" }, 600),
      $('.masaic_5').css("fill", "#3D37CD"),
      $('.mosaickBlocPage5').animate({ 'margin-top': '100px' }, time3),

      $('.button_down').css('visibility', 'hidden')
    ).then(function () {
      $('.page__5').css('z-index', '500');
      $('.baton_LP').css('z-index', '50');
    });
  }
}

function TextDown_5() {

  $('.heading1,.heading2,.heading3,.heading4,.heading5,.heading6,.heading7,.heading8,.heading9,.button_down,.buttonPages_5_6').finish();
  $('.text1,.text2,.text3,.text4,.text5,.text6,.text7,.text8,.text9').finish();
  $('.line1,.line2,.line3,.line4,.line5,.line6,.line7,.line8').finish();
  $('.page__4SmalProd').finish();
  $('#masaic_5_0,#masaic_5_1,#masaic_5_2,#masaic_5_3,#masaic_5_4,#masaic_5_5,#masaic_5_6,#masaic_5_7,#masaic_5_8,#masaic_5_9,#masaic_5_10,#masaic_5_11,#masaic_5_12,#masaic_5_13,.mosaickBlocPage5').finish();
  $('.contener1,.contener2,.contener3,.contener4,.contener5,.contener6,.contener7,.contener8,.contener9').finish();  
  heidingMasaic();
  i--;
  if (i <= 0) {
    i = 0;
  }

  if (i == 0) {
    $('.page__4SmalProd').finish();
    $('.contener1').animate({'opacity': "0"},700);


    $('.page__4SmalProd').animate({ 'margin-top': '0px' }, 900);
    $('.page__4SmalProd').css('z-index', '2000');

    $('.heading1').animate({ 'margin-top': '0px' }, time1);
    $('.text1').animate({ 'margin-top': '15px' }, time2);
    $('.line1').animate({ 'margin-top': '15px' }, time3);

    $('#masaic_5_0').animate({ 'margin-top': '-100px', 'opacity': "0" }, 700);
    $('#masaic_5_1').animate({ 'margin-top': '-100px', 'opacity': "0" }, time1);

    $('.masaick_5').css('visibility', 'visible');
    $('.buttonPages_5_6').css('visibility', 'visible');

    $.when(
      $('.buttonPages_5_6').animate({ 'opacity': "0" }, 500)
    ).then(function () {
      $('.buttonPages_5_6').css('visibility', 'hidden');

    });
  }
  else
    if (i == 1) {
      $('.contener2').animate({'opacity': "0"},700);

      $.when(
        $('.heading2').animate({ 'margin-top': '0px' }, time1),
        $('.text2').animate({ 'margin-top': '15px' }, time2),
        $('.line2').animate({ 'margin-top': '15px' }, time3),
        $('#masaic_5_2').animate({ 'margin-top': '-100px', 'opacity': "0" }, 700),
        $('#masaic_5_3').animate({ 'margin-top': '-100px', 'opacity': "0" }, 800),
      ).then(function () {
        // $('#masaic_5_2,#masaic_5_3').css('visibility', 'hidden');
        // $('.contener2').css('visibility', 'hidden');
      });

    }
    else
      if (i == 2) {
        $('.contener3').animate({'opacity': "0"},700);
        $.when(
          animationTextDown('.heading1', '.text1', '.line1',
            '.heading2', '.text2', '.line2',
            '.heading3', '.text3', '.line3'),
          $('#masaic_5_4').animate({ 'margin-top': '-100px', 'opacity': "0" }, 700),
          $('#masaic_5_5').animate({ 'margin-top': '-100px', 'opacity': "0" }, 800)
        ).then(function () {
          // $('#masaic_5_4,#masaic_5_5').css('visibility', 'hidden');
          // $('.contener3').css('visibility', 'hidden');
        });


        // $('#masaic_5_4').animate({'margin-top':'0px'},700);
        // $('#masaic_5_5').animate({'margin-top':'0px'},800);
      } else
        if (i == 3) {
          $('.contener4').animate({'opacity': "0"},700);
          $.when(
            animationTextDown('.heading2', '.text2', '.line2',
              '.heading3', '.text3', '.line3',
              '.heading4', '.text4', '.line4'),
            $('#masaic_5_6').animate({ 'margin-top': '-100px', 'opacity': "0" }, 800)
          ).then(function () {
            // $('#masaic_5_6').css('visibility', 'hidden');
            // $('.contener4').css('visibility', 'hidden');
          });

          //  $('#masaic_5_6').animate({'margin-top':'0px'},800);
        } else
          if (i == 4) {
            $('.contener5').animate({'opacity': "0"},700);
            $.when(
              animationTextDown('.heading3', '.text3', '.line3',
                '.heading4', '.text4', '.line4',
                '.heading5', '.text5', '.line5'),
              $('#masaic_5_7').animate({ 'margin-top': '-100px', 'opacity': "0" }, 800)
            ).then(function () {
              // $('#masaic_5_7').css('visibility', 'hidden');
              // $('.contener5').css('visibility', 'hidden');
            });
            // animationTextDown('.heading3','.text3','.line3',
            //                   '.heading4','.text4','.line4',
            //                   '.heading5','.text5','.line5');

            // $('#masaic_5_7').animate({'margin-top':'0px'},800);
          } else
            if (i == 5) {
              $('.contener6').animate({'opacity': "0"},700);
              $.when(
                animationTextDown('.heading4', '.text4', '.line4',
                  '.heading5', '.text5', '.line5',
                  '.heading6', '.text6', '.line6'),
                $('#masaic_5_8').animate({ 'margin-top': '-100px', 'opacity': "0" }, 800)
              ).then(function () {
                // $('#masaic_5_8').css('visibility', 'hidden');
                // $('.contener6').css('visibility', 'hidden');
              });
              // animationTextDown('.heading4','.text4','.line4',
              //                   '.heading5','.text5','.line5',
              //                   '.heading6','.text6','.line6');

              // $('#masaic_5_8').animate({'margin-top':'0px'},800);
            } else
              if (i == 6) {
                $('.contener7').animate({'opacity': "0"},700);
                $.when(
                  animationTextDown('.heading5', '.text5', '.line5',
                    '.heading6', '.text6', '.line6',
                    '.heading7', '.text7', '.line7'),
                  $('#masaic_5_9').animate({ 'margin-top': '-100px', 'opacity': "0" }, 800)
                ).then(function () {
                  // $('#masaic_5_9').css('visibility', 'hidden');
                  // $('.contener7').css('visibility', 'hidden');
                });

                // animationTextDown('.heading5','.text5','.line5',
                //                   '.heading6','.text6','.line6',
                //                   '.heading7','.text7','.line7');

                //  $('#masaic_5_9').animate({'margin-top':'0px'},800);
              } else
                if (i == 7) {
                  $('.contener8').animate({'opacity': "0"},700);
                  $.when(
                    animationTextDown('.heading6', '.text6', '.line6',
                      '.heading7', '.text7', '.line7',
                      '.heading8', '.text8', '.line8'),
                    $('#masaic_5_10').animate({ 'margin-top': '-100px', 'opacity': "0" }, 700),
                    $('#masaic_5_11').animate({ 'margin-top': '0px', 'opacity': "0" }, 600)
                  ).then(function () {
                    // $('#masaic_5_10,#masaic_5_11').css('visibility', 'hidden');
                    // $('.contener8').css('visibility', 'hidden');
                  });
                  // animationTextDown('.heading6','.text6','.line6',
                  //                   '.heading7','.text7','.line7',
                  //                   '.heading8','.text8','.line8');

                  // $('#masaic_5_10').animate({'margin-top':'0px'},700);
                  // $('#masaic_5_11').animate({'margin-top':'0px'},600);
                } else
                  if (i == 8) {
                    $('.contener9').animate({'opacity': "0"},700);
                    $.when(
                      $('.heading7').animate({ 'margin-top': '-850px' }, time1),
                      $('.text7').animate({ 'margin-top': '15px' }, time2),
                      $('.line7').animate({ 'margin-top': '15px' }, time3),

                      $('.heading8').animate({ 'margin-top': '-460px' }, time1),
                      $('.text8').animate({ 'margin-top': '15px' }, time2),
                      $('.line8').animate({ 'margin-top': '15px' }, time3),

                      $('.heading9').animate({ 'margin-top': '100px' }, time1),
                      $('.text9').animate({ 'margin-top': '15px' }, time3),
                      $('#masaic_5_12').animate({ 'margin-top': '-100px', 'opacity': "0" }, 700),
                      $('#masaic_5_13').animate({ 'margin-top': '-90px', 'opacity': "0" }, 600)
                    ).then(function () {
                      // $('#masaic_5_12,#masaic_5_13').css('visibility', 'hidden');
                      // $('.contener9').css('visibility', 'hidden');
                    });
                    // $('.page__5').css('z-index','-1'); 
                    // $('.heading7').animate({'margin-top':'-850px'},time1);
                    // $('.text7').animate({'margin-top':'15px'},time2);
                    // $('.line7').animate({'margin-top':'15px'},time3);

                    // $('.heading8').animate({'margin-top':'-460px'},time1);
                    // $('.text8').animate({'margin-top':'15px'},time2);
                    // $('.line8').animate({'margin-top':'15px'},time3);

                    // $('.heading9').animate({'margin-top':'100px'},time1);
                    // $('.text9').animate({'margin-top':'15px'},time3);

                    // $('#masaic_5_12').animate({'margin-top':'0px'},700);
                    // $('#masaic_5_13').animate({'margin-top':'0px'},600);
                    $('.mosaickBlocPage5').animate({ 'margin-top': '0px' }, time3);

                    $.when(
                      $('.button_down').css('visibility', 'visible')
                    ).then(function () {
                      $('.button_down').animate({ 'opacity': "1" }, 500);
                    });


                    color();
                  }
}

function animationTextApp(obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9) {
  $(obj1).animate({ 'margin-top': '-1450px' }, time1);
  $(obj2).animate({ 'margin-top': '15px' }, time2);
  $(obj3).animate({ 'margin-top': '15px' }, time3);

  $(obj4).animate({ 'margin-top': '-800px' }, time1);
  $(obj5).animate({ 'margin-top': '15px' }, time2);
  $(obj6).animate({ 'margin-top': '15px' }, time3);

  $(obj7).animate({ 'margin-top': '-430px' }, time1);
  $(obj8).animate({ 'margin-top': '15px' }, time2);
  $(obj9).animate({ 'margin-top': '15px' }, time3);
}
function animationTextDown(obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9) {
  $(obj1).animate({ 'margin-top': '-800px' }, time1);
  $(obj2).animate({ 'margin-top': '15px' }, time2);
  $(obj3).animate({ 'margin-top': '15px' }, time3);

  $(obj4).animate({ 'margin-top': '-430px' }, time1);
  $(obj5).animate({ 'margin-top': '15px' }, time2);
  $(obj6).animate({ 'margin-top': '15px' }, time3);

  $(obj7).animate({ 'margin-top': '100px' }, time1);
  $(obj8).animate({ 'margin-top': '15px' }, time2);
  $(obj9).animate({ 'margin-top': '15px' }, time3);
}

export function hidingPages5() {
  $('#masaic_5_0,#masaic_5_1,#masaic_5_2,#masaic_5_3,#masaic_5_4,#masaic_5_5,#masaic_5_6,#masaic_5_7,#masaic_5_8,#masaic_5_9,#masaic_5_10,#masaic_5_11,#masaic_5_12,#masaic_5_13,.mosaickBlocPage5').css('visibility', 'hidden');
  $('.contener1,.contener2,.contener3,.contener4,.contener5,.contener6,.contener7,.contener8,.contener9').css('visibility', 'hidden');
  $('.page__5').css('z-index', '-1');
  $('.HedingText').css('margin-top', '0px');
  $('.text_p5').css('margin-top', '0px');
  $('.page__5').css('visibility', 'hidden');
  $('.page__4SmalProd').css('visibility', 'hidden');
  lastCall = 0;
  i = 0;
  activatePage5 = false;
  $('.masaick_5').css('visibility', 'hidden');
  $('.masaic_5').css("fill", "#3D37CD");
  $('.mosaickBlocPage5').css("margin-top", "0px");
  $('.masaic_5').css("margin-top", "0px");
  $('.buttonPages_5_6').css('visibility', 'hidden');
  $('.button_down').css('visibility', 'hidden');
  $('.button_up').css('visibility', 'hidden');
  color();
  // $('html').css('overflow-y','hidden');
  $('html').css('overflow-x', 'hidden');
  // $('html').css('overflow-y', 'hidden');
  $('body').animate({ 'margin-top': '0px' }, 900);
  // window.pageXOffset=0;
  // window.pageYOffset=0;
  $('.page__5').css('display','none');
  window.scrollTo(0,0);
}

function color() {
  $('#masaic_5_0').css("fill", "#3D37CD");
  $('#masaic_5_1').css("fill", "#28C65C");
  $('#masaic_5_2').css("fill", "#FFBC00");
  $('#masaic_5_3').css("fill", "#FF0000");
  $('#masaic_5_4').css("fill", "#333333");
  $('#masaic_5_5').css("fill", "#FF0000");
  $('#masaic_5_6').css("fill", "#3D37CD");
  $('#masaic_5_7').css("fill", "#28C65C");
  $('#masaic_5_8').css("fill", "#28C65C");
  $('#masaic_5_9').css("fill", "#FF0000");
  $('#masaic_5_10').css("fill", "#3D37CD");
  $('#masaic_5_11').css("fill", "#FFBC00");
  $('#masaic_5_12').css("fill", "#3D37CD");
  $('#masaic_5_13').css("fill", "#3D37CD");
}

export function heidingMasaic() {
  if ($('#masaic_5_0').css('margin-top') > -100) {
    $('#masaic_5_0').css('visibility', 'hidden');
  }
  if ($('#masaic_5_1').css('margin-top') > -100) {
    $('#masaic_5_1').css('visibility', 'hidden');
  }
  if ($('#masaic_5_2').css('margin-top') > -100) {
    $('#masaic_5_2').css('visibility', 'hidden');
  }
  if ($('#masaic_5_3').css('margin-top') > -100) {
    $('#masaic_5_3').css('visibility', 'hidden');
  }
  if ($('#masaic_5_4').css('margin-top') > -100) {
    $('#masaic_5_4').css('visibility', 'hidden');
  }
  if ($('#masaic_5_5').css('margin-top') > -100) {
    $('#masaic_5_5').css('visibility', 'hidden');
  }
  if ($('#masaic_5_6').css('margin-top') > -100) {
    $('#masaic_5_6').css('visibility', 'hidden');
  }
  if ($('#masaic_5_7').css('margin-top') > -100) {
    $('#masaic_5_7').css('visibility', 'hidden');
  }
  if ($('#masaic_5_8').css('margin-top') > -100) {
    $('#masaic_5_8').css('visibility', 'hidden');
  }
  if ($('#masaic_5_9').css('margin-top') > -100) {
    $('#masaic_5_9').css('visibility', 'hidden');
  }
  if ($('#masaic_5_10').css('margin-top') > -100) {
    $('#masaic_5_10').css('visibility', 'hidden');
  }
  if ($('#masaic_5_11').css('margin-top') > -100) {
    $('#masaic_5_11').css('visibility', 'hidden');
  }
  if ($('#masaic_5_12').css('margin-top') > -100) {
    $('#masaic_5_12').css('visibility', 'hidden');
  }
  if ($('#masaic_5_13').css('margin-top') > -100) {
    $('#masaic_5_13').css('visibility', 'hidden');
  }
}
///////////////////////////////////////////////////////////////////////

