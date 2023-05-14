import { useState } from 'react'
import styles from '../../styles/Skill.module.css'

const skills = [
  { id: 1, name: 'React', level: 'Intermediate', logo: '/react-logo.png' },
  { id: 2, name: 'JavaScript', level: 'Advanced', logo: '/JavaScript-logo.png' },
  { id: 3, name: 'HTML', level: 'Expert', logo: '/html-logo.png' },
  { id: 4, name: 'CSS', level: 'Intermediate', logo: '/css-logo.png' },
  { id: 5, name: 'NodeJS', level: 'Intermediate', logo: '/nodejs-logo.png' },
  { id: 6, name: 'NextJS', level: 'Intermediate', logo: '/nextjs-logo.png' },
  { id: 7, name: 'TypeScript', level: 'Intermediate', logo: '/Typescript_logo.png' },
];

export default function SkillsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? skills.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === skills.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className={styles.skillSection}>
      <div className={styles.sectionHeader}>
        <h2>My Skills</h2>
        <p>Here my skills i have learned learned.</p>
      </div>
      <div className={styles.carousel}>
        {skills.map((skill, index) => (
          <div
            key={skill.id}
            className={`${styles.card} ${index === activeIndex ? styles.active : index < activeIndex ? styles.left : styles.right}`}
            onClick={() => setActiveIndex(index)}
          >
            {index !== activeIndex ? (
              <img src={skill.logo} alt={skill.name} />
            ) : (
              <>
                <img src={skill.logo} alt={skill.name} />
                <h3>{skill.name}</h3>
                <p>{skill.level}</p>
              </>
            )}
          </div>
        ))}
      </div>
      <div className={styles.skillBtnContainer}>
          <button className={styles.skillBtn} onClick={handlePrevClick}>
            &lt;
          </button>
          <button className={styles.skillBtn} onClick={handleNextClick}>
            &gt;
          </button>
        </div>
    </section>
  );
}
