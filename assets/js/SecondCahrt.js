

const ctx = document.getElementById('mychart').getContext('2d');
console.log(ctx);
const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
    
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
          
        }]
    },
   
});



  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    // datasets: [{
    //   label: 'My First Dataset',
    //   data: [300, 50, 100],
    //   backgroundColor: [
    //     'rgb(255, 99, 132)',
    //     'rgb(54, 162, 235)',
    //     'rgb(255, 205, 86)'
    //   ],
    //   hoverOffset: 4
    // }]
  };
  