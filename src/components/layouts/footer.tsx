import * as React from "react";
import "../../index.css";
import logofooter from "../../images/logo-footer.svg";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";
import youtube from "../../images/youtube.svg";
import printest from "../../images/printest.svg";
import { cookieText, cookiesUrl } from "../../../sites-global/global"
import CookieConsent from "react-cookie-consent";
import { StaticData } from "../../../sites-global/staticData";
import { useEffect, useState } from "react";
import Link from "../commons/Link";

const Footer = ( props: any) => { 
	let NewVAr : any = props.label;
	console.log(props.label,"Props");
	const linkDoms = NewVAr.map((link:any) => (
	  <div className="grid place-items-center"> 
	  <a className="navbar-item" href={link.link} >   
		 <span> {link.label}</span>
		  <img src={link.icon?.url} className="h-10 w-10"/><br/>          
		</a>
		</div>      
  
	));
	const Services = props?._site?.c_digitalBusiness?.links?.map((link: any) => (
		<a className="navbar-item" href={link.link} >
		  <span>{link.label}</span><br />
		</a>
	  ));

	


	return (
		<>

			<footer className="site-footer">

				<div className="container">

					<div className="store-locator">
					<div className="company-logo mr-4">
							{/* <img src={footer.c_matalan_footer_logo.url} alt="logo"/> */}
							</div>
						
          <div className="text-2xl">Social Media Links
           <div className="flex gap-x-4 text-sm font-semibold text-body  ">
              {linkDoms} 
            </div>
			</div>
						<div className="store-inner flex flex-raw">
						<div className="flex gap-x-4 text-sm font-semibold text-body  ">
						{/* {props._site?.c_digitalBusiness?.headingName} */}
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

