﻿import React from 'react'
import Logotype from "./logos/Logotype";
import {Link} from "react-router-dom";

// function Logotype() {
//   return (
//     <svg className="logo header-element header-logo" width="450" height="23" viewBox="0 0 450 93" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
//       <rect width="450" height="93" fill="url(#pattern0)" />
//       <defs>
//         <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
//           <use xlinkHref="#image0" transform="translate(0 -0.000780437) scale(0.00268817 0.0130073)" />
//         </pattern>
//         <image id="image0" width="372" height="77" xlinkHref="data:image/png;base64,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" />
//       </defs>
//     </svg>

//   )
// }

export default function Header(props) {
  return (
    <div className="header flex">

      <div >
        <div className="hamburgarmeny">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6L32 6C32.2652 6 32.5196 6.15804 32.7071 6.43934C32.8946 6.72065 33 7.10218 33 7.5C33 7.89783 32.8946 8.27936 32.7071 8.56066C32.5196 8.84197 32.2652 9 32 9L4 9C3.73478 9 3.48043 8.84196 3.29289 8.56066C3.10536 8.27935 3 7.89782 3 7.5C3 7.10217 3.10536 6.72064 3.29289 6.43934C3.48043 6.15803 3.73478 6 4 6Z" fill="#363636" />
            <path d="M4 16L32 16C32.2652 16 32.5196 16.158 32.7071 16.4393C32.8946 16.7206 33 17.1022 33 17.5C33 17.8978 32.8946 18.2794 32.7071 18.5607C32.5196 18.842 32.2652 19 32 19L4 19C3.73478 19 3.48043 18.842 3.29289 18.5607C3.10536 18.2794 3 17.8978 3 17.5C3 17.1022 3.10536 16.7206 3.29289 16.4393C3.48043 16.158 3.73478 16 4 16Z" fill="#363636" />
            <path d="M4 26L32 26C32.2652 26 32.5196 26.158 32.7071 26.4393C32.8946 26.7206 33 27.1022 33 27.5C33 27.8978 32.8946 28.2794 32.7071 28.5607C32.5196 28.842 32.2652 29 32 29L4 29C3.73478 29 3.48043 28.842 3.29289 28.5607C3.10536 28.2794 3 27.8978 3 27.5C3 27.1022 3.10536 26.7206 3.29289 26.4393C3.48043 26.158 3.73478 26 4 26Z" fill="#363636" />
          </svg>
        </div>
        {/* <i className="fa fa-bars header-element"></i>
        <Logotype/> */}
        {/* <span className="banner"> Boomerang </span> */}

      </div>

      <div className="left">

        <Logotype className="lower"/>
      </div>

      {props.loginStatus ?
        <div className="right">
          <span className="my-account header-element"><b>{props.me.firstName}</b> </span>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.25 10.5C19.25 11.8924 18.6969 13.2277 17.7123 14.2123C16.7277 15.1969 15.3924 15.75 14 15.75C12.6076 15.75 11.2723 15.1969 10.2877 14.2123C9.30312 13.2277 8.75 11.8924 8.75 10.5C8.75 9.10761 9.30312 7.77226 10.2877 6.78769C11.2723 5.80312 12.6076 5.25 14 5.25C15.3924 5.25 16.7277 5.80312 17.7123 6.78769C18.6969 7.77226 19.25 9.10761 19.25 10.5V10.5Z" fill="#363636" />
            <path fillRule="evenodd" clipRule="evenodd" d="M0 14C0 10.287 1.475 6.72601 4.10051 4.10051C6.72601 1.475 10.287 0 14 0C17.713 0 21.274 1.475 23.8995 4.10051C26.525 6.72601 28 10.287 28 14C28 17.713 26.525 21.274 23.8995 23.8995C21.274 26.525 17.713 28 14 28C10.287 28 6.72601 26.525 4.10051 23.8995C1.475 21.274 0 17.713 0 14V14ZM14 1.75C11.6931 1.75012 9.43314 2.40163 7.4802 3.62955C5.52727 4.85746 3.96074 6.61187 2.96094 8.69084C1.96113 10.7698 1.56868 13.0888 1.82875 15.381C2.08882 17.6732 2.99084 19.8454 4.431 21.6475C5.6735 19.6455 8.40875 17.5 14 17.5C19.5912 17.5 22.3248 19.6437 23.569 21.6475C25.0092 19.8454 25.9112 17.6732 26.1713 15.381C26.4313 13.0888 26.0389 10.7698 25.0391 8.69084C24.0393 6.61187 22.4727 4.85746 20.5198 3.62955C18.5669 2.40163 16.3069 1.75012 14 1.75V1.75Z" fill="#363636" />
          </svg>
        </div> :
        <div className="right">
          <Link to="/login" className="button-v1">Logga in</Link>
        </div>
      }
      

    </div>
  )
}
