import styles from '@/styles/Nav.module.css'
import codeIcon from '/public/code-icon-light.png'
import linkedinIcon from '/public/linkedin-icon-light.png'
import githubIcon from '/public/github-icon-light.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPiedPiperPp } from '@fortawesome/free-brands-svg-icons'
import { faExclamation, faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className={`${styles.navbar} ${styles.sticky}`}>
            <div className={styles.logoContainer} >
                <img alt="Coding Icon" className={styles.navbarIcon} src={codeIcon.src} />
                <h3><a href="#">Joakim Dahlstrom</a></h3>
                <span className={styles.blinker}></span>
            </div>
            <ul className={styles.navigator}>

                <li key="navSkill"><a href="#skill" className={styles.link}>Skills</a></li>
                <FontAwesomeIcon icon={faExclamation} size='xl' style={{ color: "#f1f6f9", }} />
                <li key="navProject"><a href="#project" className={styles.link}>Projects</a></li>
                <FontAwesomeIcon icon={faExclamation} size='xl' style={{ color: "#f1f6f9", }} />
                <li key="navAbout"><a href="#contact" className={styles.link}>Contact</a></li>
                <FontAwesomeIcon icon={faExclamation} size='xl' style={{ color: "#f1f6f9", }} />
                <li key="navResume"><a href="https://drive.google.com/file/d/1Ach3Jfa0pN3siJ3pD_k34pz9RkwwOtxM/view?usp=sharing" target="_blank" className={styles.link}>Resume</a></li>
                <FontAwesomeIcon icon={faExclamation} size='xl' style={{ color: "#f1f6f9", }} />
                <li key="navLinkedIn"><a href="https://www.linkedin.com/in/joakim-dahlstrom-250303264/" target="_blank" className={styles.link}><img alt="LinkedIn Icon" className={styles.navbarIcon} src={linkedinIcon.src} /></a></li>
                <li key="navGithub"><a href="https://github.com/lethal1147" target="_blank" className={styles.link}><img alt="Github Icon" className={styles.navbarIcon} src={githubIcon.src} /></a></li>
            </ul>
            <span className={styles.dropdownBtn}>
                <FontAwesomeIcon onClick={toggleMenu} icon={faBars} size='2xl' style={{ color: "#f1f6f9", }} />
            </span>
            {isMenuOpen && (
                <div onClick={toggleMenu} className={styles.dropdownContainer}>
                    <ul className={styles.dropdownMenu}>
                        <li key="dropdownAbout"><a href="#" className={styles.dropdownItem} >AboutMe</a></li>
                        <li key="dropdownSkill"><a href="#skill" className={styles.dropdownItem} >Skills</a></li>
                        <li key="dropdownProject"><a href="#project" className={styles.dropdownItem} >Projects</a></li>
                        <li key="dropdownResume"><a target='_blank' href="https://drive.google.com/file/d/1Ach3Jfa0pN3siJ3pD_k34pz9RkwwOtxM/view?usp=sharing" className={styles.dropdownItem} >Resume</a></li>
                        <li key="dropdownLinkedIn"><a target='_blank' href="https://www.linkedin.com/in/joakim-dahlstrom-250303264/" className={styles.dropdownItem} >LinkedIn</a></li>
                        <li key="dropdownGithub"><a target='_blank' href="https://github.com/lethal1147" className={styles.dropdownItem} >Github</a></li>
                    </ul>
                </div>
            )}
        </nav>
    )
}