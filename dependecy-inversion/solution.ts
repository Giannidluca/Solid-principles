class Store {
    paymentWrapper: any

    constructor(paymentWrapper){
        this.paymentWrapper = paymentWrapper
    }

    purchaseBike(quantity){
        this.paymentWrapper.pay(200 * quantity)
    }

    purchaseHelmet(quantity) {
        this.paymentWrapper.pay(15 * quantity)
    }
}

class StripePayment {
    stripe: Stripe;
    constructor(user){
        this.stripe = new Stripe(user);
    }

    pay(amountInDollars){
        this.stripe.makePayment(amountInDollars * 100)
    }
}


//can create paypalpayment if needed without changing store