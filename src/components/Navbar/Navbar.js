import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
    return(
        
        <section>
            <Link to= "/">Home </Link>
            <Link to= "/city/:id">About </Link>

        </section>

    )
}
export default Navbar