import logo from "../assets/logo.svg";
import { sidebarMenu } from "../utils/menu";
import { NavLink } from "react-router-dom";

const notActiveStyle =
  "py-2 px-[25px] font-bold text-black text-[13px] flex gap-[12px] items-center";
const activeStyle =
  "py-2 px-[25px] font-bold text-[#3A8989] text-[13px] bg-[#e4f4f4] border-l-4 border-[#3A8989] flex gap-[12px] items-center";

const SideBarLeft = () => {
  return (
    <div className="flex flex-col bg-[#DDE4E4]">
      <div className="w--full h-[70px] py-[15px] px-[25px] flex justify-start items-center">
        <img src={logo} alt="Logo" className="w-[120px] h-10 " />
      </div>
      <div className="flex flex-col">
        {sidebarMenu.map((item) => (
          <NavLink
            to={item.path}
            key={item.path}
            end={item.end}
            className={({ isActive }) =>
              isActive ? activeStyle : notActiveStyle
            }
          >
            {item.icons}
            <span>{item.text}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideBarLeft;
