let line = document.querySelector('.typed-out')

const myTimeOut = setTimeout(myFunc, 4150)

function myFunc() {
    line.classList.add('delete')
}

