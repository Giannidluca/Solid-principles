interface FlyingBird {
    fly():void;
}

interface Bird {
    eat():void;
    run():void;
}

class Tucan  implements Bird, FlyingBird{
    public fly(){}
    public eat(){}
    public run(){}
}

class Humingbird implements Bird, FlyingBird {
    public fly(){}
    public eat(){}
    public run(){}
}

class Ostrich implements Bird {
    public eat(){}
    public run(){}
}