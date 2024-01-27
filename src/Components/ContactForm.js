import '../Components/ContactForm.css';

function ContactForm() {
    return(
        <section>
        <div className="container">
      <form action="">
        <h2>Send a message to us</h2>
        <div className="input-box">
        <i class="fa-solid fa-file-signature"></i>
          <input type="text" placeholder='Name' required />
        </div>
        <div className="input-box">
        <i class="fa-regular fa-envelope"></i>
            <input type="email" className="form-control" id="inputEmail3" placeholder='Email' />
        </div>
        <textarea className="input-box" rows="4" placeholder='Message'></textarea>
        <button type="submit" className="btn">submit</button>
      </form>
    </div>
</section>
    )
}
export default ContactForm;