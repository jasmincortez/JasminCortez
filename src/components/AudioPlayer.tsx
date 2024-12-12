import { useState } from "react";
import WavesurferPlayer from "@wavesurfer/react";
import WaveSurfer from "wavesurfer.js";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import RepeatIcon from "@mui/icons-material/Repeat";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import DownloadIcon from "@mui/icons-material/Download";

export interface AudioPlayerProps {
  src: string;
  title: string;
  subtitle: string;
  waveColor?: string;
}

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const secondsRemainder = Math.round(seconds) % 60;
  const paddedSeconds = `0${secondsRemainder}`.slice(-2);
  return `${minutes}:${paddedSeconds}`;
};

export default function AudioPlayer(props: AudioPlayerProps) {
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState("--:--");
  const [time, setTime] = useState("0:00");

  const onReady = (ws: WaveSurfer) => {
    setWavesurfer(ws);
    setIsPlaying(false);
  };

  const onPlayPause = () => {
    wavesurfer && wavesurfer.playPause();
  };

  const onClickRepeat = () => {
    wavesurfer && wavesurfer.setTime(0);
  };

  return (
    <Paper
      sx={{ display: "flex", flexDirection: "column", p: 2, borderRadius: 2 }}
    >
      <Typography component="div" variant="h5">
        {props.title}
      </Typography>
      <Typography
        variant="subtitle1"
        component="div"
        sx={{ color: "text.secondary" }}
      >
        {props.subtitle}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton aria-label="previous" onClick={onClickRepeat}>
          <RepeatIcon />
        </IconButton>
        <IconButton aria-label="play/pause" onClick={onPlayPause}>
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
        <Typography sx={{ minWidth: 40, mx: 1, textAlign: "center" }}>
          {time}
        </Typography>
        <WavesurferPlayer
          height={40}
          width={128} // Mobile-friendly
          waveColor={props.waveColor || "violet"}
          url={props.src}
          onReady={onReady}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onDecode={(ws) => setDuration(formatTime(ws.getDuration()))}
          onTimeupdate={(ws) => setTime(formatTime(ws.getCurrentTime()))}
        />
        <Typography sx={{ minWidth: 40, mx: 1, textAlign: "center" }}>
          {duration}
        </Typography>
        <a href={props.src} target="_blank" download>
          <IconButton aria-label="next">
            <DownloadIcon />
          </IconButton>
        </a>
      </Box>
    </Paper>
  );
}
