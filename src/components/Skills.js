import React from "react";

const Skills = React.forwardRef((props, ref) => {
  if (!props.sharedSkills || !props.resumeBasicInfo) return null;

  const sectionName = props.resumeBasicInfo.section_name.skills;

  const skills = props.sharedSkills.icons.map((skill, i) => (
    <div className="skill-poster-card" key={i}>
      <div className="poster-image">
        <i className={skill.class}></i>
      </div>
      <div className="poster-info">
        <h4 className="poster-title">{skill.name}</h4>
        {skill.level && <p className="poster-description">{skill.level}</p>}
      </div>
    </div>
  ));

  return (
    <section id="skills" ref={ref} className="section-active-border">
      <div className="col-md-12">
        <div className="col-md-12">
          <div className="skills-grid">{skills}</div>
        </div>
      </div>
    </section>
  );
});

export default Skills;
