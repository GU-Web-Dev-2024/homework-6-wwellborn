 // Wait until the document's DOM is ready
 $(document).ready(function() {

                
    $("#timer").addClass("timer-background");
    var seconds = "00";
    var tens = "00";
    
   /* var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset'); */

    //JS DOM selection to JQuery
    var $appendTens = $("#tens");
    var $appendSeconds = $("#seconds");
    var $buttonStart = $("#button-start");
    var $buttonStop = $("#button-stop");
    var $buttonReset = $("#button-reset");
    var $timer = $("#timer");

    var interval;
    var backgroundInterval;

    $(".wrapper").css("border", "5px solid purple");
    $("*").css("font-family", "Fantasy, Papyrus");
    $(".wrapper").css("background-color", "orange");

    $("#button-start, #button-stop, #button-reset").addClass("button-style");

    function animateBackground() {
        backgroundInterval = setInterval(function() {
        $timer.animate({ opacity: 0.8 }, 500).animate({ opacity: 1.0 }, 500);
        }, 1000);
    }
    
    function buttonStartClicked() {
        clearInterval(interval);
        clearInterval(backgroundInterval);
        interval = setInterval(startTimer, 10);

        $("#timer").attr("style", "background-color:green");
        animateBackground();
    }
    $buttonStart.on("click", buttonStartClicked);

     
    
    function buttonStopClicked() {
        clearInterval(interval);
        clearInterval(backgroundInterval);
        $timer.attr("style", "background-color:red");
        $timer.stop(true, true);
        $timer.css({opacity:1.0});
    }
    $buttonStop.on("click", buttonStopClicked);


    
    
    function buttonResetClicked() {
        clearInterval(interval);
        clearInterval(backgroundInterval);
        $timer.attr("style", "background-color:gray");
        $timer.stop(true, true);
        $timer.css({opacity:1.0});
        tens = "00";
        seconds = "00";
        $appendTens.html(tens);
        $appendSeconds.html(seconds);
        
    }
    $buttonReset.on("click", buttonResetClicked);


    function startTimer() {
        tens++;

        if (tens < 9) {
            $appendTens.html("0" + tens);
        }

        if (tens > 9) {
            $appendTens.html(tens);

        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            $appendSeconds.html("0" + seconds);
            tens = 0;
            $appendTens.html("00");
        }

        if (seconds > 9) {
            $appendSeconds.html(seconds);
        }
    }
});