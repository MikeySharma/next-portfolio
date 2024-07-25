// // import nodemailer from "nodemailer";
'use server';
import axios from "axios";


export async function sendMail(email: string, name: string, desc: string, subject: string) {
    try {
        const response = await axios.post('https://emithila-backend.onrender.com/api/mail/send', {
            to: "omrajs12345@gmail.com",
            subject,
            html: `<p>
        <h2>Mail From "${email}" | "${name}"</h2>
        <br/>
        <p>${desc}</p>
        </p>`,
            text: 'mail sent from portfolio'
        })
        if(response.data){
            return response.data
        }
    } catch (error) {
        return {
            message: 'Something went wrong'
        }
    }
}