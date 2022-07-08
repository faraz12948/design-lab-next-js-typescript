import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { FunctionComponent } from "react";

interface ImgProps {
    src: string | StaticImageData;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    alt?: string;
}
const Img: FunctionComponent<ImgProps> = ({ src, id, className, style }) => {
    return (
        <div>
            <Link href="/">
                <a>
                    <Image
                        src={src}
                        alt=""
                        className={className}
                        height=""
                        width=""
                        id={id}
                        style={style}

                    />
                </a>
            </Link>
        </div>
    );
};

export default Img;