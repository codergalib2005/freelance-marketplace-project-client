import React from "react";

const Updatepass = () => {
  const { register, handleSubmit } = useForm();
  const updateStatus = (data) => {
    console.log(data);
  };
  return (
    <>
      <h6 className="flex justify-start p-4">CHANGE PASSWORD</h6>
      <form onSubmit={handleSubmit(updateStatus)}>
        <div className="w-2/4 flex space-x-6">
          <p className="w-2/6">Current Password</p>{" "}
          <input
            type="password"
            {...register("oldpass")}
            placeholder="Current Password"
          />
        </div>
        <div className="w-2/4 flex space-x-6">
          <p className="w-2/6">New Password</p>{" "}
          <input
            type="password"
            {...register("Newpass")}
            placeholder="New Password"
          />
        </div>
        <div className="w-2/4 flex space-x-6">
          <p className="w-2/6">Confirm Password</p>{" "}
          <input
            type="password"
            {...register("Confirmpass")}
            placeholder="Confirm Password"
          />
        </div>
        <small>
          8 characters or longer. Combine upper and lowercase letters and
          numbers.
        </small>
        <br />
        <div className="flex justify-end">
          <input
            className="h-1/6 w-1/6 inline-block py-1.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
            type="submit"
            value="Save Changes"
          />
        </div>
      </form>
    </>
  );
};

export default Updatepass;
