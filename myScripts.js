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
var made = 0;
var miss = 0;

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
        if(attempts > 100){
            alert("Number is too High.");
            return;
        }
        
        ftSimulation(attempts);
    })

    
    });
function playVid(callback) {
    vid.play();
     document.getElementById('ftVideo').addEventListener('ended',callback,false);


    }
function ftShot(pct){
        var rand = Math.random();
        return (pct > rand);
    }

function updateResult(){
    $("#results").html(
        '<h4>awdad</h4>'
    )
    }   

function ftSimulation(attempt){

    for (var index = attempt; index > 0; index--) {
        if (ftShot(ftpct)) {
            ftMade( function(){});
            made++;
            console.log(made + ":Made");
        }
        else{
            console.log(miss + ":Miss");
        }
    }
    
    console.log("for loop over");
    
    }

function ftMade(callback){
    source.setAttribute('src', 'vids/dhMake.mp4');
    vid.appendChild(source);
    playVid(function(){
        console.log("ft callback")
        callback(); 
    });
    
    }

