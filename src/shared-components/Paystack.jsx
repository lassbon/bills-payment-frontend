import { usePaystackPayment, PaystackButton } from 'react-paystack'

const Paystack = ({ email, amount }) => {


    const componentProps = {
        email: email,
        amount: amount*100,
        publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY
    }
    
     
}

export default Paystack