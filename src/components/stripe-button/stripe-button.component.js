import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_szEaffOYY7y0uG5zEdCzzDDL';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
        label = " Pay Now"
        name = " Clothtify Ltd"
        billingAddress
        shippingAddress
        image = "https://svgshare.com/i/CUz.svg"
        description = {`Your total is $${price}`}
        amount = {priceForStripe}
        panelLabel = " Pay Now"
        token = {onToken}
        stripeKey = {publishableKey}
        />
    )
}


export default StripeCheckoutButton;