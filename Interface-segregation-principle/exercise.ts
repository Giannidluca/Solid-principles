interface Bird {
    eat():void;
    fly():void;
    run():void;
}

class Tucan  implements Bird{
    public fly(){}
    public eat(){}
    public run(){}
}

class Humingbird implements Bird {
    public fly(){}
    public eat(){}
    public run(){}
}

class Ostrich implements Bird {
    public fly(){
        throw new Error('Can\'t fly')
    }
    public eat(){}
    public run(){}
}