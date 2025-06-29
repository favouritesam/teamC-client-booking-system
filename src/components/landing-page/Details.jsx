import React from 'react';

const Details = () => {
  return (
    <section className="relative min-h-screen  flex   justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="container text-center  ">
        <h1 className="text-4xl py-10  sm:text-5xl lg:text-7xl font-bold  text-blue-800 mb-6 leading-tight">
          Premium Grooming
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-700">
            Redifined
          </span>
        </h1>
        <p className="text-xl px-5 md:px-1 sm:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience the art of traditional barbering with modern techniques.
          Book your appointment today and discover the difference.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">
              500+
            </div>
            <div className="text-gray-700 text-sm sm:text-base">
              Happy Clients
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">
              4.9
            </div>
            <div className="text-gray-700 text-sm sm:text-base">
              Star Rating
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">
              5+
            </div>
            <div className="text-gray-700 text-sm sm:text-base">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">
              127
            </div>
            <div className="text-gray-700 text-sm sm:text-base">Reviews</div>
          </div>
        </div>
        <div className="flex justify-center gap-3  mt-[100px] md:mt-[130px] ">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center tracking-tight">
            <a href="/booking-page">Book Appointment</a>
          </button>
          <div>
            <button className="bg-white hover:bg-blue-100 text-blue-600 px-4 py-2 rounded-lg font-medium inline-flex justify-center tracking-tight">
              View Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
