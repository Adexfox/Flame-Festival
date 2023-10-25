import React, {  useEffect, useState } from 'react'

type Props = {}

const Popup = (props) => {
  const [email, setEmail] = useState('');
  const [formErrors, setFormErrors] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(email)) // 👈 set  email as value for validate function and set the return the of the funtion as formErrors 
    setIsSubmit(true)
    setEmail('')// 👈 Clear form after submit button
    // console.log(formErrors);
    // console.log(email);
    
    
  }

const validate = (values) => {
  let errors = '';
    const regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!values){
      errors = 'Email is required!'
    }else if(!regex.test(values)){
      errors = 'Please enter a valid email address';
    }
    return errors;
  }

  useEffect(() => {
    const keyDownHandler = (e) => {
      
      if (e.key === 'Enter') {
        // 👇️ call submit function here
        handleSubmit(e);
      }
      console.log('User pressed: ', e.key);
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      
      document.removeEventListener('keydown', keyDownHandler);
      console.log('key removed');
      
    };
  });
    return <>
            {
              (props.trigger) ? (
                
                <div className="popup">
                    <div className="popup-inner">
                      
                        <button className="close-btn" onClick={ () => props.setTrigger(false)}>X</button>
                        <h1>SIGN UP NOW!</h1>
                        <p>For exclusive news, discounts, updates, opportunities and new product announcements - plus a few surprises</p>
                        <div className="newsletter-bg">

                        </div>
                        {/* <img src="/images/Ink_4.png" alt="" /> */}
                        {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='succcess-notification'>
                          <p>Success</p>
                          <button onClick={() => setIsSubmit(false)}>X</button>
                        </div>) : <p className='validation-message'>{formErrors}</p>}
                       
                          <div className="cta">
                            <div className="email-container">
                              <input type="email" 
                                    name='email' 
                                    value = {email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    autoComplete='off'
                                    required
                              />
                              <span>Enter your email...</span>
                            </div>
                            
                            <button className="popup-btn" type='submit' onClick={handleSubmit} >Subscribe</button>
                          </div>
                        
                    </div>
                </div>
          
              ) : ""
            }
        </>
}

export default Popup