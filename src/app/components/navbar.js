
import { TextField, InputAdornment } from "@mui/material";
import Link from "next/link";
import styles from "./navbar.module.css";
import { Search } from "@mui/icons-material";

const Navbar = () => {
  return (

    <div className={styles.header}>
        <div><img src="/velocified-symbol.svg" alt="Velocified Logo" className={styles.velocifiedicon}/><img src="/text-only-white-background.png" alt="Velocified Text Logo" className={styles.velocifiedtext} /></div>
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
            <Link href="/login" ><div className={styles.home1}>Home </div> </Link>
            <Link href="/login" ><div className={styles.about}>About</div></Link>
            <Link href="/login" ><div className={styles.training}>Training</div></Link>
            <Link href="/login" ><div className={styles.news}>News</div></Link>
            <Link href="/login" ><div className={styles.fr}>FR</div></Link>
            <Link href="/login" ><div className={styles.logIn}>Log in</div></Link>
        </div>
      </div>

  );
};

export default Navbar;
