//crear una variable para acceder a todos los elementos con la clase cont_image
var cont_image = document.getElementsByClassName('cont_image');
var cont_elements = document.getElementsByClassName('u-border-1');

function resize(){
    
    //crear bucle para recorrer todos los elementos con la clase cont_image
    for (var i = 0; i < cont_image.length; i++) {
        var width = cont_image[i].clientWidth;
        cont_image[i].style.height = width + 'px';
        //cambiar el padding bottom de los elementos con la clase cont_elements
        cont_elements[i].style.paddingBottom = 0 + 'px !important';
    }
}
resize();
window.addEventListener('resize', resize);

function resizeventana(){
    var widthventana = window.innerWidth;
    var label = document.getElementsByClassName('label');
    var text = document.getElementsByClassName('u-text');
    var btn= document.getElementsByClassName('u-active-none');

    if (widthventana <= 260) {
        //acceder a elemento con la clase label y cambiar el tamaño de la fuente
        
        label[0].style.fontSize = "0.88rem";
        
        for (var i = 0; i < (text.length)-1; i++) {
            text[i].style.fontSize = "0.88rem";
            try {
                btn[i].style.fontSize = "0.88rem";
            } catch (error) {
            }

            //cambiar width del boton de la clase btn
            
            
            //console.log(text[i]);
        }
        if (widthventana <= 238) {
            console.log("menor a 238");
            label[0].style.fontSize = "0.80rem";
            for (var i = 0; i < (text.length)-1; i++) {
                text[i].style.fontSize = "0.88rem";
                try {
                    btn[i].style.fontSize = "0.68rem";
                } catch (error) {}
            }
        }
    }else{
        for (var i = 0; i < (text.length)-1; i++) {
            text[i].style.fontSize = "1rem";
            try {
                btn[i].style.fontSize = "1rem";
            } catch (error) {}
        }
        //console.log(text[i]);
        if (widthventana <= 323) {
            label[0].style.fontSize = "1rem";
        }else if (widthventana < 400) {
            label[0].style.fontSize = "1.4rem";
        }
        else{
            label[0].style.fontSize = "1.7rem";
        }
    }
}
resizeventana();
window.addEventListener('resize', resizeventana);