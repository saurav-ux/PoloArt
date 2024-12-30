import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Alive1 from "./alive1.png";
import ImgModal from "./ImgModal";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 100,
  lineHeight: "100px",
  width: 200,
  margin: "auto", // Center items horizontally
}));

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

export default function Details() {
     const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
    return (
      <>
    <Grid
      container
      justifyContent="center" // Center the grid items horizontally
      alignItems="center" // Center the grid items vertically
    >
      {[lightTheme].map((theme, index) => (
        <Grid item xs={12} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: "background.default",
                display: "grid",
                gridTemplateColumns: { md: "1fr 1fr 1fr 1fr 1fr" },
                justifyContent: "center", // Align the grid cells horizontally
                gap: 2,
              }}
            >
              {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  <img
                    src={Alive1}
                    alt={`elevation=${elevation}`}
                          style={{ maxWidth: "100%", maxHeight: "100%" }
                          }
                          onClick={handleOpen}
                  />
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
      </Grid>
            <ImgModal open={open} setOpen={ setOpen} />
            </>
  );
}
