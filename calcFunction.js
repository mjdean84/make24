
function calc() {
    var firstCalc;

    if (firstOper === "+") {
        firstCalc = firstCard + secondCard;
    }
    else if (firstOper === "-") {
        firstCalc = firstCard - secondCard;
    }
    else if (firstOper === "x") {
        firstCalc = firstCard * secondCard;
    }
    else if (firstOper === "/") {
        firstCalc = firstCard / secondCard;
    }

    var secondCalc;
    if (secondOper === "+") {
        secondCalc = firstCalc + thirdCard;
    }
    else if (secondOper === "-") {
        secondCalc = firstCalc - thirdCard;
    }
    else if (secondOper === "x") {
        secondCalc = firstCalc * thirdCard;
    }
    else if (secondOper === "/") {
        secondCalc = firstCalc / thirdCard;
    }

    var finalCalc;
    if (thirdOper === "+") {
        finalCalc = secondCalc + fourthCard;
    }
    else if (thirdOper === "-") {
        finalCalc = secondCalc - fourthCard;
    }
    else if (thirdOper === "x") {
        finalCalc = secondCalc * fourthCard;
    }
    else if (thirdOper === "/") {
        finalCalc = secondCalc / fourthCard;
    }

    if (finalCalc != undefined) {
        document.getElementById("ans").innerHTML = " = " + finalCalc;
    }

    if (finalCalc === 24) {
        document.getElementById("result").innerHTML = "YOU\'RE RIGHT!!!";
        document.getElementById("result").style.color = "lightgreen";
    }
    else if (firstCard == null || secondCard == null || thirdCard == null || fourthCard == null) {
        document.getElementById("result").innerHTML = "You forgot to select your numbers";
        document.getElementById("result").style.color = "red";
    }
    else if (firstOper == null || secondOper == null || thirdOper == null) {
        document.getElementById("result").innerHTML = "You forgot to select your operators";
        document.getElementById("result").style.color = "red";
    }
    else {
        document.getElementById("result").innerHTML = "NOPE, TRY AGAIN";
        document.getElementById("result").style.color = "red";
    }
    console.log(firstCard, firstOper, secondCard, "=", firstCalc);
    console.log(firstCalc, secondOper, thirdCard, "=", secondCalc);
    console.log(secondCalc, thirdOper, fourthCard, "=", finalCalc);
}