
// Card Clicks

var firstCard;
var secondCard;
var thirdCard;
var fourthCard;
var card1Used;
var card2Used;
var card3Used;
var card4Used;
var runningTotal;

$(document).ready(function () {
    $("#image1").click(function () {
        $("#image1").attr("src", "card_back.png");
    });
    $("#image2").click(function () {
        $("#image2").attr("src", "card_back.png")
    });
    $("#image3").click(function () {
        $("#image3").attr("src", "card_back.png")
    });
    $("#image4").click(function () {
        $("#image4").attr("src", "card_back.png")
    });
});

// First Card
function card1Click() {
    if (card1Used == false) {

        if (firstCard == null) {
            firstCard = numbers[0];
            document.getElementById("firstPick").innerHTML = firstCard;
            runningTotal = firstCard;
        }
        else if (secondCard == null) {
            secondCard = numbers[0];
            document.getElementById("secondPick").innerHTML = secondCard;
            if (firstOper === "+") {
                runningTotal = runningTotal + secondCard;
            }
            else if (firstOper === "-") {
                runningTotal = runningTotal - secondCard;
            }
            else if (firstOper === "x") {
                runningTotal = runningTotal * secondCard;
            }
            else {
                runningTotal = runningTotal / secondCard;
            }
            document.getElementById("ans").innerHTML = " = " + runningTotal;
        }
        else if (thirdCard == null) {
            thirdCard = numbers[0];
            document.getElementById("thirdPick").innerHTML = thirdCard;
            if (firstOper === "+") {
                runningTotal = runningTotal + thirdCard;
            }
            else if (firstOper === "-") {
                runningTotal = runningTotal - thirdard;
            }
            else if (firstOper === "x") {
                runningTotal = runningTotal * thirdCard;
            }
            else {
                runningTotal = runningTotal / thirdCard;
            }
            document.getElementById("ans").innerHTML = " = " + runningTotal;
        }
        else if (fourthCard == null) {
            fourthCard = numbers[0];
            document.getElementById("fourthPick").innerHTML = fourthCard;
            calc();
        }
        card1Used = true;
    }
}

// Second Card
function card2Click() {
    if (card2Used == false) {
        if (firstCard == null) {
            firstCard = numbers[1];
            document.getElementById("firstPick").innerHTML = firstCard;
            runningTotal = firstCard;
        }
        else if (secondCard == null) {
            secondCard = numbers[1];
            document.getElementById("secondPick").innerHTML = secondCard;
            if (firstOper === "+") {
                runningTotal = runningTotal + secondCard;
            }
            else if (firstOper === "-") {
                runningTotal = runningTotal - secondCard;
            }
            else if (firstOper === "x") {
                runningTotal = runningTotal * secondCard;
            }
            else {
                runningTotal = runningTotal / secondCard;
            }
            document.getElementById("ans").innerHTML = " = " + runningTotal;
        }
        else if (thirdCard == null) {
            thirdCard = numbers[1];
            document.getElementById("thirdPick").innerHTML = thirdCard;
            if (firstOper === "+") {
                runningTotal = runningTotal + thirdCard;
            }
            else if (firstOper === "-") {
                runningTotal = runningTotal - thirdCard;
            }
            else if (firstOper === "x") {
                runningTotal = runningTotal * thirdCard;
            }
            else {
                runningTotal = runningTotal / thirdCard;
            }
            document.getElementById("ans").innerHTML = " = " + runningTotal;
        }
        else if (fourthCard == null) {
            fourthCard = numbers[1];
            document.getElementById("fourthPick").innerHTML = fourthCard;
            calc();
        }
        card2Used = true;
    }
}

