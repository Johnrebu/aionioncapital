import React from "react";

const SmartPlanningSection = () => {
  return (
    <section className="flex justify-center bg-[#d6b9c7] py-6">
      <div className="flex flex-col bg-white shadow-lg rounded-2xl px-6 py-6 w-[90%] max-w-5xl">
        <h2 className="text-lg sm:text-xl font-bold text-blue-700 mb-2 flex items-center">
          📢 We’ve Updated Our Contact Details!
        </h2>
        <p className="text-gray-800 mb-2">
          We want to make it even easier for you to reach us.
          <br />
          <strong>Please note our new phone numbers and email address.</strong>
          <br />
          Kindly use these updated details whenever you need our assistance or
          support.
        </p>

        <div className="mt-4 text-sm sm:text-base text-gray-800 leading-relaxed">
          <p>
            <span className="font-bold text-blue-700">How to Reach Us</span>
          </p>
          <p>
            <span className="font-bold">Call Us:</span>{" "}
            <a href="tel:8939800027" className="text-blue-600 hover:underline">
              8939800027
            </a>
          </p>
          <p>
            <span className="font-bold">WhatsApp:</span>{" "}
            <a
              href="https://wa.me/9797979818"
              className="text-blue-600 hover:underline"
            >
              9797979818
            </a>
          </p>
          <p>
            <span className="font-bold">
              If you receive a call from us, it will show as:
            </span>{" "}
            1600418814
          </p>
          <p>
            <span className="font-bold">Email:</span>{" "}
            <a
              href="mailto:clientcare@aionioncapital.com"
              className="text-blue-600 hover:underline"
            >
              clientcare@aionioncapital.com
            </a>
          </p>
        </div>

        <p className="mt-4 text-gray-800">
          We’re always here to help you.
          <br />
          <strong>Thank you for staying connected with Aionion Capital.</strong>
        </p>
      </div>
    </section>
  );
};

export default SmartPlanningSection;
