import React from 'react'
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  Box,
  Link,
  Stack,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function CopyRight() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"CopyRight © "}
      <Link color="inherit" href="#">
        Dummy Link
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const theme = createTheme();

export default function Albums() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6" color="inherit">
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* hero */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              // untuk menumpuk sesuatu, misal tombol
              sx={{ pt: 4 }}
              // styling langsung dalam componen material ui
              direction="row"
              // arah flex
              spacing={2}
              // jarak antara children
              justifyContent="center"
              // susunan flex
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        {/* hero */}
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    // sx={{ pt: "56.25%" }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Box sx={{ bgcolor: "Background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footerr
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <CopyRight />
      </Box>
    </ThemeProvider>
  )
}
