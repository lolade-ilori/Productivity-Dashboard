import RightArrow from '../assets/right-arrow.png';
import Ellipsis from '../assets/ellipsis.png'
import Edit from '../assets/edit.png';
import Avatar from '../assets/avatar.png';

function ProfileArea({showProfile, setShowProfile}) {

  return (
    <div className={`${ showProfile ? 'right-[0px] 2xl:right-[0px]' : 'right-[-500px] 2xl:right-[0px]'} col-span-12 2xl:col-span-3 fixed right-[-500px] 2xl:right-[0px] h-full w-3/12  active_profile-wrapper`}>
        <div className="profile-area">
            <div className="profile-nav">
                <button className='back 2xl:hidden'  onClick={() => setShowProfile(!showProfile)}>
                    <img src={RightArrow} alt="" />
                </button>
                <button className="options">
                    <img src={Ellipsis} alt="" />
                </button>
            </div>

            <div className="profile-data">
                <div className="avatar">
                    <img src={Avatar} alt="" />
                </div>
                <div className="name-data">
                    <a href="#" className='fullname'>jack grealish</a>
                    <span className="job-title">private sector employee</span>
                </div>

                <a href="#" className="edit-btn">
                    <img src={Edit} alt="" />
                    <span>edit profile</span>
                </a>
            </div>

            <div className="work-hours">
                <h3 className="title">Working Hours</h3>
                <div className="timeframe">
                    <div className="time_data">
                        <span className="title">work start</span>
                        <span className="time-assigned">09:00am</span>
                    </div>

                    <div className="time_data">
                        <span className="title">work end</span>
                        <span className="time-assigned">05:00pm</span>
                    </div>
                </div>
            </div>

            <div className="city">
                <h1 className="city-name">sukabumi city</h1>
                <div className="grp">
                    <span className="place">sukabumi, indonesia</span>
                    <span className="bullet"></span>
                    <span className="timezone">gmt+7</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileArea