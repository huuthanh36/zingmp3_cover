import React, { useEffect, useRef, useState } from "react";
import icons from "../utils/icons";
import Search from "./Search";
import Login from "../containers/public/Login";

const {
  HiArrowNarrowLeft,
  HiArrowNarrowRight,
  IoSettingsOutline,
  VscDesktopDownload,
  MdOutlinePlayCircleOutline,
  BsFillMoonFill,
  LiaAffiliatetheme,
  IoIosInformationCircleOutline,
  IoDocumentTextOutline,
  MdOutlinePrivacyTip,
  CiFlag1,
  FiPhone,
} = icons;

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.constains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between w-full items-center">
      <div className="flex gap-6 w-full items-center">
        <div className="flex gap-6 text-gray-400 ">
          <span>
            <HiArrowNarrowLeft size={24} />
          </span>
          <span>
            <HiArrowNarrowRight size={24} />
          </span>
        </div>
        <div className="w-1/2 flex-1">
          <Search />
        </div>
      </div>

      <div className="flex gap-2 text-gray-400 w-full justify-end items-center">
        <div className="cursor-pointer h-[40px] w-[180px] text-[#DDE4E4] font-bold text-sm flex items-center justify-center rounded-4xl bg-[#0E8080] ">
          Nâng cấp tài khoản
        </div>
        <div className="gap-2 cursor-pointer h-[40px] w-[180px] text-[#0E8080] font-bold text-sm flex items-center justify-center rounded-4xl bg-[#DDE4E4] ">
          <div>
            <VscDesktopDownload size={18} />
          </div>
          <div>Tải bản Windows</div>
        </div>
        <div
          className="cursor-pointer w-9 h-9 flex items-center justify-center rounded-4xl bg-[#DDE4E4]"
          onClick={toggleMenu}
        >
          <IoSettingsOutline size={20} />
        </div>
        <div>
          <Login />
        </div>

        {showMenu && (
          <div className="absolute top-[60px] right-[440px] bg-white shadow-lg rounded-lg p-4 w-[300px] border border-gray-200">
            <ul className="flex flex-col gap-2 text-sm text-gray-700">
              <li className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
                <span className="text-gray-500">
                  <MdOutlinePlayCircleOutline size={22} />
                </span>{" "}
                Trình phát nhạc
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
                <span className="text-gray-500">
                  <LiaAffiliatetheme size={24} />
                </span>{" "}
                Giao diện
              </li>
              <hr className="my-2 border-gray-300" />
              <li className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
                <span className="text-gray-500">
                  <IoIosInformationCircleOutline size={24} />
                </span>{" "}
                Giới thiệu
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
                <span className="text-gray-500">
                  <IoDocumentTextOutline size={24} />
                </span>{" "}
                Thỏa thuận sử dụng
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
                <span className="text-gray-500">
                  <MdOutlinePrivacyTip size={24} />
                </span>{" "}
                Chính sách bảo mật
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
                <span className="text-gray-500">
                  <CiFlag1 size={24} />
                </span>{" "}
                Báo cáo vi phạm bản quyền
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
                <span className="text-gray-500"></span> Quảng cáo
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
                <span className="text-gray-500">
                  <FiPhone size={24} />
                </span>{" "}
                Liên hệ
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
