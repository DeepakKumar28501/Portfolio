import React from 'react';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='py-10'>
      <div className='h-[1px] w-full bg-gray-700'>
      </div>
      <div className='flex flex-col items-center justify-center mt-10 opacity-70'>
         <h1 className='text-white'>
          Designed and Developed by
         </h1>
         <h1 className='text-white'>
         <span className='text-tertiary'> @Deepak Kumar</span>
         <span className='text-tertiary'> @Deepak Kumar</span>
         </h1>
      </div>

    </div>
    // <footer className="bg-black text-white py-8 flex flex-col justify-center items-center text-center">
    //   <div className="container mx-auto flex flex-row justify-center space-x-4">
    //     {/* Add links to your social media accounts */}
    //     {/* <a href="https://www.facebook.com/your-page" className="hover:text-opacity-70"><FaFacebook size={24} /></a>
    //     <a href="https://www.twitter.com/your-profile" className="hover:text-opacity-70"><FaTwitter size={24} /></a>
    //     <a href="https://www.instagram.com/your-handle" className="hover:text-opacity-70"><FaInstagram size={24} /></a>
    //     <a href="https://www.linkedin.com/in/your-profile" className="hover:text-opacity-70"><FaLinkedin size={24} /></a> */}
    //   </div>
    //   <p className="mt-4 text-sm">&copy; 2024 &middot; Deepak Kumar </p>
    // </footer>
  );
};

export default Footer;
