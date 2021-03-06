import "./widget.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const Widget = ({type}) => {
    let data;

    //temporary
    const amount = 100
    const diff = 20

    switch(type){
        case "game":
            data={
                title: "Games",
                isMoney: false,
                link:"See all games",
                icon: (
                    <PersonOutlineOutlinedIcon 
                    className="icon" 
                    style={{
                        color: "crimson",
                        backgroundColor: "rgba(255, 0, 0, 0.2)",
                    }}
                    />
                ),
            };
            break;
        case "console":
            data={
                title: "CONSOLES",
                isMoney: false,
                link:"See all consoles",
                icon: (
                    <VideogameAssetIcon 
                    className="icon"
                    style={{
                        backgroundColor: "rgba(128, 0, 128, 0.2) ",
                        color: "purple",
                    }}
                    />
                ),
            };
            break;
        case "statistics":
            data={
                title: "Stats",
                isMoney: true,
                link:"See all stats",
                icon:( 
                    <AnalyticsIcon 
                    className="icon"
                    style={{
                        backgroundColor: "rgba(218, 165, 32, 0.2",
                        color: "goldenrod",
                    }}
                />
                ),
            };
            break;
        default:
            break;                                                
                
 }

  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">
                {data.isMoney && "$"} {amount}
            </span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon/>
                {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget