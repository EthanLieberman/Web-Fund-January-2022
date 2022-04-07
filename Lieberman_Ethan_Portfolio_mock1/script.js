function headerColorOn(element) {
    element.style.color = 'rgb(131, 203, 231)';
}

function headerColorOff(element) {
    element.style.color = 'white';
}

function resumeOn(el) {
    el.style.background = 'rgb(131, 203, 231)'
}

function resumeOff(el) {
    el.style.background = 'none'
}


// function over(el) {
//     el.style.position = 'relative'
//     el.style.left = '20px'
    
// }

// function out(el) {
//     el.style.positon = 'relative'
//     el.style.left = '0px'
// }



function over(el) {
    el.classList.add('move')
    el.classList.remove('unmove')
}

function out(el) {
    el.classList.add('unmove')
    el.classList.remove('move')
}



function scale(el){
    el.classList.add('scale')
    el.classList.remove('unscale')
}


function unscale(el){
    el.classList.add('unscale')
    el.classList.remove('scale')
}