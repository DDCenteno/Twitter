var textUser = document.getElementById('textArea');
var boton = document.getElementById('boton');
boton.disabled = true;
var textCant = document.getElementsByClassName('counter');
/* cantidad de caracteres dentro del textarea */
boton.addEventListener('click', activeBoton);
textUser.addEventListener('keyup', validateCaracters);
/* al hacer clicl al boton agregar dentro del div 
ver 0.0.1 */
function activeBoton(event) {
  var valueText = textUser.value; 
  var newDiv = document.createElement('div');
  newDiv.style.padding = '10px';
  newDiv.style.width = '150vh';
  newDiv.style.margin = '0px auto';
  newDiv.style.marginBottom = '10px';
  newDiv.style.height = 'auto';
  newDiv.style.clear = 'both';
  newDiv.style.borderRadius = '20px';
  newDiv.style.backgroundColor = 'white';
  newDiv.style.boxShadow = '2px 2px 2px gray';
  newDiv.textContent = valueText;
  post = document.querySelector('#postTwett');
  post.appendChild(newDiv);
    
  validateCaracters();
  clean(); // Limpia la caja de texto
  // validar si hay uno mas creo
}
function clean() {
  textUser.value = '';
  textCant.textContent = '';
}
/*  ver 0.0.2 bloquear boton en texto vacio (listo)
contar la cantidad de caracteres de forma regresiva */
function unactive(event) {
  boton.disabled = true;
}
function enabled(event) {
  boton.disabled = false;
}
function validateCaracters(event) {
  /* textarea = 0*/
  /* cantidad de texto dentro del textArea*/
  var valueCant = textUser.value.length;
  if (valueCant === 0) {
    unactive();
  } else {
    enabled();
    textCounter();
  }
}
var counter = document.getElementById('counter');
function textCounter(event) {
  var valueCant = textUser.value.length;
  var negative = '-';
  counter.textContent = valueCant;
  counter.style.float = 'right';
  counter.style.marginRight = '10px';
  // console.log(valueCant);
  // validamos maximo de colores
  if (valueCant > 0 && valueCant < 120) {
    counter.style.color = 'black';
  } else if (valueCant >= 120 && valueCant < 130) {
    counter.style.color = '#FF007C';
  } else if (valueCant >= 130 && valueCant < 140) {
    counter.style.color = 'orange';
  } else if (valueCant >= 140) {
    counter.style.color = 'red';
    counter.textContent = negative + valueCant;
    unactive();
  }
}