import * as React from "react";
// import Cta from "./cta";
import logo from "../../images/logo copy.png";
import "../../index.css";

const Header = ( props : any) => {
  const {label,url,images}=props
  
  let NewVAr : any = props.label;
  // console.log(props.label,"Props");
  const linkDoms = props?._site?.c_header_link?.map((link:any) => (
    <a className="navbar-item" href={link.link} >
        <span>{link.label}</span>
      </a>
  ));

  return (
    <>
      
            
             <div style={{backgroundColor:"skyblue",height:"50px", padding:"5px",textAlign:"center",}}>
            <div style={{marginLeft:"300px",fontSize:"Oswald"}} className="flex gap-x-10 text-lg font-semibold">
              {linkDoms}</div>
              
              
            </div>
          
    </>
  );
};

export default Header;