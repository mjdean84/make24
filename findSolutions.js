
$(document).ready(function () {
    $("#showSolutionsBtn").click(function () {
        $("#solution").slideToggle("slow");
    });
    $("#showSolutionsDesc").click(function () {
        $("#solution").slideToggle("slow");
    });
});

function findSolutions() {
    solutions = "";
    var count = 0;
    var numbers = [card1.value, card2.value, card3.value, card4.value];
    var num1 = 0, num2 = 0, num3 = 0, num4 = 0, op1 = 0, op2 = 0, op3 = 0;
    for (num1 = 0; num1 < 4; num1++) {
        for (num2 = 0; num2 < 4; num2++) {
            if (num2 == num1) continue;
            for (num3 = 0; num3 < 4; num3++) {
                num4 = 6 - num1 - num2 - num3;
                if (num3 == num1 || num3 == num2) continue;
                for (op1 = 0; op1 < 4; op1++) {
                    for (op2 = 0; op2 < 4; op2++) {
                        for (op3 = 0; op3 < 4; op3++) {
                            var total1 = checkSol(numbers[num1], op1, numbers[num2]);
                            var total2 = checkSol(total1, op2, numbers[num3]);
                            var total3 = checkSol(total2, op3, numbers[num4]);
                            if (total1 % 1 != 0 || total2 % 1 != 0 || total3 % 1 != 0 || total1 < 0 ||
                                total2 < 0 || total3 < 0) {
                                continue;
                            }
                            if (total3 == 24) {
                                solution = numbers[num1] + "" + showOp(op1) + "" + numbers[num2]
                                    + "" + showOp(op2) + "" +
                                    numbers[num3] + "" + showOp(op3) + "" + numbers[num4] + "<br>";
                                if (solutions.includes(solution)) continue;
                                else {
                                    solutions += solution;
                                    count++;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if (solutions == "") dealCards();
    var difficulty = $("input:radio[name=difficulty]:checked").val();
    if (difficulty == "easy") {
        if (solutions.includes("/") || solutions.includes("x")) dealCards();
    }
    if (difficulty == "medium") {
        if (solutions.includes("/")) dealCards();
    }
    if (difficulty == "hard") {
        if (count >= 3 || !solutions.includes("/")) dealCards();
    }
}

function checkSol(num1, op, num2) {
    switch (op) {
        case 0:
            return num1 + num2;
            break;
        case 1:
            return num1 - num2;
            break;
        case 2:
            return num1 * num2;
            break;
        case 3:
            return num1 / num2;
            break;
    }
}

function showOp(op) {
    switch (op) {
        case 0:
            return "+";
            break;
        case 1:
            return "-";
            break;
        case 2:
            return "x";
            break;
        case 3:
            return "/";
            break;
    }
}
