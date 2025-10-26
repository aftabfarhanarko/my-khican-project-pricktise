import React, { use } from 'react';
import Counter from './Counter';

const OrderCointner = ({orderPromise}) => {
    const data = use(orderPromise);
    console.log(data);
    return (
        <div>
            <div className='w-11/12 mx-auto '>
                <Counter></Counter>
            </div>
        </div>
    );
};

export default OrderCointner;