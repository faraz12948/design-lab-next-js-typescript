import { fabric } from 'fabric';
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import { useEffect, useState } from 'react';
import styles from './CanvasFront.module.css';
import crossIcon from '../../../styles/assets/remove.png';
import { Dispatch, SetStateAction } from "react";
import { Height } from '@mui/icons-material';
import Img from '../Img/Img'

interface txtProp {
    text: string;
    txtColor: string;
    delTxt: boolean;
    setDelTxt: Dispatch<SetStateAction<boolean>>;
    changeCanvas: boolean;
    imgURL: string;
    setImgURL: Dispatch<SetStateAction<string>>;
    setTxtWidth: Dispatch<SetStateAction<number>>;
    setTxtHeight: Dispatch<SetStateAction<number>>;
    setImgWidth: Dispatch<SetStateAction<number>>;
    setImgHeight: Dispatch<SetStateAction<number>>;
    setImgAngle: Dispatch<SetStateAction<number>>;
    setText: Dispatch<SetStateAction<string>>;
    setTxtColor: Dispatch<SetStateAction<string>>;
    // setTxtTop: Dispatch<SetStateAction<number>>;
    // setTxtLeft: Dispatch<SetStateAction<number>>;

}
function CanvasFront(props: txtProp) {
    const [objects, setObjects] = useState({});
    const [objectsBack, setObjectsBack] = useState({});

    const [color, setColor] = useState('');
    // const [image, setImage] = useState('');
    const { selectedObjects, editor, onReady } = useFabricJSEditor();
    // const [imgURL, setImgURL] = useState('https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=400x300');

    const initCanvas = () => {
        editor?.canvas.setWidth(200);
        editor?.canvas.setHeight(400);
    }
    useEffect(() => {
        // console.log(editor?.canvas.toObject);
        // editor?.canvas.setWidth(200);
        // editor?.canvas.setHeight(400);

        initCanvas();


    }, [editor?.canvas.getObjects])

    useEffect(() => {


        fabric.Image.fromURL(props.imgURL, function (oImg) {
            // editor?.canvas.setWidth(300);
            // editor?.canvas.setHeight(400);
            editor?.canvas.add(oImg);
            const obj = editor?.canvas.getObjects();
            obj?.forEach((o) => {
                if (o.type === "image") {
                    o.scaleToWidth(135);
                    o.scaleToHeight(100);
                }
            });
            editor?.canvas.centerObject(oImg);

            props.setImgURL('');


        });




        // setImgURL('');


    }, [props.imgURL])
    const onAddCircle = () => {
        if (editor) {
            editor.addCircle();
        }
    };
    const onAddRectangle = () => {
        if (editor) {
            editor.addRectangle();
        }
    };






    useEffect(() => {
        if (editor?.canvas.getActiveObjects()) {

            if (props.delTxt === true) {
                editor?.canvas.getActiveObjects().forEach((object) => {
                    if (object.type === "textbox")
                        editor?.canvas.remove(object);
                    props.setTxtWidth(0);
                    props.setTxtHeight(0);
                })
            }
            props.setDelTxt(false)

        }
        else {
            props.setDelTxt(false);
        }

    }, [props.delTxt]);
    const deleteObject = () => {
        editor?.canvas.getActiveObjects().forEach((object) => {
            editor?.canvas.remove(object);
            props.setTxtWidth(0);
            props.setTxtHeight(0);
            props.setImgWidth(0);
            props.setImgHeight(0);
            props.setImgAngle(0);

        });
        return true;

    }
    useEffect(() => {

        var Img = document.createElement('img');
        Img.src = crossIcon.src;
        // console.log(crossIcon)
        // console.log(Img);

        fabric.Object.prototype.transparentCorners = false;
        fabric.Object.prototype.cornerColor = 'blue';
        fabric.Object.prototype.cornerStyle = 'circle';
        function renderIcon(ctx: CanvasRenderingContext2D, left: number, top: number, styleOverride: any, fabricObject: fabric.Object) {
            // console.log(Img)
            var size = 24;
            ctx.save();
            ctx.translate(left, top);
            ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle || 0));
            ctx.drawImage(Img, -size / 2, -size / 2, size, size);
            ctx.restore();
        }

        fabric.Object.prototype.controls.deleteControl = new fabric.Control({
            x: 0.5,
            y: -0.5,
            offsetY: 16,
            cursorStyle: 'pointer',
            mouseUpHandler: deleteObject,
            render: renderIcon,
        });


    }, [editor?.canvas.getActiveObjects()]);
    function objectAddedListener(ev: any) {
        let target = ev.target;
        // console.log('left', target.left, 'top', target.top, 'width', target.width, 'height', target.height);
        if (target.type === "image") {

            props.setImgWidth(parseFloat((133.33).toFixed(2)));
            props.setImgHeight(parseFloat((100).toFixed(2)));
        }
        else {

            props.setTxtWidth(parseFloat((target.width).toFixed(2)));
            props.setTxtHeight(parseFloat((target.height).toFixed(2)));
            // props.setTxtTop(parseFloat((target.top).toFixed(2)));
            // props.setTxtLeft(parseFloat((target.left).toFixed(2)));

        }

    }

    function objectMovedListener(ev: any) {
        let target = ev.target;
        // console.log('left', target.left, 'top', target.top, 'width', target.width * target.scaleX, 'height', target.height * target.scaleY, 'rotation');
        const obj = editor?.canvas.getActiveObject();
        // console.log('left', target.left, 'top', target.top, 'width', target.width * target.scaleX, 'height', ((target.height * target.scaleY) / (editor?.canvas.getHeight() || 1)) * 100);

        let width = target.width * target.scaleX;
        let height = target.height * target.scaleY;


        if (target.type === "image") {

            props.setImgWidth(parseFloat((width).toFixed(2)));
            props.setImgHeight(parseFloat((height).toFixed(2)));
            if (obj) {
                props.setImgAngle(parseFloat((obj.get('angle') || 0).toFixed(2)) || 0);
            }
        }
        else {

            props.setTxtWidth(parseFloat((width).toFixed(2)));
            props.setTxtHeight(parseFloat((height).toFixed(2)));
            // props.setTxtTop(parseFloat((target.top).toFixed(2)));
            // props.setTxtLeft(parseFloat((target.left).toFixed(2)));

        }
    }
    function objectMovingListener(e: any) {
        var obj = e.target;
        // if object is too big ignore
        if (obj.currentHeight > obj.canvas.height || obj.currentWidth > obj.canvas.width) {
            return;
        }
        obj.setCoords();
        // top-left  corner
        if (obj.getBoundingRect().top < 0 || obj.getBoundingRect().left < 0) {
            obj.top = Math.max(obj.top, obj.top - obj.getBoundingRect().top);
            obj.left = Math.max(obj.left, obj.left - obj.getBoundingRect().left);
        }
        // bot-right corner
        if (obj.getBoundingRect().top + obj.getBoundingRect().height > obj.canvas.height || obj.getBoundingRect().left + obj.getBoundingRect().width > obj.canvas.width) {
            obj.top = Math.min(obj.top, obj.canvas.height - obj.getBoundingRect().height + obj.top - obj.getBoundingRect().top);
            obj.left = Math.min(obj.left, obj.canvas.width - obj.getBoundingRect().width + obj.left - obj.getBoundingRect().left);
        }

        console.log("object moving")

    }
    useEffect(() => {
        editor?.canvas.on('object:moving', objectMovingListener);
    }, [editor?.canvas.getActiveObjects()])
    useEffect(() => {

        editor?.canvas.on('object:modified', objectMovedListener);


    }, [editor?.canvas.getActiveObjects()])
    useEffect(() => {

        editor?.canvas.on('object:added', objectAddedListener);


    }, [editor?.canvas.getActiveObjects()])








    // const addText = (e: Event, text: string) => {
    //     e.preventDefault();

    //     try {
    //         editor?.canvas.add(
    //             new fabric.Textbox(text, {
    //                 fill: textColor,
    //                 fontSize: 20,
    //                 fontFamily: "Arial",
    //                 fontWeight: "bold",
    //                 textAlign: "center",
    //                 name: "text",
    //             })
    //         );
    //         editor?.canvas.renderAll();
    //     } catch (error) {
    //         console.log(error);
    //     }

    //     setText('');
    //     if (editor) {
    //         setObjects(editor?.canvas.getObjects());
    //     }
    //     // console.log(objects);

    // }
    // const getObj = () => {
    //     if (objects) {
    //         objects.forEach((ob) => {
    //             console.log(ob);
    //             editor?.canvas.add(ob);
    //             editor?.canvas.renderAll();
    //         })

    //     }


    // }
    useEffect(() => {
        // console.log(props.text, "canvas");
        try {
            editor?.canvas.add(
                new fabric.Textbox(props.text, {
                    fill: props.txtColor,
                    fontSize: 20,
                    fontFamily: "Ariel",
                    fontWeight: "bold",
                    textAlign: "center",
                    name: "text",
                })
            );
            editor?.canvas.renderAll();
            props.setText('');

            const obj = editor?.canvas.getObjects();
            if (obj) {
                if (obj[obj.length - 1].type === "textbox") {
                    editor?.canvas.centerObject(obj[obj.length - 1]);

                }
                // console.log(obj[obj.length - 1]);

            }



        } catch (error) {
            console.log(error);
        }

    }, [props.text]);

    useEffect(() => {


        if (editor?.canvas) {
            const obj = editor?.canvas.getActiveObjects();
            if (obj) {
                obj?.forEach((o) => {

                    if (o.type === "textbox") {
                        editor?.canvas.getActiveObject().set("fill", props.txtColor);
                        editor?.canvas.renderAll();
                    }
                })
            }
            else {
                props.setTxtColor('#000000')
            }

        }



    }, [props.txtColor]);
    useEffect(() => {


        if (editor?.canvas) {
            const obj = editor?.canvas.getObjects();
            // console.log(typeof (obj), '=>', typeof (objects));
            // console.log(Object.values(objects));


            if (props.changeCanvas === true) {
                setObjects(obj);
                // console.log(objects, "front");
                editor?.canvas.getObjects().forEach((object) => {

                    editor?.canvas.remove(object);
                })
            }
            else {
                setObjectsBack(obj);
                // console.log(objectsBack, "objects back");
                editor?.canvas.getObjects().forEach((object) => {

                    editor?.canvas.remove(object);
                })
            }

        }



    }, [props.changeCanvas]);
    useEffect(() => {

        // console.log(objectsBack);



        if (objects) {
            Object.values(objects).forEach((o) => {

                // console.log(o);
                if (props.changeCanvas === false) {
                    // console.log(o as any);
                    // console.log("gg")
                    editor?.canvas.add(o as any);
                    editor?.canvas.renderAll();
                }
            })


        }
        if (objectsBack) {
            Object.values(objectsBack).forEach((o) => {

                // console.log(o);
                if (props.changeCanvas === true) {
                    // console.log(o as any);
                    // console.log("gg")
                    editor?.canvas.add(o as any);
                    editor?.canvas.renderAll();
                }
            })

        }





    }, [props.changeCanvas]);

    return (
        <div className={styles.drawingArea}>
            <div className={styles.canvascontainer}>
                <FabricJSCanvas className='canvas' onReady={onReady} />
            </div>
        </div>
    );
}

export default CanvasFront;
