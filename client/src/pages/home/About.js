import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
    const skills=['Java','PhP','Javascript','MongoDB','Java','PhP','Javascript','MongoDB','Java','PhP','Javascript','MongoDB'];
  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex sm:flex-col w-full items-center">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <dotlottie-player
            src="https://lottie.host/e968610f-09df-4e02-ba76-2ef2a2af8302/0qGlotyzRb.json"
            background="transparent"
            speed="1"
            // style="width: 300px; height: 300px;"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-3 w-1/2 sm:w-full">
          <p className="text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <p className="text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl">Here are a few Technology I've been working with recently.</h1>
        <div className="flex flex-wrap gap-10 mt-5">
            {skills.map((skill,index)=>(
                <div className="py-3 border border-tertiary rounded-sm px-10">
                    <h1 className="text-white">{skill}</h1>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default About;
