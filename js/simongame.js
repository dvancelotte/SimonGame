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
    if (memoryCount<10){
        score.innerHTML = '0'+memoryCount;
    }else{
        score.innerHTML = memoryCount;
    }
  
  $("#buttonPlay").prop('disabled',true);   
    memoryArray.push(creatMemory(memoryArray));
    console.log(memoryArray);
    fox = -1;
    
    var loopfox = function(memoryArray){
        fox++;
        
        animateFox(memoryArray[fox],function(){
            if(fox<memoryArray.length){
                loopfox(memoryArray);
            }else{
                refreshInput(false);
            }
          
        });
    };
    

    
    loopfox(memoryArray);

}

function startRestart(){
    
    var score = document.getElementById("button").innerHTML = "Restart";
    
    refreshInput(true);
    reset();
    PlayMemory();   
}

  function animateFox(memoryArray,callback){      
        
        if(memoryArray!=undefined){
            $("#"+foxs[memoryArray].id).animate({opacity: '1.0'});
            var audio = new Audio(foxs[memoryArray].sound);
            $("#"+foxs[memoryArray].id).animate({opacity: '0.4'});            
            audio.play();
            audio.onended = function() {
                callback();
            };
        }else{
            callback();
        }
        
  }

function creatMemory(memoryArray){    
        
         memoryCount++;
    return (Math.floor(Math.random() * 4));    
}

function refreshInput(flag){
    $("#fox1").prop('disabled', flag);
    $("#fox2").prop('disabled', flag);
    $("#fox3").prop('disabled', flag);
    $("#fox4").prop('disabled', flag);
   
}

function reset(){
     
    memoryCount = 0;
    captionGameCount = 0;
    memoryArray = [];    

}
    
    
function captionGame(numberFox){
    
    if (captionGameCount<memoryCount){

        
        if(numberFox==memoryArray[captionGameCount]){
            
            animateFox(numberFox,function(){});
            captionGameCount ++;            
            document.getElementById("Message").innerHTML = "Great";
            
            if(captionGameCount==memoryCount){
                
                refreshInput(true);
                document.getElementById("Message").innerHTML = "good";
                captionGameCount = 0;
                setTimeout(PlayMemory,1500);
            }
        }
        else{
            refreshInput(true);
            reset();
            document.getElementById("Message").innerHTML = "You lose :(";
        }
        
    }
}

$(document).ready(function() {
     
});
