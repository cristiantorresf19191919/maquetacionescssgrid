let boton = document.querySelector('.header__main__cta');
let boton2 = document.querySelector('.button');
const funcionDispare = ()=>{
  Swal.fire({
      title: '<strong>Obten tu Obsequio</strong>',
      type: 'success',
      html:
        'Digita tu <b>email</b> <br> ' +
        '<input> ',
        
   
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',       
      cancelButtonAriaLabel: 'Thumbs down'
    })
}

boton.addEventListener('click',funcionDispare);
boton2.addEventListener('click',funcionDispare);

  