
// Deal Button
$(document).ready(function () {
    $("#dealBtn").click(function () {
        $("#card1Img").hide().attr("src", card1.cardFace()).fadeIn(250).attr("title", card1.value);
        $("#card2Img").hide().attr("src", card2.cardFace()).fadeIn(500).attr("title", card2.value);
        $("#card3Img").hide().attr("src", card3.cardFace()).fadeIn(750).attr("title", card3.value);
        $("#card4Img").hide().attr("src", card4.cardFace()).fadeIn(1000).attr("title", card4.value);

        // Refresh page and values
        $("#oper1").html(""); $("#oper2").html(""); $("#oper3").html("");
        $("#firstPick").html(""); $("#secondPick").html(""); $("#thirdPick").html(""); $("#fourthPick").html("");
        $("#result").html(""); $("#ans").html(""); $("#solution").hide();
    });

    // Flip Cards when Clicked
    $("#card1Img").click(function () {
        $("#card1Img").attr("src", card1.cardBack);
    });
    $("#card2Img").click(function () {
        $("#card2Img").attr("src", card2.cardBack)
    });
    $("#card3Img").click(function () {
        $("#card3Img").attr("src", card3.cardBack)
    });
    $("#card4Img").click(function () {
        $("#card4Img").attr("src", card4.cardBack)
    });
});

var firstCard, secondCard, thirdCard, fourthCard;
var card1, card2, card3, card4;
var oper1, oper2, oper3;
var solutions;
var imagePos = [];

// Create Card Object
function Card() {
    this.value = Math.ceil(Math.random() * 13);
    this.cardFace = function () {
        switch (this.value) {
            case 1:
                return "card_1.png";
                break;
            case 2:
                return "card_2.png";
                break;
            case 3:
                return "card_3.png";
                break;
            case 4:
                return "card_4.png";
                break;
            case 5:
                return "card_5.png";
                break;
            case 6:
                return "card_6.png";
                break;
            case 7:
                return "card_7.png";
                break;
            case 8:
                return "card_8.png";
                break;
            case 9:
                return "card_9.png";
                break;
            case 10:
                return "card_10.png";
                break;
            case 11:
                return "card_11.png";
                break;
            case 12:
                return "card_12.png";
                break;
            case 13:
                return "card_13.png";
                break;
        }
    }
    this.cardBack = "card_back.png";
    this.used = false;
    this.click = function () {
        if (this.used == false) {
            if (firstCard == null) {
                firstCard = this.value;
                $("#firstPick").html(firstCard);
            }
            else if (secondCard == null) {
                secondCard = this.value;
                $("#secondPick").html(secondCard);
                calc();
            }
            else if (thirdCard == null) {
                thirdCard = this.value;
                $("#thirdPick").html(thirdCard);
                calc();
            }
            else if (fourthCard == null) {
                fourthCard = this.value;
                $("#fourthPick").html(fourthCard);
                calc();
            }
            this.used = true;
            imagePos.push(this.position);
        }
    }
}

function dealCards() {
    card1 = new Card();
    card2 = new Card();
    card3 = new Card();
    card4 = new Card();

    card1.position = 1;
    card2.position = 2;
    card3.position = 3;
    card4.position = 4;

    firstCard = null;
    secondCard = null;
    thirdCard = null;
    fourthCard = null;

    oper1 = null;
    oper2 = null;
    oper3 = null;

    findSolutions();
    if (total < 0) {
        undo();
        $("#result").html("Oops. You went in the negative").css("color", "red");
    }
    document.getElementById("solution").innerHTML = solutions;
}

// Operator Clicks

function plusClick() {
    operClick("+");
}
function minusClick() {
    operClick("-");
}
function multiplyClick() {
    operClick("x");
}
function divideClick() {
    operClick("/");
}


function operClick(op) {
    if (oper1 == null) {
        oper1= op;
        $("#oper1").html(oper1);
        calc();
    }
    else if (oper2 == null) {
        oper2 = op;
        $("#oper2").html(op);
        calc();
    }
    else if (oper3 == null) {
        oper3 = op;
        $("#oper3").html(op);
        calc();
    }
}
