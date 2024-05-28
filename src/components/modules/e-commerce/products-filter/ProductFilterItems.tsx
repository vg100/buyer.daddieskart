// import React, { useState } from 'react';
// import { Button, Form, InputGroup } from 'react-bootstrap';
// import { UilTimes } from '@iconscout/react-unicons';
// import FormCollapse from '../../../../components/common/FormCollapse';
// import {
//   availabiltyOptions,
//   brandsOptions,
//   campaignOptions,
//   certificationOptions,
//   colorFamilyOptions,
//   deliveryOptions,
//   displyOptions,
//   filter,
//   warrantyOptions,
//   warrantyTypeOptions
// } from '../../../../data/e-commerce/filterOptions';
// import CheckboxItem from '../../../../components/common/CheckboxItem';
// import Rating from '../../../../components/base/Rating';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { ProductApi } from '../../../../services/Api';
// import { ProductsActionTypes } from '../../../../redux/productReducer';
// import { useDispatch } from 'react-redux';
// import queryString from 'query-string';

// const ProductFilterItems = ({ handleClose }: { handleClose: () => void, }) => {
//   const dispatch = useDispatch<any>()
//   const navigation = useNavigate();
//   const location = useLocation();
//   const [selectedFilters, setSelectedFilters] = useState<any>({
//     availability: [],
//     color: [],
//     seller: [],
//     offer: [],
//     size: [],
//     new_arrivals: [],
//     lifestyle: [],
//     occasion: [],
//     brands: [],
//     rating: [],
//     displayType: [],
//     delivery: [],
//     campaign: [],
//     gender:[],
//     warranty: [],
//     warrantyType: [],
//     certification: [],
//     price: { gte: '', lte: '' },

//   });


//   const handleCheckboxChange = React.useCallback((filterCategory, value) => {
//     setSelectedFilters(prevState => {
//       const updatedFilters = {
//         ...prevState,
//         [filterCategory]: prevState[filterCategory].includes(value)
//           ? prevState[filterCategory].filter(item => item !== value)
//           : [...prevState[filterCategory], value]
//       };
//       applyFilters(updatedFilters);
//       return updatedFilters;
//     });
//   }, [])

//   const handlePriceChange = React.useCallback((e) => {
//     const { name, value } = e.target;
//     setSelectedFilters((prevState) => ({
//       ...prevState,
//       price: {
//         ...prevState.price,
//         [name]: value,
//       },
//     }));
//   }, []);

//   const handleClearFilter = () => {
//     const clearedFilters:any = {};
//     filter.forEach((fil:any) => {
//       clearedFilters[fil.value] = [];
//     });
//     setSelectedFilters(clearedFilters);
//     navigation(`/pf`);
//   };

//   const applyFilters = (data) => {

//     const currentSearch = new URLSearchParams(location.search);
//     Object.entries(data).forEach(([key, value]) => {
//       // currentSearch.delete(key);
//       if (Array.isArray(value) && value.length > 0) {
//         const joinedValue = value.join(',');
//         currentSearch.append(key, joinedValue);
//       }
//     });

//     navigation(`?${currentSearch.toString()}`);
//   };

//   const hasFilters = (filters: any) => {
//     return Object.values(filters).some((filter: any) => {
//       if (Array.isArray(filter)) {
//         return filter.length > 0;
//       } else if (typeof filter === 'object') {
//         return Object.values(filter).some((value) => value !== '');
//       } else {
//         return false;
//       }
//     });
//   };


//   return (
//     <>
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h3 className="mb-0">Filters</h3>
//         {hasFilters(selectedFilters) && (
//           <span style={{ cursor: 'pointer', color: 'blue' }} onClick={handleClearFilter}>reset</span>
//         )}
//         <button className="btn p-0 d-lg-none" onClick={handleClose}>
//           <UilTimes size={16} />
//         </button>
//       </div>

//       {
//         filter.map((fil: any) => {
//           if (fil.label === "Rating") {
//             return (
//               <FormCollapse title={`${fil?.label}${selectedFilters[fil.value]?.length > 0 ? ` (${selectedFilters[fil.value]?.length})` : ''}`} key={fil.label}>
//                 {fil?.filter?.map((rating: any) => (
//                   <CheckboxItem
//                     type="checkbox"
//                     value={rating}
//                     key={rating}
//                     name="rating"
//                     label={
//                       <div className="d-flex align-items-center ms-1">
//                         <Rating
//                           style={{ color: 'red' }}
//                           initialValue={rating}
//                           readonly
//                           iconClass="fs-9 me-1"
//                         />
//                         {rating < 5 && <p className="ms-1 mt-1 mb-0">&amp; above</p>}
//                       </div>
//                     }
//                     onChange={() => handleCheckboxChange('rating', rating)}
//                     checked={selectedFilters.rating?.includes(rating)}
//                   />
//                 ))}
//               </FormCollapse>
//             )
//           }
//           if (fil.label === "Price range") {
//             return (
//               <FormCollapse title={`${fil?.label}${selectedFilters[fil.value]?.length > 0 ? ` (${selectedFilters[fil.value]?.length})` : ''}`} key={fil.label}>

