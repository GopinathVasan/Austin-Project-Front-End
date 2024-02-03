import React, { useRef }  from 'react'
import '../Components/ContactForm.css';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "replace with service id",
        "replace with template id",
        form.current,
        "replace with user id"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section>
    <div className="container">
  <form className="form-box" ref={form} onSubmit={sendEmail}>
    <h2>Send a message to us</h2>
    <div className="input-box">
    <i class="fa-solid fa-file-signature"></i>
      <input className='contact-input' type="text" placeholder='Name' required name="user_name" />
    </div>
    <div className="input-box">
    <i class="fa-regular fa-envelope"></i>
        <input className='contact-input' type="email" id="inputEmail3" placeholder='Email' name="user_email" />
    </div>
    <textarea className="message-box" rows="4" placeholder='Message'></textarea>
    <button className='contact-btn' type="submit" >submit</button>
  </form>
</div>
</section>
  );
};
export default ContactForm;