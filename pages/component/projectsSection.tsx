import styles from '../../styles/Project.module.css'

interface project {
    id: number,
    img: string,
    name: string,
    description: string,
    repo: string,
    demo: string,
}

const projects: project[] = [
    { id: 1, img: '/project-orangecat.png', name: "Orange Cat", description: "My final project at Generation bootcamp was an exercise tracking web-application", repo: 'https://github.com/JSD4-Orangecat/Activity_Tracking', demo: 'https://github.com/JSD4-Orangecat/Activity_Tracking' },
    { id: 2, img: '/project-findmyhat.png', name: "Find my hat", description: "I built a fun console game to find a hidden hat as part of my JavaScript assessment at Generation bootcamp", repo: 'https://replit.com/@yukimever/JSD4-FindMyHat-Assessment', demo: 'https://replit.com/@yukimever/JSD4-FindMyHat-Assessment' },
    { id: 3, img: '/project-omnifood.png', name: "Omnifood", description: "I designed a sleek landing-page for a mobile app in my HTML&CSS course on Udemy", repo: 'https://github.com/lethal1147/omnifood-HTMLandCSS', demo: 'https://omnifood-html-and-css.vercel.app/' },
    { id: 4, img: '/project-forkify.png', name: "Forkify", description: "My JavaScript course project on Udemy was a web-app that uses the Fetch API to find food recipes", repo: 'https://github.com/lethal1147/fokify-course', demo: 'https://fokify-course.vercel.app/' },
]

export default function ProjectsSection() {
    return (
        <section id="project" className={styles.projectsSection}>
            <div className={styles.sectionHeader}>
                <h2>My Projects</h2>
                <p>Here are some of the projects I have worked on during my coding journey.</p>
            </div>
            <div className={styles.projectsContainer}>
                {projects.map((project: project): any => {
                    return (
                        <div key={`${project.id}${project.name}`} className={styles.projectCard}>
                            <img className={styles.projectImage} src={project.img} />
                            <div className={styles.projectText}>
                                <h2>{project.name}</h2>
                                <p>{project.description}</p>
                                <div className={styles.projectBtn}>
                                    <a className={styles.btnPrimary} target='_blank' href={project.demo}>Demo</a>
                                    <a className={styles.btnSecondary} target='_blank' href={project.repo}>Github</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}