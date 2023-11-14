function generate() {
  var visitorName = document.getElementById('visitorName').value;
  
  var responses = [
     "You'll be super rich and famous... but hated. like Bezos",
    "All your makeup is expired",
    "Your coffee is poised!"
  ];

  var randomResponse = responses[Math.floor(Math.random() * responses.length)];
  
  var output = document.getElementById('output');
  output.innerHTML = `${visitorName}, ${randomResponse}`;
}

function restyle() {
  var output = document.getElementById('output');
  

  output.style.fontSize = Math.floor(Math.random() * 20 + 15) + 'px';
  output.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  output.style.fontWeight = Math.random() > 0.5 ? 'bold' : 'normal';
}


window.onload = restyle;
