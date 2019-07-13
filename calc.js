var total;

function calc() {
    total = firstCard;
    if (oper1 != null && secondCard != null) {
        arith(oper1, secondCard);

        if (oper2 != null && thirdCard != null) {
            arith(oper2, thirdCard);

            if (oper3 != null && fourthCard != null) {
                arith(oper3, fourthCard);

                if (total == 24) {
                    $("#result").html("YOU'RE RIGHT!!!").css("color", "lightgreen").css("-webkit-animation",
                        "colorchange 10s infinite alternate");
                } else {
                    $("#result").html("NOPE, TRY AGAIN").css("color", "red");
                }
            }
        }
        $("#ans").html(" = " + total);
    }
}

function arith(oper, num) {
    if (oper == "+") {
        total = total + num;
    }
    else if (oper == "-") {
        total = total - num;
    }
    else if (oper == "x") {
        total = total * num;
    }
    else {
        total = total / num;
    }
}
