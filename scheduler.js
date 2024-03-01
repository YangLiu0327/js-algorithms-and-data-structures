class Scheduler {
    constructor(){
        this.queue = [];
        this.running = false;
    }
    add(promiseCreator){
        this.queue.push(promiseCreator);
        if(!this.running){
            this.run();
        }
    }
    async run() {
        this.running = true;
        while (this.queue.length > 0) {
            const { task, delay } = this.queue.shift();
            await timeout(delay);
            await task();
        }
        this.running = false;
    }
}
const timeout = (time) => new Promise(resolve => {
    setTimeout(resolve, time);
});

const scheduler = new Scheduler();

const addTask = (time, order) => {
    const task = async () => {
        console.log(order);
    };
    let index = 0;
    while (index <scheduler.queue.length && scheduler.queue[index].delay <= time) {
        index++
    }
    scheduler.queue.splice(index, 0, { task, delay: time });
};

// testcase
addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');

// 2314
