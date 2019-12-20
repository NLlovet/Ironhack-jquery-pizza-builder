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

  let basePrice = 18;
    // Initial value of the state (the state values can change over time)
    var state = {
        pepperonni: true,
        mushrooms: true,
        greenPeppers: true,
        whiteSauce: false,
        glutenFreeCrust: true,
      }

      // This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed

    function renderEverything() {
        renderButtons()
        renderPrice()
    }


    //turns on and off the buttons for the classes
    $(".btn-pepperonni").click(function() {
        $(".pep").toggle();
        state.pepperonni = !state.pepperonni;
        if(state.pepperonni){
            basePrice++;

        }
        else{
            basePrice--;
        }
    });

    $(".btn-mushrooms").click(function() {
        $(".mushroom").toggle();
        state.mushrooms = !state.mushrooms;
        if(state.mushrooms){
            basePrice++;
        }
        else {
            basePrice--;
        }
    });

    $(".btn-green-peppers").click(function() {
        $(".green-pepper").toggle();
        state.greenPeppers = !state.greenPeppers;
        if(state.greenPeppers){
            basePrice++;

        }
        
        else {
            basePrice--;
        }

    });

    $(".btn-sauce").click(function() {
        $($(".sauce")).toggleClass('sauce-white');
        state.whiteSauce = !state.whiteSauce;
        if(state.whiteSauce){
            basePrice += 3;
        }
        
        else {
            basePrice -= 3;
        }

    });

    $(".btn-crust").click(function() {
            $(".crust").toggleClass('crust-gluten-free');
            state.glutenFreeCrust = !state.glutenFreeCrust;
            if(state.glutenFreeCrust){
                basePrice += 5;
            }
            
        else {
            basePrice -= 5;
        }
        });


    //adds the active class

    $(".btn").click(function() {
        renderEverything();
    })

    //does this even work?

    function renderButtons() {
        
        document.querySelectorAll(".btn").forEach(function (button, index) {
        
            let states = Object.keys(state)
        
            if (state[states[index]]) {
              button.classList.remove("active");
            }
            else {
              button.classList.add("active");
            }
          })
    }

    function renderPrice(){
        $("strong").html(`<strong> $${basePrice}`);
    }


})