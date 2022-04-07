import {Elements} from "@stripe/react-stripe-js";
import CheckoutPage from "./CheckoutPage";
import {loadStripe} from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51KkRmISJWpM36uZskQFaf2RANbZmlf9Yck3zgyYVOK56aDDHY3p1WSPYyffLXa5evaPFOgpfvX6jusqStug4tDbi00JeSSKqxW');


export default function CheckoutWrapper() {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutPage />
        </Elements>
    )
}