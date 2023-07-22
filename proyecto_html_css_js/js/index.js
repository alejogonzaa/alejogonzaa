'use strict'

$(document).ready(function(){

    $('body').on({ 'mousemove' : function(e){
        console.clear()
        let clientX = e.originalEvent.clientX
        let clientY = e.originalEvent.clientY
        $('#cursor').css({
            'left' : (clientX - 40) +'px',
            'top'  : (clientY - 40) +'px'
        })
    }})

    $('.a').on({
        'mouseover' : function(){
            $('#cursor').addClass('mini')
        },
        'mouseout' : function(){
            $('#cursor').removeClass('mini')
        },
    })
})

const fotosSig       = document.querySelector(`.Fotos-sig`)
const fotosAnt       = document.querySelector(`.Fotos-ant`)
const fotosImgList   = document.querySelectorAll(`.Fotos-img`)
const fotosPointList = document.querySelectorAll(`.Fotos-punto`)

console.log( fotosSig )
console.log( fotosAnt )
console.log( fotosImgList )
console.log( fotosPointList )


let setActive = ()=>{
    fotosImgList.forEach(( eachImg , index )=>{
        fotosImgList[index].classList.remove(`isActive`)
        fotosPointList[index].classList.remove(`isActive`)
    })
    fotosImgList[sliderActive].classList.add(`isActive`)
    fotosPointList[sliderActive].classList.add(`isActive`)
}

let sliderActive = 0


fotosSig.addEventListener(`click`,()=>{
    sliderActive++
    if( sliderActive >= fotosImgList.length ){
        sliderActive = 0
    }
    setActive()
})

fotosAnt.addEventListener(`click`,()=>{
    sliderActive--
    if( sliderActive <= -1 ){
        sliderActive = fotosImgList.length - 1
    }
    setActive()
})


fotosPointList.forEach(( eachPoint , index )=>{
    fotosPointList[index].addEventListener(`click`,()=>{
        sliderActive = index
        setActive()
    })
})

// Cuando hago CLICK en gridImgs hace una FUNCTION
// lightbox le ADD la clase isActive

const gridImgs      = document.querySelectorAll('.Grid-img')
const ventana      = document.querySelector(`.Ventana`)
const ventanaImg   = document.querySelector('.Ventana-img')
const ventanaCierra = document.querySelector(`.Ventana-cierra`)
const ventanaBg    = document.querySelector(`.Ventana-bg`)

console.log( gridImgs )
console.log( ventana )
console.log(ventanaImg)
console.log(ventanaCierra)
console.log(ventanaBg)

gridImgs.forEach(( eachImg , i )=>{
    gridImgs[i].addEventListener(`click`,()=>{

        ventana.classList.add(`isActive`)
        ventanaImg.src = gridImgs[i].src

    })
})

ventanaBg.addEventListener('click',()=>{

    ventana.classList.remove(`isActive`)

})

ventanaCierra.addEventListener('click',()=>{
    ventana.classList.remove(`isActive`)
})


const headerBotton = document.querySelector('.Header-botton')
const headerMenu = document.querySelector('.Header-menu')

console.log (headerBotton)
console.log (headerMenu)

headerBotton.addEventListener('click' , ()=>{
    headerMenu.classList.toggle('isActive')
})

//Funcion para desplazar la pagina en scroll cuando se hag clic en un href
jQuery('a[href*=\\#]').click(function() {
    console.log('epa');
    moverScrollY(this);
    jQuery('.Header-nav').removeClass(`isActive`);
    

});

//Funcion para desplazarse cada vez que se hace un clic con "#"
function moverScrollY(e){
    if (location.pathname.replace(/^\//,'') == e.pathname.replace(/^\//,'')
         && location.hostname == e.hostname) {
        
             var $target = jQuery(e.hash);

             $target = $target.length && $target || jQuery('[name=' + e.hash.slice(1) +']');
            
             console.log($target);
                
             if ($target.length) {
                
                 var targetOffset = $target.offset().top;
                    
                 jQuery('html,body').animate({scrollTop: targetOffset-150}, 1000);

                 return false;

            }

       }
}
   
