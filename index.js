for (let i=0 ; i<document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        sounds(this.innerHTML)
        addAnimation(this.innerHTML)
})};
    document.addEventListener("keydown" , (event)=>{
        sounds(event.key);
        addAnimation(event.key)
    });

    function sounds (key){
        
        switch (key) {
            case "w":
                let crash = new Audio("./sounds/crash.mp3")
                crash.play(); 
                break;
            case "a":
                let kick = new Audio("./sounds/kick-bass.mp3")
                kick.play(); 
                break;
            case "s":
                let snare = new Audio("./sounds/snare.mp3")
                snare.play(); 
                break;
            case "d":
                let tom_1 = new Audio("./sounds/tom-1.mp3")
                tom_1.play(); 
                break;
            case "j":
                let tom_2  = new Audio("./sounds/tom-2.mp3")
                tom_2 .play(); 
                break;
            case "k":
                let tom_3  = new Audio("./sounds/tom-3.mp3")
                tom_3.play(); 
                break;
            case "l":
                let tom_4 = new Audio("./sounds/tom-4.mp3")
                tom_4.play(); 
                break;
        
            default:
                console.log(key);
        } 
        
    }

    function addAnimation(key) {
        let activeButton = document.querySelector("." + key);
        activeButton.classList.add("pressed");

        setTimeout(function(){
            activeButton.classList.remove("pressed");
        },100)
    }