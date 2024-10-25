import { LuMessageCircle } from "react-icons/lu";
import { MdLocalPostOffice } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="w-full py-12 mt-40 bg-black text-white flex flex-wrap
    gap-y-12 gap-3 justify-around">
        <div className="w-[350px] md:w-[45%] flex justify-center flex-col gap-3">
            <h1 className="text-blue-400">About Us</h1>
            <p>Welcome to CourseEdnet, where learning meets convenience. 
                Our mission is to make high-quality education accessible to everyone, 
                no matter where they are. We believe that knowledge empowers people to
                 achieve their goals, and we are committed to providing a platform that
                  supports learners in every step of their journey.</p>
        </div>
        <div className="flex flex-col justify-center">
            <h1 className="text-blue-400">Links</h1>
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Explore Courses</a>
            <a href="">Services</a>
            <a href="">Contact Us</a>
        </div>
        <div className="flex flex-col justify-center gap-1">
            <h1 className="text-blue-400">Connect with us</h1>
            <p className="flex items-center gap-2"><LuMessageCircle /> Contact Us</p>
            <p className="flex items-center gap-2"><MdLocalPostOffice /> info@Coursednet.com</p>
            <p className="flex items-center gap-2"><BsFillTelephoneFill /> +1 (555) 555 555</p>
            <div className="flex w-full justify-between mt-4">
                <FaFacebook className="text-3xl" />
                <BsTwitterX className="text-3xl" />
                <FaLinkedin className="text-3xl" />
                <HiOutlineHome className="text-3xl" />
            </div>
        </div>
    </div>
  )
}

export default Footer