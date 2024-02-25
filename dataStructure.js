// data structure
// binary search trees, queues, singly linked lists, double linked lists
// undirected unweighted graps
// directed grap, stack ...
// ES2015 class syntax

class Student {
    constructor(firsName, lastName, year) {
        this.firsName = firsName;
        this.lastName = lastName;
        this.grade = year;
    }
}

// let firstStudent = new Student('yang', 'l', 1);
// let secondStudent = new Student('test', 'y', 1);

let kitty = new Student('kitty', 'kat', 1)
// console.log(kitty)

// instance methods
class StudentFunction {
    constructor(firsName, lastName, year) {
        this.firsName = firsName;
        this.lastName = lastName;
        this.grade = year;
        this.tradies = 0;
        this.scores = [];
    }
    fullname() {
        return `Your full name is ${this.firsName} ${this.lastName}`
    }
    markLate(){
        this.tradies += 1;
        if (this.tradies > 3) {
            return 'You are EXpelled'
        }
        return `${this.firsName} ${this.lastName} has been late ${this.tradies} times`
    }
    addScores(score){
        this.scores.push(score)
        return this.scores; 
    }
    calculateAverage(){
        if(this.scores.length === 0) return 'No scores available'
        let sum = this.scores.reduce(function(a,b){
            return a + b;
        })
        return sum/this.scores.length;
    }
}

let OurStudent = new StudentFunction('colt', 'steele', 2)

console.log(OurStudent.calculateAverage())