function runCode(){
    //console.log("Java Script Objects")

    const objDog = {
        "Name": "Tommy",
        "Num of Legs": 3,
        "Tails": 2,
        "Friends": []
    };

    console.log("Accessing objects's properties - Dot Notation");

    let dogsName;
    dogsName = objDog.Name;
    console.log(dogsName);

    console.log("Accessing objects's properties - Bracket Notation");
    let dogsLegs;
    dogsLegs = objDog["Num of Legs"];
    console.log("Num of Legs = ",dogsLegs);

    objDog.Name = "Pagal Tommy"
    let dogsName2;
    dogsName2 = objDog.Name;
    console.log(dogsName2);










}

runCode();





document.getElementById("run-btn").addEventListener(
    "click",
    runCode
)