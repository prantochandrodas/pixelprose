
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { Elements } from '@stripe/react-stripe-js';

const Payment = () => {
    const booking = useLoaderData();
    const stripePromise = import.meta.env.VITE_STRIPE_PK;
    const navigation=useNavigation();
    console.log(booking);
    const {price,destination} = booking;
    if(navigation.state === 'loading'){
        return <Loading/>
    }
    return (
        <div className='lg:ml-5'>
            <h1 className='text-3xl'>Payment for {destination} Bus</h1>
            <p className='text-xl'>Please pay {price} for this booking</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    {/* <CheckoutForm 
                        booking={booking}
                    /> */}
                </Elements>
            </div>
        </div>
    );
};

export default Payment;