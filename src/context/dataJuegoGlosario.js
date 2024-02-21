import felizManos from "../assets/emojis/Emojis-04.svg";
import felizGino from "../assets/emojis/Emojis-02.svg";
import felizCumple from "../assets/emojis/Emojis-03.svg";
import mal from "../assets/emojis/Emojis-07.svg";
import malgino from "../assets/emojis/Emojis-05.svg";
import malsorpresa from "../assets/emojis/Emojis-06.svg";

export const startInfo = {
  title: "LA DIVERSIDAD EN JUEGO",
  txt: "¿De qué hablamos cuando hacemos referencia a personas LGBTIQ+? ¿Qué hay detrás de ese conjunto de letras?",
  txt2: "Este juego te invita a poner la diversidad en juego y a descubrir qué identidades y experiencias están representadas en esta sigla.",
};

export const finalMsjGlosario = {
  correcto:
    "“La identidad no es lo que sos o lo que te dicen que sos, es lo que estás siendo” (Marlene Wayar). Es una vivencia personal y colectiva a la vez y tenemos el derecho a construirla libremente, sin prejuicios ni discriminaciones. Tus respuestas dan cuenta que contás con información sobre el tema. De todos modos, te invitamos a descargar el glosario para tenerlo a mano y compartirlo con quienes desees:",
  incorrecto:
    "Las palabras que usamos cotidianamente para designar distintas prácticas, identidades y orientaciones sexuales, muchas veces están apoyadas en mitos y prejuicios. Te invitamos a <b>descargar este glosario</b> para que puedas informarte y compartirlo con quienes desees:",
};

