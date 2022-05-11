import Logo from '../assets/logo.png';
import Chart from '../assets/chart.png';
import Folder from '../assets/folder.png';
import Calendar from '../assets/calendar.png';
import Docket from '../assets/docket.png';
import Chat from '../assets/chat.png';
import Doughnut from '../assets/dougnut.png';
import Settings from '../assets/settings.png';

function SideNav() {
  return (
    <div className="side-nav">
        <div className="logo">
            <img src={Logo} alt="Logo" />
        </div>
        <nav className="menu">
            <ul>
                <li className='active'>
                    <a href="#">
                        <img src={Chart} alt="" />
                        <span className="stroke">
                            <span className="half"></span>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Calendar} alt="" />
                        <span className="stroke">
                            <span className="half"></span>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Folder} alt="" />
                        <span className="stroke">
                            <span className="half"></span>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Docket} alt="" />
                        <span className="stroke">
                            <span className="half"></span>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Chat} alt="" />
                        <span className="stroke">
                            <span className="half"></span>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Doughnut} alt="" />
                        <span className="stroke">
                            <span className="half"></span>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Settings} alt="" />
                        <span className="stroke">
                            <span className="half"></span>
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default SideNav