import React from 'react';
import logo from '../cs-soc-official.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container bg-grey text-black w-full mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center py-4 lg:mx-28">
          <img src={logo} alt="CS Society Logo" className="w-24 h-24 md:w-32 md:h-32" />
          
          <div className="navigate flex flex-col gap-2 mt-4 md:mt-0">
            <p className="font-bold">NAVIGATE</p>
            <a href="https://cssocietyusm.com/about" className="hover:underline">About Us</a>
            <a href="/" className="hover:underline">Events</a>
            <a href="https://cssocietyusm.com/news" className="hover:underline">News</a>
          </div>
          
          <div className="social flex flex-col items-center mt-4 md:mt-0">
            <p className="font-bold">SOCIAL MEDIA</p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/USMComputerScienceSociety" target="_blank" rel="noreferrer">
                <img src="fb.svg" alt="Facebook" className="w-6 h-6 md:w-8 md:h-6 mt-1 filter grayscale" />
              </a>
              <a href="https://www.instagram.com/usmcss/" target="_blank" rel="noreferrer">
                <img src="instagram.svg" alt="Instagram" className="w-6 h-6 md:w-8 md:h-8 filter grayscale" />
              </a>
              <a href="https://www.tiktok.com/@usmcss" target="_blank" rel="noreferrer">
                <img src="tiktok.svg" alt="TikTok" className="w-6 h-6 md:w-8 md:h-8 filter grayscale" />
              </a>
              <a href="https://www.linkedin.com/school/university-sains-malaysia/" target="_blank" rel="noreferrer">
                <img src="linkedin.svg" alt="LinkedIn" className="w-6 h-6 mt-1 filter grayscale" />
              </a>
              <a href="https://twitter.com/usmcss" target="_blank" rel="noreferrer">
                <img src="telegram.svg" alt="Twitter" className="w-6 h-6 md:w-8 md:h-8 filter grayscale" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center mt-4 md:mt-0">
            <img src='/CS-logo-transparent.svg' alt="CS School Logo" className="w-20 h-10 md:w-[40%] md:h-[20%]" />
            <img src="/USM-color.svg" alt="USM Logo" className="w-32 h-16 md:w-[80%] md:h-[40%] mt-2" />
          </div>
        </div>
      </div>

      <div className="container bg-yellow text-black w-full mx-auto px-6 py-4 text-center justify-center">
        <p>© 2022 - 2023 Computer Science Society, Universiti Sains Malaysia</p>
      </div>
    </footer>
  );
};

export default Footer;
