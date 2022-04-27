import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import "./home.scss"
import Widget from "../../components/widget/Widget"


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
            </div>
        </div>
     );
}
 
export default Home;