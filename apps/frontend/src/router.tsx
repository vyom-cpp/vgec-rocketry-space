import {Routes, Route, Navigate} from "react-router-dom"
import React from "react"
import { HomePage } from "./app/components/pages/Home"
import { NotFoundPage } from "./app/components/pages/NotFound"
import { AboutUs } from "./app/components/pages/AboutUs"
import { Missions } from "./app/components/pages/Missions"
import { SupportUs } from "./app/components/pages/SupportUs"
import { Blog } from "./app/components/pages/Blog"

export const Router: React.FC = () => {
 return(
    <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/missions" element={<Missions/>} />
        <Route path="/support" element={<SupportUs/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="*" element={<NotFoundPage/>} />
    </Routes>
 )  
}                        