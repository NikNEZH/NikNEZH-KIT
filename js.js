
let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
reg1 = /[0-9]/;

let inp = document.querySelector('#logemail')
let inppas = document.querySelector('#logpass')

let span = document.querySelector('.span')

document.querySelector('#btn').onclick = function (e) {
e.preventDefault(); 
if(!validation(reg, inp.value)){
notValid(inp,span, alert(' NOT VALID EMAIL@ '))
}else { 
    Valid(inp,span, '')
} 
if(!validation(reg1, inppas.value)){
    notValid(inppas,span, alert(' NOT VALID PASSWORD '))
    }else { 
        Valid(inppas,span, '')
    } 

}  

let validation = (regex, inp) => {
return regex.test(inp)
}

let notValid = (inp, el, mess) => {
    inp.classList.add('is-invalid');
    el.innerHtml = mess;
    }


let Valid = (inp, el, mess) => {
        inp.classList.remove('is-invalid');
        inp.classList.add('is-valid');
        el.innerHtml = mess;
        } 

        