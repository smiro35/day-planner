console.log("script loaded");



$(document).ready(function() {





    function whenSaved() {
        //lets create a var for the button clickec and give it the id atrr
        var id = $(this).attr("id")

        //now lets create a var for the input box and connect it to the button with the id attr
        var currentPlan = $("#plans-" + id).val().trim();

        // now lets save whatever is input and save into local storage
        localStorage.setItem(id, currentPlan);

        // now lets get all we've saved from local storage

        localStorage.getItem(currentPlan);
    }




    $('.saveBtn').on("click", whenSaved);

    $("#currentDay").html(moment().format("dddd MMMM Do hh:mm:ss a"));
    //1,2,3,4,5 (6,7,8) 9,10,11,12

    //  var plan = localStorage.getItem(9);
    //  $("#plans-9").val(plan);

    //  var plan = localStorage.getItem(10);
    //  $("#plans-10").val(plan);

    //  var plan = localStorage.getItem(10);
    //  $("#plans-6").val(plan);

    // --- 5



    function colorScheme() {


        var date = new Date(); //0-23
        console.log(date);

        var mins = date.getMinutes();
        console.log(mins);

        var hrs = date.getHours();
        console.log(hrs);

        var past = (date - hrs) / Math.pow(1000, 4);
        console.log(past);

        //sets num3 to 123.456

        if (hrs == 0) {

            hrs == 12;

        }
        if (hrs == 12) {

            hrs == h - 12;
            console.log(this);

        }




        var intake = document.querySelectorAll("input");



        if (mins > 3) {

            console.log("it is");


            (intake).css("background", "red");

        } else {

            (intake).css("background", "green");

        }

    }
    colorScheme();

});

// console.log(date);

// setTimeout(function() {

//         var start = Date.now();
//         var millis = Date.now() - start;

//         console.log("seconds elapsed = " + Math.floor(millis / 1000));


//         if (millis > 4) {

//             alert("crazy")

//         } else {

//             alert("not greater")

//         }



// }
// var h = Date.getHours(); //0-59
// var m = Date.getMinutes(); //0-59

// if (m > 45) {

//     alert("crazy")

// } else {

//     alert("not greater")

// }









//localStorage.setItem("first", "first item");


//console.log(localStorage.getItem("first"))


/*
                     we need to do something with the save Button. 
    
                     the save button should have a click event
    
                     the save button now also need to not submit the 
                     info in the input box, but needs to save it to
                     local storage. So, we need a fuction for this, and
                     should be in relation to the click event. 
    
                    */

// Save button local storage function here

// function whenSaved() {

// }


// $('#saveBtn').on("click", whenSaved);

// /*
// I'm starting t believe we should assign the input 
// area as an empty object. Lets call it step-1.