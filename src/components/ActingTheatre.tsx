import { Stack, Typography } from "@mui/material";
import Project from "./Project";

export default function Theatre() {
  return (
    <Stack spacing={15}>
      <Project
        name={"Noir Suspicions"}
        description={
          "Starring as Sheila, a mysterious femme fatale, Jasmin had her Amsterdam theatre debut in this hard-boiled comic mystery. This is a fine tribute to Casablanca and contains many references to that classic."
        }
        info={"Directed by Christine Blakeley, 2022."}
        img={"./credits/Noir.JPG"}
        side={"r"}
      />
      <Project
        name={"Pentesiléia"}
        description={
          "Starring as the queen of the Amazons, Pentesiléia, Jasmin also had the pleasure of writting the opening song for this intense drama. Taking place during the Trojan War, Pentesiléia explores grief, love, leadership and family. "
        }
        info={"Directed by Renato Carrera, 2020."}
        img={"./credits/Pentesileia.JPG"}
        side={"l"}
      />
      <Project
        name={"Estamos Progredindo"}
        description={
          "Exploring the movement that originated in Europe, the Theatre of the Absurd, Estamos Progredindo (EN: We're Pregressing) is a collection of many authors and plays."
        }
        info={"Directed by Ticiana Studart, 2019."}
        img={"./credits/Progredindo.JPG"}
        side={"r"}
      />
      <Project
        name={"Aurora da Minha Vida"}
        description={
          "A Aurora da Minha Vida is a play by Naum Alves de Souza that tells the story of an old classroom. The story shows the relationships and conflicts within a repressive and undemocratic school system in a light and satirical way. Teachers, students, personalities, morals, oppression and desire for freedom, reflecting Brazilian politics of the time."
        }
        info={"Directed by Luiz Furlaneto, 2019."}
        img={"./credits/Aurora.JPG"}
        side={"l"}
      />
      <Project
        name={"Teatro Decomposto"}
        description={
          "Decomposed Theatre is a modular play by Romanian playwright Matéi Vișniec that explores the challenges of coping with major change and crisis. The play is made up of short pieces that can be arranged in any order, similar to a series of short stories. The play's themes include the disruptive effects of three plagues on a community and Jasmin played the Butterfly Crazy-Lady plague. "
        }
        info={"Directed by Marcos França, 2019."}
        img={"./credits/Decomposto.JPG"}
        side={"r"}
      />
      <Project
        name={"Depois da Queda"}
        description={
          "Depois da Queda (EN: After the Fall), is one of Arthur Miller's more personal plays, is a thinly veiled personal critique centered on Miller's recent divorce from Marilyn Monroe: the plot takes place inside the mind of Quentin, a New York City Jewish intellectual who decides to reexamine his life, in order to determine whether or not he should marry his most recent love, Holga, played by Jasmin."
        }
        info={"Directed by Ticiana Studart, 2018."}
        img={"./credits/Queda.JPG"}
        side={"l"}
      />
    </Stack>
  );
}
