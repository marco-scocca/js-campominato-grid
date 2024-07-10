function createSingleSquare(num) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.innerText = num + 1;

}

const button = document.getElementById('play');
button.addEventListener('click', function () {
    const grid = document.getElementById('grid');
    for (let i = 0; i < 100; i++) {
        createSingleSquare(i)
    }
});
