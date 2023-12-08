
// // const runs = document.getElementById("runs");
// // var count = 0
// // document.getElementById("runs").innerHTML = count;

// // const count1 = document.getElementById(count1);

// // const run_1 = () => {
// //     count++;
// //     runs.innerHTML = count;
// // };

// // count1.addEventListener("click", run_1);

// let runs = 0; // Initial runs value
// let balls = 0
// function run_1() {
//     runs += 1; 
//     balls += 1
//     document.getElementById('balls').innerText = balls; 
//     document.getElementById('runs').innerText = runs; 

// }

// function run_2() {
//     runs += 2; 
//     balls += 1
//     document.getElementById('balls').innerText = balls; 
//     document.getElementById('runs').innerText = runs; 
// }

// function run_4() {
//     runs += 4; 
//     balls += 1
//     document.getElementById('balls').innerText = balls; 
//     document.getElementById('runs').innerText = runs; 
// }

// function run_6() {
//     runs += 6; 
//     balls += 1
//     document.getElementById('balls').innerText = balls; 
//     document.getElementById('runs').innerText = runs; 
// }

let runs = 0;
let balls = 0;
let count6 = 0;
let count4 = 0;
let countWide = 0;
let countNoBall = 0;
let countWicket = 0;
function updateRunsAndBalls(runValue) {
    if (runValue > 0) runs += runValue;
    balls += 1;
    if (runValue == 6) count6++;
    if (runValue == 4) count4++;
    document.getElementById('balls').innerText = balls;
    document.getElementById('runs').innerText = runs;
    document.getElementById('count4').innerHTML = count4
    document.getElementById('count6').innerHTML = count6
    //document.getElementById('overs').innerHTML = '(' + overs + ')' + balls + '/' + countWicket

}

// function updateWideandNoball() {
//     balls += 1
//     document.getElementById('Wide').innerHTML = countWide
//     document.getElementById('NoBalls').innerHTML = countWide
// }

function run_0() {
    updateRunsAndBalls(0);

}
function run_1() {
    updateRunsAndBalls(1);
}

function run_2() {
    updateRunsAndBalls(2);
}

function run_3() {
    updateRunsAndBalls(3);
}

function run_4() {
    updateRunsAndBalls(4);
}

function run_5() {
    updateRunsAndBalls(5);
}

function run_6() {
    updateRunsAndBalls(6);

}

function wide() {
    runs += 1;
    countWide += 1;
    document.getElementById('Wide').innerHTML = countWide;
    document.getElementById('runs').innerText = runs;
}

function wicket() {
    countWicket += 1;
    balls += 1;
    overs = balls / 6;
    document.getElementById('wickets').innerText = countWicket;
    document.getElementById('balls').innerText = balls;
    document.getElementById('overs').innerHTML = '(' + overs + ')' + balls + '/' + countWicket
}

function NoBall() {
    runValue = document.getElementById("SelectNoBall").value;
    runs += parseInt(runValue);
    countNoBall += 1;

    document.getElementById('runs').innerText = runs;
    document.getElementById('NoBalls').innerHTML = countNoBall;

}
