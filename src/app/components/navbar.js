
"use client"
import { TextField, InputAdornment } from "@mui/material";
import Link from "next/link";
import styles from "./navbar.module.css";
import { Search } from "@mui/icons-material";
import { usePathname } from "next/navigation";



const Navbar = () => {
    const router = usePathname();

  return (
    
    <div className={styles.header}>
        <div className={styles.titles}><img src="/velocified-symbol.svg" alt="Velocified Logo" className={styles.velocifiedicon}/><img src="/text-only-white-background.png" alt="Velocified Text Logo" className={styles.velocifiedtext} /></div>
        <div className={styles.search}>
            <TextField
                id="outlined-basic"
                label=""
                InputProps={{
                    style: {
                        borderRadius: "10px",
                        height: "40px",
                        width: "400px"
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
        
        <div className={styles.navlinks} >
            <Link href="/" ><div className={`${styles.home1} ${router === "/" ? styles.activeLink : ""}`}>Home </div> </Link>
            <Link href="/about" ><div className={`${styles.about} ${router === "/about" ? styles.activeLink : ""}`}>About</div></Link>
            <Link href="/training" ><div className={`${styles.training} ${router === "/training" ? styles.activeLink : ""}`}>Training</div></Link>
            <Link href="/news" ><div className={`${styles.news} ${router === "/news" ? styles.activeLink : ""}`}>News</div></Link>
            <Link href="/fr" ><div className={`${styles.fr} ${router === "/fr" ? styles.activeLink : ""}`}>FR</div></Link>
            <Link href="/login" ><div className={`${styles.logIn} ${router === "/login" ? styles.activeLink : ""}`}>Log in</div></Link>
        </div>
      </div>

  );
};

export default Navbar;
