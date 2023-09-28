import React, { useEffect, useState } from "react"
import styles from "./dashboard.module.css"
import Navbar from "@/app/components/navbar";
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);

const API_URL = 'http://localhost:3100';



const Dashboard = () => {

    const [ActivityDescription, setActivityDescription] = useState(null);
    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get(`${API_URL}/users`);
                console.log(response.data);
                setActivityDescription(response.data);
                console.log("hello");
                return response.data;
            } catch (e) {
                console.error("Error fetching data:", e);
            }
        }
        fetchUsers();
    }, []);
    const language = "English"
    const userName = "User Name"
    const path = "Path Name"
    const day = "Day "+ 4
    const currentDate = new Date()
    const Activity = "Activity 1"
    // const ActivityDescription = "This is a description of the activity"
    const startDate = currentDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    const doughnutChartData = {
        labels: ['done', 'remaining'],
        datasets: [{
            data: [80, 22],
            backgroundColor: ['#5A20C3', '#F56F91'],
            borderWidth: 2,
        }],
    };
    const DonutChartTextPlugin = {
        beforeDraw: function(chart) {
            var width = chart.width,
            height = chart.height,
            ctx = chart.ctx;
            ctx.restore();
            var fontSize = '20px ';
            ctx.font = fontSize + "Roboto";
            ctx.textBaseline = "middle";
            var text = "78.4%",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
            ctx.fillStyle = '#5A20C3';
            ctx.fontWeight = 100;
            ctx.fillText(text, textX, textY);
            ctx.save();
        } 
    };
    const doughnutChartOptions = {
        cutout: 40,
        legend: {
          display: false,
        }
    };
    const back = "../../app/icons/back.png";

    return (
        <div>
            <Navbar />
        <div className={styles.dashboardContainer}>
            <div className={styles.dashboardHeader}>
                <img 
                    className={styles.profile} 
                    src=""
                />
                <div className={styles.text} style={{justifyContent: 'center'}}>
                    powered by VELOCIFIED
                </div>
            </div>
            <div className={styles.dashboardBody}>
                <div className={styles.sidebar}>
                    <div className={styles.text}>
                        <div style={{fontSize: 18}}>
                            { userName }
                        </div>
                        <div style={{fontSize: 16}}>
                            Learner
                        </div>
                        <div className={styles.language} style={{fontSize: 16}}>
                            { language }
                        </div>
                        <div className={styles.path}>
                            <div style={{fontSize: 20}}>
                                <a href="./login">
                                    { path }
                                </a>
                            </div>
                            <div style={{fontSize: 16}}>{ startDate }</div>
                        </div>
                    </div>
                    <div className={styles.studentActivity}>
                        <div className={styles.progress}>
                            <Doughnut data={doughnutChartData} options={doughnutChartOptions} plugins={[DonutChartTextPlugin]}/>
                        </div>
                        <div className={styles.text} style={{fontWeight: 600}}>
                            Milestones
                        </div>
                        <div className={styles.messages}>
                            <div className={styles.messageText}>
                                Messages
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.activities}>
                    <div className={styles.activityHeader}>
                        <div className={styles.tabGroup}>
                            <img src="/icons/back.svg" />
                            <div className={styles.space} />
                            <div className={styles.text}>{day}</div>
                            <div className={styles.space} />
                            <img src="/icons/front.svg" />
                        </div>
                        <div className={styles.tabGroup}>
                            <img src="/icons/vector.svg" />
                            <div className={styles.space} />
                            <img src="/icons/cal.svg" />
                        </div>
                    </div>
                    <div className={styles.activityBody} >
                        <div className={styles.selected} >
                            <div className={styles.activityTitle} >
                                { Activity }
                            </div>
                            <div style={{fontSize: '16px'}}>{ ActivityDescription }</div>
                        </div>
                        <div className={styles.activity} >
                            <div className={styles.activityTitle} >
                                { Activity }
                            </div>
                            <div style={{fontSize: '16px'}}>{ ActivityDescription }</div>
                        </div>
                        <div className={styles.activity} >
                            <div className={styles.activityTitle} >
                                { Activity }
                            </div>
                            <div style={{fontSize: '16px'}}>{ ActivityDescription }</div>
                        </div>
                        <div className={styles.activity} >
                            <div className={styles.activityTitle} >
                                { Activity }
                            </div>
                            <div style={{fontSize: '16px'}}>{ ActivityDescription }</div>
                        </div>
                        <div className={styles.activity} >
                            <div className={styles.activityTitle} >
                                { Activity }
                            </div>
                            <div style={{fontSize: '16px'}}>{ ActivityDescription }</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Dashboard;