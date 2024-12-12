import { Stack, Typography } from "@mui/material";
import Project from "./Project";

export default function TvAndFilm() {
  return (
    <Stack spacing={15}>
      <Project
        name={"The Fox Sisters"}
        description={"Feature Film."}
        info={"Directed by Wagner de Assis, 2023."}
        img={"./credits/fox.jpeg"}
        side={"r"}
      />
      <Project
        name={"Funny Little Stories (5X Comédia)"}
        description={
          "Amazon Prime series. Five independent stories centering on a theme of isolation."
        }
        info={"Directed by Rafael Primot, 2021."}
        img={"./credits/5x.jpg"}
        side={"l"}
      />
      <Project
        name={"The Trial"}
        description={"Short Film."}
        info={"Directed by Jordy Wouda, 2021."}
        img={"./credits/Trial.jpeg"}
        side={"r"}
      />
      <Project
        name={"A Hora Que Me Esvaí"}
        description={
          "Short Film. Vanessa is a psychology student in the last period of college who lives in the hope of, one day, better understanding the disorder that would have led her mother to commit suicide, depression. What she did not expect is that, when trying to balance the most diverse events in her life, such as her father's alcoholism, her relationship and the pressure to deliver her thesis, she would find, in herself, the answers she sought so much."
        }
        info={"Directed by Lara Rodi, 2019."}
        img={"./credits/esvai.jpg"}
        side={"l"}
      />
      <Project
        name={"Jardim de Pedras"}
        description={
          "Short Film. In this non-verbal short, Jasmin plays the main girl stuck in a house and with her own thoughts and personal nightmares."
        }
        info={"Directed by João Gabriel Almeida, 2019."}
        img={"./credits/jardim.jpeg"}
        side={"r"}
      />
    </Stack>
  );
}
