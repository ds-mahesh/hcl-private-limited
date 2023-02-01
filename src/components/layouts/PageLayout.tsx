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
      <Header _site={_site}/> 
      {children}
      <Footer _site={_site} />
      
      {/* <Footer label={_site.c_digitalBusiness}/> */}
    </div>
    </>
  );
};

export default PageLayout;

  