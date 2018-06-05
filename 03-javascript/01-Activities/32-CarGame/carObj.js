var car = 
    {
        make: "Honda",
        model: "Fit",
        color: "Blue Raspberry",
        mileage: 3000,
        isWorking: true,

        driveToWork: function() 
            {
                alert("Old Mileage: " + this.mileage);
                this.mileage = this.mileage + 8;
                alert("New mileage: " + this.mileage);
            },

        driveAroundWorld: function() 
            {
                alert("Old Mileage: " + this.mileage);
                this.mileage = this.mileage + 24000;
                alert("New Mileage: " + this.mileage);
                alert("Car needs a tuneup!");
                this.isWorking = false;
            },

        getTuneUp: function() 
            {
                alert("Car is ready to go!");
                this.isWorking = true;
            },

         honk: function() 
            {alert("Honk! Honk!");},
        
    };
// d to work
// 
    
document.onkeyup = function(event)
    {
        var usrInput = event.key;
        if (usrInput == "h")
            {car.honk();}
        else if (usrInput == "t")
            {car.getTuneUp();}
        else if (usrInput == "d")
            {car.driveToWork();}
        else if (usrInput == "w")
            {car.driveAroundWorld();}     
        reWriteStats();
    };

    function reWriteStats (carObj)
    {
        console.log(carObj.make);
        console.log(carObj.model);
        console.log(carObj.color);
        console.log(carObj.mileage);
        console.log(carObj.isWorking);
    }
