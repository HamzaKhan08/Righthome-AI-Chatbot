import { useState } from "react";
import React from "react";
import "../App.css";
import mockProperties from "./MockProperties";
import Footer from "./Footer";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content:
        "Hi there! Searching for your dream home can be exhausting. Let me help you find the perfect property tailored to your needs.",
    },
    {
      type: "bot",
      content: "What type of property are you looking for? (Residential/Commercial)",
      options: ["Residential", "Commercial"],
    },
  ]);

  const [input, setInput] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleUserInput = (inputValue) => {
    const query = inputValue.toLowerCase().trim();
    let newMessages = [...messages];

    if (!inputValue.trim()) return;

    if (newMessages.length === 2) {
      if (query === "residential" || query === "commercial") {
        newMessages.push({ type: "user", content: inputValue });
        newMessages.push({
          type: "bot",
          content: "Please select your price range.",
          options: ["<50L", "50L-1Cr", "1Cr-2Cr", ">2Cr"],
        });
      } else {
        alert("Please select a valid property type: Residential or Commercial.");
        return;
      }
    } else if (newMessages.length === 4) {
      const validPriceRanges = ["<50l", "50l-1cr", "1cr-2cr", ">2cr"];

      if (validPriceRanges.includes(query)) {
        setPriceRange(query);
        newMessages.push({ type: "user", content: inputValue });
        newMessages.push({
          type: "bot",
          content:
            "Do you prefer an under-construction project or a ready-to-move property?",
          options: ["Under-construction", "Ready-to-move"],
        });
      } else {
        alert("Please select a valid price range.");
        return;
      }
    } else if (newMessages.length === 6) {
      const validOptions = ["under-construction", "ready-to-move"];
      if (validOptions.includes(query)) {
        newMessages.push({ type: "user", content: inputValue });
        newMessages.push({
          type: "bot",
          content: "Which locations or neighborhoods are you considering?",
          options: ["Gurgaon", "Others"],
        });
      } else {
        alert("Please select a valid option: Under-Construction or Ready-to-Move.");
        return;
      }
    } else if (newMessages.length === 8) {
      if (["gurgaon", "others"].includes(query)) {
        newMessages.push({ type: "user", content: inputValue });
        newMessages.push({
          type: "bot",
          content:
            "Are you looking for specific amenities? (e.g., Gym, Pool, Schools Nearby)",
          options: ["Gym", "Pool", "Schools Nearby", "Others"],
        });
      } else {
        alert("Please select a valid location: Gurgaon or Others.");
        return;
      }
    } else if (newMessages.length === 10) {
      if (["gym", "pool", "schools nearby", "others"].includes(query)) {
        newMessages.push({ type: "user", content: inputValue });
        newMessages.push({
          type: "bot",
          content:
            "Is this property for self-use, renting, or investment purposes?",
          options: ["Self-use", "Renting", "Investment"],
        });
      } else {
        alert("Please select a valid amenity or choose None.");
        return;
      }
    } else if (newMessages.length === 12) {
      const filteredProperties = mockProperties.filter((property) => {
        if (priceRange === "<50l" && property.price <= 5000000) return true;
        if (
          priceRange === "50l-1cr" &&
          property.price > 5000000 &&
          property.price <= 10000000
        )
          return true;
        if (
          priceRange === "1cr-2cr" &&
          property.price > 10000000 &&
          property.price <= 20000000
        )
          return true;
        if (priceRange === ">2cr" && property.price > 20000000) return true;
        return false;
      });

      newMessages.push({
        type: "bot",
        content:
          filteredProperties.length > 0
            ? "Here are some options matching your criteria:"
            : "Sorry, no properties match your criteria. Please try again.",
      });

      if (filteredProperties.length > 0) {
        newMessages.push({ type: "properties", content: filteredProperties });
      }
    }

    setMessages(newMessages);
    setInput("");
  };

  const handleOptionClick = (option) => {
    handleUserInput(option);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      handleUserInput(input);
    }
  };

  return (
    <div>
      <nav className="bg-white shadow-sm">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center">
                <img
                  src="./src/assets/rhai.png"
                  alt="RightHome AI Logo"
                  className="h-8 w-8 mr-2"
                />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-yellow-500 to-pink-300 text-transparent bg-clip-text">
                  RightHome AI
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-decoration-none bg-gradient-to-r from-orange-500 via-yellow-500 to-pink-300 text-[#FF6200] bg-clip-text hover:opacity-80"
              >
                Home
              </a>
              <a
                href="#"
                className="text-decoration-none bg-gradient-to-r from-orange-500 via-yellow-500 to-pink-300 text-[#FF6200] bg-clip-text hover:opacity-80"
              >
                About
              </a>
              <a
                href="#"
                className="text-decoration-none bg-gradient-to-r from-orange-500 via-yellow-500 to-pink-300 text-[#FF6200] bg-clip-text hover:opacity-80"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12">
            <div className="bg-white rounded-lg shadow p-6 h-[600px] flex flex-col">
              <div className="flex-1 overflow-y-auto mb-4" id="chat-messages">
                <div className="flex flex-col space-y-4">
                  {messages.map((message, index) =>
                    message.type === "properties" ? (
                      <div
                        key={index}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                      >
                        {message.content.map((property, idx) => (
                          <div
                            key={idx}
                            className="rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                          >
                            <img
                              src={property.img}
                              alt={property.title}
                              className="w-full h-32 object-cover"
                            />
                            <div className="p-3">
                              <div className="flex items-center justify-between mb-1">
                                <h3 className="text-sm font-semibold text-gray-900">
                                  {property.title}
                                </h3>
                                <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-pink-300 text-[#FF6200] bg-clip-text font-bold text-sm">
                                  {property.price}
                                </span>
                              </div>
                              <p className="text-xs text-gray-600 mb-2">
                                {property.address}
                              </p>
                              <div className="flex items-center space-x-3 text-xs text-gray-500">
                                <span>
                                  <i className="fas fa-bed mr-1"></i>{" "}
                                  {property.beds} beds
                                </span>
                                <span>
                                  <i className="fas fa-bath mr-1"></i>{" "}
                                  {property.baths} baths
                                </span>
                                <span>
                                  <i className="fas fa-ruler-combined mr-1"></i>{" "}
                                  {property.size}
                                </span>
                                <span>
                                  <i className="fas fa-map-marker-alt mr-1"></i>{" "}
                                  {property.location}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div
                        key={index}
                        className={`flex items-start ${
                          message.type === "user" ? "justify-end" : ""
                        }`}
                      >
                        <div
                          className={`${
                            message.type === "bot"
                              ? "bg-gray-100"
                              : "bg-gradient-to-r from-orange-500 via-yellow-500 to-pink-300 text-white"
                          } rounded-lg p-4 max-w-xl text-sm shadow-md`}
                        >
                          {message.content}
                          {message.type === "bot" && message.options && (
                            <div className="flex flex-wrap gap-2 mt-2">
                              {message.options.map((option, i) => (
                                <button
                                  key={i}
                                  className="bg-gradient-to-r from-orange-500 via-yellow-500 to-pink-300 text-white px-4 py-2 rounded-full hover:opacity-80 text-sm shadow-md"
                                  onClick={() => handleOptionClick(option)}
                                >
                                  {option}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="flex items-center relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <img
                    src="./src/assets/rhai.png"
                    alt="RightHome AI Logo"
                    className="h-5 w-5"
                  />
                </div>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleInputKeyDown}
                  placeholder="Type your message here..."
                  className="w-full border-gray-300 rounded-lg pl-10 pr-12 focus:ring-red-500 focus:border-red-500"
                />
                <button
                  onClick={() => handleUserInput(input)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-[#FF6200] p-2 rounded-full hover:opacity-80"
                >
                <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Chatbot;
