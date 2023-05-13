import { Link } from "gatsby";
import React, { ReactNode } from "react";

interface Props {
    // children : ReactNode
}

// React.FC：FC 為 FunctionComponent 的簡寫
const Navbar: React.FC<Props> = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/page1">Page1</Link>
            <Link to="/page2">Page2</Link>
        </nav>
    )
}

export default Navbar;