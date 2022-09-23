import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { FaRegEnvelope } from 'react-icons/fa'
import { FiLinkedin } from "react-icons/fi"
import { BsWhatsapp } from 'react-icons/bs'
import './contacts.scss'

// const initialValues = {
//   firstName: '',
//   email: '',
//   message: ''
// };
// const onSubmit = (values) => {
//   // console.log(values);
//   alert(JSON.stringify(values, null, 2));
// };

// const validationSchema = Yup.object({
//   firstName: Yup.string()
//     .min(3, 'First name must be more than 3 characters')
//     .max(15, 'Must be 15 characters or less')
//     .required('First name cannot be blank'),
//   email: Yup.string()
//     .email('Invalid email format')
//     .required('Email cannot be blank')
// })


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

  console.log(formik.touched)
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

        {/* <Formik
          initialValues={{
            firstName: '',
            email: '',
            message: ''
          }}
          onSubmit={(
            values,
            { setSubmitting }
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}> */}
        <div>
          <form className="form" onSubmit={formik.handleSubmit} >

            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              placeholder="John"
              {...formik.getFieldProps('firstName')}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <span className="error">{formik.errors.firstName}</span>
            ) : null}

            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="john@acme.com"
              type="email"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <span className="error">{formik.errors.email}</span>
            ) : null}

            <label htmlFor="lastName">Message</label>
            <textarea placeholder="Message"></textarea>

            <button className='btn btn-primary' type="submit">Submit</button>

          </form>
        </div>
      </div>
    </section>
  )
}

export default Contacts