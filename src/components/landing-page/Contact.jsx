import React from 'react';

const Contact = () => {
  return (
    <section id='contact'>
      <div className=" bg-gradient-to-br from-purple-800 via-indigo-500 to-blue-200 text-center p-[70px]">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold  text-white mb-6 leading-tight">
          Ready for Your Best Look Yet?
        </h1>
        <p className="text-xl sm:text-2xl text-white mb-8 max-w-2xl mx-auto leading-relaxed">
          Dont wait - book your appointment today and experience the Timeless
          Trim Babershop difference.
        </p>
        <a
          href="/booking-page"
          className="bg-white hover:text-blue-700 text-blue-400 px-4 py-2 rounded-lg font-medium inline-flex justify-center tracking-tight"
        >
          Book Your Appointment
        </a>
      </div>
    </section>
  );
}

export default Contact;
