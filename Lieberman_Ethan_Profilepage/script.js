function namechange(){
    var name = document.querySelector('#guy')
    console.log(name)

    name.innerText = "Jane Doe"
}

var req = document.querySelectorAll('#reqbox')
console.log(req)
function begone(num){


    if(num == 1 || num == 2){
        req[0].remove()
    }
    else{
        req[1].remove()
    }

    var connum = document.querySelectorAll('#conreqnum')
    // console.log(document.querySelectorAll('#conreqnum'))
    connum[0].innerText--;
    // console.log(connum[0].innerText)

    if(num == 1 || num == 3){
        connum[1].innerText++;
    }
}