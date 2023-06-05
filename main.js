let two = 2;
let a = prompt('введите число меньше 2 и больше 0', "");
let out;
switch(+a)
{
    case 1:
        out=  document.createTextNode("Верно!");
    break;
    case 0:
        out= document.createTextNode("нет, 0 не больше 0");
    break;
    case 2:
        out= document.createTextNode("нет, 2 не меньше 2");
    break;
    default:
        out= document.createTextNode("вы ввели что-то не то...");
}
document.body.append(out);


///////////////////////////////////////


let inp1 = document.querySelector('.inp1');
let but1 = document.querySelector('.but1');
let div1 = document.createElement('div1');
document.body.append(div1);
let season;
but1.onclick = function()
{
    if(inp1.value == "")
    {out.innerHTML = "нет числа в поле 'время года'";}
    else
    {
    season = inp1.value;
    out.remove();
    }
    switch(+season)
    {
        case 1:
        case 2:
        case 3:
            out=  document.createTextNode("зима");
        break;
        case 4:
        case 5:
        case 6:
            out= document.createTextNode("весна");
        break;
        case 7:
        case 8:
        case 9:
            out= document.createTextNode("лето");
        break;
        case 10:
        case 11:
        case 12:
            out= document.createTextNode("осень");
        break;
        default:
            out= document.createTextNode("вы ввели что-то не то...");
        break;
    }
    document.body.append(out);
}


////////////////////////

let but2 = document.querySelector('.but2');
let first = 1;
let second = '2';
let undef;

but2.onclick = function()
{
    out.remove();
    out = document.createTextNode(first??second??undef);
    document.body.append(out);
}