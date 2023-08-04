import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  /* Add your custom styles for the contact container */
  margin: 2rem auto;
  max-width: 800px;
  padding: 1rem 2rem;
`;

const ContactTitle = styled.h1`
  /* Add your custom styles for the contact title */
  color: #7c52a0;
`;

const ContactInfo = styled.div`
  /* Add your custom styles for the contact info */
  margin-bottom: 1rem;
`;

const Address = styled.p`
  /* Add your custom styles for the address */
  margin: 0;
`;

const PhoneNumber = styled.p`
  /* Add your custom styles for the phone number */
  margin: 0;
`;

const ContactForm = styled.form`
  /* Add your custom styles for the contact form */
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  /* Add your custom styles for the form group */
  margin-bottom: 1rem;
`;

const Label = styled.label`
  /* Add your custom styles for the label */
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  /* Add your custom styles for the input */
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  /* Add your custom styles for the textarea */
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

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

function Contact() {
  // Random address and phone number
  const address = '123 Main St, City, Country';
  const phoneNumber = '+1 555-123-4567';

  return (
    <ContactContainer>
      <ContactTitle>Contact Us</ContactTitle>
      <ContactInfo>
        <Address>Address: {address}</Address>
        <PhoneNumber>Phone: {phoneNumber}</PhoneNumber>
      </ContactInfo>
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

export default Contact;
