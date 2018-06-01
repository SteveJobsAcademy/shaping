import { Shape } from './Shape';
import { angularMath } from 'angular-ts-math';

export class Triangle implements Shape{
    constructor(public base: number,public heigth: number) {
    }

    getArea():number{
        return (this.base * this.heigth)/2;
    }

    getPerimeter():number{
        let ipothenuse = angularMath.squareOfNumber(angularMath.powerOfNumber(this.base/2, 2) + angularMath.powerOfNumber(this.heigth, 2));
        return ipothenuse * 2 + this.base;
    }

}