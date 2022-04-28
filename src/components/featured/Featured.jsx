import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DisplayChart from "../chart/DisplayChart";
import Datatable from "../datatable/Datatable";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Sales Since 2013</h1>
        <MoreVertIcon fontSize="small"/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <DisplayChart/>
          <Datatable/>
        </div>
      </div>
    </div>
  )
}

export default Featured