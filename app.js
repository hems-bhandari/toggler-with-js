//pulling elements
const h1 = document.getElementById('h1');
const btn = document.getElementById('btn');

//adding event
btn.addEventListener('click', () => {
    if (h1.style.color == 'red') {
        h1.style.color = '#000'
        btn.innerHTML = 'Turn it red.'

        //mouseout function for turning red
        btn.addEventListener('mouseout', () => {
            btn.style.border = '2px solid red'
            btn.style.background = 'white'
            btn.style.color = 'red'
        })
        turningred()

    }
    else {
        h1.style.color = 'red'
        btn.innerHTML = 'Turn it black.'

        //mouseout function for turning black
        btn.addEventListener('mouseout', () => {
            btn.style.border = '2px solid black'
            btn.style.background = 'white'
            btn.style.color = 'black'
        })
        turningblack()
    }
})
//mouseover function for turning red
function turningred() {
    btn.addEventListener('mouseover', () => {
        // border: 2px solid red;
        // background-color: red;
        // color: white;
        btn.style.border = '2px solid red'
        btn.style.background = 'red'
        btn.style.color = 'white'
    })
}

//mouseover function for turning black
function turningblack() {
    btn.addEventListener('mouseover', () => {
        // border: 2px solid black;
        // background-color: black;
        // color: white;
        btn.style.border = '2px solid black'
        btn.style.background = 'black'
        btn.style.color = 'white'
    })
}
