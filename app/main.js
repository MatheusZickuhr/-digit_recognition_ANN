const rects = []
const size = 16


let reset_btn;
let guess_btn;

let model = null

let div ;

async function load_model() {

    model = await tf.loadLayersModel('model/model.json');

}

load_model()

function setup() {
    createCanvas(400, 400);

    div = createDiv()

    for (let i = 0; i < width; i += width / size) {
        for (let j = 0; j < height; j += height / size) {
            rects.push(new Rect(i, j, width / size, height / size))
        }
    }


    reset_btn = createButton('Limpar');
    guess_btn = createButton('Classificar');

    reset_btn.mousePressed(() => {
        for (r of rects) {
            r.painted = false
        }
        div.html('')
    })

    guess_btn.mousePressed(() => {
        const result = []
        let index = 0
        for (let i = 0; i < size; i++) {
            result[i] = []
            for (let j = 0; j < size; j++) {
                result[i][j] = rects[index].painted ? 1 : 0
                index++
            }
        }

        let preds = model.predict(tf.tensor([result], [1, 16, 16]))

        preds.print()

        console.log(argmax(preds.dataSync()))

        div.html('Numero desenhado: ' + argmax(preds.dataSync()))
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


function argmax(arr) {
    let max = -1
    let val = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > val) {
            val = arr[i]
            max = i
        }
    }
    return max
}