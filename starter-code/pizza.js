// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

    // Constants 
    var ingredients = {
    pepperonni: {name: 'Pepperonni', price: 1},
    mushrooms: {name: 'Mushrooms', price: 1},
    greenPeppers: {name: 'Green Peppers', price: 1},
    whiteSauce: {name: 'White sauce', price: 3},
    glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
  }

    // Initial value of the state (the state values can change over time)
    var state = {
        pepperonni: true,
        mushrooms: true,
        greenPeppers: true,
        whiteSauce: false,
        glutenFreeCrust: true
      }

      // This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed

    function renderEverything() {
        renderPepperonni()
        renderMushrooms()
        renderGreenPeppers()
        renderWhiteSauce()
        renderGlutenFreeCrust()
        renderButtons()
        renderPrice()
    }


    //turns on and off the buttons for the classes
    $(".btn-pepperonni").click(function() {
        $(".pep").toggle();
    });

    $(".btn-mushrooms").click(function() {
        $(".mushroom").toggle();
    });

    $(".btn-green-peppers").click(function() {
        $(".green-pepper").toggle();
    });

    $(".btn-sauce").click(function() {
        $($(".sauce")).toggleClass('sauce-white');
      
    });

    $(".btn-crust").click(function() {
            $(".crust").toggleClass('crust-gluten-free');
    });


    //adds the active class

    $(".btn").click(function() {
        $(".btn").toggleClass('active');
    })



})