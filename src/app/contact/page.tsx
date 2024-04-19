'use client'
import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add form submission logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-200">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-gray-50 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-gray-50 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-200">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-gray-50 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rows="4"'></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
      </form>

    </div>

  );
}