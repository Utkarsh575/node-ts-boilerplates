import express from "express";

import config from "./config";
import Loaders from "./loaders";
import { Chart } from "chart.js";
import { createCanvas }from 'canvas';
async function startServer() {
  const app = express();
  await Loaders({ expressApp: app });

  app
    .listen(config.port, () => {
      console.log(`
        ######################################
        🐈  Server listening on port: ${config.port} 🐈‍
        ######################################
      `);
    })
    .on("error", (err) => {
      console.log("error");
      process.exit(1);
    });
}

startServer();
const  main = ()=>{
console.log("main called")
const canvas = createCanvas(800, 600);
const context:any = canvas.getContext('2d');

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
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
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
};

const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

const chart = new Chart(context, {
  type: 'bar',
  data: data,
  options: options
});


}
main()
