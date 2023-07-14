let but = document.querySelector('.plus');
let inp = document.querySelector('.inp');
let error = document.querySelector('.error');
let arr =[];
let point;


    function update()
    {
        document.querySelector('.listingContainer').innerHTML='';
        for(let count=0; count<arr.length;count++)
        {
            
            div = document.createElement('div');
            div.classList.add('div'+count);
            div.classList.add('div');

            li = document.createElement('li');
            li.innerHTML=arr[count];
            
            gotovo = document.createElement('button');
            gotovo.innerHTML = ' ✔';
            gotovo.classList.add('gotovo');

            gotovo.onclick = function()
            {
                document.querySelector(`.div${count}`).querySelector('li').classList.toggle('through');
            }

            del = document.createElement('button');
            del.innerHTML = 'delete';
            del.classList.add('del'+count);
            del.classList.add('del');

            del.onclick = function()
            {
                console.log(this.parentNode)
                console.log()
                this.parentNode.remove();
                arr.splice(arr.indexOf(this.li),1);
            }
            
            document.body.querySelector('.listingContainer').append(div);
            document.body.querySelector(`.div${count}`).append(li);
            document.body.querySelector(`.div${count}`).append(gotovo);
            document.querySelector(`.div${count}`).append(del);
        }
    }
    function inpCheck()
    {
        if(inp.value=='')
        {error.innerHTML='Поле ввода не может быть пустым';}
        else
        {
            error.innerHTML='';
            arr.push(inp.value);
        }
    }
    update();
 but.onclick = function()
{
    inpCheck();  
    update();
    inp.value = ('');
}