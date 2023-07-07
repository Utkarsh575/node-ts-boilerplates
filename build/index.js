"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const loaders_1 = __importDefault(require("./loaders"));
const chart_js_1 = require("chart.js");
const canvas_1 = require("canvas");
async function startServer() {
    const app = (0, express_1.default)();
    await (0, loaders_1.default)({ expressApp: app });
    app
        .listen(config_1.default.port, () => {
        console.log(`
        ######################################
        🐈  Server listening on port: ${config_1.default.port} 🐈‍
        ######################################
      `);
    })
        .on("error", (err) => {
        console.log("error");
        process.exit(1);
    });
}
startServer();
const main = () => {
    console.log("main called");
    const canvas = (0, canvas_1.createCanvas)(800, 600);
    const context = canvas.getContext('2d');
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
    const chart = new chart_js_1.Chart(context, {
        type: 'bar',
        data: data,
        options: options
    });
};
main();
//# sourceMappingURL=index.js.map