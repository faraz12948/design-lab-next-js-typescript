import { Drawer } from "@mui/material";
import React, { useEffect, useState } from "react";

type props = {
    open: boolean,
    children: React.ReactNode,
    toggleDrawer: (newOpen: boolean) => void,
}

function MuiDrawer({ open, children, toggleDrawer }: props) {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    // console.log(props.children);
    useEffect(() => {
        setIsOpen(open);

    }, [open])


    return (<>
        {/* <button onClick={() => setIsOpen(true)}></button> */}
        <Drawer anchor="bottom" open={isOpen} onClose={() => { setIsOpen(false); toggleDrawer(false) }}>
            {children}
        </Drawer>
    </>);
}
export default MuiDrawer;