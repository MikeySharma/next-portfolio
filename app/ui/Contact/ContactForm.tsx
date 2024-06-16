
const ContactForm = () => {
    return (
        <form action="#" method="POST" className="st-contact-form" id="contact-form">
            <div className="st-form-field">
                <input type="text" name="name" placeholder="Your Name" id="name" required />
            </div>
            <div className="st-form-field">
                <input type="text" name="email" placeholder="Your Email" id="email" required />
            </div>
            <div className="st-form-field">
                <input type="text" name="subject" placeholder="Your Subject" id="subject" required />
            </div>
            <div className="st-form-field">
                <textarea name="msg" id="msg" rows={10} cols={30} placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="st-btn st-style1 st-color1" id="submit" name="submit">Send Message</button>
        </form>
    )
}

export default ContactForm