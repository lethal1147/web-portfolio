import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import styles from '../../styles/Contact.module.css'


interface form {
    name: string,
    email: string,
    message: string
}

export default function Contact() {
    const formRef = useRef(null);
    const [form, setForm] = useState<form>({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState<boolean>(false)

    const handlerChange = (e: any) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value })
    }

    const handlerSubmit = (e: any) => {
        e.preventDefault()
        setLoading(true)

        emailjs?.send(
            'service_ch22y4c',
            'template_kt18g6j',
            {
                from_name: form.name,
                to_name: 'Joakim Dahlstrom',
                from_email: form.email,
                to_email: 'joakim.n.dahlstrom@gmail.com',
                message: form.message
            },
            'tSAQmILiIp3pa3xHF'
        ).then(() => {
            setLoading(false);
            alert(`Thank you for contact to me! Your email has been received and I appreciate you taking the time to get in touch. I will respond to your message as soon as possible.
            `)

            setForm({
                name: '',
                email: '',
                message: ''
            })
        }, (error) => {
            setLoading(false)

            console.log(error)

            alert('Something went wrong.')
        })
    }

    return (
        <section id="contact" className={styles.contactSection}>
            <div className={styles.sectionHeader}>
                <h2>Contact</h2>
                <p>Let's Connect and Collaborate!</p>
            </div>
            <div className={styles.contactFormContainer}>
                <div className={styles.contactImageContainer}>
                    <img src='/contact-image.png' />
                </div>
                <form
                    ref={formRef}
                    onSubmit={handlerSubmit}
                    className={styles.contactForm}
                >
                    <label>
                        <span>Your Name</span>
                        <input
                            className={styles.contactInput}
                            placeholder="What's your name?"
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handlerChange}
                            required />
                    </label>
                    <label>
                        <span>Your Email</span>
                        <input
                            className={styles.contactInput}
                            placeholder="What's your Email?"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handlerChange}
                            required />
                    </label>
                    <label>
                        <span>Your Message</span>
                        <textarea
                            className={styles.contactTextarea}
                            rows={7}
                            placeholder="What do you want to say?"
                            name="message"
                            value={form.message}
                            onChange={handlerChange}
                            required />
                    </label>

                    <button
                        className={styles.contactBtn}
                        type="submit">
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </div>
        </section>
    )
}