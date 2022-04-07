import {Elements} from "@stripe/react-stripe-js";
import CheckoutPage from "./CheckoutPage";
import {loadStripe} from "@stripe/stripe-js";
import {useEffect, useState} from "react";
import {useAppDispatch} from "../../App/store/ConfigureStore";
import {setBasket} from "../basket/basketSlice";
import agent from "../../App/api/agent";
import LoadingComponent from "../../App/layout/LoadingComponent";

const stripePromise = loadStripe('pk_test_51KkRmISJWpM36uZskQFaf2RANbZmlf9Yck3zgyYVOK56aDDHY3p1WSPYyffLXa5evaPFOgpfvX6jusqStug4tDbi00JeSSKqxW');


export default function CheckoutWrapper() {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        agent.Payments.createPaymentIntent()
            .then(basket => dispatch(setBasket(basket)))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [dispatch]);

    if (loading) return <LoadingComponent message='Loading checkout...' />

    return (
        <Elements stripe={stripePromise}>
            <CheckoutPage />
        </Elements>
    )
}