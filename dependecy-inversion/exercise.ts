class Store {
    stripe: Stripe
    constructor(user){
        this.stripe = new Stripe(user)
    }

    purchaseBike(quantity){
        this.stripe.makePayment(200 * quantity * 100)
    }

    purchaseHelmet(quantity) {
        this.stripe.makePayment(15*quantity*100)
    }
}

class Stripe{
    constructor(public user){
        this.user = user
    }

    makePayment(amountInCents){
        console.log(`${this.user} made payment of $${amountInCents / 100} with stripe` )
    }
}

class Paypal {
    makePayment(user, amountInDollars){
        console.log(`${user} made payment of $${amountInDollars / 100} with paypal` )
    }
}


//in order to use paypal payment the code needs to be refactored - this is a problem