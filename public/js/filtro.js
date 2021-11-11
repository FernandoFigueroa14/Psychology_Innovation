window.addEventListener('load', function(){
    let busca = document.querySelector('#input_2392');
    let recientes = document.querySelector('#terap_recientes');
    let terapeutas = document.querySelectorAll('.terap-card');
    let nombres = document.querySelectorAll('.terap-nombre');

    let preguntas = [];

    nombres.forEach(nombre => {
        arrayNombre = nombre.textContent.split(' ');
        preguntas.push(arrayNombre);
    })

    function autocompletado() {
        let pal = busca.value;
        let tam = pal.length;
        let terap = terapeutas;
        for(indice in preguntas){
         for(j in preguntas[indice]){
          let nombre = preguntas[indice][j];
          let str = nombre.substring(0,tam);
          if(pal.length <= nombre.length && pal.length != 0 && nombre.length != 0){
            if(pal.toLowerCase() == str.toLowerCase()){
                    terap[indice].classList.remove('d-none');
                    break
            } else {
                // console.log(terap[indice])
                terap[indice].classList.add('d-none');
            }
          }else{
                terap[indice].classList.remove('d-none');
          }
        }
        }
      }

    busca.addEventListener('keyup', function(){
        autocompletado();
    })

    
});