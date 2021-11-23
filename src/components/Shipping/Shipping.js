import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import './Shipping.css'
const Shipping = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        const savedCart = getStoredCart();
        data.order = savedCart;
        fetch('https://blooming-anchorage-25739.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('order processed Successfully')
                    clearTheCart();
                    reset();

                }
            })

    };
    return (
        <div>
            <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>

                <input placeholder='Name' defaultValue={user.displayName} {...register("name")} />

                <input placeholder='Email' defaultValue={user.email} {...register("email", { required: true })} />

                {errors.email && <span className='error'>This field is required</span>}
                <input placeholder='address'  {...register("Address")} />
                <input placeholder='Phone Number'  {...register("phone")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;