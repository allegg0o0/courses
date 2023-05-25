document.querySelector('p').innerHTML = 'first';
document.querySelectorAll('p')[1].innerHTML = 'second';
let out = document.querySelector('.out');
let inp = document.querySelector('.inp');
let but = document.querySelector('.but');

but.onclick= function() {
if(inp.value>100)
{out = inp.value;}
else if(inp.value<=100)
{console.log(inp.value);}
else {document.querySelector('.out').innerHTML = 'не число';}
inp.value='';
}