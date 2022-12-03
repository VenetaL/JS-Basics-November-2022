function building(input) {
    let floorNumber = Number(input[0]);
    let roomNumber = Number(input[1]);
    let i = 0;
    let currentFloor = floorNumber - i;
    let lastFloorRoomsArray = [];
    let OfficesArray = [];
    let apartmentArray = [];
  

    if (floorNumber === 1) {
        for (y= 0; y < roomNumber; y++) {
        let lastFloorRooms = (`L${floorNumber}${y}`)
        lastFloorRoomsArray = lastFloorRoomsArray.concat(lastFloorRooms)
      
    }   console.log(...lastFloorRoomsArray)
        return;
    }


    while (i <= floorNumber && currentFloor !==0) {
        if (currentFloor === floorNumber){
            for (y= 0; y < roomNumber; y++) {
            let lastFloorRooms = (`L${currentFloor}${y}`)
            lastFloorRoomsArray = lastFloorRoomsArray.concat(lastFloorRooms)
            }   
            console.log(...lastFloorRoomsArray)
        }
        
        if (currentFloor % 2 === 0 && currentFloor !== floorNumber) {
            for (y= 0; y < roomNumber; y++) {
                let offices = (`O${currentFloor}${y}`)
                OfficesArray = OfficesArray.concat(offices)
            }   
            console.log(...OfficesArray)
            OfficesArray = [];
        }
        
        if (currentFloor % 2 === 1 && currentFloor !== floorNumber) {
            for (y= 0; y < roomNumber; y++) {
                let apartments = (`A${currentFloor}${y}`)
                apartmentArray = apartmentArray.concat(apartments)
            }   
            console.log(...apartmentArray)
            apartmentArray = [];
        }
        i++
        currentFloor--
        
    }

    }

building(["1", "4"])