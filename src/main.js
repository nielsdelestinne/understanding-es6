'use strict';

export default class Main {

    constructor() {
        this.foo = "bar";
    }

    getFoo() {
        return this.foo;
    }

}

const main = new Main();
console.log(main.getFoo());