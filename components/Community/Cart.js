import React from "react";

const Cart = () => {
  return (
    <div>
      <div className="container mx-auto px-8 md:px-0 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
            <div className="text-indigo-900">
                <div>
                    <h4>A community is a social unit a group of living thing.</h4>
                </div>
            </div>
            <div className="text-indigo-900">
                    <div>
                        <h4>Analytics </h4>
                        <h4>Understand exactly hoy your VOD and live video events are performing across networks</h4>
                    </div>
            </div>
            <div className="text-indigo-900">
                    <div>
                        <h4>Trends</h4>

                    </div>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Cart;
