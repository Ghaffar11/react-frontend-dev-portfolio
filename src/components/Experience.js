import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

const Experience = React.forwardRef((props, ref) => {
  if (!props.resumeExperience || !props.resumeBasicInfo) return null;

  const work = props.resumeExperience.map((work, i) => {
    const technologies = work.technologies || [];

    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work netflix-card"
        //date={work.years}
        iconStyle={{
          background: "var(--accent-primary)",
          color: "#fff",
          textAlign: "center",
        }}
        icon={<i className="fas fa-film experience-icon"></i>}
        key={i}
      >
        <div className="netflix-experience-card">
          <h3 className="netflix-role-title">
            🎞️ {work.title} — <em>"{work.tagline}"</em>
          </h3>
          <p className="netflix-studio">Studio: {work.company}</p>
          <p className="netflix-years">Seasons: {work.years}</p>
          <p className="netflix-synopsis">
            <strong>Synopsis:</strong> {work.description}
          </p>
          <p className="netflix-genres">
            <strong>Genres:</strong> {technologies.join(", ")}
          </p>
        </div>
      </VerticalTimelineElement>
    );
  });

  return (
    <section id="resume" ref={ref} className="pb-5 section-active-border">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">{/* Section title handled in App.js */}</div>
      </div>
      <div className="col-md-8 mx-auto">
        <VerticalTimeline>
          {work}
          <VerticalTimelineElement
            iconStyle={{
              background: "var(--accent-primary)",
              color: "#fff",
              textAlign: "center",
            }}
            icon={
              <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
            }
          />
        </VerticalTimeline>
      </div>
    </section>
  );
});

export default Experience;
