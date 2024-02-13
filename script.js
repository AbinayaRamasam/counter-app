let countEl= document.getElementById("count-el")

let saveEl = document.getElementById("save-el")
console.log(saveEl)
let count = 0
function increment()
{
       count+=1
    countEl.textContent = count
}
function save()
{
    let countStr = count+ +" " +"-"
    saveEl.textContent += countStr
    countEl.textContent=0
    count=0
    console.log(count)  
}
//let welcomeEl=document.getElementById("welcome-el")
//let name = "Abinaya "
//let message = "Welcome to our website"

//welcomeEl.innerText = name+" " +message
//welcomeEl.innerText = welcomeEl.innerText+"😎"