import React from "react";
import classes from "./CustomizedButton.module.css"
import Link from "next/Link";


const CustomizedButton = ({ title,path }) => {
  return (
    <div className={`${classes.button__list}`}>
                 <Link href={path}><h5>{title}</h5></Link>
               </div>
  );
};

export default CustomizedButton;