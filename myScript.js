//primary function to collect and validate user input, call the supporting functions, and print results to screen
function calculateJudgeScoresAverage() {
    let judgeScoreArray = [];
    
    //input validation for Country A Judge
    let aJudge = document.judgeForm.aJudge.value;
    while (isNaN(aJudge)) {
        aJudge = prompt("INVALID ENTRY! Please enter a numeric score for Judge A.");
    } while (aJudge <= 0) {
        aJudge = prompt("INVALID ENTRY! Judge A must enter a value that's greater than zero.");
        while (isNaN(aJudge)) {
            aJudge = prompt("INVALID ENTRY! Please enter a numeric score for Judge A.");
        }
    } document.judgeForm.aJudge.value = aJudge;
    aJudge = parseFloat(aJudge);
    judgeScoreArray.push(aJudge);
    
    //input validation for Country B Judge
    let bJudge = document.judgeForm.bJudge.value;
    while (isNaN(bJudge)) {
        bJudge = prompt("INVALID ENTRY! Please enter a numeric score for Judge B.");
    } while (bJudge <= 0) {
        bJudge = prompt("INVALID ENTRY! Judge B must enter a value that's greater than zero.");
        while (isNaN(bJudge)) {
            bJudge = prompt("INVALID ENTRY! Please enter a numeric score for Judge B.");
        }
    } document.judgeForm.bJudge.value = bJudge;
    bJudge = parseFloat(bJudge);
    judgeScoreArray.push(bJudge);
    
    //input validation for Country C Judge
    let cJudge = document.judgeForm.cJudge.value;
    while (isNaN(cJudge)) {
        cJudge = prompt("INVALID ENTRY! Please enter a numeric score for Judge C.");
    } while (cJudge <= 0) {
        cJudge = prompt("INVALID ENTRY! Judge C must enter a value that's greater than zero.");
        while (isNaN(cJudge)) {
            cJudge = prompt("INVALID ENTRY! Please enter a numeric score for Judge C.");
        }
    } document.judgeForm.cJudge.value = cJudge;
    cJudge = parseFloat(cJudge);
    judgeScoreArray.push(cJudge);
    
    //input validation for Country D Judge
    let dJudge = document.judgeForm.dJudge.value;
    while (isNaN(dJudge)) {
        dJudge = prompt("INVALID ENTRY! Please enter a numeric score for Judge D.");
    } while (dJudge <= 0) {
        dJudge = prompt("INVALID ENTRY! Judge D must enter a value that's greater than zero.");
        while (isNaN(dJudge)) {
            dJudge = prompt("INVALID ENTRY! Please enter a numeric score for Judge D.");
        }
    } document.judgeForm.dJudge.value = dJudge;
    dJudge = parseFloat(dJudge);
    judgeScoreArray.push(dJudge);
    
    //input validation for Country E Judge
    let eJudge = document.judgeForm.eJudge.value;
    while (isNaN(eJudge)) {
        eJudge = prompt("INVALID ENTRY! Please enter a numeric score for Judge E.");
    } while (eJudge <= 0) {
        eJudge = prompt("INVALID ENTRY! Judge E must enter a value that's greater than zero.");
        while (isNaN(eJudge)) {
            eJudge = prompt("INVALID ENTRY! Please enter a numeric score for Judge E.");
        }
    } document.judgeForm.eJudge.value = eJudge;
    eJudge = parseFloat(eJudge);
    judgeScoreArray.push(eJudge);
    
    //input validation for Country F Judge
    let fJudge = document.judgeForm.fJudge.value;
    while (isNaN(fJudge)) {
        fJudge = prompt("INVALID ENTRY! Please enter a numeric score for Judge F.");
    } while (fJudge <= 0) {
        fJudge = prompt("INVALID ENTRY! Judge F must enter a value that's greater than zero.");
        while (isNaN(fJudge)) {
            fJudge = prompt("INVALID ENTRY! Please enter a numeric score for Judge F.");
        }
    } document.judgeForm.fJudge.value = fJudge;
    fJudge = parseFloat(fJudge);
    judgeScoreArray.push(fJudge);
    
    //input validation for Country G Judge
    let gJudge = document.judgeForm.gJudge.value;
    while (isNaN(gJudge)) {
        gJudge = prompt("INVALID ENTRY! Please enter a numeric score for Judge G.");
    } while (gJudge <= 0) {
        gJudge = prompt("INVALID ENTRY! Judge G must enter a value that's greater than zero.");
        while (isNaN(gJudge)) {
            gJudge = prompt("INVALID ENTRY! Please enter a numeric score for Judge G.");
        }
    } document.judgeForm.gJudge.value = gJudge;
    gJudge = parseFloat(gJudge);
    judgeScoreArray.push(gJudge);
    
    //input validation for Country H Judge
    let hJudge = document.judgeForm.hJudge.value;
    while (isNaN(hJudge)) {
        hJudge = prompt("INVALID ENTRY! Please enter a numeric score for Judge H.");
    } while (hJudge <= 0) {
        hJudge = prompt("INVALID ENTRY! Judge H must enter a value that's greater than zero.");
        while (isNaN(hJudge)) {
            hJudge = prompt("INVALID ENTRY! Please enter a numeric score for Judge H.");
        }
    } document.judgeForm.hJudge.value = hJudge;
    hJudge = parseFloat(hJudge);
    judgeScoreArray.push(hJudge);

    let minScore = findMinValue(judgeScoreArray);
    let maxScore = findMaxValue(judgeScoreArray);
    let sumOfScores = sumAllScores(judgeScoreArray);
    let average = getUnbiasedAverage(sumOfScores, minScore, maxScore);

    document.getElementById("results").innerHTML = "The judges' average score is " + average.toFixed(2) + ".";
}
//function to find the minimum array value
function findMinValue(judgeScoreArray) {
    let minindex = 0;
    for (let i = 0; i < judgeScoreArray.length; i++) {
        if (judgeScoreArray[i] < judgeScoreArray[minindex]) {
            minindex = i;
        }
    }
    return judgeScoreArray[minindex];
}
//function to find the maximum array value
function findMaxValue(judgeScoreArray) {
    let maxindex = 0;
    for (let i = 1; i < judgeScoreArray.length; i++) {
        if (judgeScoreArray[i] > judgeScoreArray[maxindex]) {
            maxindex = i;
        }
    }
    return judgeScoreArray[maxindex];
}
//function adds up the scores of all judges
function sumAllScores(judgeScoreArray) {
    let total = 0;
    for (let i = 0; i < judgeScoreArray.length; i++) {
        total += judgeScoreArray[i];
    }
    return total;
}
//function finds the average of just the six middle scores
function getUnbiasedAverage(sumOfScores, minScore, maxScore) {
    sumOfScores = sumOfScores - minScore - maxScore;
    return sumOfScores / 6;
}