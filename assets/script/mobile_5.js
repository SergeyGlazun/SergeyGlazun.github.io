let posX = 0;
let posY = 0;
const screenWidth = window.screen.width;
let activatePage5 = false;
document.addEventListener('touchmove', event => {
    
    if(screenWidth<=490){
        
        const { clientX, clientY } = event.touches[0];
     
      if($('.page__4SmalProd').css('visibility')=='visible'){      
        activatePage5=true;   
      }
        if (posY > clientY) {
            //верх
            if(activatePage5==true){
                handleDown();          
          }   
        }
    
        if (posY < clientY) {
            //низ
            if(activatePage5==true){                       
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
    activatePage5=true; 
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
    $('.heading1,.heading2,.heading3,.heading4,.heading5,.heading6,.heading7,.heading8,.heading9').finish(); 
    $('.text1,.text2,.text3,.text4,.text5,.text6,.text7,.text8,.text9').finish();
    $('.line1,.line2,.line3,.line4,.line5,.line6,.line7,.line8').finish();
    $('.page__4SmalProd').finish();   
    $('.page__5').css('z-index','5');
    $('#masaic_5_0,#masaic_5_1,#masaic_5_2,#masaic_5_3,#masaic_5_4,#masaic_5_5,#masaic_5_6,#masaic_5_7,#masaic_5_8,#masaic_5_9,#masaic_5_10,#masaic_5_11,#masaic_5_12,#masaic_5_13,.mosaickBlocPage5').finish();  

    i++;
    if(i>=9){
        i=9;
    }   
    $('.page__5').css('z-index','-1');
    $('.baton_LP').css('z-index','-1');
 
    if(i==1){   
      $('#masaic_5_0,#masaic_5_1,#masaic_5_2,#masaic_5_3,#masaic_5_4,#masaic_5_5,#masaic_5_6,#masaic_5_7,#masaic_5_8,#masaic_5_9,#masaic_5_10,#masaic_5_11,#masaic_5_12,#masaic_5_13,.mosaickBlocPage5').css('visibility','visible');
      $('.contener1,.contener2,.contener3,.contener4,.contener5,.contener6,.contener7,.contener8,.contener9').css('visibility','visible');

        $('.heading1').animate({'margin-top':'-880px'},time1);
        $('.text1').animate({'margin-top':'-20px'},time2);
        $('.line1').animate({'margin-top':'5px'},time3);
     
     
        $('.page__4SmalProd').animate({'margin-top':'-700px'},900);
        $('.masaick_5').css('visibility','visible');
       

        $('#masaic_5_0').css('visibility','visible');
        $('#masaic_5_1').css('visibility','visible');

        $('#masaic_5_0').animate({'margin-top': '-900px'},700);
        $('#masaic_5_1').animate({'margin-top':'-900px'},time1);
        
        
    }else
    if(i==2){
        $('.heading2').animate({'margin-top':'-630px'},time1);
        $('.text2').animate({'margin-top':'-20px'},time2);
        $('.line2').animate({'margin-top':'5px'},time3);
        
        $('#masaic_5_2,#masaic_5_3').css('visibility','visible');
        $('#masaic_5_2').animate({'margin-top': '-899px'},700);
        $('#masaic_5_3').animate({'margin-top':'-899px'},800);    
    }else
    if(i==3){    
      animationTextApp('.heading1','.text1','.line1',
                        '.heading2','.text2','.line2',
                        '.heading3','.text3','.line3');

                        $('#masaic_5_4,#masaic_5_5').css('visibility','visible');
      $('#masaic_5_4').animate({'margin-top': '-870px'},700);
      $('#masaic_5_5').animate({'margin-top':'-870px'},800);
    }else
    if(i==4){     
      animationTextApp('.heading2','.text2','.line2',
                       '.heading3','.text3','.line3',
                       '.heading4','.text4','.line4');

                       $('#masaic_5_6').css('visibility','visible');

      $('#masaic_5_6').animate({'margin-top':'-867px'},800);
    }else
    if(i==5){     
      animationTextApp('.heading3','.text3','.line3',
                       '.heading4','.text4','.line4',
                       '.heading5','.text5','.line5');

                       $('#masaic_5_7').css('visibility','visible');
      $('#masaic_5_7').animate({'margin-top':'-867px'},800);
    }else
    if(i==6){     
      animationTextApp('.heading4','.text4','.line4',
                       '.heading5','.text5','.line5',
                       '.heading6','.text6','.line6');

                       $('#masaic_5_8').css('visibility','visible');

      $('#masaic_5_8').animate({'margin-top':'-850px'},800);
    }else
    if(i==7){     
                       $('.heading5').animate({'margin-top':'-1450px'},time1);
                       $('.text5').animate({'margin-top':'5px'},time2);
                       $('.line5').animate({'margin-top':'5px'},time3);
                     
                       $('.heading6').animate({'margin-top':'-868px'},time1);
                       $('.text6').animate({'margin-top':'-20px'},time2);
                       $('.line6').animate({'margin-top':'5px'},time3);
                     
                       $('#masaic_5_10,#masaic_5_11').css('visibility','visible');

                       $('#masaic_5_9').css('visibility','visible')

                       $('.heading7').animate({'margin-top':'-610px'},time1);
                       $('.text7').animate({'margin-top':'-20px'},time2);
                       $('.line7').animate({'margin-top':'5px'},time3);
     $('#masaic_5_9').animate({'margin-top':'-843px'},800);
    }else
    if(i==8){     
        $('.heading6').animate({'margin-top':'-1450px'},time1);
        $('.text6').animate({'margin-top':'5px'},time2);
        $('.line6').animate({'margin-top':'5px'},time3);
      
        $('.heading7').animate({'margin-top':'-850px'},time1);
        $('.text7').animate({'margin-top':'-20px'},time2);
        $('.line7').animate({'margin-top':'5px'},time3);
      
        $('.heading8').animate({'margin-top':'-580px'},time1);
        $('.text8').animate({'margin-top':'-20px'},time2);
        $('.line8').animate({'margin-top':'5px'},time3);

        $('#masaic_5_10,#masaic_5_11').css('visibility','visible');
                       $('#masaic_5_10').animate({'margin-top':'-820px'},700);
                       $('#masaic_5_11').animate({'margin-top':'-820px'},600);
    }
    if(i==9){
      $('#masaic_5_12,#masaic_5_13').css('visibility','visible');
      $.when( 
        $('.heading7').animate({'margin-top':'-1850px'},time1),
        $('.text7').animate({'margin-top':'5px'},time2),
        $('.line7').animate({'margin-top':'5px'},time3),   
        $('.heading8').animate({'margin-top':'-1450px'},time1),
        $('.text8').animate({'margin-top':'5px'},time2),
        $('.line8').animate({'margin-top':'5px'},time3),
  
        $('.heading9').animate({'margin-top':'-810px'},time1),
        $('.text9').animate({'margin-top':'10px'},time3),
  
        $('#masaic_5_12').animate({'margin-top':'-820px'},700),
        $('#masaic_5_13').animate({'margin-top':'-820px'},600),
        $('.masaic_5').css("fill","#3D37CD"),    
        $('.mosaickBlocPage5').animate({'margin-top':'20px'},time3),
  
        $('#clik').css('visibility','visible')
            ).then(function () { 
              $('.page__5').css('z-index','500');
      $('.baton_LP').css('z-index','50');
            });

    }
}

function TextDown(){

  $('.heading1,.heading2,.heading3,.heading4,.heading5,.heading6,.heading7,.heading8,.heading9').finish(); 
  $('.text1,.text2,.text3,.text4,.text5,.text6,.text7,.text8,.text9').finish();
  $('.line1,.line2,.line3,.line4,.line5,.line6,.line7,.line8').finish();
  $('.page__4SmalProd').finish();   
  $('#masaic_5_0,#masaic_5_1,#masaic_5_2,#masaic_5_3,#masaic_5_4,#masaic_5_5,#masaic_5_6,#masaic_5_7,#masaic_5_8,#masaic_5_9,#masaic_5_10,#masaic_5_11,#masaic_5_12,#masaic_5_13,.mosaickBlocPage5').finish();
    i--;
   
  if(i<=0){ 
      i=0;  
    }

    if(i==0){
        $('.page__4SmalProd').finish(); 
        $('.page__4SmalProd').animate({'margin-top':'100px'},900);
        
        $('.heading1').animate({'margin-top':'0px'},time1);
        $('.text1').animate({'margin-top':'-20px'},time2);
        $('.line1').animate({'margin-top':'5px'},time3);
        
        $('#masaic_5_0').animate({'margin-top': '0px'},700);
        $('#masaic_5_1').animate({'margin-top':'0px'},time1);
        
        $('.masaick_5').css('visibility','visible');
    }
    else
    if(i==1){
        $('.heading2').animate({'margin-top':'0px'},time1);
        $('.text2').animate({'margin-top':'-20px'},time2);
        $('.line2').animate({'margin-top':'5px'},time3);

        $('#masaic_5_2').animate({'margin-top': '0px'},700);
        $('#masaic_5_3').animate({'margin-top':'0px'},800);  
    }
    else
    if(i==2){
      // $('.heading1').animate({'margin-top':'-880px'},time1);
      // $('.text1').animate({'margin-top':'-20px'},time2);
      // $('.line1').animate({'margin-top':'5px'},time3);

      // $('.heading2').animate({'margin-top':'-640px'},time1);
      // $('.text2').animate({'margin-top':'-20px'},time2);
      // $('.line2').animate({'margin-top':'5px'},time3);

      // $('.heading3').animate({'margin-top':'0px'},time1);
      // $('.text3').animate({'margin-top':'-20px'},time2);
      // $('.line3').animate({'margin-top':'5px'},time3);

    
      animationTextDown('.heading1','.text1','.line1',
                        '.heading2','.text2','.line2',
                        '.heading3','.text3','.line3');
                        
      $('#masaic_5_4').animate({'margin-top':'0px'},700);
      $('#masaic_5_5').animate({'margin-top':'0px'},800);
    }else
    if(i==3){
      animationTextDown('.heading2','.text2','.line2',
                    '.heading3','.text3','.line3',
                    '.heading4','.text4','.line4');
     $('#masaic_5_6').animate({'margin-top':'0px'},800);
  }else
  if(i==4){     
    animationTextDown('.heading3','.text3','.line3',
                      '.heading4','.text4','.line4',
                      '.heading5','.text5','.line5');
    $('#masaic_5_7').animate({'margin-top':'0px'},800);
  }else
  if(i==5){     
    animationTextDown('.heading4','.text4','.line4',
                      '.heading5','.text5','.line5',
                      '.heading6','.text6','.line6');
    $('#masaic_5_8').animate({'margin-top':'0px'},800);
  }else
  if(i==6){     
    animationTextDown('.heading5','.text5','.line5',
                      '.heading6','.text6','.line6',
                      '.heading7','.text7','.line7');
   $('#masaic_5_9').animate({'margin-top':'0px'},800);
  }else
  if(i==7){     
    // animationTextDown('.heading6','.text6','.line6',
    //                   '.heading7','.text7','.line7',
    //                   '.heading8','.text8','.line8');
    //                   $('#masaic_5_10').animate({'margin-top':'0px'},700);
    //                   $('#masaic_5_11').animate({'margin-top':'0px'},600);

                       $('.heading6').animate({'margin-top':'-860px'},time1);
                       $('.text6').animate({'margin-top':'5px'},time2);
                       $('.line6').animate({'margin-top':'5px'},time3);
                     
                       $('.heading7').animate({'margin-top':'-600px'},time1);
                       $('.text7').animate({'margin-top':'-20px'},time2);
                       $('.line7').animate({'margin-top':'5px'},time3);
                     
                       $('#masaic_5_10').animate({'margin-top':'0px'},700);
                      $('#masaic_5_11').animate({'margin-top':'0px'},600);

                       $('.heading8').animate({'margin-top':'-0px'},time1);
                       $('.text8').animate({'margin-top':'-20px'},time2);
                       $('.line8').animate({'margin-top':'5px'},time3);
  }else
  if(i==8){
    // $('#clik').css('visibility','hidden');
    $('.heading7').animate({'margin-top':'-850px'},time1);
    $('.text7').animate({'margin-top':'-20px'},time2);
    $('.line7').animate({'margin-top':'5px'},time3);
                
    $('.heading8').animate({'margin-top':'-570px'},time1);
    $('.text8').animate({'margin-top':'-20px'},time2);
    $('.line8').animate({'margin-top':'5px'},time3);

    $('.heading9').animate({'margin-top':'100px'},time1);
    $('.text9').animate({'margin-top':'5px'},time3);

    $('#masaic_5_12').animate({'margin-top':'0px'},700);
    $('#masaic_5_13').animate({'margin-top':'0px'},600);
    $('.mosaickBlocPage5').animate({'margin-top':'0px'},time3);
    color ();
   
    $('.page__5').css('z-index','-1');
    $('.baton_LP').css('z-index','-1');
  }
}
 
function animationTextApp(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9){
  $(obj1).animate({'margin-top':'-1450px'},time1);
  $(obj2).animate({'margin-top':'5px'},time2);
  $(obj3).animate({'margin-top':'5px'},time3);

  $(obj4).animate({'margin-top':'-880px'},time1);
  $(obj5).animate({'margin-top':'-20px'},time2);
  $(obj6).animate({'margin-top':'5px'},time3);

  $(obj7).animate({'margin-top':'-600px'},time1);
  $(obj8).animate({'margin-top':'-20px'},time2);
  $(obj9).animate({'margin-top':'5px'},time3);
}
function animationTextDown(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9){
      $(obj1).animate({'margin-top':'-880px'},time1);
      $(obj2).animate({'margin-top':'-20px'},time2);
      $(obj3).animate({'margin-top':'5px'},time3);

      $(obj4).animate({'margin-top':'-600px'},time1);
      $(obj5).animate({'margin-top':'-20px'},time2);
      $(obj6).animate({'margin-top':'5px'},time3);

      $(obj7).animate({'margin-top':'0px'},time1);
      $(obj8).animate({'margin-top':'5px'},time2);
      $(obj9).animate({'margin-top':'5px'},time3);
}

export function hidingPages5_modile(){
  $('.page__5').css('z-index','-1'); 
  $('.HedingText').css('margin-top','100px');
  $('.text_p5').css('margin-top','100px');  
  $('.page__5').css('visibility','hidden');
  $('.page__4SmalProd').css('visibility','hidden');
  lastCall = 0;
  i=0;
  activatePage5 = false; 
  $('.masaick_5').css('visibility','hidden'); 
  $('.masaic_5').css("fill","#3D37CD");
  $('.mosaickBlocPage5').css("margin-top","0px");
  $('.masaic_5').css("margin-top","0px");
  $('.page__5').css('z-index','-1');
  $('.baton_LP').css('z-index','-1');
  color(); 
}

function color (){
  $('#masaic_5_0').css("fill","#3D37CD");
  $('#masaic_5_1').css("fill","#28C65C");
  $('#masaic_5_2').css("fill","#FFBC00");
  $('#masaic_5_3').css("fill","#FF0000");
  $('#masaic_5_4').css("fill","#333333");
  $('#masaic_5_5').css("fill","#FF0000");
  $('#masaic_5_6').css("fill","#3D37CD");
  $('#masaic_5_7').css("fill","#28C65C");
  $('#masaic_5_8').css("fill","#28C65C");
  $('#masaic_5_9').css("fill","#FF0000");
  $('#masaic_5_10').css("fill","#3D37CD");
  $('#masaic_5_11').css("fill","#FFBC00");      
  $('#masaic_5_12').css("fill","#3D37CD");
  $('#masaic_5_13').css("fill","#3D37CD");
}
