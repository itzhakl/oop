"use strict";
class Shape {
    constructor() {
        this.name = 'Shape';
    }
    info() {
        return 'This is a Shape';
    }
    draw() {
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
    constructor(width, height) {
        super();
        this.name = 'Rectangle';
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    info() {
        return 'This is a Rectangle';
    }
}
class Square extends Rectangle {
    constructor(width) {
        super(width, width);
        this.name = 'Square';
    }
    area() {
        return this.width ** 2;
    }
}
class ColoredRectangle extends Rectangle {
    constructor(width, height, color) {
        super(width, height);
        this.name = 'ColoredRectangle';
        this.color = color;
    }
    info() {
        return `This is a ${this.color} Rectangle`;
    }
}
