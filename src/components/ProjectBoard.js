import React from "react";
import { Grid, Box, Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProjectBoard = () => {
  const columns = [
    {
      title: "Work in Progress",
      cards: [
        {
          project: "Project 1",
          serialNo: 1,
        },
        {
          project: "Project 2",
          serialNo: 2,
        },
      ],
    },
    {
      title: "Under Review",
      cards: [
        {
          project: "Project 3",
          serialNo: 3,
        },
        {
          project: "Project 4",
          serialNo: 4,
        },
      ],
    },
    {
      title: "Completed",
      cards: [
        {
          project: "Project 5",
          serialNo: 5,
        },
        {
          project: "Project 6",
          serialNo: 6,
        },
      ],
    },
  ];

  return (
    <Grid container spacing={2} marginTop={'100px'} marginLeft={'130px'} width={'1000px'}>
      {columns.map((column) => (
        <Grid item xs={4} key={column.title}>
          <Box
            sx={{
              border: "1px solid black",
              borderRadius: 5,
              padding: 10,
            }}
          >
            <Typography variant="h6">{column.title}</Typography>
            {column.cards.map((card) => (
              <Card key={card.project} sx={{ margin: 5 }}>
                <Link to={`/kanban/${card.serialNo}`}>
                  <Typography variant="body1">{card.project}</Typography>
                </Link>
              </Card>
            ))}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectBoard;
