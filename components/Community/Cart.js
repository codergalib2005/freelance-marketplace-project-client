import React from "react";

const Cart = () => {
  return (
    <div>
      <div className="container mx-auto px-8 md:px-0 lg:px-0 my-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-14">
          {/* cart 1 */}
          <div className="hover:bg-orange-50 transition-all duration-500 hover:shadow-md  rounded-md">
            <h4 className="text-2xl my-6 px-12 opacity-50">
              A community is a social unit a group of living thing.
            </h4>

            <div className="flex justify-center mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-32" src="/community/logo.png" alt="" />
            </div>
          </div>

          {/* cart 2 */}
          <div className="hover:bg-orange-50 px-12 transition-all duration-500 hover:shadow-md  rounded-md">
            <div>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-24" src="/community/buffer-pana.png" alt="" />
              </div>
              <h4 className="text-2xl text-indigo-900 font-semibold my-6">
                Analytics{" "}
              </h4>
              <h4 className="text-base opacity-50">
                Understand exactly hoy your VOD and live video events are
                performing across networks.
              </h4>
            </div>
          </div>
          {/* cart 3 */}
          <div className="hover:bg-orange-50 px-12 transition-all duration-500 hover:shadow-md  rounded-md">
            <div className="pt-24">
              <h4 className="text-2xl text-indigo-900 font-semibold my-6">
                Trends{" "}
              </h4>
              <h4 className="text-base opacity-50">
                Identify weak link and avoid common streaming issues by
                preempting them.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
