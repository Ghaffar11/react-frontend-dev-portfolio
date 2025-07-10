import React from "react";
import { Icon } from "@iconify/react";
import cppIcon from "@iconify/icons-simple-icons/cplusplus";
import reactIcon from "@iconify/icons-logos/react";
import unrealIcon from "@iconify/icons-simple-icons/unrealengine";
import fileIcon from "@iconify/icons-fa-solid/file-alt";
import emailIcon from "@iconify/icons-fa-solid/envelope";

const About = React.forwardRef((props, ref) => {
  if (!props.sharedBasicInfo || !props.resumeBasicInfo) return null;

  const profilepic = "images/" + props.sharedBasicInfo.image;
  const sectionName = props.resumeBasicInfo.section_name.about;
  const hello = props.resumeBasicInfo.description_header;
  const about = props.resumeBasicInfo.description;

  return (
    <section id="about" ref={ref} className="section-active-border">
      <div className="col-md-12">
        <div className="row center mx-auto mb-5">
          {/* Profile Picture & Tech Icons */}
          <div className="col-md-4 mb-5 center">
            <div className="polaroid">
              <span style={{ cursor: "auto" }}>
                <img height="250px" src={profilepic} alt="Avatar placeholder" />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                  }}
                >
               <Icon
  icon={cppIcon}
  className="tech-icon"
  style={{ fontSize: "400%", margin: "9% 5% 0 5%", color: "#61dafb" }}
/>
<Icon
  icon={reactIcon}
  className="tech-icon"
  style={{ fontSize: "400%", margin: "9% 5% 0 5%", color: "#61dafb" }}
/>
<Icon
  icon={unrealIcon}
  className="tech-icon"
  style={{ fontSize: "400%", margin: "9% 5% 0 5%", color: "#61dafb" }}
/>

                </div>
              </span>
            </div>
          </div>

          {/* About Card */}
          <div className="col-md-8 center">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                  <span className="iconify" data-icon="emojione:red-circle"></span>
                  &nbsp;
                  <span className="iconify" data-icon="twemoji:yellow-circle"></span>
                  &nbsp;
                  <span className="iconify" data-icon="twemoji:green-circle"></span>
                </div>
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                >
                  <br />
                  <span className="wave">{hello} :)</span>
                  <br />
                  <br />
                  {about}
                </div>
              </div>

              {/* Resume & Contact Buttons */}
              <div
                className="button-group text-center mt-4"
                style={{ marginTop: "30px" }}
              >
                <a
                  className="btn btn-resume mx-3"
                  href="resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "1.1rem",
                    padding: "12px 24px",
                    borderRadius: "6px",
                  }}
                >
                  <Icon icon={fileIcon} className="mr-2" />
                  View Resume
                </a>

                <a
                  className="btn btn-resume mx-3"
                  href="mailto:ghaffar.ma2003@gmail.com"
                  style={{
                    fontSize: "1.1rem",
                    padding: "12px 24px",
                    borderRadius: "6px",
                  }}
                >
                  <Icon icon={emailIcon} className="mr-2" />
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
