import { PageProps } from "gatsby";
import React from "react";

import Navbar from "../components/Navbar/Navbar";

const Page2: React.FC<PageProps> = () => {
    return (
        <>
            <Navbar />
            <h1>Hello Page2</h1>
        </>
    )
}

export default Page2;