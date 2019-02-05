// Undo Button
function undo() {
    if (fourthCard != null) {
        $("#fourthPick").html("");
        card4.used = false;
        fourthCard = null;
        replaceImg();
        calc();
    }
    else if (oper3 != null) {
        $("#oper3").html("");
        oper3 = null;
    }
    else if (thirdCard != null) {
        $("#thirdPick").html("");
        card3.used = false;
        thirdCard = null;
        replaceImg();
        calc();
    }
    else if (oper2 != null) {
        $("#oper2").html("");
        oper2 = null;
    }
    else if (secondCard != null) {
        $("#secondPick").html("");
        $("#ans").html("");
        card2.used = false;
        secondCard = null;
        replaceImg();
        calc();
    }
    else if (oper1 != null) {
        $("#oper1").html("");

        console.log(oper1);
        oper1 = null;
        console.log(oper1);
    }
    else if (firstCard != null) {
        $("#firstPick").html("");
        card1.used = false;
        firstCard = null;
        replaceImg();
        calc();
    }
}

function replaceImg() {
    switch (imagePos.pop()) {
        case 1:
            $("#card1Img").attr("src", card1.cardFace());
            console.log(card1.cardFace());
            break;
        case 2:
            $("#card2Img").attr("src", card2.cardFace());
            break;
        case 3:
            $("#card3Img").attr("src", card3.cardFace());
            break;
        case 4:
            $("#card4Img").attr("src", card4.cardFace());
    }
}


// Reset Button
$(document).ready(function () {
    $("#resetBtn").click(function () {
        $("#card1Img").attr("src", card1.cardFace());
        $("#card2Img").attr("src", card2.cardFace());
        $("#card3Img").attr("src", card3.cardFace());
        $("#card4Img").attr("src", card4.cardFace());
        $("#firstPick").html("");
        $("#secondPick").html("");
        $("#thirdPick").html("");
        $("#fourthPick").html("");
        $("#ans").html("");
        $("#result").html("");
        $("#oper1").html(""); $("#oper2").html(""); $("#oper3").html("");
        oper1 = null; oper2 = null; oper3 = null;
        firstCard = null; secondCard = null; thirdCard = null; fourthCard = null;
        card1.used = false; card2.used = false; card3.used = false; card4.used = false;
    });
});
