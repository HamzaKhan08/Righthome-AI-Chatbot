import React from "react";
import Cardimageslider from "./Cardimageslider";
import Buttontotop from "./Buttontotop";
import Footer from "./Footer";
import { GoogleMap } from "@react-google-maps/api";

export default function PropertyCard() {
  return (
    <div>
      <nav className="bg-white shadow">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img
                  src="./src/assets/rhai.png"
                  alt="Logo"
                  className="h-8 w-auto mr-3"
                />
                <span
                  className="text-2xl font-bold"
                  style={{
                    background:
                      "linear-gradient(90deg, #ff6b00, #ffd700, #ffc0cb)",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  RightHome AI
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="!rounded-button bg-grey-100 text-[#FF6200] opacity-90 px-4 py-2 text-sm font-medium flex items-center hover:opacity-80 hover:bg-[#FF6200] hover:text-white border border-[#FF6200]">
                <i className="fas fa-user-circle mr-2"></i>Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <Cardimageslider /> {/* Slide Show for images imported from Cardimageslider */}
          <div className="p-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Modern Luxury Apartment
                </h1>
                <p className="mt-2 text-lg text-gray-600">
                  123 Skyline Avenue, Downtown
                </p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-custom">$1,250,000</p>
                <p className="text-gray-600">$850/sq.ft</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-4 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <i className="fas fa-bed text-2xl text-custom mb-2"></i>
                <p className="font-semibold">3 Bedrooms</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <i className="fas fa-bath text-2xl text-custom mb-2"></i>
                <p className="font-semibold">2.5 Bathrooms</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <i className="fas fa-vector-square text-2xl text-custom mb-2"></i>
                <p className="font-semibold">1,470 sq.ft</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <i className="fas fa-car text-2xl text-custom mb-2"></i>
                <p className="font-semibold">2 Parking Spots</p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Property Description</h2>
              <p className="text-gray-600 leading-relaxed">
                This stunning modern apartment offers luxurious living in the
                heart of downtown. Featuring floor-to-ceiling windows that flood
                the space with natural light and provide breathtaking city
                views. The open-concept layout seamlessly connects the living
                areas, perfect for both entertaining and daily living. The
                gourmet kitchen boasts high-end appliances, custom cabinetry,
                and a large island. The master suite includes a spa-like
                bathroom and walk-in closet. Additional features include
                hardwood floors throughout, smart home technology, and premium
                finishes.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">
                Location &amp; Nearby Places
              </h2>
              <div className="h-[400px] bg-gray-100 rounded-lg mb-4 relative overflow-hidden">
                {/* <img
                  src="https://ai-public.creatie.ai/gen_page/map_placeholder_1280x720.png"
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Map"
                /> */}
                {/* <GoogleMap /> */}

              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <i className="fas fa-subway text-custom mr-2"></i>
                    <h3 className="font-semibold">Public Transport</h3>
                  </div>
                  <p className="text-gray-600">0.2 miles - 5 min walk</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <i className="fas fa-shopping-bag text-custom mr-2"></i>
                    <h3 className="font-semibold">Shopping Center</h3>
                  </div>
                  <p className="text-gray-600">0.5 miles - 10 min walk</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <i className="fas fa-hospital text-custom mr-2"></i>
                    <h3 className="font-semibold">Hospital</h3>
                  </div>
                  <p className="text-gray-600">1.2 miles - 5 min drive</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Price Details</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600">List Price</p>
                    <p className="text-xl font-bold">$1,250,000</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Est. Monthly Payment</p>
                    <p className="text-xl font-bold">$5,800/mo</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Property Tax</p>
                    <p className="text-xl font-bold">$12,500/year</p>
                  </div>
                  <div>
                    <p className="text-gray-600">HOA Fees</p>
                    <p className="text-xl font-bold">$500/mo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Reviews</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <img
                      src="./src/assets/rhai.png"
                      alt="Reviewer"
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">John Smith</h3>
                      <div className="flex text-custom">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Amazing property with stunning views! The amenities are
                    top-notch and the location couldn&#39;t be better. Highly
                    recommend for anyone looking for luxury living in the heart
                    of the city.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex space-x-4">
              <button className="!rounded-button flex-1 bg-gray-100 text-[#FF6200] py-3 font-semibold hover:opacity-80 hover:bg-[#FF6200] hover:text-white">
                <i className="fas fa-calendar-alt mr-2"></i>Schedule Viewing
              </button>
              <button className="!rounded-button flex-1 bg-gray-100 text-[#FF6200] py-3 font-semibold hover:opacity-80 hover:bg-[#FF6200] hover:text-white">
                <i className="fas fa-phone mr-2"></i>Contact Agent
              </button>
              <button className="!rounded-button flex-1 bg-gray-100 text-[#FF6200] py-3 font-semibold hover:opacity-80 hover:bg-[#FF6200] hover:text-white">
                <i className="fas fa-heart mr-2"></i>Save Property
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <Buttontotop /> {/* Button to go up on page*/}
    </div>
  );
}
