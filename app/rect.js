class Rect {

    constructor(x, y, w, h) {

        this.x = x
        this.y = y
        this.w = w
        this.h = h

        this.painted = false
    }

    show() {
        fill(!this.painted ? 255 : 0)
        rect(this.x, this.y, this.w, this.h)
    }

    is_overlapping(x, y) {

        if (x < this.x + this.w && y < this.y + this.h && x > this.x && y > this.y)
            return true

        return false
    }

}