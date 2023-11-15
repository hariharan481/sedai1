import React, { useEffect } from "react";
import "../../styles/Content.css";
import { Box, ListItem, Typography } from "@mui/material";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import cloud from "../../images/cloud.png";
import ecs from "../../images/ecs.png";
import Kubernetes from "../../images/Kubernetes.png";
import performance from "../../images/performance.png";
import img3 from "../../images/img3.jpg";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import imgag4 from "../../images/imag4.jpg";
import tabbg1 from "../../images/tabbg1.png";
import tabbg2 from "../../images/tabbg2.png";
import { ArrowBack, ArrowUpward, StarBorder } from "@mui/icons-material";

export const Content = () => {
  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const [open4, setOpen4] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
    setOpen2(false);
    setOpen3(false);
    setOpen1(false);
  };
  const [selectedImage, setSelectedImage] = React.useState(null);

  useEffect(() => {
    // Apply transition class when 'open' changes from false to true
    if (open || open1 || open2 || open3) {
      document
        .querySelector(".image-section")
        .classList.add("image-transition");
    } else {
      // If 'open' is false, remove the transition class
      document
        .querySelector(".image-section")
        .classList.remove("image-transition");
    }
  }, [open, open1, open2, open3]);

  const handleClick1 = () => {
    setOpen1(!open1);
    setOpen2(false);
    setOpen3(false);
    setOpen(false);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
    setOpen1(false);
    setOpen(false);
    setOpen3(false);
  };

  const handleClick3 = () => {
    setOpen3(!open3);
    setOpen2(false);
    setOpen1(false);
    setOpen(false);
  };

  const handleClick4 = () => {
    setOpen4(!open4);
  };

  return (
    <div className="contentcontainer">
      <div className="text-container1">
        <Typography variant="h3" color={"white"}>
          Autopilot your cloud cost, performance and availability optimization
        </Typography>
      </div>
      <div className="img-contaner">
        <Box
          sx={{
            width: "100%",
            maxWidth: 450,
            bgcolor: "#102547",
            fontWeight: 800,
            fontSize: "30px",
          }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={handleClick}
                className="list-item-button"
              >
                <ListItemIcon>
                  <img src={cloud} width="20" height="20" />
                </ListItemIcon>
                <ListItemText
                  className="text" // Apply the styles to adjust the text gap
                  primaryTypographyProps={{
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                  primary="Maximize Sizing"
                />
              </ListItemButton>
            </ListItem>
            <Collapse
              sx={{
                background: "#0b1838",
              }}
              in={open}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItemButton className="list-item-button" sx={{ pl: 4 }}>
                  <ListItemText
                    className="text"
                    primaryTypographyProps={{
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                    primary="Reduce cloud spend with the lowest cost configuration with optimized horizontal and vertical scaling"
                  />
                </ListItemButton>
                <ListItemText
                  className="text"
                  primaryTypographyProps={{
                    fontSize: "16px",
                    ml: "8%",
                  }}
                  primary="Learn more"
                ></ListItemText>
              </List>
            </Collapse>
            <ListItem disablePadding>
              <ListItemButton
                className="list-item-button"
                onClick={handleClick1}
              >
                <ListItemIcon>
                  <img src={performance} width="20" height="20" />
                </ListItemIcon>
                <ListItemText
                  className="text"
                  primaryTypographyProps={{
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                  primary="Optimize Performance"
                />
              </ListItemButton>
            </ListItem>
            <Collapse
              sx={{
                background: "#0b1838",
              }}
              in={open1}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItemButton className="list-item-button" sx={{ pl: 4 }}>
                  <ListItemText
                    className="text"
                    primaryTypographyProps={{
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                    primary="Improve customer experience with the best configuration across memory, CPU and hundreds of other parameters"
                  />
                </ListItemButton>
                <ListItemText
                  className="text"
                  primaryTypographyProps={{
                    fontSize: "16px",
                    ml: "8%",
                  }}
                  primary="Learn more"
                ></ListItemText>
              </List>
            </Collapse>
            <ListItem disablePadding>
              <ListItemButton
                className="list-item-button"
                onClick={handleClick2}
              >
                <ListItemIcon>
                  <img src={ecs} width="20" height="20" />
                </ListItemIcon>
                <ListItemText
                  className="text"
                  primaryTypographyProps={{
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                  primary="Enhance Releases"
                />
              </ListItemButton>
            </ListItem>
            <Collapse
              sx={{
                background: "#0b1838",
              }}
              in={open2}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItemButton className="list-item-button" sx={{ pl: 4 }}>
                  <ListItemText
                    className="text"
                    primaryTypographyProps={{
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                    primary="Reduce failed customer interactions (FCIs) by optimizing execution speed and ensuring compute resources match demand peaks"
                  />
                </ListItemButton>
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: "16px",
                    ml: "8%",
                  }}
                  primary="Learn more"
                ></ListItemText>
              </List>
            </Collapse>
            <ListItem disablePadding>
              <ListItemButton
                className="list-item-button"
                onClick={handleClick3}
              >
                <ListItemIcon>
                  <img src={Kubernetes} width="20" height="20" />
                </ListItemIcon>
                <ListItemText
                  className="text"
                  primaryTypographyProps={{
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                  primary="Improve Releases"
                />
              </ListItemButton>
            </ListItem>
            <Collapse
              sx={{
                background: "#0b1838",
              }}
              in={open3}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText
                    className="text"
                    primaryTypographyProps={{
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                    primary="Improve release quality with scorecards covering cost, latency, and errors for every release"
                  />
                </ListItemButton>
                <ListItemText
                  className="text"
                  primaryTypographyProps={{
                    fontSize: "16px",
                    ml: "8%",
                  }}
                  primary="Learn more"
                ></ListItemText>
              </List>
            </Collapse>
          </List>
        </Box>

        <div
          className={`image-section ${
            open || open1 || open2 || open3 ? "open" : ""
          }`}
        >
          {open && (
            <img
              style={{
                width: "40vw",
                transition: "opacity 0.5s",
              }}
              src={img1}
              alt="img1"
            />
          )}
          {open1 && (
            <img
              style={{
                width: "40vw",
                transition: "opacity 0.5s",
              }}
              src={img2}
              alt="img2"
            />
          )}
          {open2 && (
            <img
              style={{
                width: "40vw",
                transition: "opacity 0.5s",
              }}
              src={img3}
              alt="img3"
            />
          )}
          {open3 && (
            <img
              style={{
                width: "40vw",
                transition: "opacity 0.5s",
              }}
              src={imgag4}
              alt="img4"
            />
          )}
        </div>
      </div>
    </div>
  );
};
