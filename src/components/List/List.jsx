import "./List.scss";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

const List = () => {
    return ( 
        <div className='List'>
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                datatable
            </div>
        </div>
     );
}
 
export default List ;