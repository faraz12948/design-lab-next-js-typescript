import styles from './Canvashome.module.css';
import textImg from '../../styles/assets/text.png'
import image from '../../styles/assets/image.png'
import upload from '../../styles/assets/upload.png'
import colorImg from '../../styles/assets/color.png'
import tImg from '../../styles/assets/tImg.png'
// import { NavLink, Route, Switch } from 'react-router-dom';
import Upload from '../components/Upload/Upload';
import Addcolor from '../components/Addcolor/Addcolor';
import Addimg from '../components/Addimg/Addimg';
import Addtext from '../components/Addtext/Addtext';
import { fabric } from 'fabric';
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import TextFieldsIcon from '@mui/icons-material/TextFields';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import AddAll from '../components/AddAll/AddAll';
import { Button, SwipeableDrawer } from '@mui/material';
import MuiDrawer from '../components/MuiDrawer/MuiDrawe';
import React from 'react';
import CanvasFront from '../components/CanvasFront/CanvasFront';
import CanvasBack from '../components/CanvasBack/CanvasBack';
import tback from '../../styles/assets/tback.png';
import Img from '../components/Img/Img';


// drawer







function CanvasHome() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 688px)' })

    const [open, setOpen] = useState(false);
    const btn = React.useRef<HTMLButtonElement>(null);
    const [color, setColor] = React.useState('#1a237e');
    const [text, setText] = useState('');
    const [txtColor, setTxtColor] = useState('#000000');
    const [delTxt, setDelTxt] = useState(false);
    // const [color2, setColor2] = React.useState('#1a237e');
    // const [text2, setText2] = useState('');
    // const [txtColor2, setTxtColor2] = useState('#000000');
    // const [delTxt2, setDelTxt2] = useState(false);
    const [changeCanvas, setChangeCanvas] = useState(false);
    const [imgURL, setImgURL] = useState('');

    const [txtWidth, setTxtWtdth] = useState(0);
    const [txtHeight, setTxtHeight] = useState(0);
    const [imgWidth, setImgWtdth] = useState(0);
    const [imgHeight, setImgHeight] = useState(0);
    const [imgAngle, setImgAngle] = useState(0);
    const [txtTop, setTxtTop] = useState(0);
    const [txtLeft, setTxtLeft] = useState(0);





    const toggleDrawer = (newOpen: boolean) => {
        setOpen(newOpen);
        // console.log(newOpen);
        // console.log(btn);
        if (btn.current) {
            btn.current.click();

        }

    };

    //  fabric.js
    // console.log(setColor, 'home');

    const changeTcolor = (e: Event, clr: string) => {
        const shirtDiv: HTMLElement | null = document.getElementById("tshirt-backgroundpicture");
        if (shirtDiv != null) {
            shirtDiv.style.backgroundColor = clr;
        }
        setColor(clr);
        console.log('color')

    }
    useEffect(() => {
        const shirtDiv = document.getElementById("tshirt-backgroundpicture");
        console.log(shirtDiv)
        if (shirtDiv != null) {
            console.log("gggggg")
            shirtDiv.style.backgroundColor = color;
        }


    }, [color]);




    // const { text, setText, textColor, setTextColor } = useCanvasOne();




    // console.log(text, "home");
    const [changePage, setChangePage] = useState(0);



















    return (
        <div className={styles.maincontainer} style={{ paddingTop: '50px', display: 'flex', justifyContent: 'space-between' }}>
            <>
                {
                    isTabletOrMobile ?

                        <div className='controller col-span-1' style={{ display: 'none' }}>
                            <div className="bg-white rounded shadow  grid grid-flow-col grid-cols-5" >
                                <div style={{ backgroundColor: '#444343', color: 'azure' }} className='controller-side-bar grid grid grid-flow-row grid-row-4 gap-3 col-span-1'>
                                    <div className='w-9 mx-8 my-5 text-sm ' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                        <button onClick={() => setChangePage(1)} style={{ width: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
                                            {/* <img src={textImg}></img> */}
                                            <TextFieldsIcon></TextFieldsIcon>
                                            <p>Add Text</p></button>
                                    </div>
                                    <div className='w-7 mx-8 my-5 text-sm' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                        {/* <NavLink to='/addimg' style={{ width: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
                                    <img src={image}></img>
                                    <ImageOutlinedIcon></ImageOutlinedIcon>
                                    <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Add Image</p></NavLink> */}

                                        <button onClick={() => setChangePage(2)} style={{ width: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
                                            {/* <Img src={image}></Img> */}
                                            <ImageOutlinedIcon></ImageOutlinedIcon>
                                            <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Add Image</p>
                                        </button>
                                    </div>
                                    <div className='w-7 mx-8 my-5 text-sm' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                                        <button onClick={() => setChangePage(3)} style={{ width: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
                                            {/* <img src={upload}></img> */}
                                            <CloudUploadOutlinedIcon></CloudUploadOutlinedIcon>
                                            <p>Upload</p>
                                        </button>
                                    </div>
                                    <div className='icon-btn w-7 mx-8 my-5 text-sm' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                                        {/* <NavLink to='/addcolor' style={{ width: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
                                        <img src={colorImg}></img>
                                       
                                    </NavLink> */}
                                        <button onClick={() => setChangePage(4)} style={{ width: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
                                            <ColorLensIcon></ColorLensIcon>
                                            <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Product Colors</p>
                                        </button>
                                    </div>



                                </div>
                                <div className='controller-main col-span-4 px-5 py-5'>
                                    {
                                        {
                                            // 0: <AddAll changePage={changePage} setChangePage={setChangePage}></AddAll>,
                                            1: <Addtext changeCanvas={changeCanvas} text={text} setText={setText} setTxtColor={setTxtColor} setDelTxt={setDelTxt} txtWidth={txtWidth} txtHeight={txtHeight}></Addtext>,
                                            2: <Addimg></Addimg>,
                                            3: <Upload setImgUrl={setImgURL} imgWidth={imgWidth} imgHeight={imgHeight} imgAngle={imgAngle}></Upload>,
                                            4: <Addcolor setColor={setColor} ></Addcolor>,




                                        }[changePage]
                                    }
                                    <>



                                    </>
                                </div>


                                {/* <button class="px-4 py-4 bg-purple-700 text-white w-full mt-3 rounded shadow font-bold hover:bg-purple-900">PROCEED TO CHECKOUT SCREEN</button> */}
                            </div>




                        </div>






                        :
                        <div className='controller col-span-1'>
                            <div className="bg-white rounded shadow  grid grid-flow-col grid-cols-5" >
                                <div style={{ backgroundColor: '#444343', color: 'azure' }} className='controller-side-bar grid grid grid-flow-row grid-row-4 gap-3 col-span-1'>
                                    <div className='w-9 mx-8 my-5 text-sm ' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                        <button onClick={() => setChangePage(1)} style={{ width: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
                                            {/* <img src={textImg}></img> */}
                                            <TextFieldsIcon></TextFieldsIcon>
                                            <p>Add Text</p></button>
                                    </div>
                                    <div className='w-7 mx-8 my-5 text-sm' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                        {/* <NavLink to='/addimg' style={{ width: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
                                        <img src={image}></img>
                                        <ImageOutlinedIcon></ImageOutlinedIcon>
                                        <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Add Image</p></NavLink> */}

                                        <button onClick={() => setChangePage(2)} style={{ width: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
                                            {/* <Img src={image}></Img> */}
                                            <ImageOutlinedIcon></ImageOutlinedIcon>
                                            <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Add Image</p>
                                        </button>
                                    </div>
                                    <div className='w-7 mx-8 my-5 text-sm' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                                        <button onClick={() => setChangePage(3)} style={{ width: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
                                            {/* <img src={upload}></img> */}
                                            <CloudUploadOutlinedIcon></CloudUploadOutlinedIcon>
                                            <p>Upload</p>
                                        </button>
                                    </div>
                                    <div className='icon-btn w-7 mx-8 my-5 text-sm' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                                        {/* <NavLink to='/addcolor' style={{ width: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
                                            <img src={colorImg}></img>
                                           
                                        </NavLink> */}
                                        <button onClick={() => setChangePage(4)} style={{ width: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
                                            <ColorLensIcon></ColorLensIcon>
                                            <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Product Colors</p>
                                        </button>
                                    </div>



                                </div>
                                <div className='controller-main col-span-4 px-5 py-5'>
                                    {
                                        {
                                            // 0: <AddAll changePage={changePage} setChangePage={setChangePage}></AddAll>,
                                            1: <Addtext changeCanvas={changeCanvas} text={text} setText={setText} setTxtColor={setTxtColor} setDelTxt={setDelTxt} txtWidth={txtWidth} txtHeight={txtHeight}></Addtext>,
                                            2: <Addimg></Addimg>,
                                            3: <Upload setImgUrl={setImgURL} imgWidth={imgWidth} imgHeight={imgHeight} imgAngle={imgAngle}></Upload>,
                                            4: <Addcolor setColor={setColor} ></Addcolor>,




                                        }[changePage]
                                    }
                                    <>



                                    </>
                                </div>


                            </div>




                        </div>
                }
                <>
                    {
                        isTabletOrMobile && <div className='controller-side-bar grid grid grid-flow-col grid-col-4  col-span-1' style={{ backgroundColor: '#444343', color: 'azure', position: 'fixed', bottom: '0', width: '100%' }}>
                            <div className='w-9 mx-8 my-5 text-sm ' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <button onClick={() => setChangePage(1)} style={{ width: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>

                                    {/* <img src={textImg}></img> */}
                                    <TextFieldsIcon onClick={() => toggleDrawer(true)}></TextFieldsIcon>
                                    <p>Add Text</p></button>
                            </div>
                            <div className='w-7 mx-8 my-5 text-sm' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <button onClick={() => setChangePage(2)} style={{ width: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>

                                    {/* <img src={image}></img> */}
                                    <ImageOutlinedIcon onClick={() => toggleDrawer(true)}></ImageOutlinedIcon>
                                    <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Add Image</p></button>
                            </div>
                            <div className='w-7 mx-8 my-5 text-sm' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                                <button onClick={() => setChangePage(3)} style={{ width: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>

                                    {/* <img src={upload}></img> */}
                                    <CloudUploadOutlinedIcon onClick={() => toggleDrawer(true)}></CloudUploadOutlinedIcon>
                                    <p>Upload</p>
                                </button>
                            </div>
                            <div className='w-7 mx-8 my-5 text-sm' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <button onClick={() => setChangePage(4)} style={{ width: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>

                                    {/* <img src={colorImg}></img> */}
                                    <ColorLensIcon onClick={() => toggleDrawer(true)}></ColorLensIcon>
                                    <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Product Colors</p>

                                </button>
                            </div>

                            <>
                                <button ref={btn}>
                                    <MuiDrawer open={open} toggleDrawer={toggleDrawer}>
                                        {
                                            {
                                                1: <Addtext changeCanvas={changeCanvas} text={text} setText={setText} setTxtColor={setTxtColor} setDelTxt={setDelTxt} txtWidth={txtWidth} txtHeight={txtHeight}></Addtext>,
                                                2: <Addimg></Addimg>,
                                                3: <Upload setImgUrl={setImgURL} imgWidth={imgWidth} imgHeight={imgHeight} imgAngle={imgAngle}></Upload>,
                                                4: <Addcolor setColor={setColor} ></Addcolor>,




                                            }[changePage]
                                        }

                                    </MuiDrawer>
                                </button>
                            </>


                        </div>
                    }</>


            </>


            <div>
                <div className='canvas-btn'>
                    <Button onClick={() => setChangeCanvas(!changeCanvas)}>change side</Button>

                </div>



                {/* <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ position: 'absolute', zIndex: '1' }}>
                        {
                            changeCanvas ? <>

                                <Img className='' id="tshirt-backgroundpicture" src={tback} style={{}} />

                            </> :
                                <>

                                    <Img className='' id="tshirt-backgroundpicture" src={tImg} style={{}} />


                                </>
                        }
                    </div>
                    <Img className='' id="tshirt-backgroundpicture" src={tImg} style={{ position: 'absolute', zIndex: '1' }} />
                    <div style={{ position: 'absolute', zIndex: '2' }}>
                        <CanvasFront imgURL={imgURL} setImgURL={setImgURL} text={text} txtColor={txtColor} setTxtColor={setTxtColor} delTxt={delTxt} setDelTxt={setDelTxt} changeCanvas={changeCanvas} setTxtWidth={setTxtWtdth} setTxtHeight={setTxtHeight} setImgWidth={setImgWtdth} setImgHeight={setImgHeight} setImgAngle={setImgAngle} setText={setText} />
                    </div>
                </div> */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                    {
                        changeCanvas ?
                            <Img id="tshirt-backgroundpicture" src={tImg} style={{ position: 'absolute', zIndex: '1' }} />
                            :
                            <Img id="tshirt-backgroundpicture" src={tImg} style={{ position: 'absolute', zIndex: '1' }} />}

                    <div style={{ position: 'absolute', zIndex: '2' }}>
                        <CanvasFront imgURL={imgURL} setImgURL={setImgURL} text={text} txtColor={txtColor} setTxtColor={setTxtColor} delTxt={delTxt} setDelTxt={setDelTxt} changeCanvas={changeCanvas} setTxtWidth={setTxtWtdth} setTxtHeight={setTxtHeight} setImgWidth={setImgWtdth} setImgHeight={setImgHeight} setImgAngle={setImgAngle} setText={setText} />
                    </div>

                </div>

            </div>
        </div>
    );
}

export default CanvasHome;
