// Your code here:

function Bottles_of_Milk(){
    let strofa = " bottles of milk on the wall, "
    let strofa2 = " bottles of milk. Take one down and pass it around, "
    let strofafinal = " bottle of milk on the wall, "
    let strofafinal2 = " bottle of milk. Take one down and pass it around, "
    let strofafinal3 = "no more bottles of milk on the wall. "
    let finalsong = "No more bottles of milk on the wall"
    let finalsong2 = ", no more bottles of milk."  
    let finalsong3 = "Go to the store and buy some more, 99 bottles of milk on the wall. "
    let cancion = "";
    
    for (let i = 98; i > 0; i--){
        var str = i.toString();
        if ( i == 1){
            cancion = cancion + str + strofafinal + str + strofafinal2 + strofafinal3 + finalsong + finalsong2 + finalsong3

        } else {
            cancion = cancion + str + strofa + str + strofa2
        }
        console.log(cancion);
        
    }
    return cancion;
    console.log(i);
    
}

console.log(Bottles_of_Milk())