
var images = [];
var numbers = [];

$(document).ready(function () {
    $("#deal").click(function () {
        $("img").hide();
        $("img").fadeIn(1000);

        // Refresh page and values
        $("#oper1").html(""); $("#oper2").html(""); $("#oper3").html("");
        $("#firstPick").html(""); $("#secondPick").html(""); $("#thirdPick").html(""); $("#fourthPick").html("");
        $("#result").html(""); $("#ans").html(""); $("#solution").hide();
    });
});



function dealCards() {

    numbers.length = 0; images.length = 0;
    firstCard = null; secondCard = null; thirdCard = null; fourthCard = null;
    card1Used = false; card2Used = false; card3Used = false; card4Used = false;
    firstOper = null; secondOper = null; thirdOper = null;
    solution = "";

    // Set Card Values
    var i = 0;
    while (i < 4) {
        var x = Math.floor((Math.random() * 13) + 1);
        numbers.push(x);
        i++;
    }
    findSolution(numbers[0], numbers[1], numbers[2], numbers[3]);
    
    document.getElementById("image1").title = numbers[0];
    document.getElementById("image2").title = numbers[1];
    document.getElementById("image3").title = numbers[2];
    document.getElementById("image4").title = numbers[3];

    if (solution == "") {
        document.getElementById("solution").innerHTML = "Impossible hand.  Deal again.";
    } else {
        document.getElementById("solution").innerHTML = solution;
    }





    // Set Card Images
    // Card 1 Image
    switch (numbers[0]) {
        case 1:
            images.push("card_1.png");
            break;
        case 2:
            images.push("card_2.png");
            break;
        case 3:
            images.push("card_3.png");
            break;
        case 4:
            images.push("card_4.png");
            break;
        case 5:
            images.push("card_5.png");
            break;
        case 6:
            images.push("card_6.png");
            break;
        case 7:
            images.push("card_7.png");
            break;
        case 8:
            images.push("card_8.png");
            break;
        case 9:
            images.push("card_9.png");
            break;
        case 10:
            images.push("card_10.png");
            break;
        case 11:
            images.push("card_11.png");
            break;
        case 12:
            images.push("card_12.png");
            break;
        case 13:
            images.push("card_13.png");
    }
    document.getElementById("image1").src = images[0];


    // Card 2 Image
    switch (numbers[1]) {
        case 1:
            images.push("card_1.png");
            break;
        case 2:
            images.push("card_2.png");
            break;
        case 3:
            images.push("card_3.png");
            break;
        case 4:
            images.push("card_4.png");
            break;
        case 5:
            images.push("card_5.png");
            break;
        case 6:
            images.push("card_6.png");
            break;
        case 7:
            images.push("card_7.png");
            break;
        case 8:
            images.push("card_8.png");
            break;
        case 9:
            images.push("card_9.png");
            break;
        case 10:
            images.push("card_10.png");
            break;
        case 11:
            images.push("card_11.png");
            break;
        case 12:
            images.push("card_12.png");
            break;
        case 13:
            images.push("card_13.png");
    }
    document.getElementById("image2").src = images[1];

    // Card 3 Image
    switch (numbers[2]) {
        case 1:
            images.push("card_1.png");
            break;
        case 2:
            images.push("card_2.png");
            break;
        case 3:
            images.push("card_3.png");
            break;
        case 4:
            images.push("card_4.png");
            break;
        case 5:
            images.push("card_5.png");
            break;
        case 6:
            images.push("card_6.png");
            break;
        case 7:
            images.push("card_7.png");
            break;
        case 8:
            images.push("card_8.png");
            break;
        case 9:
            images.push("card_9.png");
            break;
        case 10:
            images.push("card_10.png");
            break;
        case 11:
            images.push("card_11.png");
            break;
        case 12:
            images.push("card_12.png");
            break;
        case 13:
            images.push("card_13.png");
    }
    document.getElementById("image3").src = images[2];

    // Card 4 Image
    switch (numbers[3]) {
        case 1:
            images.push("card_1.png");
            break;
        case 2:
            images.push("card_2.png");
            break;
        case 3:
            images.push("card_3.png");
            break;
        case 4:
            images.push("card_4.png");
            break;
        case 5:
            images.push("card_5.png");
            break;
        case 6:
            images.push("card_6.png");
            break;
        case 7:
            images.push("card_7.png");
            break;
        case 8:
            images.push("card_8.png");
            break;
        case 9:
            images.push("card_9.png");
            break;
        case 10:
            images.push("card_10.png");
            break;
        case 11:
            images.push("card_11.png");
            break;
        case 12:
            images.push("card_12.png");
            break;
        case 13:
            images.push("card_13.png");
    }
    document.getElementById("image4").src = images[3];
}
