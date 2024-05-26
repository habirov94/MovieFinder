import defaultPoster from "shared/images/default-poster.png";
import React from "react";
import {IImgBox} from "shared/ui/atoms/img-box/type";

export const ImgBox: React.FC<IImgBox> = ({
                                              alt,
                                              src ,
                                              width = 210,
                                              height = 315
                                          }) => {
    return (
        <img
            style={{width: width, height: height, borderRadius: 5}}
            alt={alt}
            src={src ?? defaultPoster}
        />
    )
}