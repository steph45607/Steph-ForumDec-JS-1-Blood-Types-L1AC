function canGiveBlood(donor,receive){
    accept = "Blood donor is allowed!"
    decline = "Can't donor!"
    if(donor == "O+" && (receive == "A+"||"O+"||"B+"||"AB+")){
        console.log(accept)
    }
    else if(donor == "A+" && (receive == "A+"||"AB+")){
        console.log(accept)
    }
    else if(donor == "B+" && (receive == "B+"||"AB+")){
        console.log(accept)
    }
    else if(donor == "AB+" && (receive == "AB+")){
        console.log(accept)
    }
    else if(donor == "O-" && (receive == "A+"||"O+"||"B+"||"AB+"||"A-"||"O-"||"B-"||"AB-")){
        console.log(accept)
    }
    else if(donor == "A-" && (receive == "A-"||"A+"||"AB+"||"AB-")){
        console.log(accept)
    }
    else if(donor == "B-" && (receive == "B-"||"B+"||"AB+"||"AB-")){
        console.log(accept)
    }
    else if(donor == "AB-" && (receive == "AB-"||"AB+")){
        console.log(accept)
    }
    else{
        console.log(decline)
    }
};

// First parameter is the donor's blood type
// Second parameter is the receiver's blood type
canGiveBlood("O+", "AB+") //Change the parameter as a user input