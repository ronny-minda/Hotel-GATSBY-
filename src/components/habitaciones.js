import React from 'react';
import { graphql } from 'gatsby';

export const query = graphql`
query($slug: String!) {
    allDatoCmsHabitacione(filter: { slug: {eq: $slug }}) {
      nodes {
        titulo
        contenido
        imagen {
          gatsbyImageData
        }
      }
    }
  }
`

const HabitacionTemplate = ({data}) => {

    console.log(data);

    return ( 
        <h1>Habitacion.js</h1>
    );
}

export default HabitacionTemplate;