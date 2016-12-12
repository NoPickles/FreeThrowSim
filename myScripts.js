function Player(first, last, age, ftpct, ftatt, madeVids, missVids){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.ftpct = ftpct;
    this.ftatt = ftatt;
    this.fullName = this.firstName + " " + this.lastName;
    this.shotMade = madeVids;
    this.shotMiss = missVids;

}



var dwightH = new Player("Dwight", "Howard", "30", .57, 8.9, ['https://cdn-e1.streamable.com/video/mp4/zush_1.mp4?token=1482760828_d7470876ac8412dbe9ff012062a4ba6bc5aabf79'], 
    ['https://cdn-e1.streamable.com/video/mp4/dwds_1.mp4?token=1482781319_a86433fd8562770ba82ee8d1eddc7c9cd4181617'])

var andreD = new Player("Andre", "Drummond", "23", .385, 4.7, ['https://cdn-e1.streamable.com/video/mp4/vdo5.mp4?token=1482781767_21aa11ea15bee6b60fbc1cb02192ef743ead1805'], 
    ['https://cdn-e1.streamable.com/video/mp4/d7eg.mp4?token=1482781806_759e08320b98b1488831060d94af7ff3182abff9'])


var vid= document.getElementById('ftVideo');
var source = document.createElement('source');



var ftpct = dwightH.ftpct;
var shooter = dwightH;
var index = 0;
var results = [];

$(function() {
    console.log( "ready!" );

    
    $("video").prop('muted', true); //mute

    $("#dh").click(function(){
        
        shooter = dwightH;
    })

    $("#andreD").click(function(){

        shooter = andreD;
    })


    $( "#start" ).click(function() {
        
        var attempts = 0;
        index = 0;
        attempts = document.getElementById("sims").value;
        if(attempts > 100000){
            alert("Number is too High.");
            return;
        }
        results = [];
        ftSimulation(attempts);
        playVid();
    })

    $("#ftVideo").bind('ended', function(){
        console.log("vid end");
        index++;
        if(typeof(results[index]) === "boolean" ){  
        playVid();
        }
        else{
            return;
        }
    })

    
    });
function playVid() {
    if(results[index]===true){
        console.log(index);
        ftMade();
        }
    else{
        console.log(index);
        ftMiss();
        
    }

    vid.addEventListener('loadeddata', function() { 
        vid.play();

        }, false);

    }

function ftMiss(){
    source.setAttribute('src', shooter.shotMiss[0]);
    vid.appendChild(source);
    vid.load();
    console.log("miss");
    
}

function ftSimulation(attempt){
    for (var i = attempt; i > 0; i--){
        results.push(ftShot(shooter.ftpct));
    }
    console.log(results);
    
    }


function ftMade(){
    source.setAttribute('src', shooter.shotMade[0]);
    vid.appendChild(source);
    vid.load();

    console.log("made");
    
    }


function ftShot(pct){
    var rand = Math.random();
    return (pct > rand);
    
}

