memoryCount = 0;
captionGameCount = 0;
memoryArray = [];


foxs = [
        {id:"fox1", sound:"https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"},
        {id:"fox2", sound:"https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"},
        {id:"fox3", sound:"https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"},
        {id:"fox4", sound:"https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"}
]

function PlayMemory(){
    
    var score = document.getElementById("score");
    score.innerHTML = memoryCount;

    memoryCount ++;
    
    memoryArray = creatMemory(memoryCount);
    fox = 0;
    
    var loopfox = function(memoryArray){
       
        animateFox(memoryArray[fox],function(){
            fox++;
            
            if(fox<memoryArray.length){
                loopfox(memoryArray);
            }else{
                refreshInput(false);
            }
        });
    };
    
    function animateFox(memoryArray,callback){      
        
        $("#"+foxs[memoryArray].id).animate({opacity: '1.0'});
        var audio = new Audio(foxs[memoryArray].sound);
        $("#"+foxs[memoryArray].id).animate({opacity: '0.4'});            
        audio.play();
        audio.onended = function() {
            callback();
        };
        
    }
    
    loopfox(memoryArray);
   

    
}

function creatMemory(memoryCount){    
    array =[];    
    for (i=0; i<memoryCount; i++){
        array.push(Math.floor(Math.random() * 4));        
    }    
    return array;    
}

function refreshInput(flag){
    $("#fox1").prop('disabled', flag);
    $("#fox2").prop('disabled', flag);
    $("#fox3").prop('disabled', flag);
    $("#fox4").prop('disabled', flag);
    
    if(flag){
            memoryCount = 0;
            captionGameCount = 0;
            memoryArray = [];    
    }
}

function captionGame(numberFox){
    
    if (captionGameCount<memoryCount){
        if(numberFox==memoryArray[captionGameCount]){
            captionGameCount ++;
            document.getElementById("Message").innerHTML = "Great";
            if(captionGameCount==memoryCount){
                refreshInput(true);
                document.getElementById("Message").innerHTML = "good";
            }
        }
        else{
            refreshInput(true);
            document.getElementById("Message").innerHTML = "You lose :(";
        }
        
    }
}

$(document).ready(function() {
     
    
     
     
});
