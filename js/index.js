var CalcKey = document.getElementById('calculator');
CalcKey.addEventListener('click',main);
var str = '';
var stateOfOperator = false;



function main (event)
{
   var sym = event.target.getAttribute('data-value');
   var classSym = event.target.className;
   var result = '';
   if(classSym === 'cancel')
   {
       str = '';
       document.getElementById('output').innerHTML = '';
   }
    if(classSym === 'result')
    {
        str = calculator(str);
        document.getElementById('output').innerHTML = str;
        stateOfOperator = false;

    }
   if(classSym === 'number')
   {
       str += sym;
       document.getElementById('output').innerHTML = str;

   }
   if(classSym === 'operator'&& stateOfOperator === false)
   {
       str += sym;
       document.getElementById('output').innerHTML = str;
       stateOfOperator = true;

   }



}

function calculator (str)
{
    let a = '', b = '', op = '';
    for (let i = 0; i <= str.length; i++)
    {
        switch (str[i]) {
            case '+':
                op = '+';
                break;
            case '-':
                op = '-';
                break;
            case '/':
                op = '/';
                break;
            case '*':
                op = '*';
                break;
            default:

                if(op === '')
                {
                    a += str[i];
                }

                if(op !== '')
                    b += str[i];
                break;
        }
    }

    switch (op){
        case '-':
            return parseFloat(a)-parseFloat(b);
            break;
        case '+':
            return parseFloat(a)+parseFloat(b);
            break;
        case '/':
            return parseFloat(a)/parseFloat(b);
            break;
        case '*':
            return parseFloat(a)*parseFloat(b);
            break;
    }

}