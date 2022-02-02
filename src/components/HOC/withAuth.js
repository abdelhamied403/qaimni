import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const withAuth = (WrappedComponent, Layout, name) => {
  const Component = (props) => {
    const router = useRouter();
    const [verified, setVerified] = useState(false);

    useEffect(() => {
      if(localStorage.getItem("token") && localStorage.getItem("user")){
        setVerified(true);
      }else{
        router.push("/auth/login")
      }
    }, []);
    
    return verified ? <WrappedComponent {...props} /> : <></>
    
  }
  Component.Layout = Layout;
  Component.DisplayName = name;
  return Component;
};
 
export default withAuth;