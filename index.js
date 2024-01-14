class MyNumArray {

    constructor() {
        this.length = 0;
        this.data = {};
        this.total = 0;
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        this.total += item;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        this.total -= lastItem;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        this.total -= item;
        return item;
    }

    shiftItems(index) {
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length - 1];
        this.length--;
    }

    getAvg() {
        return this.total / this.length;
    }

     
}

const newArray = new MyNumArray();

newArray.push(50);
newArray.push(60);
newArray.push(70);
newArray.push(80);
newArray.push(90);
newArray.push(100);

console.log(newArray.getAvg());
console.log(newArray);
