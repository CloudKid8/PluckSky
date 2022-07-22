var numberofDrumBut = document.querySelectorAll(".sound").length;

for(var i = 0 ; i < numberofDrumBut; i++){

  document.querySelectorAll(".sound")[i].addEventListener("click", function (){

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

  document.addEventListener("keypress", function(event){

    makeSound(event.key);

    buttonAnimation(event.key)

  });

  function makeSound(key){

    switch (key) {
        case "a":
          var c = new Audio('sounds/c.wav');
          c.play();
          break;

        case "s":
          var d = new Audio('sounds/d.wav');
          d.play();
          break;

        case "d":
            var e = new Audio('sounds/e.wav');
            e.play();
            break;

        case "q":
            var f = new Audio('sounds/f.wav');
            f.play();
            break;

        case "w":
            var g = new Audio('sounds/g.wav');
            g.play();
            break;

        case "e":
            var a = new Audio('sounds/a.wav');
            a.play();
            break;

        case "r":
            var b = new Audio('sounds/b.wav');
            b.play();
            break;

            //Right Hand

            case "j":
              var c1 = new Audio('sounds/c1.wav');
              c1.play();
              break;

            case "k":
              var d = new Audio('sounds/d1.wav');
              d.play();
              break;

            case "l":
                var e = new Audio('sounds/e1.wav');
                e.play();
                break;

            case "u":
                var f = new Audio('sounds/f1.wav');
                f.play();
                break;

            case "i":
                var g = new Audio('sounds/g1.wav');
                g.play();
                break;

            case "o":
                var a = new Audio('sounds/a1.wav');
                a.play();
                break;

            case "p":
                var b = new Audio('sounds/b1.wav');
                b.play();
                break;

      default:console.log(key);
  }
}


function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
