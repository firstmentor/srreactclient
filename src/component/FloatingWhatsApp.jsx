import React from 'react';

const FloatingWhatsApp = () => {
  const phoneNumber = '918700832603';
  const message = 'Hi! I want to know more about your services.';

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default FloatingWhatsApp;
