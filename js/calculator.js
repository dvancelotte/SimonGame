result = 0;
doOp = "";
flagFirst=0;


function Clear(){         
    var display = document.getElementById("display");
    display.innerHTML = "0";
    result = 0;
    doOp = "";
}

function ShowDisplay(show){
    var display = document.getElementById("display");
    
    if(display.innerHTML == '0' && show != '.' || flagFirst == 1){
        display.innerHTML = show;
        flagFirst = 0;
    }
    else{
        conteud = display.innerHTML;
        
        if (conteud.length < 15){
            if(show == '.'){
                if(conteud.indexOf('.')<0){
                   display.innerHTML += show; 
                }
            }
            else{ 
                display.innerHTML += show; 
            }
        }
    }
}

function Operation(op){
    var display = document.getElementById("display");    
    
    if(doOp == ""){
        doOp = op;
        result = parseFloat(display.innerHTML);
        flagFirst = 1;
        display.innerHTML = op;
    }
    else{
        
        if(display.innerHTML!=""){
        
            switch(doOp){
                case '+':
                    result += parseFloat(display.innerHTML);
                    display.innerHTML = op
                    doOp = op;
                    break;        
                case '-':
                    result -= parseFloat(display.innerHTML);
                    display.innerHTML = op;
                    doOp = op;
                    break;
                case 'X':
                    result *= parseFloat(display.innerHTML);
                    display.innerHTML = op;
                    doOp = op;
                    break;
                case '/':
                    if(parseFloat(display.innerHTML) == 0){
                        display.innerHTML = '0';
                        result = 0;
                    }
                    else{
                        result = result/parseFloat(display.innerHTML);
                        display.innerHTML = op;
                        doOp = op;
                    }

                    break;
            }

            if(op == '='){
                if(result == NaN){
                    display.innerHTML = 0;
                }
                else{
                    display.innerHTML = result;
                    doOp = '';
                }
            }
            
            flagFirst = 1;
        }
    }
    
}


$(document).ready(function() {
     
   
     
     
     
});
