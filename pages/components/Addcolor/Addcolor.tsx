import React, { useState } from 'react';
import { CompactPicker, SwatchesPickerProps } from 'react-color';
import './Addcolor.module.css';
import { SwatchesPicker } from 'react-color';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { NavLink } from 'react-router-dom';
import { Dispatch, SetStateAction } from "react";



interface colorProps {
    setColor: Dispatch<SetStateAction<string>>;


}

const Addcolor = ({ setColor }: colorProps) => {
    // console.log(props)
    // console.log(setColor, "add");

    const handleChange = (color: any, event: any) => {
        console.log(color.hex);
        setColor(color.hex);


    }
    return (
        <>
            {/* <NavLink className="cross-btn" to='/'>

                <ArrowBackIosNewRoundedIcon></ArrowBackIosNewRoundedIcon>
            </NavLink> */}
            <div className='container'>

                <p className='pb-5' style={{ textAlign: 'center', color: 'grey' }}>Change product color</p>
                <SwatchesPicker onChange={handleChange} />
            </div></>

    );
}
export default Addcolor;