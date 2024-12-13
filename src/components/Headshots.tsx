import theme from "@/theme";
import { Button, Stack, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import { PhotoProvider, PhotoView } from "react-photo-view";

export default function Headshots() {
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "Playfair Display",
          fontSize: "3rem",
          mt: isDesktop ? 15 : 5,
          mb: 5,
        }}
      >
        Headshots
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "left", mb: 5 }}>
        <Stack direction={"row"} spacing={2}>
          <Button
            variant="contained"
            target="_blank"
            href="https://pdfhost.io/v/DnO~rawyK_Jasmin_Cortez_Acting_CV"
            sx={{
              color: theme.palette.font.main,
              minWidth: 0,
              fontSize: 15,
              fontWeight: "normal",
            }}
          >
            PDF CV
          </Button>
          <Button
            variant="contained"
            target="_blank"
            href="https://app.spotlight.com/1719-1271-5115"
            sx={{
              color: theme.palette.font.main,
              minWidth: 0,
              fontSize: 15,
              fontWeight: "normal",
            }}
          >
            Spotlight CV
          </Button>
          <Button
            variant="contained"
            target="_blank"
            href="https://elencodigital.com.br/JasminCortez"
            sx={{
              color: theme.palette.font.main,
              minWidth: 0,
              fontSize: 15,
              fontWeight: "normal",
            }}
          >
            Elenco Digital CV
          </Button>
        </Stack>
      </Box>

      <PhotoProvider>
        <ImageList cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <PhotoView src={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  width={"100%"}
                />
              </PhotoView>
            </ImageListItem>
          ))}
        </ImageList>
      </PhotoProvider>
    </Box>
  );
}

const itemData = [
  {
    title: "headshot",
    img: "./headshots/hs1.JPEG",
  },
  {
    title: "headshot",
    img: "./headshots/hs7.JPEG",
  },
  {
    title: "headshot",
    img: "./headshots/hs11.JPEG",
  },
  {
    title: "headshot",
    img: "./headshots/hs9.JPEG",
  },
  {
    title: "headshot",
    img: "./headshots/hs12.JPEG",
  },
  {
    title: "headshot",
    img: "./headshots/hs4.JPEG",
  },

  {
    title: "headshot",
    img: "./headshots/hs2.JPEG",
  },
  {
    title: "headshot",
    img: "./headshots/hs3.JPEG",
  },
  {
    title: "headshot",
    img: "./headshots/hs10.JPEG",
  },
  {
    title: "headshot",
    img: "./headshots/hs14.JPEG",
  },

  {
    title: "headshot",
    img: "./headshots/hs8.JPEG",
  },
  {
    title: "headshot",
    img: "./headshots/hs6.JPEG",
  },

  {
    title: "headshot",
    img: "./headshots/hs13.JPEG",
  },
  {
    title: "headshot",
    img: "./headshots/hs5.JPEG",
  },
  {
    title: "headshot",
    img: "./headshots/old1.JPG",
  },
  {
    title: "headshot",
    img: "./headshots/old2.JPG",
  },
  {
    title: "headshot",
    img: "./headshots/old3.JPG",
  },
  {
    title: "headshot",
    img: "./headshots/old4.JPG",
  },
  {
    title: "headshot",
    img: "./headshots/old5.jpeg",
  },
  {
    title: "headshot",
    img: "./headshots/old6.jpg",
  },
  {
    title: "headshot",
    img: "./headshots/me.jpeg",
  },
];
