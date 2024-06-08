import { To, useNavigate } from "react-router-dom";


export const useCustomNavigate = () => {
    const navigate = useNavigate();
    
    const handleClick = (to: To) => {
        if(to.toString().includes('http')){
            window.location.href = to.toString();
        } else {

            navigate(to);   
        }
    }
    return handleClick;
} 