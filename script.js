document.getElementById('start-search').addEventListener('click', function() {
    window.location.href = '';  // Cambia la URL si es necesario
});

// Datos de ejemplo: Personas desaparecidas en Colombia por año
const desaparecidosData = {
    labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [{
        label: 'Casos de personas desaparecidas',
        data: [500, 600, 550, 700, 800, 650], // Datos de ejemplo
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)'
        ]
    }]
};

// Crear gráfico de personas desaparecidas en Colombia
const ctxDesaparecidos = document.getElementById('desaparecidosChart').getContext('2d');
const desaparecidosChart = new Chart(ctxDesaparecidos, {
    type: 'bar',
    data: desaparecidosData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});