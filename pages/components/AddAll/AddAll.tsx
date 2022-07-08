import TextFieldsIcon from '@mui/icons-material/TextFields';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';


import txt from '../../../styles/assets/text.png';
import image from '../../../styles/assets/image.png';
import upload from '../../../styles/assets/upload.png';
import color from '../../../styles/assets/color.png';

import styles from './AddAll.module.css';
import Img from '../Img/Img';
import { Dispatch, SetStateAction } from "react";

interface addAllProps {
  setChangePage: Dispatch<SetStateAction<number>>;
  changePage: number;

}
const AddAll = (props: addAllProps) => {

  return (

    <>
      <div>

        <p className='pb-5 pt-3' style={{ textAlign: 'center', color: 'grey' }}>How do you want to start?</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="grid grid-cols-2 ">

          <button onClick={() => props.setChangePage(1)} >
            <div className={styles.icons} style={{ paddingTop: '30px', paddingRight: '30px', paddingBottom: '0px', paddingLeft: '30px' }}>
              <Img src={txt} alt=""></Img>
              <p className='pb-5' style={{ fontSize: '10px', textAlign: 'center', color: 'grey' }}>Add text</p>
            </div>
          </button>
          <button onClick={() => props.setChangePage(2)} >
            <div className={styles.icons} style={{ paddingTop: '30px', paddingRight: '30px', paddingBottom: '0px', paddingLeft: '30px' }}>
              <Img src={image} alt=""></Img>
              <p className='pb-5' style={{ fontSize: '10px', textAlign: 'center', color: 'grey' }}>Add text</p>
            </div>
          </button>
          <button onClick={() => props.setChangePage(3)} >
            <div className={styles.icons} style={{ paddingTop: '30px', paddingRight: '30px', paddingBottom: '0px', paddingLeft: '30px' }}>
              <Img src={upload} alt=""></Img>
              <p className='pb-5' style={{ fontSize: '10px', textAlign: 'center', color: 'grey' }}>Add text</p>
            </div>
          </button>
          <button onClick={() => props.setChangePage(4)} >
            <div className={styles.icons} style={{ paddingTop: '30px', paddingRight: '30px', paddingBottom: '0px', paddingLeft: '30px' }}>
              <Img src={color} alt=""></Img>
              <p className='pb-5' style={{ fontSize: '10px', textAlign: 'center', color: 'grey' }}>Add text</p>
            </div>
          </button>


        </div>
      </div>
    </>


  );
}
export default AddAll;