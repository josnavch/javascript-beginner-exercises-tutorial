var bulletPosition = 4;

const spinChamber = () => {
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
};

let chamberPosition = spinChamber()
// Remove the // below and complete the commented lines

console.log (spinChamber());

const fireGun = (spinnerPosition) => {
    if (chamberPosition === bulletPosition){
        return ("You're dead!");
    }else {
        return ("Keep playing!");
    }
};

console.log(fireGun());