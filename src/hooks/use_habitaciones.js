import { graphql, useStaticQuery } from "gatsby";

const useHabitaciones = () => {

    const data = useStaticQuery(graphql`
    query {
        allDatoCmsHabitacione {
          nodes {
            titulo
            id
            slug
            contenido
            imagen {
              gatsbyImageData
            }
          }
        }
      }
    `)

    // const info = useStaticQuery(graphql`
    // query {
    //     allDatoCmsHabitacione {
    //       nodes {
    //         slug
    //       }
    //     }
    //   }
    // `)

    // console.log(info);

    return data.allDatoCmsHabitacione.nodes.map(habitacion => ({
        titulo: habitacion.titulo,
        id: habitacion.id,
        contenido: habitacion.contenido,
        imagen: habitacion.imagen,
        slug: habitacion.slug
    }));

}
 
export default useHabitaciones;