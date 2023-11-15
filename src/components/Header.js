import { AppBar, Toolbar, Typography, Box, Divider } from "@mui/material";
import React, { useEffect } from "react";
import "../../src/styles/Header.css";

import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import { CustomButton, CustomButton1 } from "./pages/Buton";

function Header() {
  useEffect(() => {
    function scrollFunction() {
      const navbar = document.getElementById("navbar");

      if (navbar) {
        if (window.pageYOffset > 100) {
          navbar.style.top = "0";
        } else {
          navbar.style.top = "-100px";
        }
      }
    }

    window.addEventListener("scroll", scrollFunction);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const handleButtononClick = () => {};

  const StyledToolbar = styled(Toolbar)({
    height: "130px",
    display: "flex",
    justifyContent: "space-between",
    background: "#19324d",
  });

  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
    marginLeft: "19%",
    marginTop: "2%",
    zIndex: 0,
  });

  const SearchItems = [
    {
      Name: (
        <Box className="platform">
          <Typography className="platform-text">Platform&#x2304;</Typography>
          <div className="platform-overview">
            <div className="platform-row">
              <div className="platform-overview-text">
                <div>
                  <img
                    alt=""
                    style={{
                      position: "absolute",
                      width: "3%",
                      height: "7%",
                      marginLeft: "8%",
                      marginTop: "6%",
                    }}
                  />
                </div>
                <ul>
                  <h5>PLATFORM OVERVIEW</h5>
                  <div className="hover-effect-platform1">
                    <li>
                      <a href="#cloud" class="at">
                        Sedai Autonomous Cloud Platform
                      </a>
                      <p>
                        Why modern apps need <br /> autonomous management
                      </p>
                    </li>
                  </div>
                </ul>
                <div>
                  <img
                    alt=""
                    style={{
                      position: "absolute",
                      width: "3%",
                      height: "5%",
                      marginLeft: "8%",
                      marginTop: "5%",
                    }}
                  />
                </div>
                <ul>
                  <h5>SEDAI FOR MODERN APPS</h5>
                  <li>
                    <a href="#kuber">Kubernetes</a>
                    <p>
                      Autonomously scale, continuously <br /> optimize resources
                      and cut costs
                    </p>
                  </li>
                </ul>
                <div>
                  <img
                    alt=""
                    style={{
                      position: "absolute",
                      width: "3%",
                      height: "5%",
                      marginLeft: "8%",
                    }}
                  />
                </div>
                <ul>
                  <li>
                    <a href="#kuber">AWS Lambda</a>
                    <p>
                      Continuous performance
                      <br /> optimization and autonomous
                      <br /> concurrency for serverless
                    </p>
                  </li>
                </ul>
                <div>
                  <img
                    alt=""
                    style={{
                      position: "absolute",
                      width: "3%",
                      height: "5%",
                      marginLeft: "8%",
                    }}
                  />
                </div>
                <ul>
                  <li>
                    <a href="#kuber">AWS ECS</a>
                    <p>
                      Autonomous cost and resource
                      <br /> optimization
                    </p>
                  </li>
                </ul>
              </div>
              <div className="divider1">
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    backgroundColor: "skyblue",
                    height: "60px",
                  }}
                />
              </div>
              <div className="platform-overview-text-capabilities">
                <div>
                  <img
                    alt=""
                    style={{
                      position: "absolute",
                      width: "3%",
                      height: "7%",
                      marginLeft: "8%",
                      marginTop: "6%",
                    }}
                  />
                </div>

                <ul>
                  <h5>CAPABILITIES</h5>
                  <li>
                    <a href="#cloud">Autonomous Optimization</a>
                    <p>
                      Cut cloud cost and tune <br /> performance
                    </p>
                  </li>
                </ul>
                <div>
                  <img
                    alt=""
                    style={{
                      position: "absolute",
                      width: "3%",
                      height: "7%",
                      marginLeft: "8%",
                      marginTop: "-1%",
                    }}
                  />
                </div>
                <ul>
                  <li>
                    <a href="#cloud">Autonomous Remidiation</a>
                    <p>
                      Improve availability and minimize <br /> Failed customer
                      interactios (FCIs)
                    </p>
                  </li>
                </ul>
                <div>
                  <img
                    alt=""
                    style={{
                      position: "absolute",
                      width: "3%",
                      height: "7%",
                      marginLeft: "8%",
                      marginTop: "-1%",
                    }}
                  />
                </div>
                <ul>
                  <li>
                    <a href="#cloud">Release intelligence</a>
                    <p>
                      Know how knew releases perform
                      <br />
                      in production
                    </p>
                  </li>
                </ul>
                <div>
                  <img
                    alt=""
                    style={{
                      position: "absolute",
                      width: "3%",
                      height: "7%",
                      marginLeft: "8%",
                      marginTop: "-1%",
                    }}
                  />
                </div>
                <ul>
                  <li>
                    <a href="#cloud">Smart SLOs</a>
                    <p>Set and optimize performance</p>
                  </li>
                </ul>
                <div>
                  <img
                    alt=""
                    style={{
                      position: "absolute",
                      width: "3%",
                      height: "7%",
                      marginLeft: "8%",
                      marginTop: "-1%",
                    }}
                  />
                </div>
                <ul>
                  <li>
                    <a href="#cloud">Integrations</a>
                    <p>Work with your existing tools</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Box>
      ),
      Link: "#",
    },
    {
      Name: (
        <Box className="solution">
          <Typography variant="v6" sx={{ fontSize: "14px" }}>
            Solutions&#x2304;
          </Typography>
          <div className="solution-overview">
            <div className="solution-row">
              <div className="solution-overview-text">
                <div>
                  <img
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "5%",
                      marginLeft: "4%",
                      marginTop: "4%",
                    }}
                  />
                </div>
                <ul>
                  <h5>USE CASES</h5>
                  <li>
                    <a href="#cloud">Cloud Cost Optimization</a>
                    <p>
                      Find 30-50% cost savings by
                      <br /> optimizating apps & infrastructure
                    </p>
                  </li>
                </ul>
                <div>
                  <img
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "5%",
                      marginLeft: "4%",
                    }}
                  />
                </div>
                <ul>
                  <li>
                    <a href="#cloud">Application Performance</a>
                    <p>
                      Improve customer experience with
                      <br /> 30-75% performance gains
                    </p>
                  </li>
                </ul>
                <div>
                  <img
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "4%",
                      marginLeft: "4%",
                    }}
                  />
                </div>
                <ul>
                  <li>
                    <a href="#cloud">Availability Improvement</a>
                    <p>
                      Reduce Failed Customer
                      <br /> Interactions (FCIs)
                    </p>
                  </li>
                </ul>
                <div>
                  <img
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "5%",
                      marginLeft: "4%",
                    }}
                  />
                </div>
                <ul>
                  <li>
                    <a href="#cloud">Ops Productivity</a>
                    <p>Cut manual toil</p>
                  </li>
                </ul>
                <div>
                  <img
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "4%",
                      marginLeft: "4%",
                    }}
                  />
                </div>
                <ul>
                  <li>
                    <a href="#cloud">Release Quality</a>
                    <p>
                      Understand the performance of
                      <br /> every release
                    </p>
                  </li>
                </ul>
              </div>
              <div className="divider2">
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    backgroundColor: "skyblue",
                    height: "60px",
                  }}
                />
              </div>
              <div className="solution-roles">
                <div>
                  <img
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "5%",
                      marginLeft: "4%",
                      marginTop: "4%",
                    }}
                  />
                </div>
                <ul>
                  <h5>ROLES</h5>
                  <li>
                    <a href="#cloud">Engineering Leaders</a>
                    <p>
                      Drive cost, performance and
                      <br /> availability with AI
                    </p>
                  </li>
                </ul>
                <div>
                  <img
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "5%",
                      marginLeft: "4%",
                    }}
                  />
                </div>
                <ul>
                  <li>
                    <a href="#cloud">CTO / Architect</a>
                    <p>
                      Integrate AI into your tech stack
                      <br /> for cost, performance and
                      <br /> availability
                    </p>
                  </li>
                </ul>
                <div>
                  <img
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "5%",
                      marginLeft: "4%",
                    }}
                  />
                </div>
                <ul>
                  <li>
                    <a href="#cloud">Site Reliability Engineering</a>
                    <p>
                      Deliver reliability with the power of
                      <br /> AI
                    </p>
                  </li>
                </ul>
                <div>
                  <img
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "5%",
                      marginLeft: "4%",
                    }}
                  />
                </div>
                <ul>
                  <li>
                    <a href="#cloud">Platform Engineering</a>
                    <p>
                      Provides a powerful tool for
                      <br /> engineers to optimize their
                      <br />
                      application
                    </p>
                  </li>
                </ul>
                <div>
                  <img
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "5%",
                      marginLeft: "4%",
                    }}
                  />
                </div>
                <ul>
                  <li>
                    <a href="#cloud">FinOps</a>
                    <p>
                      Optimize cloud costs with
                      <br /> integrated engineering & financial
                      <br />
                      optimization
                    </p>
                  </li>
                </ul>
                <div>
                  <img
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "5%",
                      marginLeft: "4%",
                    }}
                  />
                </div>
                <ul>
                  <li>
                    <a href="#cloud">DevOps</a>
                    <p>
                      Know how new releases perform
                      <br /> in production
                    </p>
                  </li>
                </ul>
                <div>
                  <img
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "5%",
                      marginLeft: "4%",
                    }}
                  />
                </div>
                <ul>
                  <li>
                    <a href="#cloud">Performance Engineering</a>
                    <p>
                      Optimize performance
                      <br /> automatically
                    </p>
                  </li>
                </ul>
              </div>
              <div className="divider2">
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    backgroundColor: "skyblue",
                    height: "60px",
                  }}
                />
              </div>
              <div className="solution-industries">
                <div>
                  <img
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "5%",
                      marginLeft: "4%",
                      marginTop: "4%",
                    }}
                  />
                </div>
                <ul>
                  <h5>INDUSTRIES</h5>
                  <li>
                    <a href="#cloud">Ecommerce</a>
                    <p>
                      Drive site coversion & optimize
                      <br /> margins
                    </p>
                  </li>
                </ul>
                <div>
                  <img
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "5%",
                      marginLeft: "4%",
                    }}
                  />
                </div>
                <ul>
                  <li>
                    <a href="#cloud">Cybersecurity</a>
                    <p>
                      Meet the threat with high reliability
                      <br /> & optimized costs
                    </p>
                  </li>
                </ul>
                <div>
                  <img
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "5%",
                      marginLeft: "4%",
                    }}
                  />
                </div>
                <ul>
                  <li>
                    <a href="#cloud">Online Travel</a>
                    <p>
                      Improve traveler experience &
                      <br /> optimize cloud costs
                    </p>
                  </li>
                </ul>
                <div>
                  <img
                    alt=""
                    style={{
                      position: "absolute",
                      width: "2%",
                      height: "5%",
                      marginLeft: "4%",
                    }}
                  />
                </div>
                <ul>
                  <li>
                    <a href="#cloud">B2B SaaS</a>
                    <p>
                      Improve online experience & <br /> optimize cloud costs
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Box>
      ),
      Link: "#",
    },
    {
      Name: (
        <Typography className="t1" variant="v6" sx={{ fontSize: "14px" }}>
          Pricing
        </Typography>
      ),
      Link: "#",
    },
    {
      Name: (
        <Box className="resource">
          <Typography variant="v6" sx={{ fontSize: "14px" }}>
            Resource&#x2304;
          </Typography>
          <div className="dropdown-company">
            <div className="content-a">
              <a href="#all">All</a>
              <a href="#event">Events</a>
              <a href="#solution">Solution Briefs</a>
              <a href="#customer">Customer Stories</a>
              <a href="#data">Datasheets</a>
              <a href="#videos">Videos</a>
              <a href="#calculator">ROI Calculator</a>
              <a href="#documentaion">Documentation</a>
            </div>
          </div>
        </Box>
      ),
      Link: "#",
    },
    {
      Name: (
        <Box className="company">
          <Typography
            variant="v6"
            sx={{ fontSize: "14px" }}
            className="company-text"
          >
            Company&#x2304;
          </Typography>
          <div className="dropdown-company">
            <div className="content-a">
              <a href="#about">About</a>
              <a href="#blog">Blog</a>
              <a href="#aws">AWS Partnership</a>
              <a href="#careers">Careers</a>
            </div>
          </div>
        </Box>
      ),
      Link: "#",
    },
    {
      Name: (
        <Typography
          className="t1"
          variant="v6"
          sx={{ fontSize: "14px", fontWeight: "bold" }}
        >
          Login
        </Typography>
      ),
      Link: "#",
    },
    {
      Name: (
        <Typography>
          <SearchIcon sx={{ color: "gray" }} />
        </Typography>
      ),
      Link: "#",
    },
  ];

  return (
    <>
      <AppBar id="navbar" position={"sticky"}>
        <StyledToolbar>
          <Typography>
            <img
              className="cosecant_logo"
              src="https://assets-global.website-files.com/6218de564a814751871bcb7d/621cd3f6de9cbc4708382435_sedai_logo.svg"
              alt="cosecant logo"
            />
          </Typography>

          <MenuBox>
            {SearchItems.map((content) => (
              <Typography sx={{ cursor: "pointer" }}>{content.Name}</Typography>
            ))}
          </MenuBox>
          <CustomButton
            onClick={handleButtononClick}
            label="START FREE"
            style={{ zIndex: 1 }}
          />
          <CustomButton1
            onClick={handleButtononClick}
            label="BOOK DEMO"
            style={{ zIndex: 1 }}
          />
        </StyledToolbar>
      </AppBar>
    </>
  );
}

export default Header;
