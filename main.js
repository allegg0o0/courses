fetch('http://127.0.0.1:5500/')
.then(data =>{
console.log(data);
console.log(data.text());
})

// fetch('http://127.0.0.1:5500/')
// .then(data =>{
// console.log(data);
// data.text().then(data2 =>{
// console.log(data);
// })
// })

// fetch('http://127.0.0.1:5500/')
// .then(data =>{
// console.log(data);
// return data.text()
// })
// .then(data =>{
// console.log(data);
// })

fetch('http://127.0.0.1:5500/')
.then(data => data.text())
.then(data =>{
console.log(data);
})