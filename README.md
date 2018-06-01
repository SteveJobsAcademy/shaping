# Shaping

----
## Sample example how to import Typescript file


>Code line here

    import { Circle } from 'shaping-sample/Circle';
    import { Triangle } from 'shaping-sample/Triangle';
    import { Parallelogram, Square } from 'shaping-sample/Parallelogram';

    let c: Circle = new Circle(2);
    console.log("area: ", c.getArea());
    console.log("perimeter: ", c.getPerimeter());

    let t: Triangle = new Triangle(3,4);
    console.log("area: ", t.getArea());

    let p:  Parallelogram  = new Parallelogram(3,4);
    console.log("area: ", p.getArea());

    let s: Square = new Square(5);
    console.log("area: ", s.getArea());
    console.log("perimeter: ", s.getPerimeter());
----
## changelog
* 1-Jun-2018

----
## thanks
* [Steve Jobs Academy](https://github.com/SteveJobsAcademy)
