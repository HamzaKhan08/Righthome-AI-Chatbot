import React from "react";

const SidebarFilter = () => {
  return (
    <div>
      {/* <!-- Filter Sidebar --> */}

      <div className="col-span-3">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Filter Properties</h2>

          {/* <!-- Location Filter --> */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <select className="w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
              <option>All Locations</option>
              <option>Downtown</option>
              <option>Midtown</option>
              <option>Uptown</option>
            </select>
          </div>

          {/* <!-- Price Range Filter --> */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price Range
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                placeholder="Min"
                className="w-1/2 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
              <span>-</span>
              <input
                type="number"
                placeholder="Max"
                className="w-1/2 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* <!-- Property Type Filter --> */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Property Type
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-600">Apartment</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-600">House</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-600">Condo</span>
              </label>
            </div>
          </div>

          {/* <!-- Bedrooms Filter --> */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bedrooms
            </label>
            <div className="flex flex-wrap gap-2">
              <button className="!rounded-button px-3 py-1 text-sm border border-[#FF6200] hover:border-[#FF6200] hover:text-[#FF6200]">
                Any
              </button>
              <button className="!rounded-button px-3 py-1 text-sm border border-[#FF6200] hover:border-[#FF6200] hover:text-[#FF6200]">
                1
              </button>
              <button className="!rounded-button px-3 py-1 text-sm border border-[#FF6200] hover:border-[#FF6200] hover:text-[#FF6200]">
                2
              </button>
              <button className="!rounded-button px-3 py-1 text-sm border border-[#FF6200] hover:border-[#FF6200] hover:text-[#FF6200]">
                3+
              </button>
            </div>
          </div>

          {/* <!-- Apply Filters Button --> */}
          <button className="!rounded-button text-[#FF6200] px-16 py-2 font-semibold hover:opacity-80 hover:bg-[#FF6200] hover:text-white border border-color-[#FF6200]">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarFilter;
