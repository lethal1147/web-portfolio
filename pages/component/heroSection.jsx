import styles from '@/styles/Hero.module.css'
import profile from '/public/profile-image.jpg'

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
                <div className={styles.heroBtnContainer}>
                    <a href="https://www.linkedin.com/in/joakim-dahlstrom-250303264/" target="_blank" className={styles.heroLink}>LinkedIn</a>
                    <a href="https://github.com/lethal1147" target="_blank" className={styles.heroLink}>Github</a>
                </div>
            </div>
            <div className={styles.heroImageContainer}>
                <img alt="Joakim Dahlstrom" src={profile.src} />
            </div>
        </section>
    )
}