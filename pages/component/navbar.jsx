import styles from '@/styles/Nav.module.css'
import codeIcon from '/public/code-icon-light.png'
import linkedinIcon from '/public/linkedin-icon-light.png'
import githubIcon from '/public/github-icon-light.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPiedPiperPp } from '@fortawesome/free-brands-svg-icons'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <nav className={`${styles.navbar} ${styles.sticky}`}>
            <div className={styles.logoContainer}>
                <img alt="Coding Icon" className={styles.navbarIcon} src={codeIcon.src} />
                <h3>Joakim Dahlstrom</h3>
                <span className={styles.blinker}></span>
            </div>
            <ul className={styles.navigator}>
                <li><a href="#" className={styles.link}>AboutMe</a></li>
                <FontAwesomeIcon icon={faExclamation} size='xl' style={{ color: "#f1f6f9", }} />
                <li><a href="#skill" className={styles.link}>Skills</a></li>
                <FontAwesomeIcon icon={faExclamation} size='xl' style={{ color: "#f1f6f9", }} />
                <li><a href="#project" className={styles.link}>Projects</a></li>
                <FontAwesomeIcon icon={faExclamation} size='xl' style={{ color: "#f1f6f9", }} />
                <li><a href="https://drive.google.com/file/d/1Ach3Jfa0pN3siJ3pD_k34pz9RkwwOtxM/view?usp=sharing" target="_blank" className={styles.link}>Resume</a></li>
                <FontAwesomeIcon icon={faExclamation} size='xl' style={{ color: "#f1f6f9", }} />
                <li><a href="https://www.linkedin.com/in/joakim-dahlstrom-250303264/" target="_blank" className={styles.link}><img alt="LinkedIn Icon" className={styles.navbarIcon} src={linkedinIcon.src} /></a></li>
                <li><a href="https://github.com/lethal1147" target="_blank" className={styles.link}><img alt="Github Icon" className={styles.navbarIcon} src={githubIcon.src} /></a></li>
            </ul>
        </nav>
    )
}