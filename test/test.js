function bol() {

    const circulo = document.getElementById("circle")
    const barra = document.getElementById("barra")
    const txt = document.getElementById("text2")

    if (circulo.style.left != "52%") {
        circulo.style.left = "52%"
        barra.style.right = "0%"

        setTimeout(() => {
            txt.style.color = "rgb(73, 167, 255)"
        }, 400);

    } else {
        circulo.style.left = "44%"
        barra.style.right = "90%"

        setTimeout(() => {
            txt.style.color = "rgba(94, 94, 94, 0.719)"
            
        }, 400);

    }



}

function push(){

    const txt1 = document.getElementById("text1")
    txt1.style.opacity ="0"

    if(txt1.style.opacity =="0"){
        txt1.style.opacity ="1"
    }

}





