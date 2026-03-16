import "./styles/TechStack.css";

const skills = [
  {
    category: "Product Management",
    items: [
      "PRDs", "KPI Trees", "OKRs", "Roadmap Planning",
      "Feature Prioritization", "MVP Scoping", "Backlog Management", "Agile Sprints",
    ],
  },
  {
    category: "User Research & Product Discovery",
    items: [
      "User Segmentation", "Surveys", "User Interviews", "Personas",
      "Journey Mapping", "Usability Testing", "A/B Testing",
    ],
  },
  {
    category: "Design & Prototyping",
    items: ["Figma", "Wireframing", "Prototyping"],
  },
  {
    category: "Data & Analytics",
    items: [
      "Product Analytics", "SQL", "Metabase", "Data Interpretation", "Experiment Analysis",
    ],
  },
  {
    category: "Development",
    items: ["C", "C++", "JavaScript", "HTML", "CSS", "React.js", "Node.js", "Express.js"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Tools",
    items: ["JIRA", "Metabase", "Figma", "Git/GitHub"],
  },
];

const TechStack = () => {
  return (
    <div className="techstack">
      <div className="skills-heading">My <span>Skills</span></div>
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-card" key={group.category}>
            <h3 className="skill-category">{group.category}</h3>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span className="skill-tag" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
