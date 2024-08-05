import { IconButton } from "@mui/material";
import React from "react"
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useCustomNavigate } from "../utils/useCustomNavigate";


interface SocialLinkProps{
    color: String | undefined;
    fontSize: string | number;
}
export const SocialLinks:React.FC<SocialLinkProps> = ({color, fontSize}) => {
    const handleNavigate = useCustomNavigate(); 
    return(
        <div>
            <IconButton onClick={()=>handleNavigate('https://x.com/vgecrocketry')}>
                <XIcon style={{ color: `${color}`, fontSize: fontSize}}/>
            </IconButton>
            <IconButton onClick={()=>handleNavigate('https://www.youtube.com/@vgecrocketryteam3924')}>
                <YouTubeIcon style={{ color: `${color}`, fontSize: fontSize }}/>
            </IconButton>
            <IconButton onClick={()=>handleNavigate('https://www.linkedin.com/company/vgec-rocketry-team/')}>
                <LinkedInIcon style={{ color: `${color}`, fontSize: fontSize}}/>
            </IconButton>
            <IconButton onClick={()=>handleNavigate('https://www.instagram.com/vgecrocketry/')}>
                <InstagramIcon style={{ color: `${color}`, fontSize: fontSize}}/>
            </IconButton>
        </div>
    )
}