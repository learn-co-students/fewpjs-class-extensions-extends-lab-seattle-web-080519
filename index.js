// Your code here
class Polygon {
    constructor(intArray) {
        this.intArray = intArray;
    }

    get countSides() {
        return this.intArray.length;
    }

    get perimeter() {
        const sum = (a,b) => a + b;
        return this.intArray.reduce(sum);
    }
}

class Triangle extends Polygon {
    get isValid() {
        let valid = false;
        
        if (this.intArray.length === 3){
            const sum01 = this.intArray[0] + this.intArray[1];
            const sum02 = this.intArray[0] + this.intArray[2];
            const sum12 = this.intArray[1] + this.intArray[2];

            if(sum01 > this.intArray[2] && sum02 > this.intArray[1] && sum12 > this.intArray[0]) {
                valid = true;
            }
        }
        return valid
    }
}

class Square extends Polygon {

    get isValid() {
        const pair1 = this.intArray[0] === this.intArray[1]
        const pair2 = this.intArray[0] === this.intArray[2]
        const pair3 = this.intArray[0] === this.intArray[3]
        return (this.intArray.length === 4 && pair1 && pair2 && pair3) ? true : false;
    }

    get area() {
        return this.intArray[0] ** 2;
    }
}