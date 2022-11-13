let indexi = 1;

const next = (n) => {
    showDiat(indexi += 1);
}



const showDiat = (n) => {

    let i;
    let diat = document.getElementsByClassName("diat");

    for (i = 0; i < diat.length; i++){
        diat[i].style.display = "none";
    }

    indexi++;

    if (indexi > diat.length){
        indexi = 1;
    }

    if (n < 1) { indexi = diat.length }

    diat[indexi - 1].style.display = "block";
    setTimeout(showDiat, 2000);     // Vaihtaa kuvia joka 2 sekuntti

}


export default next;