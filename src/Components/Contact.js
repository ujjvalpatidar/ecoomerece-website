import React from 'react'

const Contact = () => {


  return (
<>
<h3 className='contact-heading'>Contact Us</h3>
<div className='map'>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7361.45427172009!2d75.87221859650512!3d22.701199499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdb6db5dfdf3%3A0xf2623bb9aa2020fe!2sShyama%20Charan%20Shukla%20nagar%20navlakha%20bus%20stend!5e0!3m2!1sen!2sin!4v1689847085104!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>
<div className='mailDiv'>
  <form className="form1" action='https://formspree.io/f/mqkvabqd' method='POST' >
    <input type='text' placeholder='Username' name='Username' style={{paddingLeft:"5px",border:"1px solid #5B9A8B "}} />
    <input type='E-mail' placeholder='E-mail' name='E-mail'style={{paddingLeft:"5px",border:"1px solid #5B9A8B "}} />
    <textarea placeholder="Type Your Message" name='Message' rows="4" cols="50" style={{paddingLeft:"5px",border:"1px solid #5B9A8B "}}  className='textarea'/>
    <button style={{width:"100px"}} className='login-btn'>SUBMIT</button>
  </form>
</div>

</> 
)
}

export default Contact;