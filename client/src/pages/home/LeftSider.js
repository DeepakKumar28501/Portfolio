import React from "react";

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 mx-10 sm:static ">
    <div className="flex flex-col  items-center">
      <div className="flex flex-col sm:flex-row  gap-3">
        <i class="ri-facebook-circle-line text-gray-400 text-2xl"></i>
        <i class="ri-mail-line text-gray-400 text-2xl"></i>
        <i class="ri-instagram-line text-gray-400 text-2xl"></i>
        <i class="ri-github-fill text-gray-400 text-2xl"></i>
        <i class="ri-linkedin-box-line text-gray-400 text-2xl"></i>
      </div>
      <div className="w-[1px] h-52 bg-gray-400 sm:hidden"></div>
    </div>
    </div>
  );
}

export default LeftSider;
