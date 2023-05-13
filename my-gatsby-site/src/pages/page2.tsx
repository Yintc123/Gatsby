import { PageProps } from "gatsby";
import React from "react";

import Navigationbar from "../components/Navigationbar/Navigationbar";

const Page2: React.FC<PageProps> = () => {
    return (
        <>
            <Navigationbar />
            <h1>Hello Page2</h1>
        </>
    )
}

export default Page2;