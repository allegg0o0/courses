let but1 = document.querySelector('.but1');
let element = document.querySelector('.element');
element.classList.add("size");
but1.onclick = function()
{
    element.classList.toggle("size");
}

////////////

let but2 = document.querySelector('.but2');
let el2 = document.querySelector('.el2');
el2.classList.add("size","color","shape");
but2.onclick = function()
{
    el2.classList.toggle("size");
    el2.classList.toggle("shape");
    el2.classList.toggle("color");
}

/////////////

del = document.querySelector('.del');
del.onclick = function()
{
    el2.classList.remove("shape");
}