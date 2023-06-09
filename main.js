let but1 = document.querySelector('.but1');
let out =  document.querySelector('.out');
let arr = [];
let len = 15; //длина массива
for(let i=0;i<len;i++)
{
    arr[i]=i+100;
}
but1.onclick = function()
{
    out = arr[5];
    document.querySelector('.out').innerHTML = out;
}

//////////

but2 = document.querySelector('.but2');
but2.onclick = function()
{
    out = '';
    for(let i=0;i<len;i++)
    {
        if(arr[i]%2==0)
        {
            out += arr[i] + ' ';
        }
    }
    document.querySelector('.out').innerHTML = out;
}

//////////

but3 = document.querySelector('.but3');
but3.onclick = function()
{
    out = '';
    for(let i=0;i<len;i++)
    {
        if(arr[i]%2==1)
        {
            out += arr[i] + ' ';
        }
    }
    document.querySelector('.out').innerHTML = out;
}

//////////

but4 = document.querySelector('.but4');
let x =10; //высота массива 
let y =4; //ширина массива
let arr2 = new Array();
arr2.length= x;
for(let i=0;i<x;i++)
{
    arr2[i] = new Array();
    arr2[i].length=y;
    for(let j=0;j<y;j++)
    {
        arr2[i][j]=i+ '.'+ j + '    ';
    }
}
but4.onclick = function()
{
    out = '';
        for(let j=y-1;j>=0;j--)
        {
            
            out+= arr2[2][j] + '___';
            
        }
    document.querySelector('.out').innerHTML = out;
}