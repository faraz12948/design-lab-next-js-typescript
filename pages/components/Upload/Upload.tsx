import styles from './Upload.module.css'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { NavLink } from 'react-router-dom';
import { Dispatch, SetStateAction } from "react";
import { Button } from '@mui/material';

interface imgProp {

    setImgUrl: Dispatch<SetStateAction<string>>;
    imgWidth: number;
    imgHeight: number;
    imgAngle: number;

}
function Upload(props: imgProp) {
    return (
        <div>
            {/* <NavLink className="cross-btn" to='/'>

                <ArrowBackIosNewRoundedIcon></ArrowBackIosNewRoundedIcon>
            </NavLink> */}
            <p className='pb-1' style={{ textAlign: 'center', color: 'grey' }}>Upload Image</p>


            <div className="flex w-full pt-15 pb-5 items-center justify-center bg-grey-lighter">
                <label className="upload w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                    <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span className="mt-2 text-base leading-normal">Select a file</span>
                    <input type='file' className="hidden" />
                </label>
            </div>
            <Button onClick={() => props.setImgUrl('https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=400x300')}>Upload demo</Button>
            <div className='img-up pt-2' style={{ height: '160px' }}>



                <hr
                    style={{
                        color: "#D3D3D3",
                        backgroundColor: "#D3D3D3",
                        height: 1,

                    }}
                    className='mt-10 mb-2'
                />
                <div className='width' style={{ display: "grid", gridTemplateColumns: 'repeat(2,1fr)' }}>
                    <div>
                        <p style={{ display: 'inline' }}>Width</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <p >{props.imgWidth} px</p>
                    </div>


                </div>
                <hr
                    style={{
                        color: "#D3D3D3",
                        backgroundColor: "#D3D3D3",
                        height: 1,

                    }}
                    className='mt-2 mb-2'
                />
                <div className='width' style={{ display: "grid", gridTemplateColumns: 'repeat(2,1fr)' }}>
                    <div>
                        <p style={{ display: 'inline' }}>Height</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <p >{props.imgHeight} px</p>
                    </div>


                </div>
                <hr
                    style={{
                        color: "#D3D3D3",
                        backgroundColor: "#D3D3D3",
                        height: 1.5,

                    }}
                    className='mt-2 mb-2'
                />
                <div className='width' style={{ display: "grid", gridTemplateColumns: 'repeat(2,1fr)' }}>
                    <div>
                        <p style={{ display: 'inline' }}>Rotation</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <p >{props.imgAngle} °</p>
                    </div>


                </div>
                <hr
                    style={{
                        color: "#D3D3D3",
                        backgroundColor: "#D3D3D3",
                        height: 1.5,

                    }}
                    className='mt-2 mb-2'
                />



            </div>
        </div>
    );
}

export default Upload;
