import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Formik, Form, useFormik } from 'formik'
import * as Yup from 'yup'

import { FaRegEnvelope } from 'react-icons/fa'
import { FiLinkedin } from "react-icons/fi"
import { BsWhatsapp } from 'react-icons/bs'
import './contacts.scss'

const Contacts = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      message: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, 'First name must be more than 3 characters')
        .max(15, 'Must be 15 characters or less')
        .required('First name cannot be blank'),
      email: Yup.string()
        .email('Invalid email format')
        .required('Email cannot be blank')
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cr74ap6', 'template_6b8h9oo', form.current, 'FfEodpY5ZlYhPCymV');
  };



  return (
    <section id='contacts'>
      <h5>Let's start chat</h5>
      <h2>My Contacts</h2>
      <div className="container contacts">
        <div className="contact__options">
          <article className="contact options-item">
            <FaRegEnvelope />
            <p className='text-light'>Email</p>
            <a href="mailto:tetianaloskutova@gmail.com">Send a Message</a>
          </article>
          <article className="contact options-item">
            <FiLinkedin />
            <p className='text-light'>LinkedIn</p>
            <a href="https://www.linkedin.com/in/tatiana-loskutova/" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
          <article className="contact options-item">
            <BsWhatsapp />
            <p className='text-light'>WhatsApp</p>
            <a href="https://wa.me/+16478943402" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
        </div>

        <Formik>
          <Form className="contact-form" onSubmit={sendEmail} ref={form} >
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name='firstname'
              {...formik.getFieldProps('firstName')}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <span className="error">{formik.errors.firstName}</span>
            ) : null}
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="john@acme.com" name='email'
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <span className="error">{formik.errors.email}</span>
            ) : null}
            <label>Message</label>
            <textarea id="message"  {...formik.getFieldProps('message')}></textarea>
            <button className='btn btn-primary' type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </section>
  )
}

export default Contacts