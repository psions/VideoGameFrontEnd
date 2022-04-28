import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import "./home.scss"
import Widget from "../../components/widget/Widget"
import Featured from "../../components/featured/Featured"
import Chart from "../chart/DisplayChart"


const Home = () => {
    return ( 
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                    <Widget type="game"/>
                    <Widget type="console"/>
                    <Widget type="statistics"/>
                </div>
                <div className="charts">
                    <Featured/>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Home;