import React from 'react'
import { SiTiktok, SiInstagram, SiYoutube } from "react-icons/si";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import './FooterSocials.css'

const FooterSocials = () => {
    return (
        <ul className="text-xl-right list-unstyled iconList" >
            <li className='iconLists'><h3 className='icons' href="#"><SiTiktok/></h3></li>
            <li className='iconLists'> <h3 className='icons' href="#"><SiInstagram/></h3></li>
           <li className='iconLists'><h3 className='icons' href="#"><SiYoutube/></h3></li>
           <li className='iconLists'><h3 className='icons' href="#"><FaFacebookF/></h3></li>
           <li className='iconLists'><h3 className='icons' href="#"><FiGithub/></h3></li>
           <li className='iconLists'><h3 className='icons' href="#"><FaLinkedinIn/></h3></li>
        </ul>
    )
}

export default FooterSocials
