for(let count=0;count<=50;count++)
{
    let first = document.createTextNode(count+ '  ');
    document.body.appendChild(first);
}

let div = document.createElement('div');
    document.body.appendChild(div);

for(let count=50;count>=25;count--)
{
    let num = document.createTextNode(count+ '  ');  
    document.body.appendChild(num);
}

let div2 = document.createElement('div');
    document.body.appendChild(div2);

for(let count=2500;count<=3000;count++)
{
    if(count%2==1)
    {
        let num = document.createTextNode(count+ '  ');  
        document.body.appendChild(num);
    }
}