var numberofdrumsbuttons=document.querySelectorAll(".drum").length;

for(var i=0; i<numberofdrumsbuttons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

 var buttonInnerHTML= this.innerHTML;

 switch(buttonInnerHTML){
     case "w":
        var tom1=new Audio("sounds/drum1.mp3.wav");
        tom1.play();
        break;

        case "a":
            var tom2=new Audio("sounds/drum2.mp3.wav");
            tom2.play();
            break;

            case "s":
                var tom3=new Audio("sounds/drum3.mp3.wav");
                tom3.play();
                break;

                case "d":
                    var tom4=new Audio("sounds/drum4.mp3.wav");
                    tom4.play();
                    break;

                    case "j":
                        var tom5=new Audio("sounds/drum5.mp3.wav");
                        tom5.play();
                        break;

                        case "k":
                            var tom6=new Audio("sounds/drum6.mp3.wav");
                            tom6.play();
                            break;

                            case "l":
                                var tom7=new Audio("sounds/drum7.mp3.wav");
                                tom7.play();
                                break;
        default:
            console.log();
 }
   
       
    });
}

document.addEventListener("keypress",function(event){makeSound(event.key);});
function makeSound(key){
    switch(key){
        case "w":
            var tom1=new Audio("sounds/drum1.mp3.wav");
            tom1.play();
            break;
    
            case "a":
                var tom2=new Audio("sounds/drum2.mp3.wav");
                tom2.play();
                break;
    
                case "s":
                    var tom3=new Audio("sounds/drum3.mp3.wav");
                    tom3.play();
                    break;
    
                    case "d":
                        var tom4=new Audio("sounds/drum4.mp3.wav");
                        tom4.play();
                        break;
    
                        case "j":
                            var tom5=new Audio("sounds/drum5.mp3.wav");
                            tom5.play();
                            break;
    
                            case "k":
                                var tom6=new Audio("sounds/drum6.mp3.wav");
                                tom6.play();
                                break;
    
                                case "l":
                                    var tom7=new Audio("sounds/drum7.mp3.wav");
                                    tom7.play();
                                    break;
            default:
                console.log();
    }
}