import React from "react"
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


const VelocifiedAdminDashboard = () => {
    const language = "English"
    const userName = "User Name"

    const currentDate = new Date()
       const startDate = currentDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });

    const orgdata = [
        {
          "Organization_name": "Amazon",
          "Location": "Ontario",
          "contact":["Person1","Person2"],
          "seat_number": "55"
        },
        {
            "Organization_name": "Gamma",
            "Location": "Cananda",
            "contact":["Person1","Person2"],
            "seat_number": "5255"
          },
          {
            "Organization_name": "Velocofied",
            "Location": "texas",
            "contact":["Person1","Person2"],
            "seat_number": "33"
          },
          {
            "Organization_name": "google",
            "Location": "Bllaaah",
            "contact":["Person1","Person2"],
            "seat_number": "5775"
          },
          {
            "Organization_name": "Amazon",
            "Location": "Ontario",
            "contact":["Person1","Person2"],
            "seat_number": "55"
          },
          {
              "Organization_name": "Gamma",
              "Location": "Cananda",
              "contact":["Person1","Person2"],
              "seat_number": "5255"
            },
            {
              "Organization_name": "Velocofied",
              "Location": "texas",
              "contact":["Person1","Person2"],
              "seat_number": "33"
            },
            {
              "Organization_name": "google",
              "Location": "Bllaaah",
              "contact":["Person1","Person2"],
              "seat_number": "5775"
            },
      ];

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

    

    return (
        <div className={styles.page}>
            {ProfileeditorViewVisible && <Profileeditor isOpen={toggleProfileeditorView } />}
            
            {AddOrgVisible && <AddOrg isOpen={toggleAddOrgView}/> }
            {ViewOrgVisible && <ViewOrg isOpen={toggleViewOrgView} org={selectedOrg} /> }

            
            <Navbar />
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
                                { userName }
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
                                    Total # Seats : 
                                </div>
                            </div> 
                            <div className={styles.dashboardOption} >
                                <div className={styles.dashboardText} >
                                    Total # Organizations:
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
                            <div className={styles.tabGroup}>
                                <TextField
                                    id="outlined-basic"
                                    label="Search Organization"
                                    color="secondary"
                                    InputProps={{
                                        style: {
                                            borderRadius: "10px",
                                            height: "40px",
                                            width: "400px",
                                        }
                                        ,
                                        startAdornment: (
                                        <InputAdornment position="start">
                                        <Search />
                                        </InputAdornment>
                                            ),
                                        }}
                                        variant="outlined"
                                    />
                            </div>
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
                                {orgdata.map((org, index) => (
                                    <tr key={index} className={styles.table_row} onClick={() => {
                                        toggleViewOrgView(org);
                                      }}>
                                    <td className={styles.centered_cell} style={{textAlign: 'center'}}>{org.Organization_name}</td>
                                    <td className={styles.centered_cell} style={{textAlign: 'center'}}>{org.Location}</td>
                                    <td className={styles.centered_cell} style={{textAlign: 'center'}} >{org.seat_number}</td>
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