// Undo Button
function undo() {
    if (fourthCard != null) {
        $("#fourthPick").html("");
        fourthCard = null;
        replaceImgAndUsed();
        calc();
    }
    else if (oper3 != null) {
        $("#oper3").html("");
        oper3 = null;
    }
    else if (thirdCard != null) {
        $("#thirdPick").html("");
        thirdCard = null;
        replaceImgAndUsed();
        calc();
    }
    else if (oper2 != null) {
        $("#oper2").html("");
        oper2 = null;
    }
    else if (secondCard != null) {
        $("#secondPick").html("");
        $("#ans").html("");
        secondCard = null;
        replaceImgAndUsed();
        calc();
    }
    else if (oper1 != null) {
        $("#oper1").html("");
        oper1 = null;
    }
    else if (firstCard != null) {
        $("#firstPick").html("");
        firstCard = null;
        replaceImgAndUsed();
        calc();
    }
}

function replaceImgAndUsed() {
    switch (imagePos.pop()) {
        case 1:
            $("#card1Img").attr("src", card1.cardFace());
            card1.used = false;
            break;
        case 2:
            $("#card2Img").attr("src", card2.cardFace());
            card2.used = false;
            break;
        case 3:
            $("#card3Img").attr("src", card3.cardFace());
            card3.used = false;
            break;
        case 4:
            $("#card4Img").attr("src", card4.cardFace());
            card4.used = false;
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
