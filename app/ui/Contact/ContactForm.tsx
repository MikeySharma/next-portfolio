'use client';
import { sendMail } from "@/app/lib/mail";
import { useState } from "react"

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [desc, setDesc] = useState('');

    const handleSubmit = () => {
        sendMail(email, name,  desc, subject);
    }
    return (
        <form action="" className="st-contact-form" id="contact-form">
            <div className="st-form-field">
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" id="name" required />
            </div>
            <div className="st-form-field">
                <input type="text" name="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" required />
            </div>
            <div className="st-form-field">
                <input type="text" name="subject" placeholder="Your Subject" value={subject} onChange={(e) => setSubject(e.target.value)} id="subject" required />
            </div>
            <div className="st-form-field">
                <textarea name="msg" id="msg" rows={10} cols={30} value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" onClick={(event) => {
                event?.preventDefault();
                handleSubmit();
            }} className="st-btn st-style1 st-color1" id="submit" name="submit">Send Message</button>
        </form>
    )
}

export default ContactForm