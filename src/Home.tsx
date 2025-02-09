import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import theme from "./theme";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export default function Home() {
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "transparent",
      }}
    >
      <Typography
        textAlign={"center"}
        sx={{
          fontFamily: "Lora",
          fontWeight: "bold",
          fontSize: "7rem",
          color: "white",
          pt: isDesktop ? 28 : 10,
          lineHeight: 1,
          position: "relative",
        }}
      >
        {"Jasmin Cortez"}
      </Typography>
      <Typography
        textAlign={"center"}
        sx={{
          textTransform: "uppercase",
          fontSize: "1.25rem",
          fontWeight: "bold",
          mb: 18,
          color: "white",
          position: "relative",
        }}
      >
        {"actor, vo artist & singer-songwriter"}
      </Typography>
      {/* Buttons for Spotlight and Elenco Digital */}
      <Stack direction={"row"} justifyContent={"center"} spacing={2}>
        {/* Spotlight */}
        <Button
          target="_blank"
          component="a"
          href="https://www.spotlight.com/1719-1271-5115"
          sx={{
            color: theme.palette.font.main,
            minWidth: 0,
          }}
        >
          <img
            src="https://staticassets.spotlight.com/spotlight-logo-colored.svg"
            alt="icon"
            style={{
              width: 70,
            }}
          />
        </Button>
        {/* Elenco Digital */}
        <Button
          target="_blank"
          component="a"
          href="https://elencodigital.com.br/JasminCortez"
          sx={{
            color: theme.palette.font.main,
            minWidth: 0,
          }}
        >
          <img
            src="https://i.pinimg.com/originals/41/01/33/410133be212eb1ef8d57bd4cb2d8cf1c.png"
            alt="icon"
            style={{
              width: 70,
            }}
          />
        </Button>
      </Stack>
      <Container sx={{ mt: 35, pb: 10 }}>
        {/* Reels Buttons*/}
        <Stack spacing={4} alignItems={"start"} sx={{ mb: 5 }}>
          {/* Actings Reel */}
          <Button
            target="_blank"
            component="a"
            href="https://youtu.be/lCz3bbNA_mM"
            sx={{
              color: theme.palette.font.main,
              minWidth: 0,
              fontSize: 20,
              fontWeight: "normal",
            }}
          >
            <PlayCircleIcon sx={{ width: 60, height: 60, mr: 2 }} /> Watch my
            acting reel
          </Button>
          {/* Musical Reel */}
          <Button
            target="_blank"
            component="a"
            href="https://youtu.be/zIbHtecJg9w?si=XckZ5NTvtIUGnNDV"
            sx={{
              color: theme.palette.font.main,
              minWidth: 0,
              fontSize: 20,
              fontWeight: "normal",
            }}
          >
            <PlayCircleIcon sx={{ width: 60, height: 60, mr: 2 }} />
            Watch my musical theatre reel
          </Button>
        </Stack>
        <Typography textAlign={"justify"}>
          <br />
          {
            "Jasmin is a Brazilian-German actor, VO artist and singer-songwriter."
          }
          <br />
          {
            "After graduating with a leading role from CAL drama school, in the city of Rio de Janeiro - Brazil, Jasmin was in the supporting cast for feature film Fox Sisters (2023) and prime video's 5x Comédia (2021). "
          }
          <br />
          {
            "She had her theatre debut in Pentesiléia (2020) and entered the international theatre scene in the main cast of the musical Monstersongs (2022) and the play Noir Suspicions (2022) in Amsterdam. Outside of theatre and film, Jasmin has also been in commercials, most recently in Bet365's Never Ordinary campaign (2023). "
          }
          <br />
          {
            "In the voice acting world, they have been a founding cast member and producer in MythBringers's action play project (2024, ongoing)."
          }
          <br />
          {
            "Jasmin started studying musical theatre at 13 and followed that starring in Frozen - Uma Aventura Musical (2018)."
          }
          <br />
          {
            "Their's single Volta e Meia is featured in prime video's Making My Life's Script."
          }
        </Typography>
      </Container>
      {/* TODO change direction to collumn on mobile and size to 100% */}
      <Stack
        direction={"row"}
        justifyContent={"center"}
        spacing={3}
        sx={{ pb: 10 }}
      >
        <img src="./credits/Medusa.JPG" width="50%" />
        <img src="./credits/Pentesileia.JPG" width="50%" />
      </Stack>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          target="_blank"
          href="https://pdfhost.io/v/DnO~rawyK_Jasmin_Cortez_Acting_CV"
          sx={{
            color: theme.palette.font.main,
            minWidth: 0,
            fontSize: 20,
            fontWeight: "normal",
            mb: 10,
          }}
        >
          view my CV
        </Button>
      </Box>
    </Box>
  );
}
