function getColor(selection)
{
    let zapatos = selection.toUpperCase();
    console.log(zapatos);
	switch(zapatos){
        // Add more options here
            case "RED":
                return true;
                break;
            case "GREEN":
                return true;
                break;
            case "BLUE":
                console.log("Es azul el zapato");
                return true;
                break;
	    default:
	    	return false;  //returns false because the user picked an unavailable color
	}
}

var colorname = prompt('What color do you want?');
var isAvailable = getColor(colorname);

console.log(isAvailable);

if(isAvailable)
	console.log('Good news! That color is available');
else 
	console.log('We are sorry, that color is not available');