// Third Card
function card3Click() {
    if (card3Used == false) {
        if (firstCard == null) {
            firstCard = numbers[2];
            document.getElementById("firstPick").innerHTML = firstCard;
            runningTotal = firstCard;
        }
        else if (secondCard == null) {
            secondCard = numbers[2];
            document.getElementById("secondPick").innerHTML = secondCard;
            firstAns = 0;
            if (firstOper === "+") {
                runningTotal = runningTotal + secondCard;
            }
            else if (firstOper === "-") {
                runningTotal = runningTotal - secondCard;
            }
            else if (firstOper === "x") {
                runningTotal = runningTotal * secondCard;
            }
            else {
                runningTotal = runningTotal / secondCard;
            }
            document.getElementById("ans").innerHTML = " = " + runningTotal;
        }
        else if (thirdCard == null) {
            thirdCard = numbers[2];
            document.getElementById("thirdPick").innerHTML = thirdCard;
            secondAns = 0;
            if (firstOper === "+") {
                runningTotal = runningTotal + thirdCard;
            }
            else if (firstOper === "-") {
                runningTotal = runningTotal - thirdCard;
            }
            else if (firstOper === "x") {
                runningTotal = runningTotal * thirdCard;
            }
            else {
                runningTotal = runningTotal / thirdCard;
            }
            document.getElementById("ans").innerHTML = " = " + runningTotal;
        }
        else if (fourthCard == null) {
            fourthCard = numbers[2];
            document.getElementById("fourthPick").innerHTML = fourthCard;
            calc();
        }
        card3Used = true;
    }
}

// Fourth Card
function card4Click() {
    //if (firstCard !== numbers[3] && secondCard !== numbers[3] && thirdCard !== numbers[3] && fourthCard !== numbers[3]) {
    if (card4Used == false) {
        if (firstCard == null) {
            firstCard = numbers[3];
            document.getElementById("firstPick").innerHTML = firstCard;
            runningTotal = firstCard;
        }
        else if (secondCard == null) {
            secondCard = numbers[3];
            document.getElementById("secondPick").innerHTML = secondCard;
            if (firstOper === "+") {
                runningTotal = runningTotal + secondCard;
            }
            else if (firstOper === "-") {
                runningTotal = runningTotal - secondCard;
            }
            else if (firstOper === "x") {
                runningTotal = runningTotal * secondCard;
            }
            else {
                runningTotal = runningTotal / secondCard;
            }
            document.getElementById("ans").innerHTML = " = " + runningTotal;
        }
        else if (thirdCard == null) {
            thirdCard = numbers[3];
            document.getElementById("thirdPick").innerHTML = thirdCard;
            if (firstOper === "+") {
                runningTotal = runningTotal + thirdCard;
            }
            else if (firstOper === "-") {
                runningTotal = runningTotal - thirdCard;
            }
            else if (firstOper === "x") {
                runningTotal = runningTotal * thirdCard;
            }
            else {
                runningTotal = runningTotal / thirdCard;
            }
            document.getElementById("ans").innerHTML = " = " + runningTotal;
        }
        else if (fourthCard == null) {
            fourthCard = numbers[3];
            document.getElementById("fourthPick").innerHTML = fourthCard;
            calc();
        }
        card4Used = true;
    }
}

// Operator Clicks

var firstOper;
var secondOper;
var thirdOper;

// Plus Operator
function plusClick() {
    if (firstOper == null) {
        firstOper = "+";
        document.getElementById("oper1").innerHTML = "+";
    }
    else if (secondOper == null) {
        secondOper = "+";
        document.getElementById("oper2").innerHTML = "+";
    }
    else if (thirdOper == null) {
        thirdOper = "+";
        document.getElementById("oper3").innerHTML = "+";
    }
}

// Minus Operator
function minusClick() {
    if (firstOper == null) {
        firstOper = "-";
        document.getElementById("oper1").innerHTML = "-";
    }
    else if (secondOper == null) {
        secondOper = "-";
        document.getElementById("oper2").innerHTML = "-";
    }
    else if (thirdOper == null) {
        thirdOper = "-";
        document.getElementById("oper3").innerHTML = "-";
    }
}

// Multiply Operator
function multiplyClick() {
    if (firstOper == null) {
        firstOper = "x";
        document.getElementById("oper1").innerHTML = "x";
    }
    else if (secondOper == null) {
        secondOper = "x";
        document.getElementById("oper2").innerHTML = "x";
    }
    else if (thirdOper == null) {
        thirdOper = "x";
        document.getElementById("oper3").innerHTML = "x";
    }
}

//  Divide Operator
function divideClick() {
    if (firstOper == null) {
        firstOper = "/";
        document.getElementById("oper1").innerHTML = "/";
    }
    else if (secondOper == null) {
        secondOper = "/";
        document.getElementById("oper2").innerHTML = "/";
    }
    else if (thirdOper == null) {
        thirdOper = "/";
        document.getElementById("oper3").innerHTML = "/";
    }
}