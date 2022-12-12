import { MovieItem } from "../MovieItem/index.jsx"
import { Container } from "./style.js"

const MOVIE_MOCK = [
    {
      title: "Exemplo1",
      sumary: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o fantasma é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As missões Lázaro enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.",
      score: 4,
      tags: ["tag1", "tag2"]
    },
  
    {
      title: "Exemplo2",
      sumary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, consectetur provident quae quam porro modi voluptatibus eos quo dolore consequatur praesentium facilis, tempore dicta. Dolores delectus enim quasi nihil id",
      score: 2,
      tags: ["tag1", "tag3"]
    },

    {
        title: "Exemplo3",
        sumary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, consectetur provident quae quam porro modi voluptatibus eos quo dolore consequatur praesentium facilis, tempore dicta. Dolores delectus enim quasi nihil id",
        score: 2,
        tags: ["tag1", "tag3"]
    },

    {
        title: "Exemplo4",
        sumary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, consectetur provident quae quam porro modi voluptatibus eos quo dolore consequatur praesentium facilis, tempore dicta. Dolores delectus enim quasi nihil id",
        score: 2,
        tags: ["tag1", "tag3"]
      }
  ]

export function MovieList () {
    return (
        <Container>
           {MOVIE_MOCK.map((data, index) => {
                return <MovieItem key={index} {...data} />
            })}
        </Container>
    )
}

export function MovieDetailsList() {
  return (
      <Container>
         {MOVIE_MOCK.map((data, index) => {
              return <MovieDetailItem key={index} {...data} />
          })}
      </Container>
  )
}