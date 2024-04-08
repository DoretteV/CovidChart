const ctx = document.getElementById('myChart1');

let myChart1;
let Jsondata;

fetch("covid.json")
.then(function(response){
   if(response.status == 200){
      return response.json();
   }
})
.then(function(data){ 

   Jsondata = data;
   createChart(Jsondata, 'bar');
});

function createChart(data, type){
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: data.map(row => row.Date),
    datasets: [{
      label: 'Covid Total Confirmed Cases',
      data: data.map(row => row.TotalConfirmedCases),
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    maintainAspectRatio: false
  }
});
}