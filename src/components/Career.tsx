import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Achievements <span>&</span>
          <br /> Extracurriculars
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Head of sponsorship and Logistics</h4>
                <h5>Desportivos</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Led logistics and sponsorship for the institute’s annual sports festival, coordinating event schedules, managing on-ground operations, and collaborating with sponsors and multiple teams to ensure smooth execution and strong partner engagement.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Personal best rating 939 in LeetCode contest</h4>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Secured a personal best rank of 939 in a LeetCode contest, competing among thousands of participants.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>LeetCode contest rating of 1765</h4>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Achieved a LeetCode contest rating of 1765, demonstrating strong problem-solving and algorithmic thinking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
