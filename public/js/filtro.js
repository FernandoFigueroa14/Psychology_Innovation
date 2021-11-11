window.addEventListener('load', function(){
    let busca = document.querySelector('#input_2392');
    let recientes = document.querySelector('#terap_recientes');
    let terapeutas = document.querySelectorAll('.terap-card');
    let nombres = document.querySelectorAll('.terap-nombre');

    //Especialidades
    let depresion = document.querySelector('#depresion');
    let ansiedad = document.querySelector('#ansiedad');
    let autoestima = document.querySelector('#autoestima');
    let terapPareja = document.querySelector('#terap-parejas');
    let desarrollo = document.querySelector('#desarrollo');
    let alimenticio = document.querySelector('#alimenticio');
    let terapFamiliar = document.querySelector('#terap-familiar');
    let especialidades = document.querySelectorAll('.especialidad');

    let especial = []

    especialidades.forEach(especialidad => {
        especial.push(especialidad.innerText.toLowerCase().split('\n'))
    });

    console.log(especial);

    depresion.addEventListener('click', () => {
        let valor = depresion.checked;

        for(i in especial){
            for(j in especial[i]){
                if(valor){
                    if(especial[i][j] == 'depresión'){
                        terapeutas[i].classList.remove('d-none');
                        break
                    } else {
                        terapeutas[i].classList.add('d-none');
                    }
                }else{
                    terapeutas[i].classList.remove('d-none');
                } 
            }
        }
    })

    ansiedad.addEventListener('click', () => {
        let valor = ansiedad.checked;

        console.log(valor)

        for(i in especial){
            for(j in especial[i]){
                if(valor){
                    if(especial[i][j] == 'ansiedad'){
                        terapeutas[i].classList.remove('d-none');
                        break
                    } else {
                        terapeutas[i].classList.add('d-none');
                    }
                }else{
                    terapeutas[i].classList.remove('d-none');
                } 
            }
        }
    });

    autoestima.addEventListener('click', () => {
        let valor = autoestima.checked;

        console.log(valor)

        for(i in especial){
            for(j in especial[i]){
                if(valor){
                    if(especial[i][j] == 'autoestima'){
                        terapeutas[i].classList.remove('d-none');
                        break
                    } else {
                        terapeutas[i].classList.add('d-none');
                    }
                }else{
                    terapeutas[i].classList.remove('d-none');
                } 
            }
        }
    });

    terapPareja.addEventListener('click', () => {
        let valor = terapPareja.checked;

        console.log(valor)

        for(i in especial){
            for(j in especial[i]){
                if(valor){
                    if(especial[i][j] == 'terapia de parejas'){
                        terapeutas[i].classList.remove('d-none');
                        break
                    } else {
                        terapeutas[i].classList.add('d-none');
                    }
                }else{
                    terapeutas[i].classList.remove('d-none');
                } 
            }
        }
    });

    desarrollo.addEventListener('click', () => {
        let valor = desarrollo.checked;

        console.log(valor)

        for(i in especial){
            for(j in especial[i]){
                if(valor){
                    if(especial[i][j] == 'desarrollo personal'){
                        terapeutas[i].classList.remove('d-none');
                        break
                    } else {
                        terapeutas[i].classList.add('d-none');
                    }
                }else{
                    terapeutas[i].classList.remove('d-none');
                } 
            }
        }
    });

    alimenticio.addEventListener('click', () => {
        let valor = alimenticio.checked;

        console.log(valor)

        for(i in especial){
            for(j in especial[i]){
                if(valor){
                    if(especial[i][j] == 'trastorno alimenticio'){
                        terapeutas[i].classList.remove('d-none');
                        break
                    } else {
                        terapeutas[i].classList.add('d-none');
                    }
                }else{
                    terapeutas[i].classList.remove('d-none');
                } 
            }
        }
    });

    terapFamiliar.addEventListener('click', () => {
        let valor = terapFamiliar.checked;

        console.log(valor)

        for(i in especial){
            for(j in especial[i]){
                if(valor){
                    console.log(especial[i][j])
                    if(especial[i][j] == 'terapia familiar'){
                        terapeutas[i].classList.remove('d-none');
                        break
                    } else {
                        terapeutas[i].classList.add('d-none');
                    }
                }else{
                    terapeutas[i].classList.remove('d-none');
                } 
            }
        }
    });

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
          }else if(pal.length <= 0){
                terap[indice].classList.remove('d-none');
          }
        }
        }
      }

    busca.addEventListener('keyup', function(){
        autocompletado();
    })

    
});