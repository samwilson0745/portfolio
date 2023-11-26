import React from "react";

const EmailLogo = ({color})=>{
    return(
        <div>
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="64px"
                height="64px"
                className="icon"
            >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></g>
                <g id="SVGRepo_iconCarrier" >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3V18C22 18.5523 21.5523 19 21 19C20.4477 19 20 19.4477 20 20C20 20.5523 20.4477 21 21 21C21.5523 21 22 21.4477 22 22C22 23.1046 21.1046 24 20 24H4C2.89543 24 2 23.1046 2 22V3ZM21 17H3V4H21V17ZM20.8536 4H3.85355L12 11.2929L20.1464 4H20.8536ZM3 18V22H20V18H3Z"
                        fill={color}
                    ></path>
                </g>
            </svg>
        </div>
    )
}

export default EmailLogo;