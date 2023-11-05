import React from 'react';

const Objectives = () => {
  return (
    <div className="bg-green-100 p-8 w-full rounded shadow mb-6 fadeIn">
      <h2 className="text-2xl font-bold mb-4">Our Objectives</h2>
      <div className="flex items-center justify-center mb-4">
        <img src="/images/objectives.jpg" alt="Objectives" className="w-32 h-32 object-cover rounded-full" />
      </div>
      <ul className="list-disc ml-6 text-lg mb-4 fadeIn">
        <li>To create awareness on the importance of homegrown cryptographers.</li>
        <li>To create a platform for the learning and practice of Cryptography in Nigeria.</li>
        <li>To stimulate national effort towards achieving national independence in developing cryptographic product and services.</li>
        <li>To help position Nigeria for future challenges and opportunities in cyber security.</li>
        <li>To help position Nigeria for future challenges and opportunities in Digital Economy Opening the door to the future of Nigeria in Digital Economy and Cyber–Defense.</li>
      </ul>
    </div>
  );
};

export default Objectives;
