function sing (){
    let cancion = "";
    for (let i = 1; i < 5; i++){
        cancion = cancion + "let it be, "
    }
    cancion = cancion + "words of wisdom, "
    for (let i = 1; i < 6; i++){
        cancion = cancion + "let it be, "
    }
    cancion = cancion + "there will be an answer, let it be"
    return cancion
}

//Your code above ^^^

console.log(sing());