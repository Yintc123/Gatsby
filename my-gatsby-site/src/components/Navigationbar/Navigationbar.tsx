import { Link } from "gatsby";
import React, { ReactNode } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
    // children : ReactNode
}

// React.FC：FC 為 FunctionComponent 的簡寫
const Navigationbar: React.FC<Props> = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/page1">Page1</Link>
            <Link to="/page2">Page2</Link>
        </nav>
    )
}

export default Navigationbar;