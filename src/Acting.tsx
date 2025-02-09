import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import theme from "./theme";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ActingFooter from "./components/ActingFooter";
import MusicalTheatre from "./components/ActingMusicalTheatre";
import Other from "./components/ActingOther";
import Theatre from "./components/ActingTheatre";
import TvAndFilm from "./components/ActingTvAndFilm";
import { useState } from "react";

type Tab = "theatre" | "tv" | "musicals" | "other";

export default function Acting() {
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const [tab, setTab] = useState<Tab>("tv");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Stack
        direction={"row"}
        spacing={isDesktop ? 4 : 2}
        sx={{ justifyContent: "center", mb: 5, mt: isDesktop ? 15 : 5 }}
      >
        <Button
          variant="contained"
          onClick={() => setTab("tv")}
          sx={{
            color: theme.palette.font.main,
            minWidth: 0,
            fontSize: 20,
            fontWeight: "normal",
            mb: 10,
          }}
        >
          TV and Film
        </Button>
        <Button
          variant="contained"
          onClick={() => setTab("theatre")}
          sx={{
            color: theme.palette.font.main,
            minWidth: 0,
            fontSize: 20,
            fontWeight: "normal",
            mb: 10,
          }}
        >
          Theatre
        </Button>
        <Button
          variant="contained"
          onClick={() => setTab("musicals")}
          sx={{
            color: theme.palette.font.main,
            minWidth: 0,
            fontSize: 20,
            fontWeight: "normal",
            mb: 10,
          }}
        >
          Musical Theatre
        </Button>
        <Button
          variant="contained"
          onClick={() => setTab("other")}
          sx={{
            color: theme.palette.font.main,
            minWidth: 0,
            fontSize: 20,
            fontWeight: "normal",
            mb: 10,
          }}
        >
          Other
        </Button>
      </Stack>

      <Typography textAlign={"justify"} sx={{ fontSize: "1rem", mb: 5 }}>
        {
          "Here are some highlights of projects I was in. For more credits and information, you can view my cv as a PDF, in Spotlight (EN) or in Elenco Digital (PT)."
        }
      </Typography>
      {/* Reels Buttons*/}
      <Stack direction={"row"} spacing={3} alignItems={"start"} sx={{ mb: 5 }}>
        {/* Actings Reel */}
        <Button
          target="_blank"
          component="a"
          href="https://youtu.be/lCz3bbNA_mM"
          sx={{
            color: theme.palette.font.main,
            minWidth: 0,
            fontSize: 15,
            fontWeight: "normal",
          }}
        >
          <PlayCircleIcon sx={{ width: 40, height: 40, mr: 2 }} />
          Acting reel
        </Button>
        {/* Musical Reel */}
        <Button
          target="_blank"
          component="a"
          href="https://youtu.be/zIbHtecJg9w?si=XckZ5NTvtIUGnNDV"
          sx={{
            color: theme.palette.font.main,
            minWidth: 0,
            fontSize: 15,
            fontWeight: "normal",
          }}
        >
          <PlayCircleIcon sx={{ width: 40, height: 40, mr: 2 }} />
          Musical Theatre reel
        </Button>
      </Stack>

      <Divider flexItem sx={{ mb: 5 }} />

      {tab === "theatre" && <Theatre />}
      {tab === "tv" && <TvAndFilm />}
      {tab === "musicals" && <MusicalTheatre />}
      {tab === "other" && <Other />}

      <ActingFooter />
    </Box>
  );
}
