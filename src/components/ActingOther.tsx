import { Stack, Typography } from "@mui/material";
import Project from "./Project";

export default function Other() {
  return (
    <Stack spacing={15}>
      <Project
        name={"Bet375 | Never Ordinary: Breaking News"}
        description={"Commercial"}
        info={"Directed by Jack Driscoll, 2024."}
        img={"./credits/bet.png"}
        side={"r"}
      />{" "}
      <Project
        name={"Shooting My Life's Script"}
        description={
          "Feature Film. Jasmin's single Volta e Meia is in the soudtrack of this movie."
        }
        info={"Directed by Pedro Antônio, 2022."}
        img={"./credits/fmf.png"}
        side={"l"}
      />
    </Stack>
  );
}
