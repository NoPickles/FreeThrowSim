function Player(first, last, age, ftpct, ftatt){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.ftpct = ftpct;
    this.ftatt = ftatt;
}



var dwightH = new Player("Dwight", "Howard", "30", .57, 8.9)
var vid= document.getElementById('ftVideo');
var source = document.createElement('source');



var ftpct = dwightH.ftpct;
var index = 0;
var results = [];

$(function() {
    console.log( "ready!" );

    $("#dh").click(function(){
        ftpct = dwightH.ftpct;
    })

    $( "#start" ).click(function() {
        
        var attempts = 0;
        attempts = document.getElementById("sims").value;
        if(attempts > 100){
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

    }

function ftMiss(){
    source.setAttribute('src', 'vids/dhMiss.mp4');
    vid.appendChild(source);
    vid.load();
    vid.addEventListener('loadeddata', function() { 
        console.log("miss");
        vid.play();

        }, false);
}

function ftSimulation(attempt){
    for (var i = attempt; i > 0; i--){
        results.push(ftShot(ftpct));
    }
    console.log(results);
    
    playVid();
    }


function ftMade(){
    source.setAttribute('src', 'vids/dhMake.mp4');
    vid.appendChild(source);
    vid.load();
    vid.addEventListener('loadeddata', function() { 
        vid.play();
        }, false);
    
    }


function ftShot(pct){
    var rand = Math.random();
    return (pct > rand);
}

