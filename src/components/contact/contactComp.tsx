import React, {  useEffect, useState }  from 'react'
import Hamburger from '../menu/Hamburger'
import { Link } from 'react-router-dom'

type Props = {}

const ContactPage = (props: Props) => {
  const initialValues = { firstName: '', lastName: '', email: '', subject: '', message: ''}
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({firstName: '', lastName: '', email: '', subject: '', message: ''})
  const [ isSubmit, setIsSubmit] = useState(false)
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormValues({ ...formValues, [name]: value })
    // console.log(formValues);
        
  }
  const handleSubmit = (e) =>{
    // console.log(formValues);
    e.preventDefault();
    setFormErrors(validation(formValues));
    setIsSubmit(true)
    setFormValues(initialValues)

  }
  const validation = (value) => {
    let error = {firstName: '', lastName: '', message: '', email: '', subject: '' };
    const regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!value.firstName){
      error.firstName = 'Please enter your first name'
    }
    if (!value.lastName){
      error.lastName = 'Please enter your last name'
    }
    if(!value.subject){
      error.subject = 'Please attribute a subject to your issue'
    }
    if(!value.message){
      error.message  = 'Please enter your message'
      
    }
    if(!value.email){
      error.email = 'Please enter your email address'
    }
    else if(!regex.test(value.email)){
      error.email = 'Please enter a valid email address'
    }
    
    return error;
  }
  return (
    <>
        <Hamburger />
      <main className='contact-page'>
        <div className="header">
          <h2>Get in touch</h2>
          <p>We'll create a high linkable content and build at least 40 high quality links for each assets paving the way for you to grow rankings, improve your brand</p>
        </div>
        <div className="form-container">
          <div className="design">
            <div className="contact-bg">
              
            </div>
          </div>
          
          <form className='form' onSubmit={handleSubmit}>
            {
              Object.keys(formErrors.firstName).length === 0 && Object.keys(formErrors.lastName).length ===
               0 && Object.keys(formErrors.message).length === 0 && Object.keys(formErrors.subject).length === 0 && Object.keys(formErrors.email).length === 0 && isSubmit ? 
                (
                  <div className='form-notification'>
                    <p>Form submitted successfully</p>
                    <button onClick={() => {setIsSubmit(false)}}>x</button>
                  </div>
                )
              :
                ''
          }
            <div className="mini">
              <div className="inputBox one">
                  <input 
                  type="text" 
                  id="firstName"
                  name= 'firstName'
                  value={formValues.firstName}
                  onChange={handleChange}
                  autoFocus
                  autoComplete='off'
                  required
                  />
                  <label htmlFor="firstName">First Name</label>
                  <p>{formErrors.firstName}</p>
              </div>
              <div className="inputBox two">
                <input 
                type="text" 
                id="lastName"
                name= 'lastName'
                value={formValues.lastName}
                onChange={handleChange}
                autoComplete='off'
                required
                />
                <label htmlFor="lastName">Last Name</label>
                <p>{formErrors.lastName}</p>
              </div>
            </div>
            <div className="inputBox">

              <input 
              type="email" 
              id="email"
              name= 'email'
              value={formValues.email}
              onChange={handleChange}
              autoComplete='off'
              required
              />
              <label htmlFor="email">Email</label>
              <p>{formErrors.email}</p>
            </div>
            <div className="inputBox">
              
              <input 
              type="text" 
              id="subject"
              name= 'subject'
              value={formValues.subject}
              onChange={handleChange}
              autoComplete='off'
              required
              />
              <label htmlFor="message">Subject</label>
              <p>{formErrors.subject}</p>
            </div>
            <div className="inputBox">
              <textarea 
              // type="text" 
              id="message"
              name= 'message'
              value={formValues.message}
              onChange={handleChange}
              autoComplete='off'

              required
              />
              <label htmlFor="message">Message</label>
              <p>{formErrors.message}</p>
            </div>
            <button className='contact-cta' type= 'submit'onClick={handleSubmit}>Submit</button>
          </form>
        </div>
        
        <div className='footer'>
          <Link to="/">Home</Link>
          <Link to="/island">Island</Link>
          <Link to="/faq">Faq</Link>

        </div>
      </main>
    </>
  )
}

export default ContactPage