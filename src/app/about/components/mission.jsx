import React, { useRef, useState, useEffect } from 'react';

const Mission = () => {
    const missionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      });
  
      observer.observe(missionRef.current);
  
      return () => {
        observer.unobserve(missionRef.current);
      };
    }, []);

  return (
    <div
      
      className={`bg-green-100 p-8 w-full rounded shadow mb-6 fadeIn `}
    >
      <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
      <div className="flex items-center flex-col sm:flex-row justify-center gap-4">
        <img
          src="/images/mission.jpg"
          alt="Mission"
          className="w-32 h-32 object-cover rounded-full"
        />
        <p ref={missionRef} className={`text-lg fadeIn ${isVisible ? 'fadeIn' : '' }`}>
          To create a platform for encouraging the learning and practice of cryptography in Nigeria and collaboration among relevant stakeholders.
        </p>
      </div>
    </div>
  );
};

export default Mission;
