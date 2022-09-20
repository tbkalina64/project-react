import React, { useState } from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'; import * as Yup from 'yup';

import { FaRegEnvelope } from 'react-icons/fa'
import { FiLinkedin } from "react-icons/fi"
import { BsWhatsapp } from 'react-icons/bs'
import './contacts.scss'

interface Values {
  firstName: string;
  message: string;
  email: string;
}

const Contacts = () => {

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
            <a href="https://www.linkedin.com/in/tatiana-loskutova/" target="_blank">Send a Message</a>
          </article>
          <article className="contact options-item">
            <BsWhatsapp />
            <p className='text-light'>WhatsApp</p>
            <a href="https://wa.me/+16478943402" target="_blank">Send a Message</a>
          </article>
        </div>
        {/* <form action="">
          <input type="text" name="name" placeholder='Enter your Name' id="name" required />
          <input type="email" name="email" placeholder='Enter your Email' id="email" required />
          <textarea name="message" id="message" placeholder='Enter you Message' cols="30" rows="7"></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form> */}
        <Formik
          initialValues={{
            firstName: '',
            email: '',
            message: '',
          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >
          <Form className="form">
            <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" placeholder="John" />

            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="john@acme.com"
              type="email"
            />

            <label htmlFor="lastName">Message</label>
            <Field component="textarea" value="" rows="4" placeholder="Message" />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </section>
  )
}

export default Contacts