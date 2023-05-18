import styles from '@/styles/Hero.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'


export default function HeroSection() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroTextContainer}>
                <h2>Hello, I am <i>Joakim Dahlstrom</i></h2>
                <p>
                    I'm a <b>Full Stack Developer</b> skilled in <b>React,</b>
                    <b>NextJS, JavaScript</b> and <b>TypeScript.</b>
                    I work with agile methodology.
                </p>
                <p>Let's create something great together!</p>
                <ul className={styles.heroSocialContainer}>
                    <li className={styles.heroSocial} ><a href="https://www.linkedin.com/in/joakim-dahlstrom-250303264/" target="_blank" ><FontAwesomeIcon icon={faLinkedin} size='xl' /></a></li>
                    <li className={styles.heroSocial} ><a href="https://github.com/lethal1147" target="_blank" ><FontAwesomeIcon icon={faGithub} size='xl' /></a></li>
                    <li className={styles.heroSocial} ><a href='https://www.facebook.com/uykim.kim/' target="_blank" ><FontAwesomeIcon icon={faFacebook} size='xl' /></a></li>
                    <li className={styles.heroSocial} ><a href='https://www.instagram.com/kim.dahlst/' target="_blank" ><FontAwesomeIcon icon={faInstagram} size='xl' /></a></li>
                </ul>
                <a href="https://drive.google.com/file/d/1Ach3Jfa0pN3siJ3pD_k34pz9RkwwOtxM/view?usp=sharing" target="_blank" className={styles.heroLink} >My resume!</a>
            </div>
            <div className={styles.heroImageContainer}>
                <img alt="Joakim Dahlstrom" src='profile-image.jpg' />
            </div>
        </section >
    )
}