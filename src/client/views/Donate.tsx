import React, { useState, useEffect } from 'react';
import type { IBlogsRow } from '../types';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import { error } from 'console';
import CheckoutForms from '../components/CheckoutForm';

const stripePromise = loadStripe('pk_test_51PFjsBHaBzyE8YmMXRIyEMVgPb4SE9grMVzCZ9nQnLopPZb1uLmx2TAz0i8kRXQdDdRpQztP1aAMjBVdhhmIenx800fZYePyAe');


interface DonateProps {

}

const Donate = (props: DonateProps) => {

    const [donation, setDonation] = useState({
        amount: '',
        show: true,
        clientSecret: ''
    });

    const handlePaymentIntent = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {

            // response that we intend to get from firing this event
            const res = await fetch('http://localhost:3000/api/donate/payment-intent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({ amount: Number(donation.amount) })
            })
            // This is the request
            if (!res.ok) {
                throw new Error('response failed')
            }

            const { clientSecret } = await res.json();

            setDonation(pre => ({ ...pre, show: false, clientSecret }))

        } catch (error) {
            console.log(error)
        }
    }


    // useEffect(() => {
    //     fetch("http://localhost:3000/api/Donate")
    //         .then(res => res.json())
    //         .then(list => setList(list));
    // }, [])

    // console.log(list);
    if (donation.show) {
        return (
            <main className='container'>
                <div className='row justify-content-center mt-5'>
                    <div className='card shadow'>
                        <div className='card-body bg-primary'>
                            <form>
                                <input className="form-control mt-1" name='from' value={donation.amount} onChange={e => setDonation(pre => ({ ...pre, amount: e.target.value }))} />
                                <button className='btn btn-outline btn-success mt-1' onClick={handlePaymentIntent}>Continue to Checkout Form!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        );
    } else {
        return (
            <main className='container'>
                <div className='row justify-content-center mt-5'>
                    <div className='card shadow'>
                        <div className='card-body bg-primary'>
                            <Elements stripe={stripePromise} options={{ clientSecret: donation.clientSecret }}>
                                <CheckoutForms />
                            </Elements>
                        </div>
                    </div>
                </div>
            </main>
        )
    }

}


export default Donate;