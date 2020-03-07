const gray = ()=>{
    console.log("gray")
}
const navy = ()=>{
    console.log("navy")
}
const green = ()=>{
    console.log("green")
}

document.getElementById("gray").addEventListener('click', gray);
document.getElementById("navy").addEventListener('click', navy, true);
document.getElementById("green").addEventListener('click', green);