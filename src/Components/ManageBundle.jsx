import React, { useEffect, useState } from "react";
import ChaiandCode from "./ChaiandCode";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  TouchSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { ManageBundlecard } from "./ManageBundleCard";
import Apri from "../assets/Thumbnails/Apri.png";
import image1 from "../assets/Thumbnails/image.png";
import Image3 from "../assets/Thumbnails/image3.png";
import Image4 from "../assets/Thumbnails/image4.png";
import Interview from "../assets/Thumbnails/Interview.png";

const ManageBundle = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(
      course.map((item, index) => ({ ...item, id: `item-${index + 1}` }))
    );
  }, []);
  const handleRemove = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
    console.log("deleting....", items);
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
  const handleMoveUp = (id) => {
    console.log("down...");
    setItems((prevItems) => {
      const index = prevItems.findIndex((item) => item.id === id);
      if (index > 0) {
        return arrayMove(prevItems, index, 0);
      }
      return prevItems;
    });
  };

  const handleMoveDown = (id) => {
    console.log("up...");
    setItems((prevItems) => {
      const index = prevItems.findIndex((item) => item.id === id);
      if (index < prevItems.length - 1) {
        return arrayMove(prevItems, index, prevItems.length - 1);
      }
      return prevItems;
    });
  };

  return (
    <div className='bg-[#DBFFCE] max-h-max w-[100vw] flex flex-col pt-7 gap-10 items-center align-middle'>
      <h1 className='text-[80px] font-bold text-[#4F6F52]'>Chai and Code </h1>
      <div className='box_of_dragable_item w-[1227px] max-h-max bg-white flex flex-col gap-10 p-10 rounded-[18px]'>
        <div className=''>
          <span className='text-[40px] font-bold'>Manage Bundle</span>
          <p className='text-[#4B4747] text-[20px] font-normal'>
            Change orders of the products based on priority
          </p>
        </div>
        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
          <SortableContext
            items={items.map((item) => item.id)}
            strategy={verticalListSortingStrategy}>
            {items.map((item) => (
              <ManageBundlecard
                key={item.id}
                {...item}
                removeid={handleRemove}
                moveDown={() => handleMoveDown(item.id)}
                moveUp={() => handleMoveUp(item.id)}
              />
            ))}
          </SortableContext>
        </DndContext>
      </div>
      <div className='fixed bottom-5 right-3'>
        <ChaiandCode />
      </div>
    </div>
  );
};

export default ManageBundle;

const course = [
  {
    title: "Advanced React Development",
    price: 7500,
    currency: "Rs.",
    type: "Course",
    imageUrl: Apri,
  },
  {
    title: "Python for Data Science",
    price: 8000,
    currency: "Rs.",
    type: "Mock Test",
    imageUrl: Image3,
  },
  {
    title: "Full Stack Web Development Bootcamp",
    price: 12000,
    currency: "Rs.",
    type: "Course",
    imageUrl: Image4,
  },
  {
    title: "Machine Learning Fundamentals",
    price: 10000,
    currency: "Rs.",
    type: "Course",
    imageUrl: image1,
  },
  {
    title: "iOS App Development with Swift",
    price: 8500,
    currency: "Rs.",
    type: "Course",
    imageUrl: Interview,
  },
];
