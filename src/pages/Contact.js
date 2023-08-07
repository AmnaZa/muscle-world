// Import necessary dependencies
import React from 'react';
import styled from 'styled-components'; // Import the styled-components library

// Create a styled component 'ContactContainer' for the contact section
const ContactContainer = styled.div`
  /* Add your custom styles for the contact container */
  margin: 2rem auto;
  max-width: 800px;
  padding: 1rem 2rem;
`;

// Create a styled component 'ContactTitle' for the heading of the contact section
const ContactTitle = styled.h1`
  /* Add your custom styles for the contact title */
  color: #7c52a0;
`;

// Create a styled component 'ContactInfo' for displaying address and phone number
const ContactInfo = styled.div`
  /* Add your custom styles for the contact info */
  margin-bottom: 1rem;
`;

// Create a styled component 'Address' for displaying the address
const Address = styled.p`
  /* Add your custom styles for the address */
  margin: 0;
`;

// Create a styled component 'PhoneNumber' for displaying the phone number
const PhoneNumber = styled.p`
  /* Add your custom styles for the phone number */
  margin: 0;
`;

// Create a styled component 'ContactForm' for the contact form
const ContactForm = styled.form`
  /* Add your custom styles for the contact form */
  display: flex;
  flex-direction: column;
`;

// Create a styled component 'FormGroup' for grouping form elements
const FormGroup = styled.div`
  /* Add your custom styles for the form group */
  margin-bottom: 1rem;
`;

// Create a styled component 'Label' for form labels
const Label = styled.label`
  /* Add your custom styles for the label */
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

// Create a styled component 'Input' for input fields
const Input = styled.input`
  /* Add your custom styles for the input */
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

// Create a styled component 'Textarea' for text areas
const Textarea = styled.textarea`
  /* Add your custom styles for the textarea */
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

// Create a styled component 'Button' for form submission
const Button = styled.button`
  /* Add your custom styles for the button */
  background-color: #7c52a0;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #9d6bc6;
  }
`;

// Create the functional component 'Contact'
function Contact() {
  // Random address and phone number
  const address = '123 Main St, City, Country';
  const phoneNumber = '+1 555-123-4567';

  // Render the 'Contact' component
  return (
    <ContactContainer>
      {/* Display the title for the contact section */}
      <ContactTitle>Contact Us</ContactTitle>

      {/* Display the address and phone number */}
      <ContactInfo>
        <Address>Address: {address}</Address>
        <PhoneNumber>Phone: {phoneNumber}</PhoneNumber>
      </ContactInfo>

      {/* Display the contact form */}
      <ContactForm>
        <FormGroup>
          <Label>Name</Label>
          <Input type="text" />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" />
        </FormGroup>
        <FormGroup>
          <Label>Message</Label>
          <Textarea rows="5" />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </ContactForm>
    </ContactContainer>
  );
}

// Export the 'Contact' component as the default export
export default Contact;
