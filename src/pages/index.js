import * as React from "react"
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import Layout from "../components/layout";
import ImagenHotel from "../components/imagenHotel";
import ContenidoInicio from "../components/contenidoInicio";
import useHabitaciones from "../hooks/use_habitaciones";
import HabitacionPreview from "../components/habitacionPreview";

const ListadoHabitaciones = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    column-gap: 3rem;
  }
`

const IndexPage = () => {

  const habitacion = useHabitaciones();


  return(
    <Layout>
      <ImagenHotel />
      <ContenidoInicio />

      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >Nuestas Habitaciones</h2>

      <ListadoHabitaciones>
        {habitacion.map(habitacion => (
          <HabitacionPreview 
            key={habitacion.id}
            habitacion={habitacion}
          />
        ))}
      </ListadoHabitaciones>

    </Layout>
  )
}

export default IndexPage