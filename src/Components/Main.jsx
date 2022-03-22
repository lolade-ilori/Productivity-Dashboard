import Logo from './assets/logo.png'
import Chart from './assets/chart.png'
import Folder from './assets/folder.png'
import Calendar from './assets/calendar.png'
import Docket from './assets/docket.png'
import Chat from './assets/chat.png'
import Doughnut from './assets/dougnut.png'
import Settings from './assets/settings.png'
import SearchIcon from './assets/search.png'

function Main() {
  return (
    <div className="wrapper">
        {/* SIDE NAVIGATION */}
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

        {/* BODY CONTENT */}
        <div className="content">
            <div className="grid grid-cols-12">
                <div className="col-span-12 xl:col-span-12 2xl:col-span-9">
                    <div className="main">
                        <header>
                            <div className="grid grid-cols-12">
                                <div className="col-span-12 2xl:col-span-8">
                                    <div className="title">
                                        <h1>working productivity</h1>
                                        <span>Let's check your progress</span>
                                    </div>
                                </div>

                                <div className="col-span-12 2xl:col-span-4">
                                    <div className="search-bar">
                                        <div className="grp">
                                            <img src={SearchIcon} alt="" />
                                            <input type="text" placeholder="search for anything..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                    </div>
                </div>
                <div className="col-span-12 2xl:col-span-3">
                    <div className="profile-area">

                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Main