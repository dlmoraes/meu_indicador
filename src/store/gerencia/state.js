export default {
  gerencia: {},
  area: {},
  indicador: {},
  gerencias: {
    ID1: {
      titulo: "Gerência #1",
      imagem: "exemplo4.jpg"
    },
    ID2: {
      titulo: "Gerência #2",
      imagem: "exemplo1.jpg"
    },
    ID3: {
      titulo: "Gerência #3",
      imagem: "exemplo2.jpg"
    },
    ID4: {
      titulo: "Gerência #4",
      imagem: "exemplo5.jpg"
    }
  },
  areas: {
    ID1: {
      gerencia: "Gerência #1",
      nome: "Adm1",
      area: "Nulla quis lorem ut libero malesuada feugiat.",
      qtd_indicadores: 5,
      qtd_acompanhamentos: 5,
      avatar: "avatar_1.png",
      cargo: "Gerente",
      descricao:
        "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem."
    },
    ID2: {
      gerencia: "Gerência #1",
      nome: "Adm2",
      area: "Nulla porttitor accumsan tincidunt.",
      qtd_indicadores: 6,
      qtd_acompanhamentos: 10,
      avatar: "avatar_1.png",
      cargo: "Executivo",
      descricao:
        "Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a."
    },
    ID3: {
      gerencia: "Gerência #1",
      nome: "Adm3",
      area: "Donec sollicitudin molestie malesuada.",
      qtd_indicadores: 4,
      qtd_acompanhamentos: 12,
      avatar: "avatar_2.png",
      cargo: "Executivo",
      descricao:
        "Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh."
    }
  },
  indicadores: {
    ID0: {
      nome: "Indicador #1",
      tipo: "Redução",
      formula: "Soma dos valores em aberto",
      acumulado: "Fixo",
      previsto: [
        1015660,
        1014660,
        1013660,
        1012660,
        1011660,
        1010660,
        1009660,
        1008660,
        1007660,
        1006660,
        1005660,
        1004660
      ],
      apurado: [
        1015660,
        1011260,
        1013160,
        1012660,
        1011660,
        1010660,
        1009450,
        1008660,
        1007660,
        1041660,
        1005660,
        1004660
      ]
    },
    ID1: {
      nome: "Indicador #2",
      tipo: "Aumento",
      formula: "Soma dos valores em negociados",
      acumulado: "Soma",
      previsto: [
        3610080,
        9993120,
        5033184,
        7429440,
        7178304,
        8203776,
        6613248,
        8381664,
        6571392,
        2929920,
        3955392,
        1517280
      ],
      apurado: [
        4447200,
        2804352,
        6717888,
        2113728,
        1046400,
        2166048,
        3746112,
        2176512,
        7356192,
        4551840,
        7900320,
        2888064
      ]
    },
    ID2: {
      nome: "Indicador #3",
      tipo: "Redução",
      formula: "Soma dos valores pagos",
      acumulado: "Soma",
      previsto: [
        858048,
        313920,
        366240,
        156960,
        648768,
        837120,
        753408,
        554592,
        774336,
        638304,
        481344,
        334848
      ],
      apurado: [
        627840,
        648768,
        481344,
        533664,
        1004544,
        952224,
        805728,
        617376,
        627840,
        1004544,
        272064,
        355776
      ]
    },
    ID3: {
      nome: "Indicador #4",
      tipo: "Redução",
      formula: "Soma dos valores estornados",
      acumulado: "Soma",
      previsto: [
        858048,
        313920,
        366240,
        156960,
        648768,
        837120,
        753408,
        554592,
        774336,
        638304,
        481344,
        334848
      ],
      apurado: [
        627840,
        648768,
        481344,
        533664,
        1004544,
        952224,
        805728,
        617376,
        627840,
        1004544,
        272064,
        355776
      ]
    },
    ID4: {
      nome: "Indicador #5",
      tipo: "Redução",
      formula: "Soma dos valores pagos no cartão",
      acumulado: "Soma",
      previsto: [
        858048,
        313920,
        366240,
        156960,
        648768,
        837120,
        753408,
        554592,
        774336,
        638304,
        481344,
        334848
      ],
      apurado: [
        627840,
        648768,
        481344,
        533664,
        1004544,
        952224,
        805728,
        617376,
        627840,
        1004544,
        272064,
        355776
      ]
    }
  }
};
