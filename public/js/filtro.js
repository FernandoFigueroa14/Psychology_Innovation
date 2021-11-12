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

    espSelected = []

    function filtroespecialidades(){
        console.log(espSelected);
        if(espSelected.length >0){
            espSelected.forEach(especialidad => {
                for(i in especial){
                    for(j in especial[i]){
                            if(especial[i][j] == especialidad){
                                terapeutas[i].classList.remove('d-none');
                                break
                            } else {
                                terapeutas[i].classList.add('d-none');
                            }
                     }
                    }
            });
        }else{
            terapeutas.forEach(terapeuta => {
                terapeuta.classList.remove('d-none');
            }) 
        }
    };

    depresion.addEventListener('click', () => {
        let valor = depresion.checked;
        if(valor){
            espSelected.push('depresión')
        }else{
            espSelected = espSelected.filter(sel => {
                return sel !== 'depresión';
            });
        }
        filtroespecialidades();
    })

    ansiedad.addEventListener('click', () => {
        let valor = ansiedad.checked;

        if(valor){
            espSelected.push('ansiedad')
        }else{
            espSelected = espSelected.filter(sel => {
                return sel !== 'ansiedad';
            });
        }
        filtroespecialidades();
    });

    autoestima.addEventListener('click', () => {
        let valor = autoestima.checked;

        if(valor){
            espSelected.push('autoestima')
        }else{
            espSelected = espSelected.filter(sel => {
                return sel !== 'autoestima';
            })
        }
        filtroespecialidades();
    });

    terapPareja.addEventListener('click', () => {
        let valor = terapPareja.checked;

        if(valor){
            espSelected.push('terapia de parejas')
        }else{
            espSelected = espSelected.filter(sel => {
                return sel !== 'terapia de parejas';
            });
        }
        filtroespecialidades();
    });

    desarrollo.addEventListener('click', () => {
        let valor = desarrollo.checked;

        if(valor){
            espSelected.push('desarrollo personal')
        }else{
            espSelected = espSelected.filter(sel => {
                return sel !== 'desarrollo personal';
            });
        }
        filtroespecialidades();
    });

    alimenticio.addEventListener('click', () => {
        let valor = alimenticio.checked;

        if(valor){
            espSelected.push('trastorno alimenticio')
        }else{
            espSelected = espSelected.filter(sel => {
                return sel !== 'trastorno alimenticio';
            });
        }
        filtroespecialidades();
    });

    terapFamiliar.addEventListener('click', () => {
        let valor = terapFamiliar.checked;

        if(valor){
            espSelected.push('terapia familiar')
        }else{
            espSelected = espSelected.filter(sel => {
                return sel !== 'terapia familiar';
            });
        }
        filtroespecialidades();
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