import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Logout(){
  const history = useHistory();
  useEffect(() => {
    localStorage.removeItem("tokenAdmin");
    localStorage.removeItem("username");
    history.push("/")
    history.go(0)
  }, []);
  return <></>
}
