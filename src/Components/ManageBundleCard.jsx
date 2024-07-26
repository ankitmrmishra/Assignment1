import React, { useState, useRef, useEffect } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { HiDotsVertical } from "react-icons/hi";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";

export function ManageBundlecard({
  id,
  imageUrl,
  price,
  title,
  type,
  currency,
  removeid,
  moveUp,
  moveDown,
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log("clicked");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={setNodeRef}
      style={style}
      className='drag bg-white rounded-[8px] shadow-[1px_1px_8px_0px_rgba(0,0,0,0.25)] w-[1025px] h-[90px] flex justify-between items-center px-4'>
      <div className='flex items-center gap-4'>
        <div className='' {...attributes} {...listeners}>
          <DottedIcon />
        </div>

        <img
          src={imageUrl}
          alt='imageThumbnail'
          className=' h-[75px] rounded w-[133px] object-cover'
        />
        <span className='text-black font-semibold'>
          <a
            href='http://www.google.com'
            target='_blank'
            rel='noopener noreferrer'>
            {title}
          </a>
        </span>
      </div>
      <div className='flex justify-center items-center align-middle gap-4'>
        <span className='font-bold'>
          {currency} {price}
        </span>
        <span className='text-black bg-[#DBFFCE] rounded-[4px] p-1'>
          {type}
        </span>
        <div className='dropdown relative ' ref={dropdownRef}>
          <HiDotsVertical onClick={toggleDropdown} className='cursor-pointer' />

          {isOpen && (
            <ul className='dropdown-menu absolute -right-[150px] mt-2 py-2 w-[169px] h-[127px] bg-white  shadow-[1px_1px_8px_0px_rgba(0,0,0,0.25)] rounded-[8px] z-[1000]'>
              <li
                onClick={() => moveUp(id)}
                className=' flex align-middle items-center justify-start gap-1 px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                <FaArrowUp /> <span>Move to Top</span>
              </li>
              <li
                onClick={() => moveDown(id)}
                className=' flex align-middle items-center justify-start gap-1 px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                <FaArrowDown /> <span>Move to Bottom</span>
              </li>
              <li
                onClick={() => removeid(id)}
                className=' flex align-middle items-center justify-start gap-1 px-4 text-[#FA2D2D] py-2 hover:bg-gray-100 cursor-pointer'>
                <RiDeleteBinLine /> <span className=''>Delete</span>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

const DottedIcon = () => {
  return (
    <svg
      className='hover:cursor-grab h-5'
      width='18'
      height='28'
      viewBox='0 0 18 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M7.33329 24C7.33329 25.8333 5.83329 27.3333 3.99996 27.3333C2.16663 27.3333 0.666626 25.8333 0.666626 24C0.666626 22.1666 2.16663 20.6666 3.99996 20.6666C5.83329 20.6666 7.33329 22.1666 7.33329 24ZM3.99996 10.6666C2.16663 10.6666 0.666626 12.1666 0.666626 14C0.666626 15.8333 2.16663 17.3333 3.99996 17.3333C5.83329 17.3333 7.33329 15.8333 7.33329 14C7.33329 12.1666 5.83329 10.6666 3.99996 10.6666ZM3.99996 0.666626C2.16663 0.666626 0.666626 2.16663 0.666626 3.99996C0.666626 5.83329 2.16663 7.33329 3.99996 7.33329C5.83329 7.33329 7.33329 5.83329 7.33329 3.99996C7.33329 2.16663 5.83329 0.666626 3.99996 0.666626ZM14 7.33329C15.8333 7.33329 17.3333 5.83329 17.3333 3.99996C17.3333 2.16663 15.8333 0.666626 14 0.666626C12.1666 0.666626 10.6666 2.16663 10.6666 3.99996C10.6666 5.83329 12.1666 7.33329 14 7.33329ZM14 10.6666C12.1666 10.6666 10.6666 12.1666 10.6666 14C10.6666 15.8333 12.1666 17.3333 14 17.3333C15.8333 17.3333 17.3333 15.8333 17.3333 14C17.3333 12.1666 15.8333 10.6666 14 10.6666ZM14 20.6666C12.1666 20.6666 10.6666 22.1666 10.6666 24C10.6666 25.8333 12.1666 27.3333 14 27.3333C15.8333 27.3333 17.3333 25.8333 17.3333 24C17.3333 22.1666 15.8333 20.6666 14 20.6666Z'
        fill='#7F7F7F'
      />
    </svg>
  );
};
