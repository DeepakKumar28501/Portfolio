import React from "react";

function Intro() {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start  justify-center gap-5 pt-10 ">
      <h1 className="text-white">Hi, I am</h1>
      <h1 className=" text-7xl sm:text-3xl  text-secondary font-bold font-sans">
        Deepak Kumar
      </h1>
      <h1 className=" text-5xl sm:text-xl text-white font-bold font-serif">
        I Build thingd for the web...
      </h1>
      <p className="text-white w-2/3 sm:w-full">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <button className="border-2 border-tertiary rounded-sm text-tertiary px-10 py-3 hover:bg-amber-400 hover:text-white hover:font-bold ">
        Get started
      </button>
    </div>
  );
}

export default Intro;
