import HindiHeading from "../hindiHeading/hindiHeading";
import "../experience/style.css";
import ExperienceCard from "../experienceCard/experienceCard";
const experience = [
   {
    ['time-period'] : {
      'from': '11/2021',
      'to': 'Present'
    },
    designation: 'Frontend Developer',
    company: 'Sita'
   },
   {
    ['time-period'] : {
      'from': '04/2022',
      'to': '10/2022'
    },
    designation: 'Personal Goal Pursuit',
    company: 'Career Break'
   },
   {
    ['time-period'] : {
      'from': '09/2021',
      'to': '03/2022'
    },
    designation: 'Software Engineer',
    company: 'Bikry'
   }
]


const Experience = () => {
  return (
    <section className="experience-section">
      <div className="experience-info mt-10">
        {experience.map((exp, index) => (
          <ExperienceCard key={index} experience={exp}/>
        ))}
      </div>
      <div className="heading-container ml-20">
        <HindiHeading heading='अनुभव'/>
        <h1 className="section-heading">Experience</h1>
      </div>
    </section>
  )
}

export default Experience