import React from 'react';
import { withFormik } from 'formik';
import * as yup from 'yup';

const ContactUsForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  return (
    <div id="contact" className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <input
                  id="name"
                  name="name"
                  className="input form-control"
                  type="text"
                  placeholder="Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name && <div>{errors.name}</div>}
                <input
                  id="email"
                  name="email"
                  className="input form-control"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && <div>{errors.email}</div>}
                <textarea
                  id="message"
                  name="message"
                  className="input form-control"
                  placeholder="Enter your Message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                />
                <div className="button">
                  <button
                    type="submit"
                    className="main-button icon-button pull-right">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="column">
            <h4>Contact Information</h4>
            <ul className="contact-details">
              <li>
                <i className="fa fa-envelope" />
                hi@zeiq.co
              </li>
              <li>
                <i className="fa fa-phone" />
                0181-519-5423
              </li>
              <li>
                <i className="fa fa-map-marker" />
                Guru Amadas Nagar, Salempur Road, Jalandhar
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: () => ({ name: '', email: '', message: '' }),
  // Custom sync validation
  validationSchema: yup.object().shape({
    name: yup.string().required('First Name is required'),
    email: yup
      .string()
      .email('Invalid email')
      .required('Email Required'),
    message: yup.string().required('Message field is required'),
  }),

  handleSubmit: (values, { setSubmitting, props }) => {
    setSubmitting(false);
    props.onSubmit(values);
  },
  displayName: 'ContactUsForm',
})(ContactUsForm);
