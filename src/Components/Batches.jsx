import React from "react";
import Apri from "../assets/Thumbnails/Apri.png";
import ChaiandCode from "./ChaiandCode";

import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
const Batches = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  const lastIndex = currentPage * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage;
  const records = batches.slice(firstIndex, lastIndex);
  const npage = Math.ceil(batches.length / rowsPerPage);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < npage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };
  return (
    <div className='bg-[#E2BBE9] w-[100vw] max-h-max flex gap-20 p-10 align-middle items-center flex-col'>
      <h1 className='text-[80px] font-bold text-[#444B79]'>Chai and Code </h1>
      <div
        className='box_main bg-white flex flex-col gap-3 rounded-[18px] p-10 w-[1223px] max-h-max shadow-[2px_2px_3px_0px_rgba(0,0,0,0.25)]
'>
        <div className=''>
          <span className='text-[40px] font-bold'>Manage Bundle</span>
          <p className='text-[#4B4747] text-[20px] font-normal'>
            Change orders of the products based on priority
          </p>
        </div>
        <div className='search flex justify-start gap-4'>
          <input
            type='search'
            name=''
            id=''
            className='w-[332px] h-[43px] rounded-[1px] border p-2 border-[#BEBEBE]'
            placeholder='Search by Title (alt+k or cmd+k)'
          />
          <button
            className='bg-[#6C6BAF] w-[116px] h-[43px] rounded-[4px]'
            type='submit'>
            Search
          </button>
        </div>
        <div className='table_data rounded-lg overflow-hidden border-black border'>
          <table className='min-w-full bg-white'>
            <thead>
              <tr className='bg-gray-100 h-[68px]  '>
                <th className='py-2 px-4 border-r border-black w-[40%] text-start'>
                  Title
                </th>
                <th className='py-2 px-4 border-r border-r-[#7D7D7D]'>
                  Start Date
                </th>
                <th className='py-2 px-4 border-r border-r-[#7D7D7D]'>
                  End Date
                </th>
                <th className='py-2 px-4 border-r  border-r-[#7D7D7D] '>
                  Price
                </th>
                <th className='py-2 px-4 border-r  border-r-[#7D7D7D] '>
                  Validity/Expiry
                </th>
                <th className='py-2 px-4 '>Status</th>
              </tr>
            </thead>
            <tbody className=' '>
              {records.map((course, index) => (
                <tr key={index} className='hover:bg-gray-50  '>
                  <td className='py-2 px-4  border-r border-r-[#7D7D7D]'>
                    <div className='flex items-center'>
                      <img
                        src={course.image}
                        alt={course.title}
                        className='w-[106px] h-[60px  ] mr-2 object-cover rounded'
                      />
                      <span>{course.title}</span>
                    </div>
                  </td>
                  <td className='py-2 px-4  border-r border-r-[#7D7D7D]'>
                    {course.startDate}
                  </td>
                  <td className='py-2 px-4  border-r border-r-[#7D7D7D]'>
                    {course.endDate}
                  </td>
                  <td className='py-2 px-4  border-r border-r-[#7D7D7D]'>
                    {course.price}
                  </td>
                  <td className='py-2 px-4  border-r border-r-[#7D7D7D]'>
                    {course.validity}
                  </td>
                  <td className='py-2 px-4  border-r border-r-[#7D7D7D]'>
                    <span
                      className={`px-2 py-1 rounded ${
                        course.status === "Published"
                          ? "bg-green-200 text-green-800"
                          : "bg-gray-200 text-gray-800"
                      }`}>
                      {course.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='pagination_and_row_display_contro flex justify-end gap-5 '>
          <div className='row_display_control  justify-end align-middle items-center gap-3'>
            <span>Rows per Page:</span>
            <select
              className=''
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}>
              <option value={3}>3</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={10}>10</option>
            </select>
          </div>
          <div onClick={prevPage}>
            <IoIosArrowBack />
          </div>
          <div onClick={nextPage}>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
      <div className='fixed bottom-5 right-3'>
        <ChaiandCode />
      </div>
    </div>
  );
};

export default Batches;

const batches = [
  {
    title: "SQL Basics To Advanced Mastery Course",
    image: Apri,
    startDate: "20 Jul 2024",
    endDate: "28 Jul 2024",
    price: "₹ 0",
    validity: "180 days",
    status: "Published",
  },
  {
    title: "SQL Basics To Advanced Mastery Course",
    image: Apri,
    startDate: "20 Jul 2024",
    endDate: "28 Jul 2024",
    price: "₹ 0",
    validity: "180 days",
    status: "Published",
  },
  {
    title: "SQL Basics To Advanced Mastery Course",
    image: Apri,
    startDate: "20 Jul 2024",
    endDate: "28 Jul 2024",
    price: "₹ 0",
    validity: "180 days",
    status: "UnPublished",
  },
  {
    title: "SQL Basics To Advanced Mastery Course",
    image: Apri,
    startDate: "20 Jul 2024",
    endDate: "28 Jul 2024",
    price: "₹ 0",
    validity: "180 days",
    status: "Published",
  },
  {
    title: "SQL Basics To Advanced Mastery Course",
    image: Apri,
    startDate: "20 Jul 2024",
    endDate: "28 Jul 2024",
    price: "₹ 0",
    validity: "180 days",
    status: "UnPublished",
  },
  {
    title: "SQL Basics To Advanced Mastery Course",
    image: Apri,
    startDate: "20 Jul 2024",
    endDate: "28 Jul 2024",
    price: "₹ 0",
    validity: "180 days",
    status: "Published",
  },
  {
    title: "SQL Basics To Advanced Mastery Course",
    image: Apri,
    startDate: "20 Jul 2024",
    endDate: "28 Jul 2024",
    price: "₹ 0",
    validity: "180 days",
    status: "UnPublished",
  },
  {
    title: "SQL Basics To Advanced Mastery Course",
    image: Apri,
    startDate: "20 Jul 2024",
    endDate: "28 Jul 2024",
    price: "₹ 0",
    validity: "180 days",
    status: "Published",
  },
  {
    title: "SQL Basics To Advanced Mastery Course",
    image: Apri,
    startDate: "20 Jul 2024",
    endDate: "28 Jul 2024",
    price: "₹ 0",
    validity: "180 days",
    status: "UnPublished",
  },
];
