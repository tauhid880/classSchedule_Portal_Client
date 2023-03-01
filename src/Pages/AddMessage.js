import React from "react";

const AddMessage = () => {
  return (
    <section className="p-5">
      <h1 className="text-2xl text-center font-semibold">Message</h1>
      <div className="flex flex-col items-center justify-center">
        <div className="form-control rounded-md shadow-xl lg:h-2/4 lg:w-2/4 p-5 grid grid-cols-1 content-center justify-items-center gap-3 bg-gradient-to-t from-[#BAD7E9] to-[#EDEDED] hover:bg-[#F7EFE5] my-5 border-t-[#FF9F9F] border-t-4">
          <label className="label">Your Message</label>
          <div className="flex flex-col gap-4 justify-center items-center ">
            <textarea
              className="textarea textarea-bordered lg:h-72 h-40 w-40 lg:w-96"
              placeholder="Type your message"
            ></textarea>
            <button className="btn btn-outline w-full text-black">Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddMessage;
