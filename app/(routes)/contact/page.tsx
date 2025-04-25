
import React from "react";
import AccordionExample from "../_components/AccordionExample";
import AlertDialogExample from "../_components/AlertDialogExample";

const ContactPage = () => {
  return (
    <div className="container mx-auto mt-4">
      <div className="flex flex-row items-center justify-center">
        <div className="w-full md:w-1/2 p-4">
          <AlertDialogExample />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <AccordionExample />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
