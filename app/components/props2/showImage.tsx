import React from "react";

interface ShowImageProps {
    image: string;
}





const ShowImage = (props: ShowImageProps) => {
    return (
        <div>
            <img src={props.image} alt="#" />
        </div>
    );
}

export default ShowImage;
