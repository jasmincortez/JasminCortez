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
              width: 80,
            }}
          />
        </Button>
        {/* Elenco Digital */}
        {/* <Button
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
        </Button> */}
      </Stack>
      <Container sx={{ mt: "100vh", pb: 10 }}>
        {/* Reels Buttons*/}
        <Stack spacing={4} alignItems={"start"} sx={{ mb: 5 }}>
          {/* Actings Reel */}
          <Button
            target="_blank"
            component="a"
            href="https://youtu.be/SgsGffDwF-8"
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
            "Jasmin Cortez (they/she) is a Brazilian-German actor, voice actor and mezzo-soprano singer-songwriter, raised speaking both fluent English (US) and Portuguese (BR)."
          }
          <br />
          {
            "Having started their studies in musical theatre at a young age, Jasmin graduated from Casa das Artes de Laranjeiras drama school in Rio de Janeiro, Brazil."
          }
          <br />
          {
            "Entering the international acting scene in Amsterdam, Jasmin starred in some local productions until moving to London."
          }
          <br />
          {
            "With a passion for both screen and stage, she has worked in musical theatre, commercials, feature and short films and stage theatre."
          }
          <br />
          {
            "Recently, Jasmin entered the voice acting world through Actual Plays of the TTRPG Dungeons&Dragons, both as a player and a Game Master. "
          }
          <br />
          {
            "Since then, they have worked on audiobooks, and dreams of voicing characters for the gaming industry."
          }
          <br />
          {
            "Loving fantasy worlds, TTRPGs, nature and art, Jasmin looks to combine it all creating works that touch people's hearts."
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
          href="https://drive.google.com/file/d/1jEECSwxuo6ICswpQ0zhZhqy-S3Q1Wmdr/view?usp=sharing"
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
