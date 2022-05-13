/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Empty, Rate } from "antd";
import Link from "next/link";
import React from "react";
import useAuth from "../../hooks/useAuth";
const Review = () => {
  const { reviews } = useAuth();
  return (
    <div className="py-6">
      {reviews?.length < 1 && (
        <div className="min-h-[50vh] flex items-center justify-center text-2xl text-red-700">
          <Empty description="Review not found!" />
        </div>
      )}
      <div>
        {reviews?.map((review, index) => (
          <div key={index} className="p-6 shadow-lg mb-4">
            <div className="flex">
              <div>
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-l-blue-900 shadow-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  {review?.buyerImage && (
                    <img className="w-full h-full" src={review?.buyerImage} />
                  )}
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  {!review?.buyerImage && (
                    <img
                      className="w-full h-full"
                      src={
                        review?.gender === "mail"
                          ? "/profile/boy_avatar.png"
                          : "/profile/girl_avatar.png"
                      }
                    />
                  )}
                </div>
              </div>
              <div className="flex justify-around items-start pl-5 flex-col">
                <strong className="text-xl font-bold text-gray-800">
                  {review?.buyerName}
                </strong>
                <span className="text-gray-700 text-md">
                  {review?.profession}
                </span>
                <Rate disabled allowHalf defaultValue={review?.rating} />
                <Link href={`/seller_profile/${review?._id}`}>
                  <button className="bg-gray-50 hover:bg-gray-800 text-gray-800 hover:text-gray-50 border border-gray-800 rounded-md py-2 px-6 transition-all duration-300 ease-linear">
                    Contact Me
                  </button>
                </Link>
              </div>
            </div>
            <div className="p-4 border border-gray-400 mt-5 rounded-md">
              <div></div>
              <div>
                <p className="text-gray-400 text-md pb-3">
                  {review?.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
