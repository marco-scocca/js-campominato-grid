function createSingleSquare(num) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.innerText = num + 1;
    square.addEventListener('click', function () {
    });
    return square;

}

const button = document.getElementById('play');
button.addEventListener('click', function () {
    const grid = document.getElementById('grid');
    for (let i = 0; i < 100; i++) {
        let item = createSingleSquare(i)
        grid.append(item);
    }
});
