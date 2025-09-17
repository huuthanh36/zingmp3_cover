import React, { useEffect } from "react";
import { Header } from "../../components";
import * as apis from "../../apis";

const Home = () => {
  useEffect(() => {
    const fetchDataHome = async () => {
      const responce = await apis.getHome();
      console.log(responce);
    };

    fetchDataHome();
  }, []);

  return (
    <div className="overflow-y-auto">
      <div className="h-[70px] bg-[#CED9D9] px-[59px] flex items-center ">
        <Header />
      </div>
    </div>
  );
};
export default Home;
