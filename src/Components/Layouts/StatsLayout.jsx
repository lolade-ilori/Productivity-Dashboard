import {ReactComponent as CircleSvg} from '../assets/circle.svg';
import Rocket from '../assets/rocket.png';

function StatsLayout() {
  return (
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
  )
}

export default StatsLayout