import Laptop from './assets/laptop.png';
import Layers from  './assets/layers.png';
import Book from './assets/book.png';
import {ReactComponent as WaveSvg} from './assets/wave.svg';
import ProfileArea from './Common/ProfileArea';
import Header from './Common/Header';
import StatsLayout from './Layouts/StatsLayout';
import { useState } from 'react';

function Main() {
    const [showProfile, setShowProfile] = useState(false)

  return (
        <div className="content">
            <div className="grid grid-cols-12">
                <div className="col-span-12 xl:col-span-12 2xl:col-span-9">
                    <div className="main">
                        <Header showProfile={showProfile} setShowProfile={setShowProfile}/>

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

                                {/* STATS LISITING */}
                                <StatsLayout />


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
                                                    <div className="tag">
                                                        <div className="content">
                                                            <span className="tag-title">Mabar.co Project</span>
                                                        </div>
                                                        <div className="tag-stroke">
                                                            <div className="inner"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="g-day">
                                                    <span className="title">Wed</span>
                                                </div>
                                                <div className="g-day">
                                                    <span className="title">Thu</span>
                                                    <div className="tag">
                                                        <div className="content">
                                                            <span className="tag-title">Meeting</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="g-day">
                                                    <span className="title">Fri</span>
                                                    <div className="tag">
                                                        <div className="content">
                                                            <span className="tag-title">Web Redesign</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="g-day">
                                                    <span className="title">Sat</span>
                                                </div>
                                                <div className="g-day">
                                                    <span className="title">Sun</span>
                                                    <div className="tag">
                                                        <div className="content">
                                                            <span className="tag-title">Sport</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-12 xl:col-span-6 2xl:col-span-6">
                                    <div className="upcoming-schedule">
                                        <h1 className="h-title">Upcoming Schedule</h1>
                                        <div className="schedule-list">
                                            <div className="schedule">
                                                <span className="icon">
                                                    <img src={Laptop} alt="" />
                                                </span>

                                                <div className="details">
                                                    <h3 className="title">desk time redesign</h3>
                                                    <span className="status">working on</span>
                                                </div>

                                                <span className="time">9:30 AM</span>
                                            </div>

                                            <div className="schedule">
                                                <span className="icon">
                                                    <img src={Layers} alt="" />
                                                </span>

                                                <div className="details">
                                                    <h3 className="title">new landing page</h3>
                                                    <span className="status">working on</span>
                                                </div>

                                                <span className="time">10:40 AM</span>
                                            </div>

                                            <div className="schedule">
                                                <span className="icon">
                                                    <img src={Book} alt="" />
                                                </span>

                                                <div className="details">
                                                    <h3 className="title">create animation for app</h3>
                                                    <span className="status">working on</span>
                                                </div>

                                                <span className="time">11:50 AM</span>
                                            </div>
                                        </div>

                                        <a href="" className='all-activity-btn'>see all activity</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ProfileArea  showProfile={showProfile} setShowProfile={setShowProfile}/>

            </div>
        </div>
  )
}

export default Main