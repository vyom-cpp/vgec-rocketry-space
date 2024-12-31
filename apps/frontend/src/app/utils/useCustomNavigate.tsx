import { To, useNavigate } from "react-router-dom";


export const useCustomNavigate = () => {
    const navigate = useNavigate();
    
    const handleClick = (to: To) => {
        if(to.toString().includes('http')){
            window.open(to.toString(),  "_blank")
        } else {
            navigate(to);   
        }
        window.scrollTo(0,0);
    }
    return handleClick;
} 