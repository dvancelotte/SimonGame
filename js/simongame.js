memoryCount = 0;

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
    

    for (fox in memoryArray){
        
        console.log(fox);
        
        $("#"+foxs[fox].id).animate({
            width: '25%'
          },'fast', function() {
            var audio = new Audio(foxs[fox].sound);
            audio.play();
            $("#"+foxs[fox].id).animate({width: '20%'});
        });       
            
    }
    
}

function creatMemory(memoryCount){
    
    array =[];
    
    for (i=0; i<memoryCount; i++){
        array.push(Math.floor(Math.random() * 4));        
    }
    
    return array;
    
}


$(document).ready(function() {
     
    
     
     
});
