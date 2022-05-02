function mostrar(){
  
document.querySelectorAll(".oculto").forEach(element => {
    element.classList.remove('.oculto');
  });
}