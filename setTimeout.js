//make pizza in three steps - cheese - dough - pizza


// async function 
// setTimeout

console.log("lol");

function trySetTimeOut() {
    console.log("inside f1");
    setTimeout(() => {
        const cheese = "🧀";
        console.log("here is the cheese " + cheese);
    }, 2000);
    return 99;
}

// function callbackFunction() {
//     console.log("inside call back");
// }


let nine = trySetTimeOut();
console.log(nine);
//getCheese();

