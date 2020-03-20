const getters = {
  gerencias: state => {
    return state.gerencias;
  },
  areasPorGerencia: state => {
    let areasFiltradas = {};

    Object.keys(state.areas).forEach(key => {
      let area = state.areas[key];
      let areaGerenciaLower = area.gerencia.toLowerCase();
      let gerenciaLower = state.gerencia.titulo.toLowerCase();

      if (areaGerenciaLower === gerenciaLower) {
        areasFiltradas[key] = area;
      }
    });

    return areasFiltradas;
  },
  indicadores: state => {
    return state.indicadores;
  }
};

export default getters;
