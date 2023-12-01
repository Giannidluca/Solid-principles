class MenuItem {
    constructor(public itemName,public amount, public discount){
        this.itemName = itemName
        this.amount = amount;
        this.discount = discount
    }
}

class Bill {
    constructor(public menuItems){
        this.menuItems = this.menuItems
    }

    finalAmount(){
        //here goes the logic
    }
}


//Instead of having two methods in the bill class you have to create a class that handles each responsability to prevent conflicts if different stakeholder changes functionality.
class Printer {
    constructor(){}

    printBill(){}
}

class Store {
    constructor(){}

    saveBill(){}
}