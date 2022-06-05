import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SaveIcon from "@mui/icons-material/Save";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function MuiPaper() {
  return (
    <Paper sx={{ margin: "30px", padding: "30px" }} elevation={4}>
      <Stack>
        <Grid container my={4} rowSpacing={1} columnSpacing={4}>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Box bgcolor="primary.light" p={2}>
              Item 1
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Box bgcolor="primary.light" p={2}>
              Item 2
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Box bgcolor="primary.light" p={2}>
              Item 3
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Box bgcolor="primary.light" p={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>
      </Stack>
      <Box width="300px">
        <Card color="secondary">
          <CardMedia
            component="img"
            height="140"
            image="https://source.unsplash.com/random"
            alt="unsplash random images"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Test card
            </Typography>
            <Typography variant="body2" color="text.secondary">
              im using card for test...
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" color="error">
              Cancel
            </Button>
            <Button variant="contained" color="success">
              Save
            </Button>
          </CardActions>
        </Card>
      </Box>
      <Stack
        p={2}
        my={4}
        width="100%"
        display="flex"
        flex-direction="row"
        justifyContent="center"
        alignItems="center"
        bgcolor="secondary"
      ></Stack>

      <Grid
        container
        my={2}
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={8} md={6} lg={3}>
          <Box width="250px" sx={{ margin: "0 auto" }}>
            <Card>
              <CardMedia
                component="img"
                height="250px"
                image="https://source.unsplash.com/random"
                alt="unsplash random images"
              />
              <CardContent>
                <Typography variant="h5">Item 1</Typography>
                <Typography variant="body2">
                  Using unsplash random and Grid...
                </Typography>
              </CardContent>
              <CardActions>
                <Stack
                  width="100%"
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Button>
                    <FavoriteIcon color="error" />
                  </Button>
                  <Button>
                    <SaveIcon />
                  </Button>
                </Stack>
              </CardActions>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={3}>
          <Box width="250px" sx={{ margin: "0 auto" }}>
            <Card>
              <CardMedia
                component="img"
                height="250px"
                image="https://source.unsplash.com/random"
                alt="unsplash random images"
              />
              <CardContent>
                <Typography variant="h5">Item 2</Typography>
                <Typography variant="body2">
                  Using unsplash random and Grid...
                </Typography>
              </CardContent>
              <CardActions>
                <Stack
                  width="100%"
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Button>
                    <FavoriteIcon color="error" />
                  </Button>
                  <Button>
                    <SaveIcon />
                  </Button>
                </Stack>
              </CardActions>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={3}>
          <Box width="250px" sx={{ margin: "0 auto" }}>
            <Card>
              <CardMedia
                component="img"
                height="250px"
                image="https://source.unsplash.com/random"
                alt="unsplash random images"
              />
              <CardContent>
                <Typography variant="h5">Item 3</Typography>
                <Typography variant="body2">
                  Using unsplash random and Grid...
                </Typography>
              </CardContent>
              <CardActions>
                <Stack
                  width="100%"
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Button>
                    <FavoriteIcon color="error" />
                  </Button>
                  <Button>
                    <SaveIcon />
                  </Button>
                </Stack>
              </CardActions>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={3}>
          <Box width="250px" sx={{ margin: "0 auto" }}>
            <Card>
              <CardMedia
                component="img"
                height="250px"
                image="https://source.unsplash.com/random"
                alt="unsplash random images"
              />
              <CardContent>
                <Typography variant="h5">Item 4</Typography>
                <Typography variant="body2">
                  Using unsplash random and Grid...
                </Typography>
              </CardContent>
              <CardActions>
                <Stack
                  width="100%"
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Button>
                    <FavoriteIcon color="error" />
                  </Button>
                  <Button>
                    <SaveIcon />
                  </Button>
                </Stack>
              </CardActions>
            </Card>
          </Box>
        </Grid>
      </Grid>
      <Stack my={4}>
        <Accordion>
          <AccordionSummary id="panel1-content" expandIcon={<ExpandMoreIcon />}>
            Accordion 1
          </AccordionSummary>
          <AccordionDetails>testtttttttttttttttttttttttttttt</AccordionDetails>
        </Accordion>
      </Stack>
    </Paper>
  );
}
