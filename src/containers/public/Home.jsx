// import { useEffect } from "react";
// import * as apis from "../../apis";
import { Header, Slider } from "../../components";

const Home = () => {
  // useEffect(() => {
  //   const fetchDataHome = async () => {
  //     const responce = await apis.getHome();
  //     console.log(responce);
  //   };

  //   fetchDataHome();
  // }, []);

  return (
    <div className="overflow-y-auto">
      <div className="h-[70px] bg-[#CED9D9] px-[59px] flex items-center ">
        <Header />
      </div>
      <Slider />
    </div>
  );
};
export default Home;
