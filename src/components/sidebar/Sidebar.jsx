import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SearchIcon from '@mui/icons-material/Search';

const Sidebar = () => {
    return ( 
        <div className='sidebar'>
            <div className="top">
                <span className="logo">Gaming Library</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon"/>
                     <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <li>
                        <VideogameAssetIcon className="icon"/>
                     <span>Consoles</span>
                    </li>
                    <li>
                        <AnalyticsIcon className="icon"/>
                     <span>Graph</span>
                    </li>
                    <li>
                        <SearchIcon className="icon"/>
                     <span>Search</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
     );
}
 
export default Sidebar ;