import { TvMinimalPlay } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useContext } from "react";
import { AuthContext } from "@/context/auth-context";
import { IoFilterOutline } from "react-icons/io5";

function StudentViewCommonHeader() {
  const navigate = useNavigate();
  const { resetCredentials } = useContext(AuthContext);

  function handleLogout() {
    resetCredentials();
    sessionStorage.clear();
  }

  return (
    <header className="flex items-center justify-between p-4 border-b relative">
      <div className="flex items-center space-x-4">
        <Link to="/home" className="flex items-center hover:text-black">
          <img src="/images/logo-2.png" className="w-6 mr-2" />
          <span className="orbitron sm:text-[23px] text-blue-600 font-[500] tracking-wider">
            Cours<span className="text-red-500">Ed</span>Net
          </span>
        </Link>
        <div className="hidden sm:flex items-center space-x-1">
          <Button
            variant="ghost"
            onClick={() => {
              location.pathname.includes("/courses")
                ? null
                : navigate("/courses");
            }}
            className="text-[14px] md:text-[16px] font-medium"
          >
            <IoFilterOutline />
            Explore Courses
          </Button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex gap-6 items-center">
          <div
            onClick={() => navigate("/student-courses")}
            className="flex cursor-pointer items-center gap-1.5"
          >
            <TvMinimalPlay className="w-6 h-6 cursor-pointer" />
            <span className="hidden sm:block text-[14px] md:text-[16px] font-medium">
              My Courses
            </span>
          </div>
          <Button className="bg-blue-500 mr-3" onClick={handleLogout}>Sign Out</Button>
        </div>
      </div>
    </header>
  );
}

export default StudentViewCommonHeader;
