
let out = document.querySelector('.out');
let inp1 = document.querySelector('.inp1');
let inp2 = document.querySelector('.inp2');
let but = document.querySelector('.but');

let out2 = document.querySelector('.out2');
let inp3 = document.querySelector('.inp3');
let inp4 = document.querySelector('.inp4');
let but2 = document.querySelector('.but2');

but.onclick= function() 
{
if(inp1.value == "")
{out.innerHTML = "нет числа в поле 1";}
else if(inp2.value =="")
{out.innerHTML = "нет числа в поле 2";}
else if(inp1.value*1+inp2.value*1<15) 
{out.innerHTML = inp1.value*1+inp2.value*1 + " меньше 15";}
else if(inp1.value*1+inp2.value*1>=15)
{out.innerHTML = inp1.value*1+inp2.value*1 + " больше 15";}
}

but2.onclick= function() 
{
    if(inp3.value===inp4.value)
    {{out2.innerHTML = "элементы одинаковые";}}
    else 
    {out2.innerHTML = "элементы разные";}
}