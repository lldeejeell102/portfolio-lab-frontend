import { Link } from "react-router-dom";

function Header(props) {
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid #A3B18A",
        padding: "8px",
        width: "90%",
        margin: "auto",
    };
    
    return (
        <header>
            <div className="title">
                <h1 className="title-word title-word-1">My</h1>
                <h1 className="title-word title-word-2">Portfolio</h1>
                <h1 className="title-word title-word-3">Page</h1>
            </div>
            <nav className="nav" style={navStyle}>
                <Link to="/">
                    <div>HOME</div>
                </Link>
                <div className="nav-right">
                    <div className="nav-about">
                        <Link to="/about">
                            <div>ABOUT</div>
                        </Link>
                    </div>
                    <Link to="/projects">
                        <div>PROJECTS</div>
                    </Link>
                </div>
            </nav>
        </header>
    )
  }
  
  export default Header;
  