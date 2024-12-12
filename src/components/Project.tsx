import theme from "@/theme";
import { Stack, Typography, useMediaQuery } from "@mui/material";

interface ProjectProps {
  name: string;
  description: string;
  info: string;
  img: string;
  side: "l" | "r";
}

export default function Project(props: ProjectProps) {
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Stack
      direction={
        isDesktop ? (props.side === "r" ? "row" : "row-reverse") : "column"
      }
      spacing={8}
      justifyContent={"center"}
    >
      {/* Text */}
      <Stack direction={"column"} spacing={4}>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "2.5rem",
            lineHeight: 1,
          }}
        >
          {props.name}
        </Typography>
        <Typography
          sx={{
            fontSize: "1rem",
            lineHeight: 1,
          }}
        >
          {props.description}
        </Typography>
        <Typography
          sx={{
            fontSize: "1rem",
            lineHeight: 1,
          }}
        >
          {props.info}
        </Typography>
      </Stack>
      <img src={props.img} width="55%" />
    </Stack>
  );
}
