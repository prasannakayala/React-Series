import { useEffect, useState } from "react";

const UseOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  console.log(onlineStatus)
  useEffect(() => {
    window.addEventListener("offline", () => {
        console.log("triggered offline")
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
        console.log("triggered online")
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default UseOnlineStatus;
