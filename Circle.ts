import { Shape } from './Shape';
import { angularMath } from 'angular-ts-math';

export class Circle implements Shape{
    constructor(public radius: number) {

    }
    getArea():number{
        return angularMath.powerOfNumber(this.radius,2) * angularMath.getPi(); 
    }
    getPerimeter():number{
        return this.radius * 2 * angularMath.getPi();
    }
}