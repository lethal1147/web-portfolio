import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook,faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope  } from "@fortawesome/free-solid-svg-icons"
import styles from '../../styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.contacts}>
                <h4>Contacts</h4>
                <a href="mailto:joakim.n.dahlstrom@gmail.com">Email: joakim.n.dahlstrom@gmail.com &nbsp;<FontAwesomeIcon icon={faEnvelope} /></a>
                <a href="tel:088-288-2572">Tel: 0882882572 &nbsp;<FontAwesomeIcon icon={faPhone} /></a>
            </div>
            <div className={styles.social}>
                <h4>Social Media</h4>
                <div className={styles.socialContainer}>
                    <a target="_blank" href='https://www.facebook.com/uykim.kim/'><FontAwesomeIcon icon={faFacebook} size="2xl" /></a>
                    <a target="_blank" href='https://www.instagram.com/kim.dahlst/'><FontAwesomeIcon icon={faInstagram} size="2xl" /></a>
                    <a target="_blank" href='https://www.linkedin.com/in/joakim-dahlstrom-250303264/'><FontAwesomeIcon icon={faLinkedin} size="2xl" /></a>
                </div>
            </div>
        </footer>
    )
}