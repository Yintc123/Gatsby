import { PageProps } from "gatsby";
import React from "react";

import Navigationbar from "../components/Navigationbar/Navigationbar";

const Page1: React.FC<PageProps> = () => {
    return (
        <>
            <Navigationbar />
            <h1>Hello Page1</h1>
        </>
    )
}

export default Page1;