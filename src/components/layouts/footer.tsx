import * as React from "react";
import "../../index.css";
import { cookieText, cookiesUrl } from "../../../sites-global/global"
import CookieConsent from "react-cookie-consent";
import { StaticData } from "../../../sites-global/staticData";
import { useEffect, useState } from "react";
import Link from "../commons/Link";

// const Footer = ( props: any) => { 
// 	let NewVAr : any = props.label;
// 	console.log(props.label,"Props");
// 	const linkDoms = NewVAr.map((link:any) => (
// 	  <div className="grid place-items-center"> 
// 	  <a className="navbar-item" href={link.link} >   
// 		 <span> {link.label}</span>
// 		  <img src={link.icon?.url} className="h-10 w-10"/><br/>          
// 		</a>
// 		</div>      
  
// 	));
// 	const Services = props?._site?.c_digitalBusiness?.links?.map((link: any) => (
// 		<a className="navbar-item" href={link.link} >
// 		  <span>{link.label}</span><br />
// 		</a>
// 	  ));
const Footer = (props: any) => {
	const {label,images,_site}=props;
	console.log(props)
	React.useEffect(() => {
	  document.body.setAttribute("id", "body");
	})
	// const toggle = () => {
	//   (document.getElementById("body") as HTMLInputElement).classList.toggle('');
	// };
	const Business = props?._site?.c_digitalBusiness?.map((link: any) => (
	  <a className="navbar-item" href={link.link} >
		<span>{link.label}</span><br />
	  </a>
	));

	const Industries = props?._site?.c_industries?.map((link: any) => (
		<a className="navbar-item" href={link.link} >
		  <span>{link.label}</span><br />
		</a>
	  ));

	  const Aboutus = props?._site?.c_aboutus?.map((link: any) => (
		<a className="navbar-item" href={link.link} >
		  <span>{link.label}</span><br />
		</a>
	  ));

	  const Careers = props?._site?.c_careers?.map((link: any) => (
		<a className="navbar-item" href={link.link} >
		  <span>{link.label}</span><br />
		</a>
	  ));

	  const Icons = props?._site?.c_socialicons?.map((link: any) => (
		<div className="grid place-items-center"> 
          <a className="navbar-item" href={link.link} >   
                 {/* <span className="text-xl  "> {link.label}</span> */}
                <img src={link.icon?.url} className="inline-flex flex-col space-y-0 h-7 w-7"/><br/>          
         </a>
       </div>      
	  ));

	//   const services = c_servicesIn?.map((link: any) => (
	// 	<a className="navbar-item" href={link.link} >
	// 	  <span>{link.label}</span><br />
	// 	</a>
	//   ));

	return (
		<>
			<footer className="site-footer ">
				<div style={{backgroundColor:"LightGray",margin:"0px" ,padding:"0px"}} >
				<div  className="container">
					<div className="store-locator">					   
		              <div className="text-2xl">Digital Business 
                           <div className="text-xl ">
		                       {props._site?.c_digitalBusiness?.headingName}
                               <ul style={{ color: "black" }} className="menu_footer">
                               <li><a >{Business}</a><br /></li>
                               </ul>
                           </div>
			          </div>					  					  					 
				    </div>
					<div className="store-locator">					   
		              <div className="text-2xl">Industries 
                           <div className=" text-xl">
		                       {props._site?.c_industries?.headingName}
                               <ul style={{ color: "black" }} className="menu_footer  ">
                               <li><a >{Industries}</a><br /></li>
                               </ul>
                           </div>
			          </div>					  					  					 
				    </div>
					<div className="store-locator">					   
		              <div className="text-2xl">About-us 
                           <div className="text-xl">
		                       {props._site?.c_aboutus?.headingName}
                               <ul style={{ color: "black" }} className="menu_footer ">
                               <li><a >{Aboutus}</a><br /></li>
                               </ul>
                           </div>
			          </div>					  					  					 
				    </div>
					<div className="store-locator">					   
		              <div className="text-2xl">Careers 
                           <div className="text-xl ">
		                       {props._site?.c_careers?.headingName}
                               <ul style={{ color: "black" }} className="menu_footer ">
                               <li><a >{Careers}</a><br /></li>
                               </ul>
                           </div>
			          </div>					  					  					 
				    </div>
				  <div className="store-locator">					   
		              <div className="text-2xl ">Social Media Links 
                           <div className=" ">
		                       {props._site?.c_socialicons?.headingName}
								 {Icons}                                           
                           </div>
			          </div>					 		  					  					  */}
				    </div>	
					<div>
            <div style={{fontSize:"Oswald" ,backgroundColor:"",height:"70px"}} className="flex gap-x-10">
               <img src={_site.c_footerlogo?.url} style={{height:"70px",width:"100px"}}/>
                  <div style={{padding:"20px"}} className="flex gap-x-10 text-2xl">
                     {_site.c_footerDescription}
                  </div>
            </div>
         </div>
					      														
				</div>	
				</div>		                                                                         
			</footer>
			<CookieConsent
				buttonText={"Accept"}
				buttonStyle={{
					marginLeft: "100px",
				}}
			>
				<p>
					{cookieText}
					<a className="text-cookies-link" href={cookiesUrl}>
						{StaticData.cookie}
					</a>
					.
				</p>
			</CookieConsent>
		</>
	);
};

export default Footer;
// function handleMediaQueryChange(mediaQuery: MediaQueryList) {
// 	throw new Error("Function not implemented.");
// }

