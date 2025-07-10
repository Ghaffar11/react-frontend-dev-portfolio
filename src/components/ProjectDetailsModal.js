import React, { Component } from "react";
import { Modal } from "react-bootstrap";

class ProjectDetailsModal extends Component {
  render() {
    if (!this.props.data) return null;

    const {
      title,
      description,
      url,
      technologies = [],
      imageToShow, // passed from Projects.js
      modalImage,
      images = [],
      image = []
    } = this.props.data;

    // Fallback image priority
    const imageSrc =
      imageToShow ||
      (modalImage && modalImage.length > 0 && modalImage[0]) ||
      (images && images.length > 0 && images[0]) ||
      (image && image.length > 0 && image[0]);

    return (
      <Modal
        {...this.props}
        size="lg"
        centered
        aria-labelledby="contained-modal-title-vcenter"
        className="modal-inside"
        scrollable
      >
        {/* Close Icon */}
        <span
          onClick={this.props.onHide}
          className="modal-close"
          style={{
            position: "absolute",
            top: "10px",
            right: "15px",
            zIndex: 10,
            cursor: "pointer"
          }}
        >
          <i className="fas fa-times fa-2x" style={{ color: "#fff" }}></i>
        </span>

        <div className="col-12 p-0">
          {/* Browser Dots */}
          <div className="d-flex gap-2 p-3 px-4">
            <span
              className="rounded-circle"
              style={{ background: "#e50914", width: 12, height: 12 }}
            ></span>
            <span
              className="rounded-circle"
              style={{ background: "#f5c518", width: 12, height: 12 }}
            ></span>
            <span
              className="rounded-circle"
              style={{ background: "#21d07a", width: 12, height: 12 }}
            ></span>
          </div>

          {/* Project Image */}
          <div className="project-image-wrapper">
            <img src={imageSrc} alt={title} className="project-hero-image" />
          </div>

          {/* Text Content */}
          <div className="p-4">
            <h2 className="project-title">
              {title}
              {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-2"
                >
                  <i className="fas fa-external-link-alt text-light"></i>
                </a>
              )}
            </h2>

            <p className="project-description">{description}</p>

            {/* Tech Tags */}
            <div className="mt-3">
              {technologies.map((tech, i) => (
                <span className="project-tag" key={i}>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ProjectDetailsModal;
