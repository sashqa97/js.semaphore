function semaphoreClik() {
  var redClass = document.getElementById("red").className;
  var yellowClass = document.getElementById("yellow").className;
  var greenClass = document.getElementById("green").className;

  if (redClass === "active") {
    document.getElementById('yellow').className = 'active';
    document.getElementById('red'). className = '';
    console.log("Red is active");
  } else {
    console.log("Red is not active");
  }

  if (yellowClass === "active") {
    document.getElementById('green').className = 'active';
    document.getElementById('yellow').className = '';
    console.log("Yellow is active");
  } else {
    console.log("Yellow is not active");
  }
  
  if (greenClass === "active") {
    document.getElementById('red').className = 'active';
    document.getElementById('green').className = '';
    console.log("Green is active");
  } else {
    console.log("Green is not active");
  }

}

