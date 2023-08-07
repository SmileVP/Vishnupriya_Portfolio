import React from "react";
import HTML from "../Asset/img/html-logo.svg";
import CSS from "../Asset/img/css-logo.svg";
import JavaScript from "../Asset/img/javascript-logo.svg";
import Bootstrap from "../Asset/img/bootstrap-logo.svg";
import mongodb from "../Asset/img/mongo-db.svg";
import expressLogo from "../Asset/img/expres-js.png";
import nodejs from "../Asset/img/node-logo.svg";
import ReactImg from "../Asset/img/react.svg";
import javaImg from "../Asset/img/java-logo.png";
import aws from "../Asset/img/aws.svg";
import github from "../Asset/img/github-logo.svg";
import firebase from "../Asset/img/firebase.svg";
import pusher from "../Asset/img/pusher.png";
import reactBootstrapLogo from "../Asset/img/react-bootstrap.png";
import skillBanner from "../Asset/img/skill-banner.jpg";

function Skill() {
  return (
    // <--Skill page details-->
    <div className=" py-1" id="Skills">
      <div className="">
        <h1 className="d-flex justify-content-center skill-details">
          My Skills
        </h1>

        <div className="skill_content">
          <div className="skill_banner mt-5">
            <img
              className="skill_image"
              src="https://img.freepik.com/free-vector/isometric-programmer-working-desk_52683-17640.jpg?w=740&t=st=1691426234~exp=1691426834~hmac=405afed45004d87604c4b98231c30bd13484bb3df8547eba57d926d114dc59d0"
              alt=""
            />
          </div>

          <div className="skill_body">
            <div className="skill-box my-5 mx-4">
              <img src={HTML} className="skill-img" alt="" />
            </div>

            <div className="skill-box my-5 mx-4">
              <img src={CSS} className="skill-img" alt="" />
            </div>

            <div className="skill-box my-5 mx-4">
              <img src={JavaScript} className="skill-img" alt="" />
            </div>

            <div className="skill-box my-5 mx-4">
              <img src={Bootstrap} className="skill-img" alt="" />
            </div>

            <div className="skill-box my-5 mx-4">
              <img src={ReactImg} className="skill-img" alt="" />
            </div>

            <div className="skill-box my-5 mx-4 ">
              <img src={expressLogo} className="skill-img" alt="" />
            </div>

            <div className="skill-box my-5 mx-4">
              <img src={mongodb} className="skill-img" alt="" />
            </div>

            <div className="skill-box my-5 mx-4">
              <img src={nodejs} className="skill-img" alt="" />
            </div>

            <div className="skill-box my-5 mx-4">
              <img src={aws} className="skill-img" alt="" />
            </div>

            <div className="skill-box my-5 mx-4">
              <img src={github} className="skill-img" alt="" />
            </div>

            <div className="skill-box my-5 mx-4">
              <img src={firebase} className="skill-img" alt="" />
            </div>

            <div className="skill-box my-5 mx-4">
              <div className="d-flex justify-content-center ">
                <img src={pusher} className="skill-img" alt="" />
              </div>
            </div>

            <div className="c  skill-box my-5 mx-4 ">
              <div className="d-flex justify-content-center ">
                <img src={reactBootstrapLogo} className="skill-img" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
