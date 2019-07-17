function semaphoreClik() {
  var redClass = document.getElementById("red").className;
  var yellowClass = document.getElementById("yellow").className;
  var greenClass = document.getElementById("green").className;

  if (redClass === "active") {
    document.getElementById('yellow').className = 'active';
    document.getElementById('red'). className = '';
    document.getElementById('message').innerText = "Attention!"
    console.log("Red is active");
  } 

  if (yellowClass === "active") {
    document.getElementById('green').className = 'active';
    document.getElementById('yellow').className = '';
    document.getElementById('message').innerText = "Go!"
    console.log("Yellow is active");
  } 
  
  if (greenClass === "active") {
    document.getElementById('red').className = 'active';
    document.getElementById('green').className = '';
    document.getElementById('message').innerText = "Stop!"
    console.log("Green is active");
  } 

}

