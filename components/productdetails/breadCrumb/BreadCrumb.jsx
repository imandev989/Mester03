
import Link from 'next/link'
import { RiArrowLeftSLine } from "react-icons/ri";

const BreadCrumb = () => {
return (
 <div>
   <nav className="flex mx-4 my-4" aria-label="Breadcrumb">
  <ol className="inline-flex items-center ">
    <li className="inline-flex items-center">
      <Link href="#" className="text-gray-700 hover:text-gray-900 inline-flex items-center text-xs md:text-md">
        صفحه اصلی
      </Link>
    </li>
    <li>
      <div className="flex items-center">
          <RiArrowLeftSLine/>
        <Link href="#" className="text-gray-700 hover:text-gray-900  font-medium text-xs md:text-sm">دسته بندی اصلی</Link>
      </div>
    </li>
    <li aria-current="page">
      <div className="flex items-center">
        <RiArrowLeftSLine/>
        <span className="text-gray-400 text-xs md:text-xs font-medium">دسته بندی فرعی</span>
      </div>
    </li>
  </ol>
</nav>
 </div>
)
};

export default BreadCrumb;






// export default BreadCrumb;

// const BreadCrumb = () => {
//   <div classNameName="text-sm breadcrumbs">
//     <ul>
//       <li>
//         <a>صفحه اصلی</a>
//       </li>
//       <li>
//         <a>دسته بندی اصلی</a>
//       </li>
//       <li>دسته بندی فرعی </li>
//     </ul>
//   </div>;
// };

// export default BreadCrumb;
