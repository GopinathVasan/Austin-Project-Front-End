import '../Components/ContactForm.css';

function ContactForm() {
    return(
        <section>
        <div className="container">
      <form className="form-box" action="">
        <h2>Send a message to us</h2>
        <div className="input-box">
        <i class="fa-solid fa-file-signature"></i>
          <input className='contact-input' type="text" placeholder='Name' required />
        </div>
        <div className="input-box">
        <i class="fa-regular fa-envelope"></i>
            <input className='contact-input' type="email" id="inputEmail3" placeholder='Email' />
        </div>
        <textarea className="message-box" rows="4" placeholder='Message'></textarea>
        <button className='contact-btn' type="submit" >submit</button>
      </form>
    </div>
</section>
    )
}
export default ContactForm;