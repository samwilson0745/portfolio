import React from "react";

const Avatar = ({imageUrl})=>{
    return(
        <div className="avatar">
            <img src={imageUrl} alt="No Image Available"/>
        </div>
    );
}
export default Avatar;