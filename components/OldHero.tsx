import Image from "next/image";
import Haitekuiphone from "../public/images/iPhone_13_Haiteku.png";

const Hero = () => {
  return (
    <div className="sticky overflow-x-hidden scrollbar-hide text-white">
      <div className="max-w-screen-xl mx-auto px-8  text-center md:text-center">
        <div className="my-8 flex md:flex-row flex-col py-6">
          <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
            <div className="flex flex-row justify-between items-center w-full ">
              <h1 className="flex-1 text-4xl md:text-8xl text-left">
                Haiteku Tribe <br className="sm:block hidden" />
                {""}
                Get inspired
                <span className="mr-2"></span>
                {""}
                <br className="sm:block hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryYellow to-secondaryYellow">
                  Phanda
                </span>
              </h1>
            </div>
            <p className="max-w-[470px] mt-5 text-left text-lg">
              Welcome to Haiteku Tribe- Join us to share your passion,
              connect with fellow developers, and inspire innovation. Together,
              let's elevate the world of coding and create something
              extraordinary!
            </p>

            {/* the ultimate space for developers,
              whether you're a seasoned software engineer or an aspiring coder.
              Here, you have a dedicated platform to share, collaborate, and
              celebrate your masterpieces. From Frontend and Backend development
              to Full Stack and UI/UX Design, and even more, feel free to
              showcase your work in any domain. */}
          </div>
          <div className="flex-1 flex justify-center items-center md:my-0 my-10 ">
            <Image
              src={Haitekuiphone}
              alt="Fortnite Hero Image"
              width={350}
              height={20}
              quality={100}
              priority
              sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
