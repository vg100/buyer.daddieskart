import React from 'react'
// import {
//   UilEstate,
//   UilGift,
//   UilLamp,
//   UilMobileAndroid,
//   UilMonitor,
//   UilPalette,
//   UilPlaneDeparture,
//   UilShoppingBag,
//   UilStar,
//   UilWatchAlt,
//   UilWrench
// }, from '@iconscout/react-unicons';


import * as Icon from "@iconscout/react-unicons"
import classNames from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import { ProductRepositry } from '../../services/productRepositry';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryRepositry } from '../../services/categoryRepositry';
type Category = {
  label: string;
  icon: any;
  url: string;
  bgClass?: string;
  className?: any
};

const categories: Category[] = [
  {
    label: 'Deals',
    bgClass: 'bg-warning-subtle',
    url: '#!',
    className: "text-warning",
    icon: "UilStar"
  },
  {
    label: 'Grocery',
    url: '#!',
    icon: "UilShoppingBag"
  },
  {
    label: 'Fashion',
    url: '#!',
    icon: "UilWatchAlt"
  },
  {
    label: 'Mobile',
    url: '#!',
    icon: "UilMobileAndroid"
  },
  {
    label: 'Electronics',
    url: '#!',
    icon: "UilMonitor"
  },
  {
    label: 'Home',
    url: '#!',
    icon: "UilEstate"
  },
  {
    label: 'Dining',
    url: '#!',
    icon: "UilLamp"
  },
  {
    label: 'Gifts',
    url: '#!',
    icon: "UilGift"
  },
  {
    label: 'Tools',
    url: '#!',
    icon:"UilWrench"
  },
  {
    label: 'Travel',
    url: '#!',
    icon:"UilPlaneDeparture"
  },
  {
    label: 'Others',
    url: '#!',
    icon: "UilPalette"
  }
];

const EcomCategoryNavs = () => {
  const dispatch = useDispatch<any>()
  const ctg: any = useSelector<any>(state => state.categories)

  React.useEffect(() => {
    (() => {
      dispatch(CategoryRepositry.getCategories())
    })()
  }, [])


  return (
    <div className="d-flex justify-content-between">
      {ctg?.categories?.map(category => (
        <EcomCategoryNavItem key={category.label} category={category} />
      ))}
    </div>
  );
};

const EcomCategoryNavItem = ({ category }: { category: Category }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch<any>()
  const navigatehandler = async (data) => {
     return navigate(`/pf?category=${data._id}`)
  }
  const DynamicIcon = Icon[category.icon];

  return (
    <Link
      onClick={() => navigatehandler(category)}

      // to={`pf?category=${category.label}`||category.url} 
      className="icon-nav-item mb-3"     >
      <div className={classNames(category.bgClass, 'icon-container mb-2')}>
        <DynamicIcon className={category?.className ?category?.className:""} size={39} />
      </div>
      <p className="nav-label mb-0">{category.label}</p>
    </Link>
  );
};

export default EcomCategoryNavs;
