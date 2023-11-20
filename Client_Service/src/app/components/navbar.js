
"use client"
import { TextField, InputAdornment } from "@mui/material";
import Link from "next/link";
import styles from "./navbar.module.css";
import { Search } from "@mui/icons-material";
import { usePathname } from "next/navigation";
import { logout } from "@/services/ApiService";



const Navbar = () => {
    const router = usePathname();

    const handleLogout = () => {
        logout(); 
    };

  return (
    
    <div className={styles.header}>
        <div className={styles.titles}><img src="/velocified-symbol.svg" alt="Velocified Logo" className={styles.velocifiedicon}/><img src="/text-only-white-background.png" alt="Velocified Text Logo" className={styles.velocifiedtext} /></div>
        <div className={styles.search}>
            <TextField
                id="outlined-basic"
                label=""
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row"
                }}
                InputProps={{
                    style: {
                        borderRadius: "10px",
                        height: "80%",
                        width: "100%"
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
        
        <div className={`${styles.navlinks} ${styles.right}`} >
            <Link href="/"><div className={`${styles.home1} ${router === "/" ? styles.activeLink : ""}`}>Home </div></Link>
           <div onClick={handleLogout}>
                <Link href={router === "/dashboard" || router === "/coach"? "/login" : "/login"}>
                    <div className={`${styles.logIn} ${router === "/login" ? styles.activeLink : ""} ${router === "/dashboard" || router === "/coach"? styles.activeLink : ""}`}>
                        {router === "/dashboard" || router === "/coach" ? "Logout" : "Log in"}
                    </div>
                </Link>
            </div>
        </div>
    </div>

  );
};

export default Navbar;
