import "../experienceCard/style.css";

const ExperienceCard = ({ experience }) => {
  const {'time-period': timePeriod, designation, company} = experience;
  return (
    <div className="experience-card">
      <div className="time-period"> {timePeriod.from} - {timePeriod.to}</div>
      <div className="profile-section"> 
        <div className="profile">{designation}</div> 
        <div className="company-name">{company}</div>
      </div>
      <div className="experience-logo">
        logo
      </div>
    </div>
  )
}

export default ExperienceCard;