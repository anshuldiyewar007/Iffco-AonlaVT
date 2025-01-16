import React, { useState } from 'react';

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/form/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact({ username: "", email: "", message: "" });
        alert('Message sent successfully');
      }
    } catch (error) {
      alert('Message not sent');
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 py-12">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-green-800 sm:text-7xl mb-6">
            Get in Touch
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-10">
            <div className="bg-green-800 text-white p-10 rounded-2xl shadow-2xl">
              <h2 className="text-3xl font-semibold mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="rounded-full bg-green-700 p-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-medium">Fax:&nbsp;</p>
                    <p className="text-2xl">91-0581-2404227</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="rounded-full bg-green-700 p-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-medium">Phone</p>
                    <p className="text-2xl"><p>91-05823-234822, 91-05823-234823, 91-0581-2404001, 91-0581-2404002</p></p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="rounded-full bg-green-700 p-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-medium">Address</p>
                    <p className="text-2xl">
                    IFFCO Aonla Unit, Paul Pothen Nagar,P.O. IFFCO Township, 
                      <br />
                      Bareilly, PIN - 243403, (Uttar Pradesh) , INDIA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5600.473677468014!2d79.24419717559839!3d28.22603348562387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a006d9f07a661f%3A0x39f1d0e9f1ca5fc!2sIFFCO%20Aonla%20Plant!5e0!3m2!1sen!2sin!4v1736929416146!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-2xl shadow-2xl">
            <h2 className="text-3xl font-bold text-green-800 mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="username" className="block text-xl font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={contact.username}
                  onChange={handleInput}
                  className="block w-full px-6 py-4 text-xl border border-gray-300 rounded-xl shadow-sm focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xl font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={contact.email}
                  onChange={handleInput}
                  className="block w-full px-6 py-4 text-xl border border-gray-300 rounded-xl shadow-sm focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xl font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="8"
                  value={contact.message}
                  onChange={handleInput}
                  className="block w-full px-6 py-4 text-xl border border-gray-300 rounded-xl shadow-sm focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all duration-200"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-800 text-white px-8 py-5 rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-200 hover:from-green-700 hover:to-green-900 transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;