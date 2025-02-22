import getBgColor from "./getBgColor";

function setHighlightColor(board = [], highlight = []) {
    for (let i=0; i<8; i++) {
        for (let j=0; j<8; j++) {
            const sq = document.getElementById(String(i) + String(j));
            if (highlight.some(e => e[0] === i && e[1] === j)) {
                if (board[i][j]) {
                    sq.style.backgroundColor = 'red';
                    sq.style.transition = "background-color 0.3s ease";
                }
                else {
                    sq.style.backgroundColor =' #71dfe7';
                    sq.style.transition = "background-color 0.3s ease";
                }
            } else {
                sq.style.backgroundColor = getBgColor(i, j);
                sq.style.transition = "background-color 0.3s ease";
            }
        }
    }
}

export default setHighlightColor;