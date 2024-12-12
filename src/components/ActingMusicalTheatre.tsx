import { Stack, Typography } from "@mui/material";
import Project from "./Project";

export default function MusicalTheatre() {
  return (
    <Stack spacing={15}>
      <Project
        name={"Monstersongs"}
        description={
          "Starring as Medusa, Jasmin had her Amsterdam musical theatre debut in this project. Monstersongs is a unique piece of theatre synthesizing a graphic novel of immersive detailed artwork/projections and a rock album- all from the point of view of misunderstood monsters."
        }
        info={"Directed by Michael Crowley, 2022."}
        img={"./credits/Medusa.JPG"}
        side={"r"}
      />
      <Project
        name={"Waitress (workshop)"}
        description={
          "Jasmin starred as Jenna in this workshop of the hit broadway musical Waitress."
        }
        info={"Directed by Sara Watts, 2022."}
        img={"./credits/Waitress.jpeg"}
        side={"l"}
      />
      <Project
        name={"Frozen - Uma Aventura Musical"}
        description={
          "Starring as Elsa in this unofficial production of Disney's Frozen."
        }
        info={"Directed by Alex Roger, 2018."}
        img={"./credits/Frozen.jpeg"}
        side={"r"}
      />
      <Project
        name={"Alice no País das Maravilhas"}
        description={"A musical version of the classic Alice in Wonderland."}
        info={"Directed by Simone Frota, 2017."}
        img={"./credits/Alice.jpeg"}
        side={"l"}
      />
    </Stack>
  );
}
