import PropTypes from 'prop-types';

export default function Body({ name, age, education, skills, aboutMe , contact}) {
  return (
    <section className="profile">
      <img
        src="profile.png"
        alt="Your Name Profile Picture"
        className="profile-picture"
        width={150}
        height={150}
      />
      <div className="profile-info">
        <h2>{name}</h2>
        <p id="age">{age} years old</p>
        <h3>Education</h3>
        <ul>
          {education.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3>Skills</h3>
        <ul>
          {skills.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3>About Me</h3>
        <p>{aboutMe}</p>
        <h3>Contact information</h3>
        <ul>
          {contact.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          </ul>
      </div>
    </section>
  );
}

Body.defaultProps = {
  name: "OCAMPO,DWAYNE JOHN C.",
  age: 20,
  education: [
    "Bachelor of Information and Technology ",
    
  ],
  skills: [
    "JavaScript (React)",
    "HTML & CSS",
    
    "Problem-Solving & Analytical Skills"
  ],
  aboutMe: ["I am still a student but i am eager to learn and absorb knowlege and i would like to improve on my skill specifically on Infomation and Technology."],
  contact: [
    "Email:Dwayne@gmail.com",
    "Contact number:#2231-2332-232",
  ],
};

Body.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  education: PropTypes.arrayOf(PropTypes.string),
  skills: PropTypes.arrayOf(PropTypes.string),
  aboutMe: PropTypes.string,
};