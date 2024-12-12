import { Avatar, Box, Stack, Typography, useMediaQuery } from "@mui/material";
import theme from "./theme";
import AudioPlayer from "@/components/AudioPlayer";

export default function Voice() {
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const SLIDE_WIDTH = isDesktop ? 288 : 160;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        alignItems={"center"}
        sx={{
          mt: 15,
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src="./AvatarVoice.jpeg"
          sx={{ width: 120, height: 120 }}
        />
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "3rem",
            lineHeight: 1,
          }}
        >
          {"Voice Actor & Singer"}
        </Typography>
      </Stack>
      <Typography
        textAlign={"justify"}
        sx={{ fontSize: "1.25rem", mb: 5, mt: -5, fontWeight: "bold" }}
      >
        <br />
        {"Warm, professional, clear voice."}
      </Typography>
      <Typography
        textAlign={"justify"}
        sx={{ fontSize: "1.25rem", mb: 5, mt: -5 }}
      >
        {"Native Portuguese and English speaker."}
        <br />
        {
          "Experienced in many areas of voiceover such as; video games, action play, commercial, corporate, e-learning and radio dramas… to name a few."
        }
      </Typography>
      <Stack
        direction={isDesktop ? "row" : "column"}
        spacing={3}
        sx={{ mb: 6 }}
      >
        {/* EN Audios */}
        <Stack direction={"column"} spacing={2}>
          <AudioPlayer
            src="voice/Gaming_EN.mp3"
            title="Gaming Demo"
            subtitle="English"
          />
          <AudioPlayer
            src="voice/Corporate_EN.mp3"
            title="Corporate Demo"
            subtitle="English"
          />
          <AudioPlayer
            src="voice/Commercial_EN.mp3"
            title="Commercial Demo"
            subtitle="English"
          />
          <AudioPlayer
            src="voice/Narration_EN.mp3"
            title="Narration Demo"
            subtitle="English"
          />
        </Stack>
        {/* PT Audios */}
        <Stack direction={"column"} spacing={2}>
          <AudioPlayer
            src="voice/Gaming_PT.mp3"
            title="Demo Gaming"
            subtitle="Português"
            waveColor="green"
          />
          <AudioPlayer
            src="voice/Corporate_PT.mp3"
            title="Demo Corporativo"
            subtitle="Português"
            waveColor="green"
          />
          <AudioPlayer
            src="voice/Comercial_PT.mp3"
            title="Demo Comercial"
            subtitle="Português"
            waveColor="green"
          />
          <AudioPlayer
            src="voice/Narration_PT.mp3"
            title="Demo Narração"
            subtitle="Português"
            waveColor="green"
          />
        </Stack>
      </Stack>
    </Box>
  );
}
