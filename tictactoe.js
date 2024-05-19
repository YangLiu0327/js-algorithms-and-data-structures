// 1275 Find Winner on a Tic Tac Toe Game

var tictactoe = function(moves) {
    
    let A = Array(8).fill(0);
    let B = Array(8).fill(0);

    for(let i=0; i<moves.length; i++) {
        let [r, c] = moves[i];
        let player = i % 2 === 0 ? A : B;
        player[r]++;
        player[c+3]++
        if(r === c) {
            player[6]++
        }
        if( r === 2-c) {
            player[7]++
        }
    }

    for(let i =0; i<8; i++) {
        if(A[i] === 3) {
            return 'A'
        }
        if(B[i] === 3) {
            return 'B'
        }
    }
    return moves.length === 9 ? 'Draw' : 'Pending'
}

console.log(tictactoe([[0,0],[2,0],[1,1],[2,1],[2,2]]))