let arr = [ "e", 'r', 'i', 'k', 't', 'h', 'e', 'b', 'e', 's', 't' ]
let a = new Set();
for(let i =0;i<arr.length;i++)
{
    a.add (arr[i]);
}
for (let val of a) document.write(val+ ' ');


///////////////

let out;
let inp=document.querySelector('.inp');
let but=document.querySelector('.but');

but.onclick = function()
{
    if(inp.value !='')
    {
        out = document.createTextNode(inp.value+ ' \n');
        document.body.appendChild(out);
    }
}


//////////////////


let inp2=document.querySelector('.inp2');
let but2=document.querySelector('.but2');

but2.onclick = function()
{
    if(a.has(inp2.value))
    {
        out = document.createTextNode("true"+ ' \n');
        document.body.appendChild(out);
    }
    else 
    {
        out = document.createTextNode("false"+ ' \n');
        document.body.appendChild(out);
    }
}


//////////////////////////


let but3=document.querySelector('.but3');
 
let a2 = new Set();
for(let i =0;i<20;i++)
{
    a2.add(i);
}

but3.onclick = function()
{
    console.log(a2)
    for(let i of a2)
{
    if(i < 5)
    {
        a2.delete(i);
    }
}
console.log(a2)
}