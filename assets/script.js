console.log("script loaded");



$(document).ready(function() {

    function whenSaved() {
        console.log("button clicked")

        var id = $(this).attr("id")
        console.log(id);

        var currentPlan = $("#plans-" + id).val().trim();

        console.log(currentPlan);

        localStorage.setItem(id, currentPlan);

    }


    var today = document.querySelector("#currentDay");






    // function colorScheme() {

    //     console.log("working");




    // };

    // colorScheme();




    //1,2,3,4,5 (6,7,8) 9,10,11,12

    //  var plan = localStorage.getItem(9);
    //  $("#plans-9").val(plan);

    //  var plan = localStorage.getItem(10);
    //  $("#plans-10").val(plan);

    //  var plan = localStorage.getItem(10);
    //  $("#plans-6").val(plan);

    // --- 5




    $("#currentDay").html(moment().format("dddd MMMM Do  h:mm:ss "))

    $('.saveBtn').on("click", whenSaved);




    var today = $.now();






























    //now lwts try and set the times.col-md-2


    //localStorage.setItem("first", "first item");


    //console.log(localStorage.getItem("first"))




    // function many() {

    //     var y = $(".row");

    //     for (y = 0; y < 5; y++) {


    //     }

    // }

    // (y);





    // var bars = document.getElementById("#slot");
    // var timeEl = document.getElementById("#time");

    // var planEl = document.querySelector("#plans");

    // function extraBars() {

    //     for (bars = 0; bars < 5; bars++) {


    //         console.log("here");







    //     };

    // }



    // extraBars();


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



    // */

    // var step1 = document.querySelector("#plans");

    // step1 = {};





});

























// var planInput = document.querySelector("#plan-text");
// var planForm = document.querySelector("#calender-form");
// var planList = document.querySelector("#plan-list");
// var planCountSpan = document.querySelector("#plan-count");

// var plans = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

// renderplans();

// function renderplans() {
//     // Clear todoList element and update todoCountSpan
//     planList.innerHTML = "";
//     planCountSpan.textContent = plans.length;

//     // Render a new li for each todo
//     for (var i = 0; i < plans.length; i++) {
//         var plans = plans[i];

//         var li = document.createElement("li");
//         li.textContent = plan;
//         li.setAttribute("data-index", i);


//         var button = document.createElement("button");
//         button.textContent = "complete";
//         li.appendChild(button);

//         planList.appendChild(li);
//     }
// }

// When form is submitted...
// planForm.addEventListener("submit", function(event) {
//     event.preventDefault();

//     var planText = planInput.value.trim();

// Return from function early if submitted todoText is blank
// if (planText === "") {
//     return;
// }

// Add new todoText to todos array, clear the input
// plan.push(planText);
// planInput.value = "";

// Re-render the list
//     renderplans();
// });

// planList.addEventListener("click", function(event) {
//     var element = event.target;

//     if (element.matches("button")) {

//         var Index = element.parentElement.getAttribute("data-index");
//         plans.splice(index, 1);
//         renderplans();

//     }
// });









































// var bars = document.getElementById("#slot");
// var timeEl = document.getElementById("#time");

// var planEl = document.querySelector("#plans");

// function extraBars() {

//     for (bars = 0; bars < 5; bars++) {


//         console.log("here");







//     };

// }



// extraBars();


/*
 we need to do something with the save Button. 

 the save button should have a click event

 the save button now also need to not submit the 
 info in the input box, but needs to save it to
 local storage. So, we need a fuction for this, and
 should be in relation to the click event. 

*/

/* What variables do we need?
time(hour)
future
present




*/





/* What functions do we need?





*/






// // Save button local storage function here

// function whenSaved() {

//     localStorage.setItem("the_key", "a value");

//     var ? = localStorage.getItem("the_key")

// }


// $('#saveBtn').on("click", whenSaved);

// /*
// I'm starting t believe we should assign the input 
// area as an empty object. Lets call it step-1.

// In this object we will need to set it up to 
// automatically change inputs to strings which can
// be saved on local storage. 



// */

// var step1 = document.querySelector("#plans");

// step1 = {};






















// var planInput = document.querySelector("#plan-text");
// var planForm = document.querySelector("#calender-form");
// var planList = document.querySelector("#plan-list");
// var planCountSpan = document.querySelector("#plan-count");

// var plans = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

// renderplans();

// function renderplans() {
//     // Clear todoList element and update todoCountSpan
//     planList.innerHTML = "";
//     planCountSpan.textContent = plans.length;

//     // Render a new li for each todo
//     for (var i = 0; i < plans.length; i++) {
//         var plans = plans[i];

//         var li = document.createElement("li");
//         li.textContent = plan;
//         li.setAttribute("data-index", i);


//         var button = document.createElement("button");
//         button.textContent = "complete";
//         li.appendChild(button);

//         planList.appendChild(li);
//     }
// }

// When form is submitted...
// planForm.addEventListener("submit", function(event) {
//     event.preventDefault();

//     var planText = planInput.value.trim();

// Return from function early if submitted todoText is blank
// if (planText === "") {
//     return;
// }

// Add new todoText to todos array, clear the input
// plan.push(planText);
// planInput.value = "";

// Re-render the list
//     renderplans();
// });

// planList.addEventListener("click", function(event) {
//     var element = event.target;

//     if (element.matches("button")) {

//         var Index = element.parentElement.getAttribute("data-index");
//         plans.splice(index, 1);
//         renderplans();

//     }
// });