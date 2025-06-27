import React from 'react';

const Contact = () => {
  return (
    <section id='contact'>
      <div className=" bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-400 text-center p-[70px]">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold  text-white mb-6 leading-tight">
          Ready foy Your Best Look Yet?
        </h1>
        <p className="text-xl sm:text-2xl text-white mb-8 max-w-2xl mx-auto leading-relaxed">
          Dont wait - book your appointment today and experience the Timeless
          Trim Babershop difference.
        </p>
        <a
          href="/booking-page"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center tracking-tight"
        >
          Book Your Appointment
        </a>
      </div>
    </section>
  );
}

export default Contact;
