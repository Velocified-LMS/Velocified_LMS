import React, { useEffect } from "react"
import  { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';


import '@/app/globals.css'
import styles from "./admindashboard.module.css"
import Navbar from "@/app/components/navbar";

import Profileeditor from "./Profileeditor";
import AddOrg from "./AddOrg";
import ViewOrg from "./ViewOrg";
import { Search } from "@mui/icons-material";
import { TextField, InputAdornment } from "@mui/material";
import { getAccess, getCompanies, getCompany, getUserData } from "@/services/ApiService";
import { useRouter } from "next/router";


const VelocifiedAdminDashboard = () => {
    const router = useRouter();
    const verifyAccess = async () => {
        try {
            const response = await getAccess('owner');
        } catch (error) {
            router.back(error);
            console.error('API request error:', error);
        }
    };
    useEffect(() => {
        verifyAccess();
    }, []);
    const language = "English"
    const userName = "User Name"

    const currentDate = new Date()
       const startDate = currentDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });
    const [ProfileeditorViewVisible, setProfileeditorViewVisible] = useState(false);
    const toggleProfileeditorView = (visible) => {
        setProfileeditorViewVisible(visible);
    };

    const [AddOrgVisible, setAddOrgVisible] = useState(false);
    const toggleAddOrgView = (visible) => {
        setAddOrgVisible(visible);
    };

    const [ViewOrgVisible, setViewOrgVisible] = useState(false);
    const [selectedOrg, setSelectedOrg] = useState(null);

    const toggleViewOrgView = (org) => {
        setSelectedOrg(org);
        setViewOrgVisible(!ViewOrgVisible);
    };

    const [companies, setCompanies] = useState(null);

    const [totalSeats, setTotalSeats] = useState(0);

    const [user, setUser] = useState(null);

    useEffect(() => {
        const initializeData = async () => {
            const companies = await getCompanies();
            const user = await getUserData();
            setUser(user.data);
            const totalSeats = companies.data.reduce((sum, company) => sum += company.seats, 0);
            setTotalSeats(totalSeats);
            setCompanies(companies.data);
        }
        initializeData();
    }, [AddOrgVisible]);

    if(companies === null || user === null) {
        return "Loading...";
    }

    return (
        <div className={styles.page}>
            {ProfileeditorViewVisible && <Profileeditor isOpen={toggleProfileeditorView } />}
            {AddOrgVisible && <AddOrg isOpen={toggleAddOrgView} setCompanies={setCompanies} companies={companies}/> }
            {ViewOrgVisible && <ViewOrg isOpen={toggleViewOrgView} org={selectedOrg} /> }
            
            <Navbar authorized={true}/>
            <div className={styles.dashboardContainer}>
                <div className={styles.dashboardHeader}>
                <div className={styles.profileContainer} >
                <div onClick={toggleProfileeditorView}>
                    <img className={styles.editprofile} src="/settings.svg" alt="Edit Profile" />
                </div>
                <img className={styles.profile} src="/Icon1.svg" alt="Profile"  />
                    
                </div>
                <div className={styles.text} style={{justifyContent: 'center'}}>
                    Powered by VELOCIFIED
                </div>
                </div>
                <div className={styles.dashboardBody}>
                    <div className={styles.sidebar}>
                        <div className={styles.text}>
                            <div style={{fontSize: 20}}>
                                { user.username }
                            </div>
                            <div style={{fontSize: 16}}>
                                Velocified Administrator 
                            </div>
                            <div className={styles.language} style={{fontSize: 16}}>
                                { language }
                            </div>
                        </div>
                        <div className={styles.studentActivity}>
                            <div className={styles.dashboardOption} >
                                <div className={styles.dashboardText}  >
                                    Total Seats : {totalSeats}
                                </div>
                            </div> 
                            <div className={styles.dashboardOption} >
                                <div className={styles.dashboardText} >
                                    Total Organizations: {companies.length}
                                </div>
                            </div>
                            <div className={styles.dashboardOption} >
                                <div className={styles.dashboardText} onClick={toggleAddOrgView}>
                                    Add Organization
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.activities}>
                         <div className={styles.activityHeader}>
                            <div className={styles.tabGroup}>
                            <div  style={{fontSize:'20px', fontFamily:'Roboto' }}>
                                Organizations
                            </div>
                            </div>
                        </div>
                        <div className={styles.activities}>
                         <div className={styles.activityHeader}>
                            
                            </div>
                            <div className={styles.table_container}>
                            <table className={styles.tableStyle}  >
                                <thead className={styles.table_rowhead}>
                                <tr >
                                    <th style={{width:'50vw'}}>Organization Name</th>
                                    <th style={{width:'30vw'}}>Location</th>
                                    <th style={{width:'20vw'}}>Number of Seats</th>
                                </tr>
                                </thead>
                                <tbody >
                                {companies.map((company, index) => (
                                    <tr key={index} className={styles.table_row} onClick={() => {
                                        toggleViewOrgView(company);
                                      }}>
                                    <td className={styles.centered_cell} style={{textAlign: 'center'}}>{company.name}</td>
                                    <td className={styles.centered_cell} style={{textAlign: 'center'}}>{company.address}</td>
                                    <td className={styles.centered_cell} style={{textAlign: 'center'}} >{company.seats}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            </div>
                            </div>
                        </div>
                        
                </div>
            </div>
        </div>
    );
}

export default VelocifiedAdminDashboard;