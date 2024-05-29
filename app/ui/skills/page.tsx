import HindiHeading from "../hindiHeading/hindiHeading";
import "../skills/style.css";

const Skills = () => {
  return (
    <section className="skills-section mt-10">
      <div className="heading-container">
        <HindiHeading heading='कौशल'/>
        <h1 className="section-heading">Skills</h1>
      </div>
      <div className="skills-container"></div>
    </section>
  )
}

export default Skills