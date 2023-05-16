import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../../styles/Skill.module.css'

import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/effect-cards'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper';

import { EffectCards } from "swiper"

interface skill {
  id: number,
  name: string,
  level: string,
  logo: string,
}

const skills: skill[] = [
  { id: 9, name: 'Express', level: 'Basic', logo: '/expressjs-logo.png' },
  { id: 10, name: 'MongoDB', level: 'Basic', logo: '/mongodb-logo.png' },
  { id: 1, name: 'HTML', level: 'Expert', logo: '/html-logo.png' },
  { id: 2, name: 'CSS', level: 'Upper-Intermediate', logo: '/css-logo.png' },
  { id: 3, name: 'JavaScript', level: 'Upper-Intermediate', logo: '/JavaScript-logo.png' },
  { id: 4, name: 'React', level: 'Intermediate', logo: '/react-logo.png' },
  { id: 5, name: 'Git', level: 'Intermediate', logo: '/git-logo.png' },
  { id: 6, name: 'NodeJS', level: 'Intermediate', logo: '/nodejs-logo.png' },
  { id: 7, name: 'NextJS', level: 'Basic', logo: '/nextjs-logo.png' },
  { id: 8, name: 'TypeScript', level: 'Basic', logo: '/Typescript_logo.png' },
];

export default function SkillsSection() {
  return (
    <section id="skill" className={styles.skillSection}>
      <div className={styles.sectionHeader}>
        <h2>My Skills</h2>
        <p>Here are my coding skills I have learned.</p>
      </div>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          spaceBetween={10}
          slidesPerView={5}
          autoplay={{ delay: 3000 }}
          navigation
          // pagination={{ clickable: true }}
          grabCursor={true}
          effect={'coverflow'}
          // effect={"cards"}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 10,
            slideShadows: false,
            depth: 100,
            modifier: 1,
          }}

          className='swiper_container'
        >
          {skills?.map((skill: skill, index: number): any => {
            return (
              <SwiperSlide className={styles.skillsContainer}>
                <SkillCard skill={skill} index={index} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section >
  )
}


export function SkillCard({ skill }: any) {
  return (
    <div className={styles.skillCard} key={`${skill.id}${skill.name}`}>
      <div className={styles.skillLogoContainer}>
        <img className={styles.skillLogo} src={skill.logo} alt={skill.name} />
      </div>
      <h3 className={styles.skillName}>{skill.name}</h3>
      {/* <p className={styles.skillLevel}>{skill.level}</p> */}
    </div>
  )
}
