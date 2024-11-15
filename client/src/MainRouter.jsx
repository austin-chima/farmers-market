import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home  from "./components/Home"
import FarmerHome from "./components/FarmerHome"

const MainRouter = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/farmerhome" element={<FarmerHome />} />
            </Routes>
        </div>
    )
}
export default MainRouter