import Logo from './assets/logo.png';
import Chart from './assets/chart.png';
import Folder from './assets/folder.png';
import Calendar from './assets/calendar.png';
import Docket from './assets/docket.png';
import Chat from './assets/chat.png';
import Doughnut from './assets/dougnut.png';
import Settings from './assets/settings.png';
import SearchIcon from './assets/search.png';
import Rocket from './assets/rocket.png';
import {ReactComponent as WaveSvg} from './assets/wave.svg';
import {ReactComponent as CircleSvg} from './assets/circle.svg';

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
                                <div className="col-span-12 xl:col-span-8 2xl:col-span-8">
                                    <div className="title">
                                        <h1>working productivity</h1>
                                        <span>Let's check your progress</span>
                                    </div>
                                </div>

                                <div className="col-span-12 xl:col-span-4 2xl:col-span-4">
                                    <div className="search-bar">
                                        <div className="grp">
                                            <img src={SearchIcon} alt="" />
                                            <input type="text" placeholder="search for anything..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>

                        <div className="dashboard-area">
                            <div className="grid grid-cols-12 gap-10">
                                <div className="col-span-12 xl:col-span-8 2xl:col-span-8">
                                    <div className="productivity-listing">
                                        <div className="pro-bar">
                                            <div className="percent-area">
                                                <div className="date-tag">
                                                    <div className="day">mon</div>
                                                    <div className="date">18</div>
                                                </div>

                                                <div className="fancy-chart">
                                                    <span className="chart-title">productive</span>
                                                    <div className="chart">
                                                        <WaveSvg />
                                                        <span className="percent-count">86%</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="time-area">
                                                <div className="grp">
                                                    <span className="title">Productive Time</span>
                                                    <span className="time">5h 12m</span>
                                                </div>
                                                <div className="grp">
                                                    <span className="title">Time at Work</span>
                                                    <span className="time">5h 45m</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pro-bar">
                                            <div className="percent-area">
                                                <div className="date-tag">
                                                    <div className="day">tue</div>
                                                    <div className="date">19</div>
                                                </div>

                                                <div className="fancy-chart">
                                                    <span className="chart-title">productive</span>
                                                    <div className="chart">
                                                        <WaveSvg />
                                                        <span className="percent-count">72%</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="time-area">
                                                <div className="grp">
                                                    <span className="title">Productive Time</span>
                                                    <span className="time">4h 10m</span>
                                                </div>
                                                <div className="grp">
                                                    <span className="title">Time at Work</span>
                                                    <span className="time">6h 30m</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pro-bar">
                                            <div className="percent-area">
                                                <div className="date-tag">
                                                    <div className="day">tue</div>
                                                    <div className="date">20</div>
                                                </div>

                                                <div className="fancy-chart">
                                                    <span className="chart-title">productive</span>
                                                    <div className="chart">
                                                        <WaveSvg />
                                                        <span className="percent-count">60%</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="time-area">
                                                <div className="grp">
                                                    <span className="title">Productive Time</span>
                                                    <span className="time">3h 05m</span>
                                                </div>
                                                <div className="grp">
                                                    <span className="title">Time at Work</span>
                                                    <span className="time">7h 10m</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 xl:col-span-4 2xl:col-span-4">
                                    <div className="monthly-statistics">
                                        <h1 className="h-title">Statistics on July</h1>
                                        <div className="statistics-chart">
                                            <CircleSvg />
                                            <CircleSvg />
                                            <CircleSvg />
                                            <CircleSvg />
                                            <span className="decal-circle"></span>
                                            <img src={Rocket} alt="" className='rocket' />
                                        </div>

                                        <div className="statistics-progress">
                                            <div className="stat">
                                                <div className="top-area">
                                                    <span className="stat-title">Tasks</span>
                                                    <span className="stat-percentage">40%</span>
                                                </div>
                                                <div className="stat-line">
                                                    <span className="outer">
                                                        <span className="inner"></span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="stat">
                                                <div className="top-area">
                                                    <span className="stat-title">Complete works</span>
                                                    <span className="stat-percentage">80%</span>
                                                </div>
                                                <div className="stat-line">
                                                    <span className="outer">
                                                        <span className="inner"></span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="stat">
                                                <div className="top-area">
                                                    <span className="stat-title">Hours</span>
                                                    <span className="stat-percentage">25%</span>
                                                </div>
                                                <div className="stat-line">
                                                    <span className="outer">
                                                        <span className="inner"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-12 xl:col-span-6 2xl:col-span-6">
                                    <div className="upcoming-activity">
                                        <h1 className="h-title">Upcoming Activity</h1>
                                        <div className="activity-chart">
                                            <table>
                                                <thead>
                                                    <tr className="graph-time">
                                                        <th>09:00</th>
                                                        <th>10:00</th>
                                                        <th>11:00</th>
                                                        <th>12:00</th>
                                                        <th>13:00</th>
                                                        <th>14:00</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr className="graph-col">
                                                        <td className="bar"></td>
                                                        <td className="bar"></td>
                                                        <td className="bar"></td>
                                                        <td className="bar"></td>
                                                        <td className="bar"></td>
                                                        <td className="bar"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            
                                            <div className="graph-days">
                                                <div className="g-day">
                                                    <span className="title">Mon</span>
                                                </div>
                                                <div className="g-day">
                                                    <span className="title active">Tue</span>
                                                </div>
                                                <div className="g-day">
                                                    <span className="title">Wed</span>
                                                </div>
                                                <div className="g-day">
                                                    <span className="title">Thu</span>
                                                </div>
                                                <div className="g-day">
                                                    <span className="title">Fri</span>
                                                </div>
                                                <div className="g-day">
                                                    <span className="title">Sat</span>
                                                </div>
                                                <div className="g-day">
                                                    <span className="title">Sun</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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