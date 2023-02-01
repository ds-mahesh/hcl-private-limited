import * as React from "react";
import Footer from "./footer";
import Nav from "./Nav";
import Header from "./header";

type Props = {
  _site: any;
  children?: React.ReactNode;
  global?:any;
};

const PageLayout = ({ _site, children }: Props) => {
  return (
    <>
    <div className="min-h-screen">
      <Header label={_site.c_header_link} url={""}/> 
      {children}
      <Footer label={_site.c_socialicons} />
      
      {/* <Footer label={_site.c_digitalBusiness}/> */}
    </div>
    </>
  );
};

export default PageLayout;

  