import { PageProps } from "gatsby";
import React from "react";

import Navbar from "../components/Navbar/Navbar";

const Page1: React.FC<PageProps> = () => {
    return (
        <>
            <Navbar />
            <h1>Hello Page1</h1>
        </>
    )
}

export default Page1;