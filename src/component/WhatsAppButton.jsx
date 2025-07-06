import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '917000846823'; // 🔁 Replace with your number
  const message = 'Hello, I am interested in your services!';

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      className="btn btn-success"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-whatsapp me-2"></i> Chat on WhatsApp
    </a>
  );
};

export default WhatsAppButton;
