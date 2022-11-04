"use client"; //para poder usar material, este componente es side client

import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Team } from "../../models";

interface IProps {
  teams: Team[];
}

export default function TeamList({ teams }: IProps) {
  const [onDisplay, setOnDisplay] = useState<Team[]>(teams.slice(0, 10));
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 5,
            justifyContent: "center",
          }}
        >
          {onDisplay.map((team) => (
            <Card
              key={team.id}
              sx={{ marginTop: 5, width: "100%", maxWidth: 300 }}
            >
              <CardHeader title={team.name} />
              <CardMedia
                sx={{ height: 120, objectFit: "contain" }}
                component="img"
                image={team.crestUrl}
                alt={team.name}
              />
              <CardContent></CardContent>
            </Card>
          ))}
        </Box>

        <Box sx={{ marginTop: 10 }}>
          <Stack spacing={2}>
            <Pagination
              sx={{ display: "flex", justifyContent: "center" }}
              size="large"
              count={teams.length}
              onChange={(e, page) => {
                console.log("page: ", page);
                setOnDisplay(teams.slice(page, +10));
              }}
            />
          </Stack>
        </Box>
      </Box>
    </>
  );
}
