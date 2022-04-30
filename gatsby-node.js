
exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allDatoCmsHabitacione {
        nodes {
          slug
        }
      }
    }
  `);
  

  // console.log(resultado.data.allDatoCmsHabitacione.nodes);
  if (resultado.errors) {
    reporter.panic('no hubo resultados', resultado.errors);
  }

  const habitaciones = resultado.data.allDatoCmsHabitacione.nodes;

  habitaciones.forEach(habitacion => {

    console.log(habitacion.slug)

    actions.createPage({
      path: habitacion.slug,
      component: require.resolve('./src/components/habitaciones.js'),
      context: {
        slug: habitacion.slug
      }
    })
  });






}