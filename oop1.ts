class Shape {
    name: string;
    constructor() {
        this.name = 'Shape';
    }
    info(): string {
        return 'This is a Shape';
    }
    draw(): void {
        console.log(`drawing a ${this.name}`);
    }
}

let tzura = Shape;
// console.log(tzura.info());


class Triangle extends Shape {
    constructor() {
        super();
        this.name = 'Triangle';
    }
}

class Circle extends Shape {
    constructor() {
        super();
        this.name = 'Circle';
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        super();
        this.name = 'Rectangle';
        this.width = width;
        this.height = height;
    }
    area(): number {
        return this.width * this.height;
    }
    info(): string {
        return 'This is a Rectangle';
    }
}

class Square extends Rectangle {
    constructor(width: number) {
        super(width, width);
        this.name = 'Square';
    }
    area(): number {
        return this.width ** 2;
    }
}

class ColoredRectangle extends Rectangle {
    color: string;
    constructor(width: number, height: number, color: string) {
        super(width, height);
        this.name = 'ColoredRectangle';
        this.color = color;
    }
    info(): string {
        return `This is a ${this.color} Rectangle`;
    }
}


