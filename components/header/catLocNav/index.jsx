import CategrozieList from './CategrozieList';

import ProfileCheck from './ProfileCheck';


const CatLocNav = () => {
    return (
        <div className="bg-gray-800 text-gray-200 shadow-lg px-2">
        <div className="container flex justify-between mx-auto">
          <div><CategrozieList/></div>
          <div><ProfileCheck/></div>
        </div>
      </div>
    )
}

export default CatLocNav;