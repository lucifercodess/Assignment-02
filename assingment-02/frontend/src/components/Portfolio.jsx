import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { FilterIcon } from "lucide-react";
import Search from "../assets/search.png";
import axios from "axios";
import Card from "./Card";

const Portfolio = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  async function fetchData() {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:3000/api/v1/dummy/products");
      setData(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.product_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-6 px-4 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6 mx-auto max-w-6xl">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Portfolio</h1>
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-6 font-medium text-gray-700">
              <h2 className="cursor-pointer hover:underline hover:underline-offset-4 hover:text-red-500 transition-all duration-300">
                Project
              </h2>
              <h2 className="cursor-pointer hover:underline hover:underline-offset-4 hover:text-red-500 transition-all duration-300">
                Saved
              </h2>
              <h2 className="cursor-pointer hover:underline hover:underline-offset-4 hover:text-red-500 transition-all duration-300">
                Shared
              </h2>
              <h2 className="cursor-pointer hover:underline hover:underline-offset-4 hover:text-red-500 transition-all duration-300">
                Achievement
              </h2>
            </div>

            {/* Search Input */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 cursor-pointer">
                <FilterIcon className="w-5 h-5 text-gray-500" />
                <h2 className="text-gray-600">Filter</h2>
              </div>
              <div className="relative">
                <input
                  type="text"
                  className="p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search a project"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <img
                  src={Search}
                  alt="Search Icon"
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 h-7 w-7 text-gray-500 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="overflow-y-auto max-h-[500px]">
            {loading ? (
              <p className="text-center text-gray-600">Loading...</p>
            ) : filteredData.length > 0 ? (
              <div className="grid gap-6">
                {filteredData.map((item, index) => (
                  <Card key={index} item={item} />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600">No items found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
