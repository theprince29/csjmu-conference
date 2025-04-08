
import React from "react";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";


// Sample Dropdown component (you can use your own if different)
 const DropdownFiles = ({ name, items }) => {
  return (

    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 bg-primary hover:text-secondary text-sm text-white">
          {name}
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-5 w-5 text-white-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {items.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              download
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {item.itemName}
            </a>
          ))}
        </div>
      </MenuItems>
    </Menu>
    // <div className="relative inline-block text-left">
    //   <div>
    //     <button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
    //       {name}
    //     </button>
    //   </div>
    //   <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
    //     <div className="py-1">
    //       {items.map((item, idx) => (
    //         <a
    //           key={idx}
    //           href={item.link}
    //           download
    //           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    //         >
    //           {item.itemName}
    //         </a>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default DropdownFiles;