// queue
// 933. Number of Recent Calls

// Input
// ["RecentCounter", "ping", "ping", "ping", "ping"]
// [[], [1], [100], [3001], [3002]]
// Output
// [null, 1, 2, 3, 3]

// function RecentCounter(t) {
//     let queue = [];
//     let result = [];
//     let count = 0;

//     for(let i =0; i<t.length;i++) {
//         queue.push(t[i])
//         range = [t[i][0]-3000, t[i][0]]
        
//         count = 0;
//         for(let j =0; j<queue.length; j++) {
//             if( queue[j] >= range[0] && queue[j] <= range[1] && queue[j].length !== 0) {
//                 count++
//         }
//     }
//     result.push(count === 0 ? 'null': count)
//     }
//     return result;
// }

// console.log(RecentCounter([[],[1],[100],[3001],[3002]]))

var RecentCounter = function() {
    this.queue = []
}

RecentCounter.prototype.ping = function(t) {
    this.queue.push(t);
    let rangeStart = t-3000;
    let count = 0;

    for(let i=0; i<this.queue.length; i++) {
        if(this.queue[i] >= rangeStart && this.queue[i] <= t) {
            count++;
        }
    }
    return count;
}

var obj = new RecentCounter();
console.log(obj.ping(1))
console.log(obj.ping(100))
console.log(obj.ping(3001))
console.log(obj.ping(3002))