import React from "react";
import Slider from "react-slick";
import ProjectDetailsModal from "./ProjectDetailsModal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = React.forwardRef((props, ref) => {
  const [detailsModalShow, setDetailsModalShow] = React.useState(false);
  const [deps, setDeps] = React.useState({});

  const detailsModalShowHandler = (project) => {
    const modalImage = project.modalImage?.[0];
    const fallbackImage =
      project.images?.[0] || project.image?.[0] || "";

    setDeps({
      ...project,
      imageToShow: modalImage || fallbackImage
    });
    setDetailsModalShow(true);
  };

  const detailsModalClose = () => setDetailsModalShow(false);

  if (!props.resumeProjects || !props.resumeBasicInfo) return null;

  const sectionClasses = "section-active-border";

  const projects = props.resumeProjects.map((project) => (
<div key={project.title} className="project-slide-wrapper">
  <div className="project-card-wrapper">
    <div
      className="netflix-project-poster"
      onClick={() => detailsModalShowHandler(project)}
    >
      <img
        src={project.images?.[0] || project.image?.[0]}
        alt={project.title}
        className="project-image"
      />
      <div className="project-overlay">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
      </div>
    </div>
  </div>
</div>

  ));

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="portfolio" ref={ref} className={sectionClasses}>
      <div className="col-md-12">
        <div className="col-md-12 mx-auto">
          <Slider {...settings}>{projects}</Slider>
        </div>
        <ProjectDetailsModal
          show={detailsModalShow}
          onHide={detailsModalClose}
          data={deps}
        />
      </div>
    </section>
  );
});

export default Projects;
