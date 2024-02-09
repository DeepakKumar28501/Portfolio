import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contect() {
  const user = {
    name: "Deepak Kumar",
    email: "deepakkumar.of28501@gmail.com",
    age: "22",
    gender: "Male",
    mobile: "+91 6397367278",
    country: "India",
  };
  return (
    <div>
      <SectionTitle title="Contect" />
      <div className="flex sm:flex-col">
        <div className="flex flex-col items-center justify-center gap-1 ">
          <h1 className="text-tertiary">{"{"}</h1>
          {Object.keys(user).map((key) => (
            <h1 className="gap-1 ml-7 text-sm">
              <span className="text-tertiary">{key} : </span>
              <span className="text-tertiary">{user[key]}</span>
            </h1>
          ))}
          <h1 className="text-tertiary">{"}"}</h1>
        </div>
        <div className="h-auto w-1/2  ml-32 sm:ml-auto flex sm:items-center sm:justify-center">
          <dotlottie-player
            src="https://lottie.host/725d30c6-9d6d-45e9-8c66-e52e8bf59041/6nUgg8beSF.json"
            background="transparent"
            speed="1"
            // style="width: 300px; height: 300px;"
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contect;
