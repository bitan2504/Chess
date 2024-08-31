
import getValidMoves from "../hooks/getValidMoves";
class King {
    color;
    moves;
    row; col;
    symbol;
    constructor(color, row, col) {
        this.color = color;
        this.moves = 0;
        this.row = row; this.col = col;
        this.symbol = 'K';
    }

    checkValidity(board, r, c) {
        let temp = [];
        for (let i = 0; i < 8; i++) {
            let _temp = [];
            for (let j = 0; j < 8; j++) _temp.push(board[i][j]);
            temp.push(_temp);
        }
        temp[r][c] = temp[this.row][this.col];
        temp[this.row][this.col] = null;
        console.log(r, c, 'getValidMoves()');
        return getValidMoves(temp, this.color);
    }

    onClick(board) {
        let ret = [];
        const diff = [-1, 0, 1];
        diff.forEach((i) => {
            if (this.row+i >= 0 && this.row+i < 8) {
                diff.forEach((j) => {
                    if (this.col+j >= 0 && this.col+j < 8) {
                        if (board[this.row+i][this.col+j]) {
                            if (board[this.row+i][this.col+j].color !== this.color
                                && this.checkValidity(board, this.r+i, this.col+j) === true) 
                                ret.push([this.row+i,this.col+j]);
                        } else if (this.checkValidity(board, this.r+i, this.col+j) === true) 
                        ret.push([this.row+i,this.col+j]);
                    }
                })
            }
        })
        return ret;
    }

    getMoves(board) {
        let ret = [];
        const diff = [-1, 0, 1];
        diff.forEach((i) => {
            if (this.row+i >= 0 && this.row+i < 8) {
                diff.forEach((j) => {
                    if (this.col+j >= 0 && this.col+j < 8) {
                        if (board[this.row+i][this.col+j]) {
                            if (board[this.row+i][this.col+j].color !== this.color) 
                                ret.push([this.row+i,this.col+j]);
                        } else ret.push([this.row+i,this.col+j]);
                    }
                })
            }
        })
        return ret;
    }
}

export default King