import "./resume.css";
import Nav from "./Nav";

const Resume = () => {
  const skills = [
    { name: "HTML", level: 85 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 87 },
    { name: "PHP", level: 85 },
];

  return (
    <div className="resume">
      <Nav />
      <div className="resume-container">
        <h1>Resume</h1>
        <div className="resume-content-container">
          {/* Education Section */}
          <div className="resume-content">
            <div className="resume-content-title">
              <i className="fa-solid fa-graduation-cap"></i>
              <h1>Education</h1>
            </div>
            {/* Education Items */}
            <div className="resume-date">
              <div className="date-item">
                <i className="fa-solid fa-calendar"></i>
                <div className="date-item-text">
                  <h3>Master Of Business</h3>
                  <h4>Management</h4>
                  <p>2010 - 2012</p>
                </div>
              </div>
              <div className="date-item">
                <i className="fa-solid fa-calendar"></i>
                <div className="date-item-text">
                  <h3>Honours Of Business</h3>
                  <h4>Management</h4>
                  <p>2010 - 2012</p>
                </div>
              </div>
              <div className="date-item">
                <i className="fa-solid fa-calendar"></i>
                <div className="date-item-text">
                  <h3>School Certificate</h3>
                  <h4>Business</h4>
                  <p>2010 - 2012</p>
                </div>
              </div>
            </div>
          </div>

          <hr />
          
          {/* Experience Section */}
          <div className="resume-content">
            <div className="resume-content-title">
              <i className="fa-solid fa-briefcase"></i>
              <h1>Experiences</h1>
            </div>
            {/* Experience Items */}
            <div className="resume-date">
              <div className="date-item">
                <i className="fa-solid fa-calendar"></i>
                <div className="date-item-text">
                  <h3>Envato Author</h3>
                  <h4>Management</h4>
                  <p>2010 - 2012</p>
                </div>
              </div>
              <div className="date-item">
                <i className="fa-solid fa-calendar"></i>
                <div className="date-item-text">
                  <h3>It International</h3>
                  <h4>Management</h4>
                  <p>2010 - 2012</p>
                </div>
              </div>
              <div className="date-item">
                <i className="fa-solid fa-calendar"></i>
                <div className="date-item-text">
                  <h3>Daffodil International</h3>
                  <h4>Management</h4>
                  <p>2010 - 2012</p>
                </div>
              </div>
            </div>
          </div>

          <hr />

          {/* Skills Section */}
          <div className="skill-container">
            <div className="skill-content">
              <div className="skill-title resume-content-title">
                <i className="fa-solid fa-code"></i>
                <h1>Programming</h1>
              </div>
              {/* Skills Bars */}
              {skills.map((skill, index) => (
                <div key={index} className="skill-bar">
                  <div className="skill-bar-item">
                    <p>{skill.name}</p>
                    <div
                      className="bar"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                    <p>{skill.level}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
