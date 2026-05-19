const ctx = document.getElementById('gargalosChart');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [
      'Ajustes e Validações',
      'Assinaturas',
      'Erro de Requisição',
      'Documentos Incompletos'
    ],

    datasets: [{
      data: [45, 30, 15, 10],

      backgroundColor: [
        '#d90429',
        '#7b2cbf',
        '#f77f00',
        '#219ebc'
      ],

      borderWidth: 0
    }]
  },

  options: {
    responsive: true,

    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  }
});
