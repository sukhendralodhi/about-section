const btns = document.querySelectorAll('.btn');

const boxChanger = (boxId) => {
    // get all boxes and hide them
    let boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.style.display = 'none';
    });
    document.getElementById(boxId).style.display = 'block';
}


// addEventListener to all buttons 
btns.forEach((btn) => {
    btn.addEventListener('click', (eve) => {
        let data = eve.currentTarget.innerText;
        let strData = data.toString();
        boxChanger(strData);
    });
});

document.getElementById('defaultOpen').click();