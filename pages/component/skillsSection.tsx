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
    <section className={styles.skillSection}>
      <div className={styles.sectionHeader}>
        <h2>My Skills</h2>
        <p>Here my skills i have learned learned.</p>
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
            slideShadows: true,
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
    <div className={styles.skillCard} key={skill.id}>
      <div className={styles.skillLogoContainer}>
        <img className={styles.skillLogo} src={skill.logo} alt={skill.name} />
      </div>
      <h3 className={styles.skillName}>{skill.name}</h3>
      <p className={styles.skillLevel}>{skill.level}</p>
    </div>
  )
}

{/* <SwiperSlide><SkillCard skill={skills[0]} /></SwiperSlide>
<SwiperSlide><SkillCard skill={skills[1]} /></SwiperSlide>
<SwiperSlide><SkillCard skill={skills[2]} /></SwiperSlide>
<SwiperSlide><SkillCard skill={skills[3]} /></SwiperSlide>
<SwiperSlide><SkillCard skill={skills[4]} /></SwiperSlide>
<SwiperSlide><SkillCard skill={skills[5]} /></SwiperSlide>
<SwiperSlide><SkillCard skill={skills[6]} /></SwiperSlide> */}



// const handlePrevClick = () => {
//   setActiveIndex((prevIndex) => (prevIndex === 0 ? skills.length - 1 : prevIndex - 1));
// };

// const handleNextClick = () => {
//   setActiveIndex((prevIndex) => (prevIndex === skills.length - 1 ? 0 : prevIndex + 1));
// };

  // return (
  //   <section className={styles.skillSection}>
  //     <div className={styles.sectionHeader}>
  //       <h2>My Skills</h2>
  //       <p>Here my skills i have learned learned.</p>
  //     </div>
  //     <div className={styles.carousel}>
  //       {skills.map((skill, index) => (
  //         <div
  //           key={skill.id}
  //           className={`${styles.card} ${index === activeIndex ? styles.active : index < activeIndex ? styles.left : styles.right}`}
  //           onClick={() => setActiveIndex(index)}
  //         >
  //           {index !== activeIndex ? (
  //             <img src={skill.logo} alt={skill.name} />
  //           ) : (
  //             <>
  //               <img src={skill.logo} alt={skill.name} />
  //               <h3>{skill.name}</h3>
  //               <p>{skill.level}</p>
  //             </>
  //           )}
  //         </div>
  //       ))}
  //     </div>
  //     <div className={styles.skillBtnContainer}>
  //       <button className={styles.skillBtn} onClick={handlePrevClick}>
  //         &lt;
  //       </button>
  //       <button className={styles.skillBtn} onClick={handleNextClick}>
  //         &gt;
  //       </button>
  //     </div>
  //   </section>
  // );