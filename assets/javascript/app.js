$(document).ready(function(){
    //start button is clicked
    
    $("#start").on("click", function(start){
        //questions and answers stored as variables
        var questionAndAnswer;
        var timer = 30;
        var intervalId;

        function start(){
        //timer starts
        intervalId = setInterval(decrement, 1000);

            function decrement(timer){
            timerDiv = $("<div>").append(timer);
            timer--;
            if (timer === 0) {
            stop();
            }
        }
        //functions for getting user answer
        //user guesses
        //display right and wrong answer count
        function stop (){
        console.log("game over");
        }
        }
    });
});