
import { message, Button, Modal } from "antd";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function ModalSupport({handleCancel,handleOk, name, isModalVisible }) {
  const { register, handleSubmit, reset } = useForm();
  //  const [isModalVisible, setIsModalVisible] = useState(false);
  const onSubmit = (data) => {
    data.receiver = name;
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/support`, data)
      .then((res) => {
        if (res.data._id) {
          message.success("Message was successfully sent!", 5);
          handleCancel()
          reset();
        } else {
          message.warning("There was an error!", 5);
        }
      });
  };

  return (
    <div>
      <Modal  title="Support" okType="success" okText='Send Message' visible={isModalVisible} onOk={handleSubmit(onSubmit)} onCancel={handleCancel} className='support_modal' >
        <div className=" px-4 pt-5 pb-4  sm:pb-2">
<form className="pr-4" onSubmit={handleSubmit(onSubmit)}>
<div className="sm:flex sm:items-start">
<div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
<svg
xmlns="http://www.w3.org/2000/svg"
className="h-6 w-6"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
strokeWidth="2"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
/>
</svg>
</div>
<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
<h3
className="text-lg leading-6 font-medium text-gray-900"
>
You are going to send message to <b>{name}</b>
</h3>
<div className="mt-8 ">
<div className="flex gap-4">
<input
{...register("sender")}
required
className="border border-gray-500 rounded-lg py-2 px-3 w-6/12 outline-none"
type="text"
placeholder="Name.."
/>
<input
{...register("email")}
required
className="border border-gray-500 rounded-lg py-2 px-3 w-6/12 outline-none"
type="email"
placeholder="Email.."
/>
</div>
<input
{...register("title")}
required
className="border border-gray-500 rounded-lg w-full mt-4 py-2 px-3 outline-none"
type="text"
placeholder="Title.."
/>
<input
{...register("subject")}
required
className="border border-gray-500 mt-4 py-2 px-3 rounded-lg w-full outline-none"
type="text"
placeholder="Subject.."
/>

<textarea
{...register("message")}
required
className="border border-gray-500 mt-4 py-2 px-3 rounded-lg w-full h-24 outline-none"
placeholder="Message"
style={{
resize: "none",
}}
/>
</div>
</div>
</div>
<div className="">
<input style={{
  display:"none"
}}
value="Send Message"
type="submit"
className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
/>

</div>
</form>
</div></Modal>
    </div>
  );
}
