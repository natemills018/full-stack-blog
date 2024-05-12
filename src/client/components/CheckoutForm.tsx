import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import type { IBlogsRow } from '../types';
import { GET } from '../services/fetchData';
import { PUT } from '../services/fetchData';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';


interface CheckoutFormsProps {
}

const CheckoutForms = (props: CheckoutFormsProps) => {

    const stripe = useStripe();
    const elements = useElements();

    const handleDonateSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(!stripe || !elements) return;

        const { error } = await stripe.confirmPayment ({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/thank-you`
            }
        })

        if (error.type === 'card_error'  || error.type === 'validation_error') {
            console.log(error.message)
        } else {
            console.log('an unexpected error has occured')
        }
    }

    return (
        <main className='container mt-5'>
            <section className='row justify-content-center'>
                <div className='col-12 col-md-6'>
                    <div className='card shadow'>
                        <div className='card-body'>
                            <div>

                                <PaymentElement />
                                <button className='btn btn-primary mt-3' onClick={handleDonateSubmit}>Donate to me!</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )

}


export default CheckoutForms;
