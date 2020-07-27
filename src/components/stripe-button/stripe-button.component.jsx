import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_0nBZPn2R8pBCYqHHSCIwT2hH00gCMfy50E"
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return (
        <StripeCheckout label='PAY NOW' name='CROWN CLOTHING LTD' billingAddress shippingAddress image='https://thumbs.dreamstime.com/z/logo-store-fashion-hanger-vector-design-clothes-clothing-shop-icon-symbol-online-illustration-background-white-style-sale-isolated-148064914.jpg' description={`Your total is $${price}`} amount={priceForStripe} panelLabel='Pay Now' token={onToken} stripeKey={publishableKey} />
    )
}

export default StripeCheckoutButton;