import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_bAc9SSJgLyz3IIkfnDE8zePd004D0vgWhD';
    const onToken = token => {
        console.log(token);
        alert('Payment Success');
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN CLothing Ltd'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total price is $${price}`}
            amount={priceForStripe}
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;