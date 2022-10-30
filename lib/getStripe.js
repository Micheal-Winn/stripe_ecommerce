import {loadStripe} from '@stripe/stripe-js'

let stripePromise;

const getStripe = ()=> {
    if(!stripePromise){
        stripePromise = loadStripe('pk_test_51LxvqME11cCRTDeZZp4rTDNvcaqmkBH0RU6MuYJJnlUo8oxRiZw1oq2uJavii9GC3lkYNds9ifxd2ckFg4PmJGHD00PrzQnj8p')
    }

    return stripePromise;
}

export default getStripe;