import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SplashScreen from "./components/SplashScreen";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
      sharedData: {},
      activeSection: null,
      showSplash: true,
    };

    this.aboutRef = React.createRef();
    this.projectsRef = React.createRef();
    this.skillsRef = React.createRef();
    this.experienceRef = React.createRef();

    this.loadResumeFromPath = this.loadResumeFromPath.bind(this);
    this.loadSharedData = this.loadSharedData.bind(this);
    this.handleSectionClick = this.handleSectionClick.bind(this);
  }

  componentDidMount() {
    this.loadSharedData();
    this.loadResumeFromPath("res_primaryLanguage.json");

    setTimeout(() => {
      this.setState({ showSplash: false });
    }, 3000);
  }

  loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error("Error loading resume data:", err);
      },
    });
  }

  loadSharedData() {
    $.ajax({
      url: "portfolio_shared_data.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = data?.basic_info?.name || "Portfolio";
      }.bind(this),
      error: function (xhr, status, err) {
        console.error("Error loading shared data:", err);
      },
    });
  }

  handleSectionClick(sectionKey) {
    this.setState(
      (prevState) => ({
        activeSection: prevState.activeSection === sectionKey ? null : sectionKey,
      }),
      () => {
        const sectionRefMap = {
          about: this.aboutRef,
          projects: this.projectsRef,
          skills: this.skillsRef,
          experience: this.experienceRef,
        };
        const sectionRef = sectionRefMap[sectionKey];
        if (sectionRef?.current) {
          sectionRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    );
  }

  render() {
    const { resumeData, sharedData, activeSection, showSplash } = this.state;

    if (showSplash) return <SplashScreen />;

    const aboutSectionName =
      resumeData.basic_info?.section_name?.about || "About Me";
    const projectsSectionName =
      resumeData.basic_info?.section_name?.projects || "Projects";
    const skillsSectionName =
      resumeData.basic_info?.section_name?.skills || "Skills";
    const experienceSectionName =
      resumeData.basic_info?.section_name?.experience || "Experience";

    return (
      <div>
        <div className="main-content-fade-in">
          <Header sharedData={sharedData.basic_info} />

          <div className="section-navigator">
            <h1
              className="section-title"
              onClick={() => this.handleSectionClick("about")}
            >
              <span>{aboutSectionName}</span>
            </h1>
            <h1
              className="section-title"
              onClick={() => this.handleSectionClick("projects")}
            >
              <span>{projectsSectionName}</span>
            </h1>
            <h1
              className="section-title"
              onClick={() => this.handleSectionClick("skills")}
            >
              <span>{skillsSectionName}</span>
            </h1>
            <h1
              className="section-title"
              onClick={() => this.handleSectionClick("experience")}
            >
              <span>{experienceSectionName}</span>
            </h1>
          </div>

          {activeSection === "about" && (
            <div className="section-fade-slide-in">
              <About
                ref={this.aboutRef}
                resumeBasicInfo={resumeData.basic_info}
                sharedBasicInfo={sharedData.basic_info}
              />
            </div>
          )}

          {activeSection === "projects" && (
            <div className="section-fade-slide-in">
              <Projects
                ref={this.projectsRef}
                resumeProjects={resumeData.projects}
                resumeBasicInfo={resumeData.basic_info}
              />
            </div>
          )}

          {activeSection === "skills" && (
            <div className="section-fade-slide-in">
              <Skills
                ref={this.skillsRef}
                sharedSkills={sharedData.skills}
                resumeBasicInfo={resumeData.basic_info}
              />
            </div>
          )}

          {activeSection === "experience" && (
            <div className="section-fade-slide-in">
              <Experience
                ref={this.experienceRef}
                resumeExperience={resumeData.experience}
                resumeBasicInfo={resumeData.basic_info}
              />
            </div>
          )}

          <Footer sharedBasicInfo={sharedData.basic_info} />
        </div>
      </div>
    );
  }
}

export default App;
