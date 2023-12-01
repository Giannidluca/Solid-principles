
class MenuItem {
    constructor(public itemName, public amount, public discount){
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

    //here is the problem because this methods could be used by multiple stakeholder and breaks the single responsability principle.

    printBill(){}
    saveBill(){}
}
