import Bear from "./Bear";
import Honey from "./Honey";
import Poop from "./Poop";
import {Colors} from "./enums/Colors";
import {Clothes} from "./interfaces/Clothes";

export default class App {
    // a class method, method can be used without class being instantiated
    // use it utility functions
    static run() {

        const bear = new Bear('Winnie');
        const honeyPot = new Honey('honey pot');
        const poop = new Poop('poop');
        const freshPoop = new Poop('fresh poop');

        // shoes are optional, compiler won't complain
        const clothes: Clothes = {shirt: 'Nike', shorts: 'Adidas'};

        bear.wear(clothes);
        // can't access private properties outside class, won't compile
        // console.log(bear.clothes);

        console.log(`Bear name: ${bear.getName()}`);

        bear.setColor(Colors.Red);
        console.log(`Bear color: ${bear.getColor()}`);

        const forestFeatures = [honeyPot, poop, freshPoop];
        const getRandomFeature = () => forestFeatures[Math.floor(Math.random() * Math.floor(forestFeatures.length))];

        bear.eat(getRandomFeature());
        bear.eat(getRandomFeature());
        bear.eat(getRandomFeature());
    }

}
