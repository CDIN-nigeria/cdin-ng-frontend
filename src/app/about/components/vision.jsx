import React from 'react';

const Vision = () => {
  return (
    <div className="bg-green-100 p-8 w-full rounded shadow mb-6 fadeIn">
      <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
      <div className="flex items-center justify-center mb-4">
        <img src="/images/vision.jpg" alt="Vision" className="w-32 h-32 object-cover rounded-full" />
      </div>
      <p className="text-lg mb-4 fadeIn">
        To enable development of homegrown cryptographers and reduce the dependency of Nigeria on foreign cryptographic products and services.
      </p>
    </div>
  );
};

export default Vision;
