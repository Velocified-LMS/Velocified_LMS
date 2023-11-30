
"use client"
import { TextField, InputAdornment } from "@mui/material";
import Link from "next/link";
import styles from "./navbar.module.css";
import { Search } from "@mui/icons-material";
import { logout } from "@/services/ApiService";
import { useRouter } from 'next/navigation';

const Navbar = (authorized) => {
    
    const router = useRouter();
    const handleLogout = () => {
        if (authorized.authorized) {
            logout();
        }
        router.push('/login');
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
                        flexDirection: "row",
                        fontFamily: "Roboto"

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
                <Link href="/"><div className={`${styles.home1} ${""}`}>Home </div></Link>
                <div onClick={handleLogout}>
                    <div className={`${styles.logIn} ${styles.activeLink}`}>
                        {authorized.authorized ? "Log Out" : "Log In"}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;
