let circle = document.querySelector('.circle');
let out;
circle.onclick = function()
{
    circle.classList.add("resize");
}

///////////


let ring = document.querySelector('.ring');
let data = 123;
ring.ondblclick = function()
{
    document.body.createTextNode = ('data');
    console.log(data);
    ring.classList.add("resize");
    out = document.createTextNode('data = ' + data);
    document.body.appendChild(out);
}


////////////

let ring2 = document.querySelector('.ring2');
ring2.classList.add("ring");
ring2.onclick = function()
{
    ring2.classList.toggle("cat2");
}

//////////////

inp = document.querySelector('.inp');
inp.onkeypress = function(event)
{
    out = document.createTextNode(event.key+' ');
    document.body.appendChild(out);
    if(+event.key)
    {
        out = document.createTextNode('false ' );
        document.body.appendChild(out);
    }
}