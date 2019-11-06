import { Injectable } from '@angular/core';
import { Pelicula } from '../model/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  //Array de películas
  peliculas: Pelicula[] = [];

  constructor() {
    this.peliculas = [
      {
        release: "2018-06-14",
        score: 7.6,
        cover: "tAIoOSidSE9Iyq8UK5G5gSiM0PK.jpg",
        synopsis: "Helen tiene que liderar una campaña para que los superhéroes regresen, mientras Bob vive su vida \\ normal\\  con Violet, Dash y el bebé Jack-Jack —cuyos superpoderes descubriremos—. Su misión se va a pique cuando aparece un nuevo villano con un brillante plan que lo amenaza todo. Pero los Parr no se amedrentarán y menos teniendo a Frozone de su parte.",
        title: "Los Increíbles 2"
      },
      {
        release: "2018-10-03",
        score: 7.6,
        cover: "sNQyj8mLTMY4fsvr7qvuIiNFeaG.jpg",
        synopsis: "Jackson Maine es una estrella de la música que se enamora de Ally (Lady Gaga), una artista que lucha por salir adelante. Justo cuando Ally está a punto de abandonar su sueño de convertirse en cantante, Jack decide ayudarla en su carrera hacia la fama. El camino será más duro de lo que imaginan ...",
        title: "Ha nacido una estrella"
      },
      {
        release: "2018-10-03",
        score: 6.6,
        cover: "yIzHw6az7SHEjxaVYy3hMd1Vyc.jpg",
        synopsis: "Eddie Brock (Tom Hardy) es un consolidado periodista y astuto reportero que está investigando una empresa llamada Fundación Vida. Esta fundación, dirigida por el eminente científico Carlton Drake (Riz Ahmed), está ejecutando secretamente experimentos ilegales en seres humanos y realizando pruebas que involucran formas de vida extraterrestres y amorfas conocidas como simbiontes. Durante una visita furtiva a la central, el periodista quedará infectado por un simbionte. Comenzará entonces a experimentar cambios en su cuerpo que no entiende, y escuchará una voz interior, la del simbionte Venom, que le dirá lo que tiene que hacer. Cuando Brock adquiera los poderes del simbionte que le usa como huésped, Venom tomará posesión de su cuerpo, convirtiéndole en un despiadado y peligroso súpervillano.",
        title: "Venom"
      },
      {
        release: "2018-07-19",
        score: 6.2,
        cover: "qvTfUVzmfszn2tBqd1ZHB7ddNkv.jpg",
        synopsis: "Robert McCall (Denzel Washington) garantiza una justicia inquebrantable para los explotados y oprimidos, pero ¿cuánto de lejos llegará cuando se trate de alguien a quien ama? Secuela de The Equalizer (El protector) (2014).",
        title: "The Equalizer 2"
      },
      {
        release: "2018-09-13",
        score: 5.3,
        cover: "wMq9kQXTeQCHUZOG4fAe5cAxyUA.jpg",
        synopsis: "Desde lo más recóndito del espacio hasta las calles de los suburbios de pequeñas ciudades, llega la explosiva reinvención de la saga Predator de la mano de Shane Black. Ahora, los cazadores más letales del universo son más fuertes, inteligentes y letales que nunca. Además, ha logrado mejorarse genéticamente con ADN de otras especies. Cuando un niño provoca por accidente su regreso a La Tierra, sólo un grupo de exsoldados y un profesor de ciencias podrán evitar el fin de la raza humana. Secuela de 'Depredador' (1987)",
        title: "Predator"
      },
      {
        release: "2018-08-16",
        score: 5.8,
        cover: "A2jQjfisMuEj7LfaJUF23Gdbrw8.jpg",
        synopsis: "James Silva (Mark Wahlberg) es un experimentado agente de la CIA, enviado a un país sospechoso de actividad nuclear ilegal. Cuando el funcionario local, LI (Iko Uwais), llega a la embajada de los EE. UU. buscando intercambiar información sobre material radioactivo robado a cambio de su paso seguro a los EE. UU., Silva tiene la tarea de transportarlo desde el centro de una ciudad, en una peligrosa misión, hasta una pista de aterrizaje a 22 millas de distancia.",
        title: "Milla 22"
      },
      {
        release: "2018-10-11",
        score: 7.2,
        cover: "6LKINapQLIOtRuvAGO30FUuUJqN.jpg",
        synopsis: "Biopic sobre el astronauta Neil Armstrong, ambientado entre los años 1961-1969, los años de preparación para ser el primer humano en pisar la luna.",
        title: "First Man - El primer hombre"
      },
      {
        release: "2018-08-17",
        score: 5.4,
        cover: "ujWmzBgVZLyTiEbFPgA50qSJVGl.jpg",
        synopsis: "Alpha es una aventura épica ambientada en la última Edad de Hielo. Europa, 20.000 años atrás. En mitad de su primera cacería con el grupo de élite de su tribu, un joven es herido y dado por muerto. Al despertar se encontrará débil y solo, y deberá aprender a sobrevivir y abrirse camino ante la dura y cruel naturaleza. Acompañado a regañadientes de un lobo abandonado por su manada, los dos aprenderán a confiar el uno en el otro, convertirse en aliados y superar los innumerables peligros para, contra toda posibilidad, encontrar el camino a casa antes de que llegue el letal invierno.",
        title: "Alpha"
      },
      {
        release: "2018-08-02",
        score: 7.6,
        cover: "8omoqFYwKbpNWPsH1QVS2plk64I.jpg",
        synopsis: "En esta nueva aventura de acción real, el niño que se embarcó en innumerables aventuras en el bosque de los Cien Acres con su banda de animales de peluche, ha crecido y…  ha perdido el rumbo. Ahora les toca a sus amigos de la infancia aventurarse en nuestro mundo y ayudar a Christopher Robin a recordar al niño cariñoso y juguetón que aún tiene dentro.",
        title: "Christopher Robin"
      },
      {
        release: "2018-10-18",
        score: 6.7,
        cover: "3zENNQfzTYiMx6Ud9TKKkvIzLeB.jpg",
        synopsis: "Jamie Lee Curtis regresa a su papel icónico como Laurie Strode, quien llega a su enfrentamiento final con Michael Myers, la figura enmascarada que la ha perseguido desde que escapó por poco de su juerga de asesinatos en la noche de Halloween de hace cuatro décadas. Esta película, la undécima película de la serie \\ Halloween\\ , ignorará los eventos de todas las secuelas anteriores, retomando 40 años después de los eventos de la película original.",
        title: "La noche de Halloween"
      },
      {
        release: "2018-10-24",
        score: 8.1,
        cover: "sVmTZxuXhSGYmNL8gbv2XcKTFUy.jpg",
        synopsis: "Bohemian Rhapsody es una rotunda y sonora celebración de Queen, de su música y de su extraordinario cantante Freddie Mercury, que desafió estereotipos e hizo añicos tradiciones para convertirse en uno de los showmans más queridos del mundo. La película plasma el meteórico ascenso al olimpo de la música de la banda a través de sus icónicas canciones y su revolucionario sonido, su crisis cuando el estilo de vida de Mercury estuvo fuera de control, y su triunfal reunión en la víspera del Live Aid, en la que Mercury, mientras sufría una enfermedad que amenazaba su vida, lidera a la banda en uno de los conciertos de rock más grandes de la historia. Veremos cómo se cimentó el legado de una banda que siempre se pareció más a una familia, y que continúa inspirando a propios y extraños, soñadores y amantes de la música hasta nuestros días.",
        title: "Bohemian Rhapsody"
      }
    ];
  }

  //getter para devolver PELICULAS
  getPeliculas():Pelicula[]{
    return this.peliculas;
  }

  deletePelicula(titulo:string){
    this.peliculas = this.peliculas.filter(p => p.title !=titulo)
  }


}