//                 <div className="d-flex gap-2">
//                   <InputGroup>
//                     <Form.Control
//                       placeholder="Min"
//                       name="price[gte]"
//                       value={selectedFilters['price[gte]']}
//                       onChange={handlePriceChange}
//                     />
//                     <Form.Control
//                       placeholder="Max"
//                       name="price[lte]"
//                       value={selectedFilters['price[lte]']}
//                       onChange={handlePriceChange}
//                     />
//                   </InputGroup>
//                   <Button variant="phoenix-primary px-3" size="sm" onClick={() => applyFilters(selectedFilters)}>
//                     Go
//                   </Button>
//                 </div>
//               </FormCollapse>
//             )
//           }
//           if (fil.label === "Size") {
//             return (
//               <FormCollapse title={`${fil?.label}${selectedFilters[fil.value]?.length > 0 ? ` (${selectedFilters[fil.value]?.length})` : ''}`} key={fil.label}>
//                 <div className="d-flex flex-wrap">
//                   {fil?.filter?.map((item: any) => (
//                     <div className='ms-1'>
//                       <CheckboxItem
//                         name={item.name}
//                         value={item.value}
//                         label={item.label}
//                         key={item.value}

//                         onChange={() => handleCheckboxChange("size", item.value)}
//                         checked={selectedFilters.size.includes(item.value)}
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </FormCollapse>
//             )
//           }
//           if (fil.label === "Color") {
//             return (
//               <FormCollapse title={`${fil?.label}${selectedFilters[fil.value]?.length > 0 ? ` (${selectedFilters[fil.value]?.length})` : ''}`} key={fil.label}>
//                 <div className="d-flex flex-wrap">
//                   {fil?.filter?.map((item: any) => (
//                     <div className='ms-1'>
//                       <CheckboxItem
//                         name={item.name}
//                         value={item.value}
//                         label={item.label}
//                         key={item.value}

//                         onChange={() => handleCheckboxChange("color", item.value)}
//                         checked={selectedFilters.color.includes(item.value)}
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </FormCollapse>
//             )
//           }
//           return (
//             <FormCollapse title={`${fil?.label}${selectedFilters[fil.value]?.length > 0 ? ` (${selectedFilters[fil.value]?.length})` : ''}`} key={fil.label}>
//               {fil?.filter?.map((item: any) => (
//                 <CheckboxItem
//                   name={item.name}
//                   value={item.value}
//                   label={item.label}
//                   key={item.value}
//                   onChange={() => handleCheckboxChange(fil.value, item.value)}
//                   checked={selectedFilters[fil.value].includes(item.value)}
//                 />
//               ))}
//             </FormCollapse>
//           )
//         })
//       }
//     </>
//   );
// };

// export default ProductFilterItems;




