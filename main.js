// let a = [1,2,3]
// let but = document.querySelector('.but')
// but.onclick =()=> {
// localStorage.setItem('data', JSON.stringify(a))
// document.querySelector('.qwer').innerHTML = localStorage.getItem('data')
// let b = localStorage.getItem('data')
// console.log(b);
// b = JSON.parse(b)
// console.log(b);
// console.log(typeof b);
// }
let xhttp = new XMLHttpRequest()

xhttp.onreadystatechange = function (){
if(this.readyState == 4 && this.status ==200){
myfunc(this.responseText)
}
}
xhttp.open('GET', 'https://automarine25.ru/', true)
xhttp.send()
function myfunc(data){
console.log(data);
}