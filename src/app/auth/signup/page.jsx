"use client"
import React, { useState } from 'react';
import Navbar from '@/app/components/navbar';
import Footercomp from '@/app/components/footer';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    certificateIncorporation: '',
    validId: '',
    title: '',
    lastName: '',
    firstName: '',
    middleName: '',
    email: '',
    alternateEmail: '',
    privatePhoneNumber: '',
    officialPhoneNumber: '',
    organisationName: '',
    valueChain: '',
    referenceProject: '',
    existingProducts: '',
    activeProjects: '',
    targetCustomer: '',
    challenges: '',
    valueFromCNoPEBS: '',
    sector: '',
    organisationURL: '',
    referenceName: '',
    referenceTitle: '',
    referenceJobTitle: '',
    referencePhoneNumber: '',
    referenceEmail: '',
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="flex flex-col gap-16">
      <div className="sticky top-0 flex w-full h-fit items-center">

      <Navbar />
      </div>
      <form onSubmit={handleFormSubmit} className="sm:w-1/4 bg-white w-full px-4 py-4 m-auto flex flex-col rounded-lg">
        {currentStep === 1 && (
          <div className="w-full flex flex-col gap-2 m-auto ">
            <label htmlFor="title" className="block mb-2">
              Title:
            </label>
            <select
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="block w-full border border-green-500 outline-green-700 rounded-md py-1 px-2"
            >
              <option value="">title</option>
              <option value="Prof.">Prof.</option>
              <option value="Dr.">Dr.</option>
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Ms.">Ms.</option>
            </select>

            <label htmlFor="lastName" className="block mb-2">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="block w-full border border-green-500 outline-green-700 rounded-md py-1 px-2"
            />

            <label htmlFor="firstName" className="block mb-2">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="block w-full border border-green-500 outline-green-700 rounded-md py-1 px-2"
            />
            <label htmlFor="middleName" className="block mb-2">
              Middle Name:
            </label>
            <input
              type="text"
              id="middleName"
              name="middleName"
              value={formData.middleName}
              onChange={handleInputChange}
              className="block w-full border border-green-500 outline-green-700 rounded-md py-1 px-2"
            />

            <label htmlFor="email" className="block mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="block w-full border border-green-500 outline-green-700 rounded-md py-1 px-2"
            />
            <label htmlFor="privatePhoneNumber" className="block mb-2">
              Phone Number (Private):
            </label>
            <input
              type="tel"
              id="privatePhoneNumber"
              name="privatePhoneNumber"
              value={formData.privatePhoneNumber}
              onChange={handleInputChange}
              className="block w-full border border-green-500 outline-green-700 rounded-md py-1 px-2"
            />
          </div>
        )}

        {currentStep === 2 && (
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="officialPhoneNumber" className="block mb-2">
              Phone Number (Official):
            </label>
            <input
              type="tel"
              id="officialPhoneNumber"
              name="officialPhoneNumber"
              value={formData.officialPhoneNumber}
              onChange={handleInputChange}
              className="block w-full border border-green-500 outline-green-700 rounded-md py-1 px-2"
            />

            <label htmlFor="organisationName" className="block mb-2">
              Organisation Name:
            </label>
            <input
              type="text"
              id="organisationName"
              name="organisationName"
              value={formData.organisationName}
              onChange={handleInputChange}
              className="block w-full border border-green-500 outline-green-700 rounded-md py-1 px-2"
            />

            <label htmlFor="valueChain" className="block mb-2">
              Your Value chain in the Nigerian Blockchain Industry:
            </label>
            <input
              type="text"
              id="valueChain"
              name="valueChain"
              value={formData.valueChain}
              onChange={handleInputChange}
              className="block w-full border border-green-500 outline-green-700 rounded-md py-1 px-2"
            />

            <label htmlFor="referenceProject" className="block mb-2">
              Reference Project or Client (Institutional):
            </label>
            <input
              type="text"
              id="referenceProject"
              name="referenceProject"
              value={formData.referenceProject}
              onChange={handleInputChange}
              className="block w-full border border-green-500 outline-green-700 rounded-md py-1 px-2"
            />

            <label htmlFor="existingProducts" className="block mb-2">
              Any Existing products or services in the market:
            </label>
            <input
              type="text"
              id="existingProducts"
              name="existingProducts"
              value={formData.existingProducts}
              onChange={handleInputChange}
              className="block w-full border border-green-500 outline-green-700 rounded-md py-1 px-2"
            />

            <label htmlFor="activeProjects" className="block mb-2">
              Active or Upcoming Projects:
            </label>
            <input
              type="text"
              id="activeProjects"
              name="activeProjects"
              value={formData.activeProjects}
              onChange={handleInputChange}
              className="block w-full border border-green-500 outline-green-700 rounded-md py-1 px-2"
            />

            <label htmlFor="targetCustomer" className="block mb-2">
              Potential or target customer:
            </label>
            <input
              type="text"
              id="targetCustomer"
              name="targetCustomer"
              value={formData.targetCustomer}
              onChange={handleInputChange}
              className="block w-full border border-green-500 outline-green-700 rounded-md py-1 px-2"
            />
          </div>
        )}

        {currentStep === 3 && (
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="challenges" className="block mb-2">
              Current challenges you are looking to overcome on your projects and suggested role CNoPEBS could play:
            </label>
            <input
              type="text"
              id="challenges"
              name="challenges"
              value={formData.challenges}
              onChange={handleInputChange}
              className="block w-full border border-green-500 outline-green-700 rounded-md py-1 px-2"
            />

            <label htmlFor="valueFromCNoPEBS" className="block mb-2">
              Other areas where you are anticipating to receive value from CNoPEBS:
            </label>
            <input
              type="text"
              id="valueFromCNoPEBS"
              name="valueFromCNoPEBS"
              value={formData.valueFromCNoPEBS}
              onChange={handleInputChange}
              className="block w-full border border-green-500 outline-green-700 rounded-md py-1 px-2"
            />

            <label htmlFor="sector" className="block mb-2">
              Sector:
            </label>
            <input
              type="text"
              id="sector"
              name="sector"
              value={formData.sector}
              onChange={handleInputChange}
              className="block w-full border border-green-500 outline-green-700 rounded-md py-1 px-2"
            />

            <label htmlFor="organisationURL" className="block mb-2">
              Organisation URL:
            </label>
            <input
              type="text"
              id="organisationURL"
              name="organisationURL"
              value={formData.organisationURL}
              onChange={handleInputChange}
              className="block w-full border border-green-500 outline-green-700 rounded-md py-1 px-2"
            />

            <label htmlFor="referenceName" className="block mb-2">
              Reference Name(Someone who can reference you or your organisation, ensure you obtain your reference approval before you sub):
            </label>
            <input
              type="text"
              id="referenceName"
              name="referenceName"
              value={formData.referenceName}
              onChange={handleInputChange}
              className="block w-full border border-green-500 outline-green-700 rounded-md py-1 px-2"
            />

            <label htmlFor="referenceTitle" className="block mb-2">
              Designation/Job Reference Title:
            </label>
            <input
              type="text"
              id="referenceTitle"
              name="referenceTitle"
              value={formData.referenceTitle}
              onChange={handleInputChange}
              className="block w-full border border-green-500 outline-green-700 rounded-md py-1 px-2"
            />
          </div>
        )}

        {currentStep === 4 && (
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="referenceJobTitle" className="block mb-2">
              Reference Job Title:
            </label>
            <input
              type="text"
              id="referenceJobTitle"
              name="referenceJobTitle"
              value={formData.referenceJobTitle}
              onChange={handleInputChange}
              className="block w-full border border-green-500 outline-green-700 rounded-md py-1 px-2"
            />

            <label htmlFor="referencePhoneNumber" className="block mb-2">
              Reference phone Number:
            </label>
            <input
              type="tel"
              id="referencePhoneNumber"
              name="referencePhoneNumber"
              value={formData.referencePhoneNumber}
              onChange={handleInputChange}
              className="block w-full border border-green-500 outline-green-700 rounded-md py-1 px-2"
            />

            <label htmlFor="referenceEmail" className="block mb-2">
              Reference Email:
            </label>
            <input
              type="email"
              id="referenceEmail"
              name="referenceEmail"
              value={formData.referenceEmail}
              onChange={handleInputChange}
              className="block w-full border border-green-500 outline-green-700 rounded-md py-1 px-2"
            />

            <label htmlFor="certificateIncorporation" className="block mb-2">
              Upload your certificate of incorporation:
            </label>
            <input
              type="file"
              id="certificateIncorporation"
              name="certificateIncorporation"
              onChange={handleInputChange}
              className="block w-full border border-green-500 outline-green-700 rounded-md py-1 px-2"
            />

            <label htmlFor="validId" className="block mb-2">
              Upload your Valid ID:
            </label>
            <input
              type="file"
              id="validId"
              name="validId"
              onChange={handleInputChange}
              className="block w-full border border-green-500 outline-green-700 rounded-md py-1 px-2"
            />
          </div>
        )}

        <div className="w-full flex justify-between gap-5 mt-16">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-400 text-white font-bold py-2 px-4 rounded-full"
            >
              Previous
            </button>
          )}

          {currentStep < 4 && (
            <button
              type="button"
              onClick={nextStep}
              className="bg-green-500 text-white font-bold py-2 px-4 rounded-full"
            >
              Next
            </button>
          )}

          {currentStep === 4 && (
            <button
              type="submit"
              className="bg-green-500 text-white font-bold py-2 px-4 rounded-full"
            >
              Submit
            </button>
          )}
        </div>
      </form>

      <Footercomp />
    </div>
  );
};

export default RegistrationPage;
