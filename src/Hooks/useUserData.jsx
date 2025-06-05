import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import axios from "axios";

const useUserData = () => {
  const { user, loading } = useAuth();
  const [userData, setUserData] = useState({});
  console.log(user);

  useEffect(() => {
    const fetchUserData = async () => {
      const res = await axios.get(
        `https://nest-shop-server-5fq9.onrender.com/user/${user.email}`
      );
      setUserData(res.data);
      console.log(res);
    };
    if (user?.email && !loading) {
      fetchUserData();
    }
  }, [user, loading]);
  return userData;
};

export default useUserData;
