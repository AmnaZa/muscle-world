import React from 'react';

const randomInformation = [
  "The average person walks about 65,000 miles in their lifetime.",
  "Exercise can help improve mood and reduce symptoms of anxiety and depression.",
  "Yoga can help improve flexibility and reduce stress.",
  "Swimming is a great low-impact exercise for all ages.",
  "Weightlifting can help increase muscle mass and improve metabolism.",
];

function Contact() {
  const address = '123 Main Street, City, Country';
  const phoneNumber = '+1 (555) 123-4567';

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="container">
        <h3>Address</h3>
        <p>{address}</p>
      </div>
      <div className="container">
        <h3>Phone Number</h3>
        <p>{phoneNumber}</p>
      </div>
      <div className="container">
        <h3>Contact Form</h3>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="container">
        <h3>Random Information</h3>
        <ul>
          {randomInformation.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Contact;