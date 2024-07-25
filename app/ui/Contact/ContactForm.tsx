'use client';
import { sendMail } from "@/app/lib/mail";
import * as yup from 'yup';
import { useFormik } from "formik";
import { useState } from "react";

const schema = yup.object({
    name: yup.string().required('Name Required'),
    email: yup.string().required('Email Required'),
    desc : yup.string().required('Description Required'),
    subject: yup.string().required('Subject Required')
})

const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const formik = useFormik({
        initialValues : {
            name: '',
            email: '',
            desc: '',
            subject : ''
        },
        validationSchema : schema,
        onSubmit : async ({name, email, desc, subject}) =>{
            setIsLoading(true);
            await sendMail(name, email, desc, subject);
            formik.resetForm();
            setIsLoading(false);
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className="st-contact-form" id="contact-form">
            <div className="st-form-field">
                <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Your Name" id="name"  />
                {
                    (formik.errors.name && formik.touched.name) && <div className="text-red-500 font-normal text-nowrap text-md px-4">
                    {formik.errors.name}
                </div>
                }
            </div>
            <div className="st-form-field">
                <input type="text" name="email" placeholder="Your Email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} id="email"  />
                {
                    (formik.errors.email && formik.touched.email) && <div className="text-red-500 font-normal text-nowrap text-md px-4">
                    {formik.errors.email}
                </div>
                }
            </div>
            <div className="st-form-field">
                <input type="text" name="subject" placeholder="Your Subject" value={formik.values.subject} onChange={formik.handleChange} onBlur={formik.handleBlur} id="subject"  />
                {
                    (formik.errors.subject && formik.touched.subject) && <div className="text-red-500 font-normal text-nowrap text-md px-4">
                    {formik.errors.subject}
                </div>
                }
            </div>
            <div className="st-form-field">
                <textarea name="desc" id="desc" rows={10} cols={30} value={formik.values.desc} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Your Message" ></textarea>
                {
                    (formik.errors.desc && formik.touched.desc) && <div className="text-red-500 font-normal text-nowrap text-md px-4">
                    {formik.errors.desc}
                </div>
                }
            </div>
            <button type="submit" disabled={isLoading} className="st-btn st-style1 st-color1" id="submit" name="submit">{isLoading ? 'Loading...' : 'Send Message'}</button>
        </form>
    )
}

export default ContactForm