export const dataGlosario = [
  {
    id: "L",
    title: "Lesbiana",
    icons: {
      acuerdo: [felizManos, felizGino, felizCumple],
      desacuerdo: [mal, malgino, malsorpresa],
    },
    afirmacion: [
      {
        frace: "“Las lesbianas son todas machonas”",
        acuerdo: {
          title: "Lesbiana",
          txt: "No existe una única manera de ser lesbiana",
        },
        desacuerdo: {
          title: "Lesbiana",
          txt: "No existe una única manera de ser lesbiana",
        },
      },
      {
        frace: "“Si sos lesbiana es porque no encontraste al hombre indicado”",
        acuerdo: {
          title: "Lesbiana",
          txt: "Formar pareja con un varón no es el único destino posible para las mujeres",
        },
        desacuerdo: {
          title: "Lesbiana",
          txt: "Formar pareja con un varón no es el único destino posible para las mujeres",
        },
      },
      {
        frace: "“Las lesbianas odian a los hombres”",
        acuerdo: {
          title: "Lesbiana",
          txt: "Formar pareja con un varón no es el único destino posible para las mujeres",
        },
        desacuerdo: {
          title: "Lesbiana",
          txt: "Formar pareja con un varón no es el único destino posible para las mujeres",
        },
      },
    ],
    valor: true,
    color: "rgb(228, 2, 3)",
    colorSoft: "rgba(228, 2, 3,0.7)",
  },
  {
    id: "G",
    title: "Gay",
    valor: true,
    name: "G",
    icons: {
      acuerdo: [felizManos, felizGino, felizCumple],
      desacuerdo: [mal, malgino, malsorpresa],
    },
    afirmacion: [
      {
        frace: "“Ser gay está de moda”",
        acuerdo: {
          title: "Gay",
          txt: "Las personas gays existen desde el comienzo de la humanidad",
        },
        desacuerdo: {
          title: "Gay",
          txt: "Las personas gays existen desde el comienzo de la humanidad",
        },
      },
      {
        frace:
          "En las parejas de dos hombres, siempre hay uno que “hace de hombre” y otro que “hace de mujer”",
        acuerdo: {
          title: "Gay",
          txt: "La orientación sexual no define la forma en que debemos comportarnos o cómo podemos interactuar con otras personas. La idea de la complementariedad de género en las parejas es un modo estereotipado de verlas",
        },
        desacuerdo: {
          title: "Gay",
          txt: "La orientación sexual no define la forma en que debemos comportarnos o cómo podemos interactuar con otras personas. La idea de la complementariedad de género en las parejas es un modo estereotipado de verlas",
        },
      },
      {
        frace: "“Los niños de parejas gays, también serán homosexuales”",
        acuerdo: {
          title: "Gay",
          txt: "Si esto fuese verdadero, los padres y madres de todas las personas gays que conocés serían también homosexuales… pensalo. La orientación del deseo no se define por quién o cómo nos criaron",
        },
        desacuerdo: {
          title: "Gay",
          txt: "Si esto fuese verdadero, los padres y madres de todas las personas gays que conocés serían también homosexuales… pensalo. La orientación del deseo no se define por quién o cómo nos criaron",
        },
      },
    ],
    valor: true,

    color: "rgba(255, 141, 1)",
    colorSoft: "rgba(255, 141, 1,.7)",
  },

  {
    id: "B",
    title: "Bisexual",
    icons: {
      acuerdo: [felizManos, felizGino, felizCumple],
      desacuerdo: [mal, malgino, malsorpresa],
    },
    afirmacion: [
      {
        frace:
          "“Las personas bisexuales no existen, es una etapa de la vida en la que estás un poco confundid@”",
        acuerdo: {
          title: "Bisexual",
          txt: "La bisexualidad es una identidad completa y fluida. No es una fase ni una dificultad para decidir",
        },
        desacuerdo: {
          title: "Bisexual",
          txt: "La bisexualidad es una identidad completa y fluida. No es una fase ni una dificultad para decidir",
        },
      },
      {
        frace: "“Las personas bisexuales son promiscuas”",
        acuerdo: {
          title: "Bisexual",
          txt: " La bisexualidad es una identidad completa y fluida. No debemos interpretar la fluidez como confusión, irresponsabilidad o falta de compromiso",
        },
        desacuerdo: {
          title: "Bisexual",
          txt: " La bisexualidad es una identidad completa y fluida. No debemos interpretar la fluidez como confusión, irresponsabilidad o falta de compromiso",
        },
      },
      {
        frace: "“Las personas bisexuales son gays encubiertos”",
        acuerdo: {
          title: "Bisexual",
          txt: " Las personas bisexuales no son 50% gays y 50% heterosexuales. Son 100% bisexuales",
        },
        desacuerdo: {
          title: "Bisexual",
          txt: " Las personas bisexuales no son 50% gays y 50% heterosexuales. Son 100% bisexuales",
        },
      },
    ],
    valor: true,

    color: "rgba(254, 237, 0)",
    colorSoft: "rgba(254, 237, 0,0.7)",
  },
  {
    id: "T",
    title: "Transgénero",
    icons: {
      acuerdo: [felizManos, felizGino, felizCumple],
      desacuerdo: [mal, malgino, malsorpresa],
    },
    afirmacion: [
      {
        frace: "“Es un hombre que se disfraza de mujer”",
        acuerdo: {
          title: "Transgénero",
          txt: "La identidad de género no es un disfraz. Las personas trans “no buscan parecerse al género opuesto” sino que expresan su identidad de género, su manera de ser en el mundo. Cada vivencia es única y personal",
        },
        desacuerdo: {
          title: "Transgénero",
          txt: "La identidad de género no es un disfraz. Las personas trans “no buscan parecerse al género opuesto” sino que expresan su identidad de género, su manera de ser en el mundo. Cada vivencia es única y personal",
        },
      },
      {
        frace: "“Son personas que tienen alguna patología”",
        acuerdo: {
          title: "Transgénero",
          txt: "Asociar la identidad de género travesti-trans con una enfermedad está vinculado con la creencia de que lo normal (y sano) son las personas cis y heterosexuales. Esta idea constituye una práctica discriminatoria y violenta. Toda expresión, identidad y orientación sexual es válida y forma parte de la diversidad",
        },
        desacuerdo: {
          title: "Transgénero",
          txt: "Asociar la identidad de género travesti-trans con una enfermedad está vinculado con la creencia de que lo normal (y sano) son las personas cis y heterosexuales. Esta idea constituye una práctica discriminatoria y violenta. Toda expresión, identidad y orientación sexual es válida y forma parte de la diversidad",
        },
      },
      {
        frace: "“Nacieron en el cuerpo equivocado”",
        acuerdo: {
          title: "Transgénero",
          txt: "Nadie nace en un cuerpo equivocado. Equivocado es pensar que lo que somos está determinado por la genitalidad",
        },
        desacuerdo: {
          title: "Transgénero",
          txt: "Nadie nace en un cuerpo equivocado. Equivocado es pensar que lo que somos está determinado por la genitalidad",
        },
      },
    ],
    valor: true,

    color: "rgba(0, 128, 36)",
    colorSoft: "rgba(0, 128, 36,0.7)",
  },
  {
    id: "I",
    title: "Intersexualidad",
    valor: true,
    icons: {
      acuerdo: [felizManos, felizGino, felizCumple],
      desacuerdo: [mal, malgino, malsorpresa],
    },
    afirmacion: [
      {
        frace: "“Es un trastorno que se llama hermafroditismo”",
        acuerdo: {
          title: "Intersexualidad",
          txt: "Muchas personas intersexuales cuando nacen son sometidas a intervenciones médicas “para adecuar el cuerpo”. Se trata de prácticas no urgentes, invasivas e irreversibles que constituyen una violación a sus derechos humanos",
        },
        desacuerdo: {
          title: "Intersexualidad",
          txt: "Muchas personas intersexuales cuando nacen son sometidas a intervenciones médicas “para adecuar el cuerpo”. Se trata de prácticas no urgentes, invasivas e irreversibles que constituyen una violación a sus derechos humanos",
        },
      },
      {
        frace: "“Los casos de personas intersex son muy raros”",
        acuerdo: {
          title: "Intersexualidad",
          txt: "Aproximadamente un 1,7% de la población mundial nace con rasgos intersex, un porcentaje similar a la cantidad de personas pelirrojas",
        },
        desacuerdo: {
          title: "Intersexualidad",
          txt: "Aproximadamente un 1,7% de la población mundial nace con rasgos intersex, un porcentaje similar a la cantidad de personas pelirrojas",
        },
      },
      {
        frace: "“Toda persona nace hombre o mujer”",
        acuerdo: {
          title: "Intersexualidad",
          txt: "No. Hay millones de personas que nacen con características sexuales que no se ajustan a nociones binarias de cuerpos masculinos o femeninos",
        },
        desacuerdo: {
          title: "Intersexualidad",
          txt: "No. Hay millones de personas que nacen con características sexuales que no se ajustan a nociones binarias de cuerpos masculinos o femeninos",
        },
      },
    ],

    color: "rgba(0, 76, 255)",
    colorSoft: "rgba(0, 76, 255,0.7)",
  },
  {
    id: "Q",
    title: "Queer",
    icons: {
      acuerdo: [felizManos, felizGino, felizCumple],
      desacuerdo: [mal, malgino, malsorpresa],
    },
    name: "Plan de Vacunacion",
    afirmacion: [
      {
        frace:
          "“Ser queer o no binario es algo intermedio entre ser mujer y ser varón”",
        acuerdo: {
          title: "Queer",
          txt: "No hay una sola forma de serlo y cada experiencia queer o no binaria es única, personal y distinta",
        },
        desacuerdo: {
          title: "Queer",
          txt: "No hay una sola forma de serlo y cada experiencia queer o no binaria es única, personal y distinta",
        },
      },
      {
        frace: "“Ser queer o no binario es un tercer género”",
        acuerdo: {
          title: "Queer",
          txt: "La identidad siempre está en construcción y en movimiento. Tiene un montón de facetas, y las personas queers o no binarias no buscan generar una tercera identidad estanca",
        },
        desacuerdo: {
          title: "Queer",
          txt: "La identidad siempre está en construcción y en movimiento. Tiene un montón de facetas, y las personas queers o no binarias no buscan generar una tercera identidad estanca",
        },
      },
      {
        frace: "“Es imposible no ser hombre ni mujer”",
        acuerdo: {
          title: "Queer",
          txt: "“Se entiende por identidad de género a la vivencia interna e individual del género tal como cada persona la siente, la cual puede corresponder o no con el sexo asignado al momento del nacimiento, incluyendo la vivencia personal del cuerpo” (Ley N° 26.743)",
        },
        desacuerdo: {
          title: "Queer",
          txt: "La identidad siempre está en construcción y en movimiento. Tiene un montón de facetas, y las personas queers o no binarias no buscan generar una tercera identidad estanca",
        },
      },
    ],

    color: "rgba(118, 7, 137)",
    colorSoft: "rgba(118, 7, 137,0.7)",
  },
  {
    id: "+",
    title: "",
    valor: true,
    icons: {
      acuerdo: [felizManos, felizGino, felizCumple],
      desacuerdo: [mal, malgino, malsorpresa],
    },
    afirmacion: [
      {
        frace:
          "“El símbolo + en la sigla quiere decir que todo el tiempo va en aumento la cantidad de personas de la diversidad sexual”",
        acuerdo: {
          title: "+",
          txt: "Aunque pueda resultar complejo recordar tantas letras, es importante dar visibilidad a las múltiples identidades y experiencias que viven las personas LGBTIQ+. El símbolo “+” reúne al resto de colectivos que no están nombrados en la sigla y deja abierta la posibilidad a nuevas expresiones identitarias",
        },
        desacuerdo: {
          title: "+",
          txt: "Aunque pueda resultar complejo recordar tantas letras, es importante dar visibilidad a las múltiples identidades y experiencias que viven las personas LGBTIQ+. El símbolo “+” reúne al resto de colectivos que no están nombrados en la sigla y deja abierta la posibilidad a nuevas expresiones identitarias",
        },
      },
    ],

    color: "rgba(253,253,254)",
    colorSoft: "rgba(253,253,254,0.7)",
  },
];
