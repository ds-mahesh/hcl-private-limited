import * as React from "react";
// import Cta from "./cta";
import logo from "../../images/logo copy.png";
import "../../index.css";

const Header = ( props : any) => {
  const {label,images,_site}=props;
  
  let NewVAr : any = props.label;
  // console.log(props.label,"Props");
  const linkDoms = props?._site?.c_header_link?.map((link:any) => (
    <a className="navbar-item" href={link.link} >
        <span>{link.label}</span>
      </a>
  ));

  return (
    <>
         <div>
            <div style={{fontSize:"Oswald" ,backgroundColor:"CornflowerBlue",height:"70px"}} className="flex gap-x-10 font-semibold">
               <img src={_site.c_hCLHeaderLogo?.url} style={{height:"70px",width:"100px"}}/>
                  <div style={{padding:"20px"}} className="flex gap-x-10 text-2xl">
                     {linkDoms}
                  </div>
            </div>
         </div>
          
    </>
  );
};

export default Header;