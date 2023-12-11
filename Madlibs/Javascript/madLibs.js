console.log("It's Working");


function write() {
    console.log("Written inside the function");


    var input1 = document.getElementById('input1').value;
    console.log(input1);

    var input2 = document.getElementById('input2').value;
    console.log(input2);

    var input3 = document.getElementById('input3').value;
    console.log(input3);

    var input4 = document.getElementById('input4').value;
    console.log(input4);

    var input5 = document.getElementById('input5').value;
    console.log(input5);

    var input6 = document.getElementById('input6').value;
    console.log(input6);

    var input7 = document.getElementById('input7').value;
    console.log(input7);

    var input8 = document.getElementById('input8').value;
    console.log(input8);

    var input9 = document.getElementById('input9').value;
    console.log(input9);

    var input10 = document.getElementById('input10').value;
    console.log(input10);

    var input11 = document.getElementById('input11').value;
    console.log(input11);

    var input12 = document.getElementById('input12').value;
    console.log(input12);

    var input13 = document.getElementById('input13').value;
    console.log(input13);




    var celebrity;



    if (document.querySelector('input[name="celebrity"]:checked') != null) {



        celebrity = document.querySelector('input[name="celebrity"]:checked').value;

    } else {



        celebrity = "";

    }

    console.log(celebrity);


    var celebMessage;

    if (celebrity == "Ryan Reynolds") {
        celebMessage = "We all know why you chose him.";
    }
    else if (celebrity == "Dwayne Johnson") {
        celebMessage = "Did you mean The Rock?";
    }
    else if (celebrity == "Jack Black") {
        celebMessage = "He is the Big Fat Panda";
    }
    else if (celebrity == "Robert Downey Jr") {
        celebMessage = "He is Iron Man";
    }

    console.log(celebMessage);

    document.getElementById('output').innerHTML += "<h4>During a trip to the forest with your friends you walk through the shrubs and trees and after coming through a clearing near a lake you come across " + input1 + ". While standing there and looking around, you also hear a noise coming through the forest towards you. Frightened of what it could be one of your friends " + input2 + ". Breaking through the trees and standing no more than a few feet from the group stands an abnormally large " + input3 + ". While you and your friends stand in shock and awe, aggressive splashes from the lake catch your attention and when you look over a " + input4 + " jumps out of the lake and heads towards you. Your group now decides whether they should " + input5 + " the creatures or " + input6 + " from them. After some careful decision time between the group, you all decide that your best course of action is to run into a nearby " + input7 + ". The group makes it into the building and decides to start looking for places to hide, many options present themselves to you. The best spot you find is a " + input8 + ". While hiding you hear a loud noise coming from across the open area and it sounds like " + input9 + ". You notice your friend being pulled across the floor by the " + input3 + ". You scream in terror and that alerts the " + input4 + ". Causing it to chase you into a " + input10 + ". You keep running when you suddenly trip over " + input11 + ". Laying on the ground from the pain you are suddenly hoisted to your feet by " + celebrity + ". Together you and " + celebrity + " engage in a grueling match of " + input12 + " dissassembling the " + input3 + " and turning the " + input4 + " into a plate of " + input13 + ".</h4>"


    document.getElementById('output2').innerHTML = "<img class='img-fluid' src='images/Trophy.jpg' alt='trophy' >";


    document.getElementById('output').innerHTML += " <h3>Great Story! Well Done </h3> ";
}