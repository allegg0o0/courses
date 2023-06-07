//Задание 1
function Out(a)
{
    let out = document.createTextNode('значение а =' + a+'   ');
    document.body.append(out);
};
let but = document.querySelector('.but');
let a = 10;
but.onclick  = function(){Out(a)};





//Задание 2

function Verif(fir, sec)
{
    if(fir != fir || fir =='')
    {return 1;}
    else if(sec != sec || sec=='')
    {return 2;}
}
let but1 = document.querySelector('.but1');
let but2 = document.querySelector('.but2');
let but3 = document.querySelector('.but3');
let but4 = document.querySelector('.but4');
let inp1 = document.querySelector('.inp1');
let inp2 = document.querySelector('.inp2');
let out = document.createTextNode("_________");;
document.body.append(out); 
let fir
let sec;
but1.onclick = function() 
{
    fir = +inp1.value;
    sec = +inp2.value;
    out.remove();
    if(Verif(fir, sec) == 1)
    {out = document.createTextNode('введите число в поле 1'); }
    else if(Verif(fir, sec) == 2)
    {out = document.createTextNode('введите число в поле 2');}
    else
    {out = document.createTextNode('результат сложения = ' + (fir +sec));} 
    document.body.append(out);
}
but2.onclick = function() 
{
    fir = +inp1.value;
    sec = +inp2.value;
    out.remove();
    if(Verif(fir, sec) == 1)
    {out = document.createTextNode('введите число в поле 1'); }
    else if(Verif(fir, sec) == 2)
    {out = document.createTextNode('введите число в поле 2');}
    else
    {out = document.createTextNode('результат вычитания = ' + (fir - sec));} 
    document.body.append(out);
}
but3.onclick = function() 
{
    fir = +inp1.value;
    sec = +inp2.value;
    out.remove();
    if(Verif(fir, sec) == 1)
    {out = document.createTextNode('введите число в поле 1'); }
    else if(Verif(fir, sec) == 2)
    {out = document.createTextNode('введите число в поле 2');}
    else
    {out = document.createTextNode('результат умножения = ' + (fir * sec));} 
    document.body.append(out);
}
but4.onclick = function() 
{
    fir = +inp1.value;
    sec = +inp2.value;
    out.remove();
    if(Verif(fir, sec) == 1)
    {out = document.createTextNode('введите число в поле 1'); }
    else if(Verif(fir, sec) == 2)
    {out = document.createTextNode('введите число в поле 2');}
    else
    {out = document.createTextNode('результат деления = ' + (fir / sec));} 
    document.body.append(out);
}
