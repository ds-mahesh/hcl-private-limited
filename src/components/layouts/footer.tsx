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
	console.log(props)
	React.useEffect(() => {
	  document.body.setAttribute("id", "body");
	})
	const toggle = () => {
	  (document.getElementById("body") as HTMLInputElement).classList.toggle('');
	};
	const Business = props?._site?.c_digitalBusiness?.map((link: any) => (
	  <a style={{ font: "caption", color: "black" }} className="navbar-item" href={link.link} >
		<span>{link.label}</span><br />
	  </a>
	));

	const Industries = props?._site?.c_industries?.map((link: any) => (
		<a style={{ font: "caption", color: "black" }} className="navbar-item" href={link.link} >
		  <span>{link.label}</span><br />
		</a>
	  ));

	  const Aboutus = props?._site?.c_aboutus?.map((link: any) => (
		<a style={{ font: "caption", color: "black" }} className="navbar-item" href={link.link} >
		  <span>{link.label}</span><br />
		</a>
	  ));

	  const Careers = props?._site?.c_careers?.map((link: any) => (
		<a style={{ font: "caption", color: "black" }} className="navbar-item" href={link.link} >
		  <span>{link.label}</span><br />
		</a>
	  ));

	//   const Description = props?._site?.c_footerDescription?.map((link: any) => (
	// 	<a style={{ font: "caption", color: "black" }} className="navbar-item" href={link.link} >
	// 	  <span>{link.label}</span><br />
	// 	</a>
	//   ));

	


	return (
		<>
			<footer className="site-footer">
				<div className="container">
					<div className="store-locator">					   
		              <div className="text-2xl">Digital Business 
                           <div className="flex gap-x-4 text-2xl font-semibold text-body  ">
		                       {props._site?.c_digitalBusiness?.headingName}
                               <ul style={{ color: "black" }} className="menu_footer">
                               <li><a >{Business}</a><br /></li>
                               </ul>
                           </div>
			          </div>					  					  					 
				    </div>
					<div className="store-locator">					   
		              <div className="text-2xl">Industries 
                           <div className="flex gap-x-4 text-[14px] font-semibold text-body  ">
		                       {props._site?.c_industries?.headingName}
                               <ul style={{ color: "black" }} className="menu_footer text-2xl">
                               <li><a >{Industries}</a><br /></li>
                               </ul>
                           </div>
			          </div>					  					  					 
				    </div>
					<div className="store-locator">					   
		              <div className="text-2xl">About-us 
                           <div className="flex gap-x-4 text-[14px] font-semibold text-body  ">
		                       {props._site?.c_aboutus?.headingName}
                               <ul style={{ color: "black" }} className="menu_footer text-2xl">
                               <li><a >{Industries}</a><br /></li>
                               </ul>
                           </div>
			          </div>					  					  					 
				    </div>
					<div className="store-locator">					   
		              <div className="text-2xl">Careers 
                           <div className="flex gap-x-4 text-[14px] font-semibold text-body  ">
		                       {props._site?.c_careers?.headingName}
                               <ul style={{ color: "black" }} className="menu_footer text-2xl">
                               <li><a >{Industries}</a><br /></li>
                               </ul>
                           </div>
			          </div>					  					  					 
				    </div>




	      				

					<div className="link-sec-footer ">
					{/* {footer.c_customer_services?
						<div className="footer-block">
							<h4 className="footer-block-title">{footer.c_customer_services.headerLinksHeading}</h4>
							<ul className="list-none">
								{footer.c_customer_services.headerLinks.map((customerService: any) => {
									return (<li>
											<Link props={customerService}/>
										</li>)
								})}
							</ul>
						</div>:''}
						{footer.c_about_matalan?
						<div className="footer-block">
							<h4 className="footer-block-title">{footer.c_about_matalan.headerLinksHeading}</h4>
							<ul className="list-none"><li>{footer.c_about_matalan.headerLinksHeading}</li>
								{footer.c_about_matalan.headerLinks.map((aboutMatalan: any) => {
									return (<li>
										<Link props={aboutMatalan}/>
										</li>)
								})}
							</ul>
						</div>:''}
						{footer.c_our_website? */}
						{/* <div className="footer-block">
							<h4 className="footer-block-title">{footer.c_our_website.headerLinksHeading}</h4>
							<ul className="list-none">
								{footer.c_our_website.headerLinks.map((ourWebsite: any) => {
									return (<li>
										<Link props={ourWebsite}/>
									</li>)
								})}
							</ul>
						</div>:''} */}
						<div className="footer-block">
						{/* <ul className="social-media-bx">
							{footer.c_socialIcons.map((icon: any) => {
								return (

									<>
										<li className=""> <a href={icon.cTA.link} target="_blank"><img src={icon.icon.url} height="20" alt="social" width="21" className="inline-block w-5 h-auto" /> </a> </li>
									</>
								)
							})}
						</ul> */}
						</div>

					</div>
					<div className="copyright-bx">
						{/* <span className="text-xs flex-wrap" data-copyright="">
							{footer.c_footerDescription}</span> */}						
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

