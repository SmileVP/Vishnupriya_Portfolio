import React from "react";
import InstagramBanner from "../Asset/img/instagram-banner.png";
import whatsappBanner from "../Asset/img/whatsapp-banner.jpg";
import netflixBanner from "../Asset/img/netflix-banner.jpg";
import rentifyBanner from "../Asset/img/rental-banner.png";
import { Button } from "react-bootstrap";
import { CodeUrl } from "./CodeUrl";

function Projects() {
  return (
    //  <--Project details-->
    <div className="projects-d py-1" id="Projects">
      <div className="container-fluid">
        <div className="text-center">
          <div className="project-details">Projects</div>
        </div>
        <div className="row post-grid d-flex justify-content-center">
          {/* e-commerce app */}
          <div class="wrapper mt-5">
            <div class="card">
              <img
                src="https://e0.pxfuel.com/wallpapers/606/84/desktop-wallpaper-ecommerce-website-design-company-noida-e-commerce-banner-design-e-commerce.jpg"
                alt=""
              />
              <div class="info">
                <h1>E-Commerce App</h1>
                <p>
                  In this project i have used react,nodejs,express,mongodb and
                  nodemailer
                </p>
                <hr />
                <a href={CodeUrl.shopifyDeploy} target={CodeUrl.blank}>
                  <Button type="button" variant="danger">
                    Deploy
                  </Button>
                </a>
                <a href={CodeUrl.shopifyFrontendGit} target={CodeUrl.blank}>
                  <Button type="button" variant="danger" className="m-1">
                    Source-frontend
                  </Button>
                </a>
                <a href={CodeUrl.shopifyBackendGit} target={CodeUrl.blank}>
                  <Button type="button" variant="danger">
                    Source-backend
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Instagram clone app */}
          <div class="wrapper mt-5">
            <div class="card">
              <img src={InstagramBanner} alt="" />
              <div class="info">
                <h1>Social-Media App</h1>
                <p>
                  In this project i have used
                  react-js,node-js,express-js,mongodb and firebase
                </p>
                <hr />
                <a href={CodeUrl.instaDeploy} target={CodeUrl.blank}>
                  <Button type="button" variant="danger">
                    Deploy
                  </Button>
                </a>
                <a href={CodeUrl.instaFrontendGit} target={CodeUrl.blank}>
                  <Button type="button" variant="danger" className="m-1">
                    Source-frontend
                  </Button>
                </a>
                <a href={CodeUrl.instaBackendGit} target={CodeUrl.blank}>
                  <Button type="button" variant="danger">
                    Source-backend
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Whatsapp clone*/}
          <div class="wrapper mt-5">
            <div class="card">
              <img src={whatsappBanner} alt="" />
              <div class="info">
                <h1>Chat App</h1>
                <p>
                  In this project i have used react-js,node-js,express-js,
                  mongodb, firebase,pusher sand materialUi
                </p>
                <hr />
                <a href={CodeUrl.whatsAppDeploy} target={CodeUrl.blank}>
                  <Button type="button" variant="danger">
                    Deploy
                  </Button>
                </a>
                <a href={CodeUrl.whatsAppFrontendGit} target={CodeUrl.blank}>
                  <Button type="button" variant="danger" className="m-1">
                    Source-frontend
                  </Button>
                </a>
                <a href={CodeUrl.whatsAppBackendGit} target={CodeUrl.blank}>
                  <Button type="button" variant="danger">
                    Source-backend
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Netflix clone*/}
          <div class="wrapper mt-5">
            <div class="card">
              <img src={netflixBanner} alt="" />
              <div class="info">
                <h1>Movie App</h1>
                <p>
                  In this project i have used
                  react-js,Tmdb-api,firebase,reactYoutube and movieTrailer
                </p>
                <hr />
                <a href={CodeUrl.netflixDeploy} target={CodeUrl.blank}>
                  <Button type="button" variant="danger">
                    Deploy
                  </Button>
                </a>
                <a href={CodeUrl.netflixGit} target={CodeUrl.blank}>
                  <Button type="button" variant="danger" className="m-1">
                    Source-frontend
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Rentify app*/}
          <div class="wrapper mt-5">
            <div class="card">
              <img
                src="https://t4.ftcdn.net/jpg/04/14/22/55/360_F_414225555_k4FE9n2fjaBen0QlOW1kSjaQBWfjfCjF.jpg"
                alt=""
              />
              <div class="info">
                <h1>Rental App</h1>
                <p>
                  In this project i have used
                  react-js,node-js,express-js,mongodb, datepicker and nodemailer
                </p>
                <hr />
                <a href={CodeUrl.rentifyDeploy} target={CodeUrl.blank}>
                  <Button type="button" variant="danger">
                    Deploy
                  </Button>
                </a>
                <a href={CodeUrl.rentifyFrontendGit} target={CodeUrl.blank}>
                  <Button type="button" variant="danger" className="m-1">
                    Source-frontend
                  </Button>
                </a>
                <a href={CodeUrl.rentifyBackendGit} target={CodeUrl.blank}>
                  <Button type="button" variant="danger">
                    Source-backend
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
