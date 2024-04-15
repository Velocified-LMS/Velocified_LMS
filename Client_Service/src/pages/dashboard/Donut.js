import styles from "./dashboard.module.css";
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import { Chart, ArcElement } from 'chart.js';

Chart.register(ArcElement);

const Donut = ({ percentage }) => {
    const doughnutChartData = {
        labels: ['done', 'remaining'],
        datasets: [{
            data: [percentage, 100-percentage],
            backgroundColor: ['#5A20C0', '#b3d1ed'],
            borderWidth: 2,
        }],
    };

    const getDonutChartTextPlugin = (currentPercentage) => ({
        beforeDraw: function(chart) {
            var width = chart.width,
            height = chart.height,
            ctx = chart.ctx;
            ctx.restore();
            var fontSize = '14px ';
            ctx.font = fontSize + "Roboto";
            ctx.textBaseline = "middle";
            var text = currentPercentage + "%",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
            ctx.fillStyle = '#5A20C3';
            ctx.fontWeight = 100;
            ctx.fillText(text, textX, textY);
            ctx.save();
        } 
    });

    const doughnutChartOptions = {
        cutout: 45,
        legend: {
          display: false,
        },
        aspectRatio: 2
    };
    return (
        <div className={styles.progress}>
            <Doughnut key={percentage} data={doughnutChartData} options={doughnutChartOptions} plugins={[getDonutChartTextPlugin(percentage)]}/>
        </div>
    );
}

export default Donut;