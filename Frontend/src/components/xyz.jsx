import { useState } from "react";
import React from "react";
import "../App.css";
import mockProperties from "./MockProperties";
import Footer from "./Footer";
import SidebarFilter from "./SidebarFilter";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content:
        "Hi there! Searching for your dream home can be exhausting. Let me help you find the perfect property tailored to your needs.",
    },
    {
      type: "bot",
      content: "Before we dive in, could you share your preferred property type?",
      options: ["Residential", "Commercial"],
    },
  ]);

  const [input, setInput] = useState("");

  // here we are fetching the result based on user input
  const handleUserInput = (e) => {
    e.preventDefault();

    if (input.trim()) {
      // Determine filter criteria based on user input
      const query = input.toLowerCase();
      const filteredProperties = mockProperties.filter((property) => {
        if (query.includes("2 bedroom") && property.beds === 2) return true;
        if (query.includes("3 bedroom") && property.beds === 3) return true;
        if (
          query.includes("furnished") &&
          property.propertyType === `furnished`
        )
          return true;
        if (query.includes("semi") && property.propertyType === `semi`)
          return true;
        if (
          query.includes("apartment") &&
          property.propertyType === `apartment`
        )
          return true;
        if (
          query.includes("penthouse") &&
          property.propertyType === `penthouse`
        )
        return true;
        if (
          query.includes(input) &&    // we can change this "input" when we need to be
          property.propLocation === input // similarly we can change this also
        )
          return true;
        return false;
      });

      // Add new messages, if searched thing match to our list of property then, result display else it shows the sorry message !
      const newMessages = [
        ...messages,
        { type: "user", content: input },
        {
          type: "bot",
          content:
            filteredProperties.length > 0
              ? "Here are some options matching your criteria:"
              : "Sorry, no properties match your criteria. Please try again.",
        },
      ];

      // Add properties to messages if matches are found
      if (filteredProperties.length > 0) {
        newMessages.push({ type: "properties", content: filteredProperties });
      }

      setMessages(newMessages);
      setInput("");
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

          {/* <SidebarFilter /> */}
          {/* <!-- Chat Interface --> */}
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
                            data-url=""
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
                                  {property.propLocation}
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
                        {message.type === "bot" && (
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 via-yellow-500 to-pink-300 flex items-center justify-center">
                              <i className="fas fa-robot text-white text-sm"></i>
                            </div>
                          </div>
                        )}
                        <div
                          className={`ml-3 bg-${
                            message.type === "user" ? "blue-50" : "gray-100"
                          } rounded-lg p-3 max-w-[80%]`}
                        >
                          <p className="text-sm text-gray-800">
                            {message.content}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
              <form onSubmit={handleUserInput} className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <img
                    src="./src/assets/rhai.png"
                    alt="RightHome AI Logo"
                    className="h-5 w-5"
                  />
                </div>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-lg pl-10 pr-12 focus:ring-red-500 focus:border-red-500"
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-[#FF6200] p-2 rounded-full hover:opacity-80"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />

    </div>
  );
};

export default Chatbot;
