import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Perfil } from "../pages/Perfil";
import { CreateMovie } from "../pages/CreateMovie";
import { MoviePreview } from "../pages/MoviePreview";

export function AppRoutes(){
    return (
        <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/profile" element={<Perfil />} />
            <Route  path="/new" element={<CreateMovie />} />
            <Route  path="/details" element={<MoviePreview />} />
        </Routes>
    )
}