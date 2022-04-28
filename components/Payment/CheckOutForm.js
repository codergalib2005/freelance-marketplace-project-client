import React from 'react';

const CheckOutForm = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    return (
        <div>
            Welcome to payment
            <div>
                <form onSubmit={handleSubmit}>

                    <button type="submit">
                        Pay
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CheckOutForm;