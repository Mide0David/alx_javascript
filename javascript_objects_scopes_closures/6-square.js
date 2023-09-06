const oldSquare = require("./5-square");

class Square extends oldSquare{
    charPrint(c){
        if (c === undefined) {
            c = 'X';
        }
        for (let k = 0; k < this.height; k++)
        {
            console.log(c.repeat(this.width))
        }
    }
}
module.exports = Square;
