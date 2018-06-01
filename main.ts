import { Parallelogram, Square } from './Parallelogram';
import { Triangle } from './Triangle';
import { Circle } from './Circle';
import { Shape } from './Shape';

let p = new Parallelogram(5, 7);
let square = new Square(5);
let triangle = new Triangle(3, 5);
let circle = new Circle(3);

let shapeContainer : Shape[] = [];
shapeContainer.push(circle);
shapeContainer.push(triangle);
shapeContainer.push(square);
shapeContainer.push(p);
for(let i=0; i<shapeContainer.length; i++) {
    console.log(shapeContainer[i].getArea());
    console.log(shapeContainer[i].getPerimeter());
}