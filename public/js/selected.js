window.addEventListener('load', function(){
    const video = document.querySelectorAll('#video');
    const descripcion = document.querySelectorAll('#descripcion');
    const disponibilidad = document.querySelectorAll('#disponibilidad');

    console.log(video);
    video.addEventListener('click', function() {
        video.classList.toogle('selected');
        video.classList.toogle('no-selected');
        descripcion.classList.toogle('no-selected');
        descripcion.classList.toogle('selected');
        disponibilidad.classList.toogle('no-selected');
        disponibilidad.classList.toogle('selected');
    });
    descripcion.addEventListener('click', function() {
        video.classList.toogle('no-selected');
        video.classList.toogle('selected');
        descripcion.classList.toogle('selected');
        descripcion.classList.toogle('no-selected');
        disponibilidad.classList.toogle('no-selected');
        disponibilidad.classList.toogle('selected');
    });
    disponibilidad.addEventListener('click', function() {
        video.classList.toogle('no-selected');
        video.classList.toogle('selected');
        descripcion.classList.toogle('no-selected');
        descripcion.classList.toogle('selected');
        disponibilidad.classList.toogle('selected');       
        disponibilidad.classList.toogle('no-selected');
    });
})