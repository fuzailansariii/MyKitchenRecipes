import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    message: "",
  });

  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      userName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col mx-8 space-y-8 md:space-y-10 justify-center mb-8 md:flex md:flex-row md:mx-10 md:justify-evenly md:items-center w-full">
      <div className="md:w-[40%]">
        <h1 className="text-4xl text-gray-800 font-bold mb-4 font-mPlus">
          Get in Touch with My Kitchen
        </h1>
        <p className="italic text-sm font-semibold text-gray-800">
          "Feel free to reach out to me via email or connect with me on LinkedIn
          and GitHub. I'm open to collaborations, discussions, and new
          opportunities."
        </p>
      </div>

      <form className="md:w-[30%]" onSubmit={formSubmitHandler}>
        <div className="flex flex-col ">
          <label
            htmlFor="name"
            className="text-md font-semibold font-mPlus italic mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="userName"
            required
            placeholder=" "
            onChange={changeHandler}
            value={formData.userName}
            className="text-left text-sm font-ubuntu font-semibold rounded-md px-3 py-2 border border-gray-400 focus:outline-none focus:border-black mb-4"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-md font-semibold font-mPlus italic mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder=" "
            onChange={changeHandler}
            value={formData.email}
            className="w-full text-left font-ubuntu font-semibold  rounded-md px-3 py-2 border border-gray-400 focus:outline-none focus:border-black mb-4"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="text-md font-semibold font-mPlus italic mb-1"
          >
            Message
          </label>
          <textarea
            type="text"
            id="message"
            cols={30}
            rows={6}
            name="message"
            required
            placeholder=" "
            onChange={changeHandler}
            value={formData.message}
            className="w-full text-left font-ubuntu font-semibold  rounded-md px-3 py-2 border border-gray-400 focus:outline-none focus:border-black mb-4"
          />
        </div>
        <button className="border border-black h-9 w-[120px] rounded-lg bg-slate-950 text-white font-mPlus font-bold hover:text-red-600 cursor-pointer">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
