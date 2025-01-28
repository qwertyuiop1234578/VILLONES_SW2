const button = document.getElementById('changeColorButton');
const colors = ['#9dad0c', '#11909e', '#7d9699'];
let currentColorIndex = 0; 

button.addEventListener('click', () => {
  document.body.style.backgroundColor = colors[currentColorIndex]; 
  currentColorIndex = (currentColorIndex + 1) % colors.length; 
});