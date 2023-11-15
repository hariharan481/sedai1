import { Box, Stack, Typography } from "@mui/material";

import "../../styles/Add2.css";
import "../../styles/Advetisement.css";
import React from "react";
import { CustomButton, CustomButton1 } from "./Buton";
import Advertisement from "./Advertisement";

export const Add2 = () => {
  return (
    <>
      <div className="Add-Container">
        <div className="Headeder">
          <Typography variant="h2" fontWeight={700} color={"white"}>
            Go autonomous
          </Typography>
          <Typography variant="h2" fontWeight={700} color={"white"}>
            for maximum
          </Typography>
          <div class="container">
            <div class="text-container">
              <ul class="dynamic-text">
                <li class="item">performance</li>
                <li class="item">availability</li>
                <li class="item">productivity</li>
                <li class="item">Savings</li>
              </ul>
            </div>
          </div>

          <Typography
            fontWeight={600}
            variant="subtitle1"
            color={"white"}
            sx={{
              textAlign: "left",
            }}
          >
            Sedai delivers AI-powered continuous cloud cost,
            <Typography
              variant="subtitle1"
              color={"white"}
              fontWeight={600}
              sx={{
                textAlign: "left",
              }}
            >
              performance and availability optimization, enabling cloud teams
            </Typography>{" "}
            <Typography
              fontWeight={600}
              variant="subtitle1"
              color={"white"}
              sx={{
                textAlign: "left",
              }}
            >
              to easily maximize ROI, improve customer experience and seamlessly
              scale.
            </Typography>
          </Typography>

          <div
            style={{
              height: "100px",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <CustomButton1 label={"START FREE"} />
            <CustomButton label="BOOK DEMO" />
          </div>
        </div>
        <Box
          sx={{
            position: "absolute",
            height: "40vh",
            width: "50vw",
            ml: "50%",
            mt: "10%",
          }}
        >
          <Advertisement />
        </Box>
      </div>
    </>
  );
};
