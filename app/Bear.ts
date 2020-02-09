import Poop from "./Poop";
import ForestFeature from "./ForestFeature";
import {Colors} from "./enums/Colors";
import {Clothes} from "./interfaces/Clothes";

export default class Bear {
    // can be readonly since it's only initialized at constructor and we don't it to be redefined
    private readonly name: string;
    private color: Colors;
    private clothes: object;

    constructor(name: string) {
        this.name = name;
    }

    // implement interface
    wear(clothes: Clothes): void {
        this.clothes = clothes;
    }

    // if access modifier is not present default is public
    public getName(): string {
        return this.name;
    }

    eat(feature: ForestFeature): void {
        // use instanceof for type checking
        if (feature instanceof Poop) {
            console.log(`Yuck a ${feature.description}! Discusting.`);
        } else {
            console.log(`Yummi!!! ${this.name} just ate a ${feature.description}.`);
        }
    }

    setColor(color: Colors): void {
        this.color = color;
    }

    getColor(): Colors {
        return this.color;
    }

}
