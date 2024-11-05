import { PropsWithChildren } from "react";
import GlobalStyles from "src/styles/global";

export function Providers({children}: PropsWithChildren){
    return(
        <>
            <GlobalStyles/>
            {children}
        </>
    )
}