import React, { useState, useEffect } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { UilTimes } from '@iconscout/react-unicons';
import FormCollapse from '../../../../components/common/FormCollapse';
import { filter } from '../../../../data/e-commerce/filterOptions';
import CheckboxItem from '../../../../components/common/CheckboxItem';
import { useLocation, useNavigate } from 'react-router-dom';
import Rating from '../../../../components/base/Rating';
const ProductFilterItems = ({ handleClose }: { handleClose: () => void }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedFilters, setSelectedFilters] = useState({
    availability: [],
    color: [],
    seller: [],
    offer: [],
    size: [],
    new_arrivals: [],
    lifestyle: [],
    occasion: [],
    brands: [],
    rating: [],
    displayType: [],
    delivery: [],
    campaign: [],
    gender: [],
    warranty: [],
    warrantyType: [],
    certification: [],
    price: { gte: '', lte: '' },
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    Object.entries(selectedFilters).forEach(([key, value]) => {
     if (Array.isArray(value) && value.length > 0) {
        params.set(key, value.join(','));
      } else {
        params.delete(key);
      }
    });
    navigate(`?${params.toString()}`);
  }, [selectedFilters, navigate, location.search]);

  const handleCheckboxChange = (category, value) => {
    setSelectedFilters(prevState => {
      const updatedFilters = {
        ...prevState,
        [category]: prevState[category].includes(value)
          ? prevState[category].filter(item => item !== value)
          : [...prevState[category], value]
      };
      return updatedFilters;
    });
  };

  
  const handleApplyPriceFilter = () => {
    const params = new URLSearchParams(location.search);
    if (selectedFilters.price?.gte !== '' && selectedFilters.price?.lte !== '') {
      params.set('price[gte]', selectedFilters.price?.gte);
      params.set('price[lte]', selectedFilters.price?.lte);
    } else {
      params.delete('price[gte]');
      params.delete('price[lte]');
    }
    navigate(`?${params.toString()}`);
  };

  const handleClearFilter = () => {
    setSelectedFilters({
      availability: [],
      color: [],
      seller: [],
      offer: [],
      size: [],
      new_arrivals: [],
      lifestyle: [],
      occasion: [],
      brands: [],
      rating: [],
      displayType: [],
      delivery: [],
      campaign: [],
      gender: [],
      warranty: [],
      warrantyType: [],
      certification: [],
    });
    navigate(`/pf`);
  };

  const hasFilters = () => {
    return Object.values(selectedFilters).some(filter =>
      Array.isArray(filter) ? filter.length > 0 : filter !== ''
    );
  };


  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setSelectedFilters(prevState => ({
      ...prevState,
      price: {
        ...prevState.price,
        [name]: value,
      },
    }));
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0">Filters</h3>
        {hasFilters() && (
          <span style={{ cursor: 'pointer', color: 'blue' }} onClick={handleClearFilter}>reset</span>
        )}
        <button className="btn p-0 d-lg-none" onClick={handleClose}>
          <UilTimes size={16} />
        </button>
      </div>

      {filter.map(fil => {

          if (fil.label === "Rating") {
            return (
              <FormCollapse title={`${fil?.label}${selectedFilters[fil.value]?.length > 0 ? ` (${selectedFilters[fil.value]?.length})` : ''}`} key={fil.label}>
                {fil?.filter?.map((rating: any) => (
                  <CheckboxItem
                    type="checkbox"
                    value={rating}
                    key={rating}
                    name="rating"
                    label={
                      <div className="d-flex align-items-center ms-1">
                        <Rating
                          style={{ color: 'red' }}
                          initialValue={rating}
                          readonly
                          iconClass="fs-9 me-1"
                        />
                        {rating < 5 && <p className="ms-1 mt-1 mb-0">&amp; above</p>}
                      </div>
                    }
                  // onChange={() => handleCheckboxChange('rating', rating)}
                  // checked={selectedFilters.rating?.includes(rating)}
                  />
                ))}
              </FormCollapse>
            )
          }
          if (fil.label === "Price range") {
            return (
              <FormCollapse title={`${fil?.label}${selectedFilters[fil.value]?.length > 0 ? ` (${selectedFilters[fil.value]?.length})` : ''}`} key={fil.label}>

                <div className="d-flex gap-2">
                  <InputGroup>
                    <Form.Control
                      placeholder="Min"
                      name="gte"
                      value={selectedFilters.price?.gte}
                    onChange={handlePriceChange}
                    />
                    <Form.Control
                      placeholder="Max"
                      name="lte"
                      value={selectedFilters.price?.lte}
                    onChange={handlePriceChange}
                    />
                  </InputGroup>
                  <Button variant="phoenix-primary px-3" size="sm" onClick={handleApplyPriceFilter}>
            Go
          </Button>
                </div>
              </FormCollapse>
            )
          }

          if (fil.label === "Size") {
            return (
              <FormCollapse title={`${fil?.label}${selectedFilters[fil.value]?.length > 0 ? ` (${selectedFilters[fil.value]?.length})` : ''}`} key={fil.label}>
                <div className="d-flex flex-wrap">
                  {fil?.filter?.map((item: any) => (
                    <div className='ms-1'>
                      <CheckboxItem
                        name={item.name}
                        value={item.value}
                        label={item.label}
                        key={item.value}

                        onChange={() => handleCheckboxChange("size", item.value)}
                        checked={selectedFilters.size.includes(item.value)}
                      />
                    </div>
                  ))}
                </div>
              </FormCollapse>
            )
          }
          if (fil.label === "Color") {
            return (
              <FormCollapse title={`${fil?.label}${selectedFilters[fil.value]?.length > 0 ? ` (${selectedFilters[fil.value]?.length})` : ''}`} key={fil.label}>
                <div className="d-flex flex-wrap">
                  {fil?.filter?.map((item: any) => (
                    <div className='ms-1'>
                      <CheckboxItem
                        name={item.name}
                        value={item.value}
                        label={item.label}
                        key={item.value}

                        onChange={() => handleCheckboxChange("color", item.value)}
                        checked={selectedFilters.color.includes(item.value)}
                      />
                    </div>
                  ))}
                </div>
              </FormCollapse>
            )
          }

          return (
            <FormCollapse title={`${fil?.label}${selectedFilters[fil.value]?.length > 0 ? ` (${selectedFilters[fil.value]?.length})` : ''}`} key={fil.label}>
              {fil?.filter?.map((item: any) => (
                <CheckboxItem
                  name={item.name}
                  value={item.value}
                  label={item.label}
                  key={item.value}
                  onChange={() => handleCheckboxChange(fil.value, item.value)}
                  checked={selectedFilters[fil.value].includes(item.value)}
                />
              ))}
            </FormCollapse>
          )



          // <FormCollapse
          //   title={fil.label}
          //   key={fil.label}
          // >
          //   <div className="d-flex flex-wrap">
          //     {fil?.filter?.map(item => (
          //       <div className='ms-1' key={item.value}>
          //         <CheckboxItem
          //           name={item.name}
          //           value={item.value}
          //           label={item.label}
          //           onChange={() => handleCheckboxChange(fil.value, item.value)}
          //           checked={selectedFilters[fil.value].includes(item.value)}
          //         />
          //       </div>
          //     ))}
          //   </div>
          // </FormCollapse>
        })
      }
    </>
  );
};

export default ProductFilterItems;




