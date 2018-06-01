import { Shape } from './Shape';

export class Parallelogram implements Shape{
    constructor(public base: number,public heigth: number){}
    getArea():number{
        return this.base * this.heigth;
    }
    getPerimeter():number{
        return (this.base + this.heigth) * 2;
    }
}
export class Square extends Parallelogram{
    constructor(public side: number) {
        super(side, side);
        // new Parallelogram()
    }
}
