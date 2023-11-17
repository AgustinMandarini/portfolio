import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Row, Col, Card, Container } from "react-bootstrap";
import { dataabout, meta, worktimeline, skills } from "../../content_option";
import Marquee from "react-fast-marquee";
import { skillsData } from "./SkillsData";
import { skillsImage } from "./SkillsImage";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-1 mt-1 pt-md-3">
          <Col lg="8">
            <h2 className="display-4 mb-4">About me</h2>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
              <p>{dataabout.myInterests}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timeline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <div className="skillsContainer">
            <div className="skillScroll">
              <Marquee
                gradient={false}
                speed={50}
                pauseOnClick={true}
                delay={0}
                play={true}
                direction="right"
              >
                {skillsData.map((skill, id) => (
                  <div className="skillBox" key={id}>
                    <img
                      className="skillImage"
                      src={skillsImage(skill)}
                      alt={skill}
                    />
                    <p className="p">{skill}</p>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
