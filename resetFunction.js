
$(document).ready(function () {
    $("#resetBtn").click(function () {
        $("#image1").attr("src", images[0]);
        $("#image2").attr("src", images[1]);
        $("#image3").attr("src", images[2]);
        $("#image4").attr("src", images[3]);
        $("#firstPick").html("");
        $("#secondPick").html("");
        $("#thirdPick").html("");
        $("#fourthPick").html("");
        $("#ans").html("");
        $("#result").html("");
        $("#oper1").html(""); $("#oper2").html(""); $("#oper3").html("");
        firstOper = null; secondOper = null; thirdOper = null;
        firstCard = null; secondCard = null; thirdCard = null; fourthCard = null;
        card1Used = false; card2Used = false; card3Used = false; card4Used = false;
    });
});