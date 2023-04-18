let key = prompt("Enter Key you want to set")
let value = prompt("Enter value you want to set")

localStorage.setItem(key , value)
console.log(`the value at ${key} is ${localStorage.setItem(key)}`)

if(key== "red" || key == "black"){
    localStorage.removeItem(key)  
}

if(key== 0){
    localStorage.clear()
}