import React from "react";

const Footer = () => {
  return (
    <footer className="  bg-gray-900 text-gray-400 py-10 px-3">
      <div className="container  max-w-7xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-8 mx-auto ">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg"
            alt="KFC"
            className="w-20 mb-4"
          />
        </div>
        <div className="mb-6">
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                KFC India
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                About KFC
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                KFC Care
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Our Golden Past
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-white mb-4">Legal</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Terms and Conditions
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Disclaimer
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Caution Notice
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-white mb-4">KFC Food</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Menu
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Order Lookup
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Gift Card
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Nutrition & Allergen
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-white mb-4">Support</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Get Help
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                KFC Feedback
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center ">
          <a href="#" className="text-red-500 hover:text-red-600">
            Find a KFC
          </a>
        </div>

        <div className=" space-x-4 flex items-center mb-4 md:mb-0">
          <a href="#" className="hover:text-white">
            <img
              src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg"
              alt="Google Play"
              className="w-40"
            />
          </a>
          <a href="#" className="hover:text-white">
            <img
              src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg"
              alt="App Store"
              className="w-40"
            />
          </a>
        </div>
      </div>
      <div className="container max-w-7xl w-full mx-auto  mt-8 flex justify-between items-center text-gray-500 text-sm">
        <span></span>
        <p>© Copyright KFC Corporation 2024 All rights reserved</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="w-6"
            />
          </a>
          <a href="#" className="hover:text-white">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/600px-Facebook_logo_%28square%29.png"
              alt="Facebook"
              className="w-6"
            />
          </a>
          <a href="#" className="hover:text-white">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu_JjC8isd5vwpdtzacBF1GnCI0ByRiK0aaA&s"
              alt="Twitter"
              className="w-6"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
