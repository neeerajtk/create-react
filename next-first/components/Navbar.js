import Link from "next/Link";
const Navbar = ()=> {
    const styles = {
        display: "flex",
        background: "grey",
        justifyContent: "space-between",
        padding: "1rem"
    }
    
    
    return(
    <div style={styles}>
        <h1>Nav</h1>
        <Link href="/about">
            <a>About</a>
        </Link>
        <Link href="/contact">
            <a>Contact</a>
        </Link>
    </div>
    )
};

export default Navbar;