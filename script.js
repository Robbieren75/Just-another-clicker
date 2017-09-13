
$(document).ready(function(){
  var clicks = 0;
  var maxMon = 100;
  var maxMonOut;
  /*
  var shopClick = false;
  var settingClick = false;
  var updateClick = false;
  */
  var maxCapPrice;
  var totMax = maxMon+5;

  var monClickPrice = 120;
  var monClickMod = 1;
  
  var autoclickPrice = 120;
  var autoclickMod = 0;
  var autoClick = false;
  
  var upClick = true;
  var settClick = true;
  var updateClick = true;
  
  //////////////Hide the "JS BROKEN" message when JS works///////////////
  $('#broken').css({'display': 'none'});
  $(".pBro").css({'display': 'none'});
  
  ///////////Prevent the user from clicking and dragging the button///////////
  $('img').on('dragstart', function(event) { event.preventDefault(); });

  $('.shop').click(function(){
    $('#maxCapUp').css({'color': 'grey'});
  });
  maxCapPrice = maxMon/2;
  
  if (maxCapPrice > clicks){
    $('#maxMon').mouseenter(function(){
      $(this).css({'cursor': 'default'});
    });
  }
  
  totMax = 5+maxMon;
  
  $('#maxCapUp').text("Increase max cap by 50$: "+maxCapPrice+"$");
  $('#maxCapUp').css({'color': 'grey'});
  
  $('#maxMon').text("Max money to "+totMax+"$");
  $('#maxMonPrice').text(maxCapPrice+"$");
  
  $('#monPerPrice').text(monClickPrice+"$");
  
  $('#autoclick').css({'color': 'grey'});

  $('#monPerClick').text("Increase money per click by 1$: "+monClickPrice+"$");
  $('#monPerClick').css({'color': 'grey'});
  
  $(".shopItem").mouseenter(function(){
    $(this).css({'cursor': 'pointer'});
  });
  $(".shopItem").mouseleave(function(){
    $(this).css({'cursor':'default'});
  });
  $('#autoPrice').mouseenter(function(){
    $(this).css({'cursor': 'pointer'});
  });
  $('#autoPrice').mouseleave(function(){
    $(this).css({'cursor':'default'});
  });
  ///////////////When the menu items are clicked, expand them///////////////
  $('#upgrades').click(function() {
    if (upClick == true){
      $('#upgrades').animate({
        top: "-27px",
        height: "100%"
      }, 250 );
      $('#settings').css({'display': 'none'});
      $('#updates').css({'display': 'none'});
      $('#maxMon').css({'display': 'block'});
      $('#maxMonPrice').css({'display': 'block'});
      $('#monPerClD').css({'display': 'block'});
      $('#monPerPrice').css({'display': 'block'});
      upClick = false;
    }
    else if (upClick == false){
      $('#upgrades').animate({
        top: "80px",
        height: "50px"
      }, 250 );
      $('#settings').css({'display': 'block'});
      $('#updates').css({'display': 'block'});
      $('#maxMon').css({'display': 'none'});
      $('#maxMonPrice').css({'display': 'none'});
      $('#monPerClD').css({'display': 'none'});
      $('#monPerPrice').css({'display': 'none'});
      upClick = true;
    }
  });
  
  $('#settings').click(function() {
    if (settClick == true){
      $('#settings').animate({
        top: "-27px",
        height: "100%"
      }, 250 );
      $('#updates').css({'display': 'none'});
      settClick = false;
    }
    else if (settClick == false){
      $('#settings').animate({
        top: "160px",
        height: "50px"
      }, 250 );
      $('#updates').css({'display': 'block'});
      settClick = true;
    }
  });
  
  $('#updates').click(function() {
    if (updateClick == true){
      $('#updates').animate({
        top: "-27px",
        height: "100%"
      }, 250 );
      $('.updateItem').css({'display': 'block'});
      updateClick = false;
    }
    else if (updateClick == false){
      $('#updates').animate({
        top: "240px",
        height: "50px"
      }, 250 );
      $('.updateItem').css({'display': 'none'});
      updateClick = true;
    }
  });

  $(".menuItem").mouseenter(function(){
    $(this).css({'cursor': 'pointer'});
  });
  $(".menuItem").mouseleave(function(){
    $(this).css({'cursor':'default'});
  });
  
  //////////Max price desktop mode on click//////////
  $('#maxMon').click(function(){
    if (maxCapPrice <= clicks){
      maxMon = maxMon+5;
      clicks = clicks-maxCapPrice;
      maxMonOut = maxMon + "$";
      clickOut = clicks + "$/"
      $(".moneyCount").css({'color': 'black'})
      $(".moneyCount").text(clickOut+maxMonOut);
      maxCapPrice = maxCapPrice+5;
      totMax = 5+maxMon;
      $('#maxMon').text("Max money to "+totMax+"$");
      $(".moneyCount").text(clickOut+maxMonOut);
      $('#maxMonPrice').text(maxCapPrice+"$");
    }
  });
  $('#maxMonPrice').click(function(){
    if (maxCapPrice <= clicks){
      maxMon = maxMon+5;
      clicks = clicks-maxCapPrice;
      maxMonOut = maxMon + "$";
      clickOut = clicks + "$/"
      $(".moneyCount").css({'color': 'black'})
      $(".moneyCount").text(clickOut+maxMonOut);
      maxCapPrice = maxCapPrice+5;
      totMax = 5+maxMon;
      $('#maxMon').text("Max money to "+totMax+"$");
      $(".moneyCount").text(clickOut+maxMonOut);
      $(this).text(maxCapPrice+"$");
    }
  });
  
  /////////////Money per click desktop mode/////////////
  $('#monPerPrice').click(function(){
    if (monClickPrice <= clicks){
      monClickMod++;
      clicks = clicks-monClickPrice;
      maxMonOut = maxMon + "$";
      clickOut = clicks + "$/";
      monClickPrice = monClickPrice+10;
      $(".moneyCount").css({'color': 'black'});
      $(".moneyCount").text(clickOut+maxMonOut);
      $('#monPerPrice').text(monClickPrice+"$");
    }
  });
  $('#monPerClD').click(function(){
    if (monClickPrice <= clicks){
      monClickMod++;
      clicks = clicks-monClickPrice;
      maxMonOut = maxMon + "$";
      clickOut = clicks + "$/";
      monClickPrice = monClickPrice+10;
      $(".moneyCount").css({'color': 'black'});
      $(".moneyCount").text(clickOut+maxMonOut);
      $('#monPerPrice').text(monClickPrice+"$");
    }
  });
  
  /////////////Show the user that they can click it/////////////
  $(".button").mouseenter(function(){
    $(this).css({'cursor': 'pointer'})
  });
  $(".button").mouseleave(function(){
    $(this).css({'cursor': 'default'});
  });
  ///////////////////////Mobile support!!! Yay!!!///////////////////////
  if ($(window).width() < 500){
    $('#menuSide').css({'display': 'none'});
    $(".menuItem").css({'display': 'none'});
    $(".dropdown").css({'display': 'inline-block'});
    $("body").css({'overflow': 'block'});
    $('#shopSide').css({'display': 'none'});
    $(".shopItem").css({'display': 'none'});
    $('#autoPrice').css({'display': 'none'});
    $('#maxMon').css({'display': 'none'});
  }
  if ($(window).width() > 500){
    $('#menuSide').css({'display': 'block'});
    $(".menuItem").css({'display': 'block'});
    $(".dropdown").css({'display': 'none'});
    $("body").css({'overflow': 'hidden'});
    $('#shopSide').css({'display': 'block'});
    $(".shopItem").css({'display': 'block'});
    $('#autoPrice').css({'display': 'block'});
    $('#maxMon').css({'display': 'none'});
  }
  
  ///////////////////////main clicking "loop"///////////////////////
  $(".button").click(function(){
    clicks += monClickMod;
    /////////////Check if you've reached your max/////////////
    if (clicks >= maxMon){
      $(".moneyCount").css({'color': 'red'});
      if (clicks >= maxMon + 16){
        clicks = maxMon+15;
      }
    }
    if (clicks <= maxMon){
      $(".moneyCount").css({'color': 'black'});
    }

    var clickOut = clicks + "$/";
    maxMonOut = maxMon + "$";
    $(".moneyCount").text(clickOut + maxMonOut);
    $(this).attr('src', 'Images/button%20pressed.png');
    $(this).delay(50);
    $(this).queue(function(next) { $(this).attr('src', 'Images/button%20released.png'); next(); });
    document.title = clicks + "$ - Just another sh**** clicker";

    //Add turning the upgrade grey if you can't afford it
    //"Increase max cap" shop item
    
    if (clicks < maxCapPrice){
      $('#maxCapUp').text("Increase max cap by 50$: "+maxCapPrice+"$");
      $('#maxCapUp').css({'color': 'grey'});
      
      totMax = 5+maxMon;
      $('#maxMon').text("Max money to "+totMax+"$");
    }
    if (clicks >= maxCapPrice){
      $('#maxCapUp').css({'color': 'black'})
    }
    $('#maxCapUp').click(function(){
      if (clicks >= maxCapPrice){
        maxMon = maxMon+5;
        clicks = clicks-maxCapPrice;
        maxMonOut = maxMon + "$";
        clickOut = clicks + "$/"
        $(".moneyCount").css({'color': 'black'})
        $(".moneyCount").text(clickOut+maxMonOut);
        maxCapPrice = maxCapPrice+5;
        $(this).text("Increase max cap by 50$: "+maxCapPrice+"$");
        $(this).css({'color': 'grey'});
      }
    });
    //////////Menu desktop mode on click//////////
    
    $(".maxMonUp").click(function(){
      if (maxCapPrice <= clicks){
        $(this).css({'cursor': 'pointer'});
        maxMon = maxMon+5;
        clicks = clicks-maxCapPrice;
        maxCapPrice = maxCapPrice+5;
        totMax = 5+maxMon;
        $(this).text("Max money to "+totMax+"$");
      }
    });
    
    if (clicks < monClickPrice){
      $('#monPerClick').css({'color': 'grey'});
    }
    if (clicks >= monClickPrice){
      $('#monPerClick').css({'color': 'black'});
    };
    $('#monPerClick').click(function(){
      if (clicks >= monClickPrice){
        clicks = clicks-monClickPrice;
        monClickPrice = monClickPrice+10;
        $(this).css({'color': 'grey'});
        $(this).text("Increase money per click by 1$: "+monClickPrice+"$");
        monClickMod=monClickMod+1;
        clickOut = clicks + "$/"
        $(".moneyCount").css({'color': 'black'})
        $(".moneyCount").text(clickOut+maxMonOut);
      }
    });
    
    if (clicks < autoclickPrice){
      $('#autoclick').css({'color': 'grey'});
    }
  });
  
  ///////////////////////Old Menu///////////////////////
  /*
  //Shop menu
  $("#shop").mouseenter(function(){
    $(this).css({'cursor': 'pointer'});
  });
  $( "#shop" ).click(function() {
    if (shopClick == true){
      $( "#shop" ).animate({
        height: "36px"
      }, 250 );
      shopClick = false;
    }
    else if (shopClick == false){
      $( "#shop" ).animate({
        height: "400px"
      }, 250 );
      shopClick = true;
    }
  });
  //Settings menu
  $("#settings").mouseenter(function(){
    $(this).css({'cursor': 'pointer'});
  });
  $("#settings").click(function(){
    if (settingClick == true){
      $( "#settings" ).animate({
        height: "36px"
      }, 250 );
      settingClick = false;
    }
    else if (settingClick == false){
      $( "#settings" ).animate({
        height: "400px"
      }, 250 );
      settingClick = true;
    }
  });
  //Update log menu
  $("#updates").mouseenter(function(){
    $(this).css({'cursor': 'pointer'});
  });
  $("#updates").click(function(){
    if (updateClick == true){
      $( "#updates" ).animate({
        height: "36px"
      }, 250 );
      updateClick = false;
    }
    else if (updateClick == false){
      $( "#updates" ).animate({
        height: "400px"
      }, 250 );
      updateClick = true;
    }
  });
  */
});