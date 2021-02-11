var total = prompt('How many km are left to go?');

// Your code below:

var km = parseInt(total, 10);
var msg =  "";

if (km > 100) {
     msg =  "Are we there yet?"
} else {
    if (km > 50) {
         msg =  "We'll be there in 5 minutes"
    } else {
        if (km <= 50){
             msg =  "I'm parking, I see you right now"
        }
        
    }
    
}

console.log(msg)