import styles from './Addtext.module.css'
import { SwatchesPicker, TwitterPicker, TwitterPickerProps } from 'react-color';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { NavLink } from 'react-router-dom';
import { Dispatch, SetStateAction, useEffect } from "react";
import { fabric } from 'fabric';
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { red } from '@mui/material/colors';
import { width } from '@mui/system';

type Inputs = {
    example: string,
    txtRequired: string,

};
// interface textProps {
//     setText: Dispatch<SetStateAction<string>>;
//     setTextColor: Dispatch<SetStateAction<string>>;


// }
interface txtProps {
    setText: Dispatch<SetStateAction<string>>;
    text: string;
    setTxtColor: Dispatch<SetStateAction<string>>;
    setDelTxt: Dispatch<SetStateAction<boolean>>;
    txtWidth: number;
    txtHeight: number;
    // txtTop: number;
    // txtLeft: number;

    // setText2: Dispatch<SetStateAction<string>>;
    // text2: string;
    // setTxtColor2: Dispatch<SetStateAction<string>>;
    // setDelTxt2: Dispatch<SetStateAction<boolean>>;

    changeCanvas: boolean;


}
function Addtext(props: txtProps) {
    // const { text, setText, textColor, setTextColor } = useCanvasOne();
    const { selectedObjects, editor, onReady } = useFabricJSEditor();
    // const { setText, text } = props;
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {

        // if (!props.changeCanvas) {
        //     props.setText(data.txtRequired);
        // }
        // else {
        //     props.setText2(data.txtRequired);
        // }
        props.setText(data.txtRequired);
        reset();
    }

    const handleChange = (color: any, event: any) => {
        // if (!props.changeCanvas) {
        //     props.setTxtColor(color.hex);
        // }
        // else {
        //     props.setTxtColor2(color.hex);
        // }
        props.setTxtColor(color.hex);


    }
    const handleAddText = (e: any) => {
        e.preventDefault();
        // console.log(props);



    }
    const handleDelText = () => {




    }
    // useEffect(() => {
    //     console.log(props.txtWidth);
    // }, [props.txtWidth])



    return (
        <div className='p-2'>
            {/* <NavLink className="cross-btn" to='/'>

                <ArrowBackIosNewRoundedIcon></ArrowBackIosNewRoundedIcon>
            </NavLink> */}
            <p className='pb-1' style={{ textAlign: 'center', color: 'grey' }}>Add Text</p>

            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                {/* <input onChange={e => props.setText(e.target.value)} /> */}
                <input className={styles.feedbackinput}  {...register("txtRequired", { required: true })} />
                {/* {errors.txtRequired && <span>This field is required</span>} */}

                <input className={styles.submit} type="submit" />
            </form>
            {/* <form onSubmit={e => handleAddText(e)}>
                <input name="Addtext" type="text" className="feedback-input" placeholder="Enter text here" onChange={e => props.setText(e.target.value)} />


                <input type="submit" value="Add text" />
            </form> */}
            <button onClick={() => props.setDelTxt(true)} className={`${styles.button} ${styles.button1}`}>Remove text</button>
            {/* className=' pt-10' */}
            <div className={styles.textclr} style={{ height: '160px' }}>
                <>
                    <p className='pb-1' style={{ textAlign: 'center', color: 'grey' }}>Change text color</p>
                </>
                <div>
                    <TwitterPicker className='pt-3' onChange={handleChange} />
                </div>

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
                        <p >{props.txtWidth} px</p>
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
                <div className={styles.width} style={{ display: "grid", gridTemplateColumns: 'repeat(2,1fr)' }}>
                    <div>
                        <p style={{ display: 'inline' }}>Height</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <p >{props.txtHeight} px</p>
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
                {/* <div className='width' style={{ display: "grid", gridTemplateColumns: 'repeat(2,1fr)' }}>
                    <div>
                        <p style={{ display: 'inline' }}>Top</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <p >{props.txtTop} px</p>
                    </div>


                </div>
                <hr
                    style={{
                        color: "grey",
                        backgroundColor: "grey",
                        height: 1,

                    }}
                    className='mt-2 mb-2'
                />
                <div className='width' style={{ display: "grid", gridTemplateColumns: 'repeat(2,1fr)' }}>
                    <div>
                        <p style={{ display: 'inline' }}>Left</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <p >{props.txtLeft} px</p>
                    </div>


                </div>
                <hr
                    style={{
                        color: "grey",
                        backgroundColor: "grey",
                        height: 1.5,

                    }}
                    className='mt-2 mb-2'
                />
                <div className='width' style={{ display: "grid", gridTemplateColumns: 'repeat(2,1fr)' }}>
                    <div>
                        <p style={{ display: 'inline' }}>Size</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <p >20 px</p>
                    </div>


                </div> */}


            </div>
        </div>
    );
}

export default Addtext;
