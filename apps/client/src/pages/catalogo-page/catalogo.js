/*Desplegar y eliminar los filtros*/
document.getElementById('btn_filtros').addEventListener('click', function () {
  var contenedor = document.querySelector('.contenedor-filtros');
  if (contenedor.style.display === 'block') {
    contenedor.style.display = 'none';
  } else {
    contenedor.style.display = 'block';
  }
});
