function Player(first, last, age, ftpct, ftatt){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.ftpct = ftpct;
    this.ftatt = ftatt;
}


var dwightH = new Player("Dwight", "Howard", "30", .568, 8.9)

var ftpct = dwightH.ftpct;
var made = 0;
var miss = 0;
var hotStreak = 0;
var coldStreak = 0;

$(function() {
    console.log( "ready!" );

    $("#dh").click(function(){
        console.log(5);
        ftpct = dwightH.ftpct;
    })

    $( "#start" ).click(function() {
        made = 0;
        miss = 0;
        var attempts = document.getElementById("sims").value;
        if(attempts > 2000001){
            alert("Number is too High. Keep Below 2MM");
            return;
        }
        ftSimulation(attempts);
    });
});

function ftShot(pct){
        var rand = Math.random();
        return (pct < rand);
    }

function updateResult(){
    $("#results").html
}

function ftSimulation(attempt){

    for (var index = attempt; index > 0; index--) {
        if (ftShot(ftpct)) {
            made++;
        }
        else{
            miss++;
        }
    }
    console.log(made);
    console.log(miss);

    
}