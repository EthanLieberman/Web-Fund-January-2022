function clik() {
    var element = document.getElementById("vanish");

    element.remove();
}


function tempchange(select){

    var el = document.querySelectorAll('span')
console.log(el)
    if (select.value == 'cel'){
        for(var i = 0; i < el.length; i++){
            el[i].innerText = Math.round((el[i].innerText - 32) * (5/9))

        }

    }

    else{
        for(var i = 0; i < el.length; i++){
            el[i].innerText = Math.round((el[i].innerText * (9/5)) + 32)
        }
    }
}