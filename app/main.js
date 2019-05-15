const rects = []
const size = 16


let reset_btn;
let guess_btn;

function setup() {
    createCanvas(400, 400);

    for (let i = 0; i < width; i += size) {
        for (let j = 0; j < height; j += size) {
            rects.push(new Rect(i, j, size, size))
        }
    }


    reset_btn = createButton('Limpar');
    guess_btn = createButton('Classificar');

    reset_btn.mousePressed(() => {
        for (r of rects) {
            r.painted = false
        }
    })

    guess_btn.mousePressed(() => {

        console.log('classificado!')
    })
}

function draw() {
    background(220);

    for (let r of rects) {
        r.show()
    }
}

function mouseDragged() {
    for (r of rects) {
        if (r.is_overlapping(mouseX, mouseY))
            r.painted = true
    }
}