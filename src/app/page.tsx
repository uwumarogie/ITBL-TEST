"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add form submission logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center border-2 border-black p-7 rounded-md"
      >
        <div className="flex flex-row space-x-8 items-center">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 max-w-64 mb-2"
          />
        </div>
        <div className="flex flex-row space-x-8 items-center">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 max-w-64 mb-2"
          />
        </div>
        <div className="flex flex-row space-x-4 items-center">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 max-w-64 mb-2"
          />
        </div>
        <button className="max-w-16 max-h-6">Submit</button>
      </form>
    </div>
  );
}
