import SearchIcon from '../assets/search.png';
import { ReactComponent as LeftArrow } from '../assets/left-arrow.svg';

function Header({showProfile, setShowProfile}) {
  return (
    <header>
        <div className="grid grid-cols-12">
            <div className="col-span-12 xl:col-span-8 2xl:col-span-8">
                <div className="title">
                    <h1>working productivity</h1>
                    <span>Let's check your progress</span>
                </div>
            </div>

            <div className="col-span-12 xl:col-span-4 2xl:col-span-4 flex flex-row items-center">
                <div className="search-bar">
                    <div className="grp">
                        <img src={SearchIcon} alt="" />
                        <input type="text" placeholder="search for anything..." />
                    </div>
                </div>
                <span className='2xl:hidden'>
                    <LeftArrow width={50} className='cursor-pointer' onClick={() => setShowProfile(!showProfile)}/>
                </span>
            </div>
        </div>
    </header>
  )
}

export default Header