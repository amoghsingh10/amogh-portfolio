import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Zepto – Scheduled Delivery",
    category: "Product Case Study",
    tools: "User Research · RICE · KPI Tree · UX",
    description:
      "Analyzed the Zepto Scheduled Delivery feature to identify barriers to user adoption among first-time and convenience-driven shoppers. Conducted user persona mapping, behavioral friction analysis, and built a KPI tree to understand impact on conversion and retention. Proposed prioritized UX and product improvements using the RICE framework, including clearer time-slot visibility, incentives for scheduled orders, and reminder flows. Defined success metrics and a structured roadmap aimed at improving scheduled order adoption and repeat usage.",
    image: "/images/zepto.png",
    link: "https://drive.google.com/file/d/1lxeXghyWnNqxROvdz3G7EHCKWlK3ZzSL/view?usp=sharing",
  },
  {
    title: "Product Roadmap – Fitsol",
    category: "Product Roadmap Case Study",
    tools: "AI · Green Logistics · Roadmapping · OKRs",
    description:
      "Designed a strategic product roadmap for integrating AI into green logistics to improve operational efficiency and sustainability. Analyzed logistics workflows and identified opportunities for route and load optimization to increase truck utilization and reduce shipment costs. Prioritized key features using structured product frameworks and defined measurable success metrics to guide development. The roadmap also focused on improving emissions tracking and enabling scalable, data-driven decision making for sustainable logistics operations.",
    image: "/images/fitsol.png",
    link: "https://drive.google.com/file/d/109z7a_FmRx8iv5OuNcywjGxKydRB4pC8/view",
  },
  {
    title: "AI Financial Chatbot Prototype",
    category: "AI Product · Prototype",
    tools: "PRD · MoSCoW · User Stories · MVP",
    description:
      "Developed an AI-powered financial mentor to simplify investing concepts for first-time investors through conversational guidance. Defined the product scope by writing a PRD, outlining user personas, feature logic, and success metrics. Created user stories to capture key user needs and prioritized features using the MoSCoW framework to define a clear MVP roadmap. The prototype demonstrates how AI can make financial education more accessible, intuitive, and personalized.",
    image: "/images/ai-mentor.png",
    link: "https://ai-mentor-prototype.onrender.com/",
  },
  {
    title: "Job Portal Website",
    category: "Full-Stack Development",
    tools: "React · Node.js · REST APIs · MongoDB",
    description:
      "Built a full-stack job portal platform that enables users to explore job listings, create profiles, and apply to opportunities seamlessly. Designed responsive user interfaces and developed backend APIs to manage authentication, job postings, and applications. Focused on creating a smooth user experience while ensuring efficient data handling and scalable system architecture. The project demonstrates end-to-end product development from feature design to deployment.",
    image: "/images/polling-chat-new.png",
    link: "https://github.com/amoghsingh10/GetPlaced_JOB_PORTAL",
  },
  {
    title: "Convin Product Improvement",
    category: "Product Analysis",
    tools: "Product Thinking · Personas · Feature Design",
    description:
      "Conducted an end-to-end product analysis of Convin, focusing on how AI-driven call insights can improve sales and customer support performance. Identified key user personas (sales managers, QA teams, and support leaders) and mapped pain points in extracting actionable insights from large volumes of conversations. Proposed structured feature enhancements including improved conversation tagging, insight dashboards, and workflow integrations. Prioritized solutions using a product thinking approach to improve usability, insight discovery, and decision-making efficiency.",
    image: "/images/job-portal-new.png",
    link: "https://drive.google.com/file/d/1y-fZ-LCfg0aDbEo-uV4v3seApLMZ_B5-/view?usp=drive_link",
  },
  {
    title: "Polling & Chat Website",
    category: "Full-Stack · Real-Time",
    tools: "MERN · Socket.io · REST APIs",
    description:
      "Developed a real-time polling and chat platform using the MERN stack, enabling users to create polls, vote instantly, and interact through live chat. Integrated Socket.io to power real-time updates for votes and messages, ensuring a seamless and interactive user experience. Built REST APIs for poll management, user interactions, and data storage while maintaining responsive frontend interfaces. The platform demonstrates real-time system design and full-stack development capabilities.",
    image: "/images/convin-new.png",
    link: "https://polling-system-9it4.onrender.com",
  },
];


const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools &amp; Skills</span>
                          <p className="tools-tags">{project.tools}</p>
                        </div>
                        <p className="carousel-description">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} link={project.link} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
