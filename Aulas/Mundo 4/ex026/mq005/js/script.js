function menu(){
    if (itens.style.display == 'block'){

        itens.style.display = 'none'

    }else if (itens.style.display = 'none'){
        
        itens.style.display = 'block'

    }

}
function mudouTamanho(){
    if (window,innerWidth >= 768){
        itens.style.display = 'block'

    }else{
        itens.style.display = 'none'
    }

}