import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getFileIcon } from 'helpers/utils';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Avatar, { Status } from 'components/base/Avatar';
import { SearchResult as SearchResultType, searchItems } from 'data/search';
import Scrollbar from 'components/base/Scrollbar';
import useSearchHook from 'hooks/useSearchHook';
import { ColumnDef } from '@tanstack/react-table';
import React, { useMemo } from 'react';
import { faClockRotateLeft, faLink } from '@fortawesome/free-solid-svg-icons';
import { ProductApi } from '../../services/Api';
import { useDispatch, useSelector } from 'react-redux';
import { StoreRepositry } from '../../services/storeRepositry';
import { SearchRepositry } from '../../services/searchRepositry';

const ResultSectionHeader = ({ title }: { title: string }) => {
  return (
    <h6 className="text-body-highlight fs-9 border-y border-translucent py-2 lh-sm mb-0 px-3">
      {title}
    </h6>
  );
};

const searchFields: ColumnDef<SearchResultType>[] = [
  {
    accessorKey: 'name'
  }
];

const SearchResult = ({ searchValue = '' }: { searchValue?: string }) => {


  const [products, setProducts] = React.useState<any[]>([]);
  const dispatch = useDispatch<any>()
  const { search } = useSelector((state: any) => state?.search)

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res:any = await ProductApi.search(searchValue)
        // dispatch(SearchRepositry.search(searchValue))
        setProducts(res);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (searchValue.trim() !== '') {
      fetchProducts();
    } else {
      setProducts([]); // Clear products if search value is empty
    }
  }, [searchValue]);

  // const results = useSearchHook(products, searchFields, searchValue);

  // const recentlySearchedItems = useMemo(
  //   () => results.filter(item => item.category === 'recently_searched'),
  //   [results]
  // );

  // const products = useMemo(
  //   () => results.filter(item => item.category === 'products'),
  //   [results]
  // );


  return (
    <Scrollbar autoHeight autoHeightMax={'30rem'}>
      <h6 className="text-body-highlight fs-10 py-2 mb-0 px-3">
        {products?.length} <span className="text-body-quaternary">Results</span>{' '}
      </h6>
      {/* {recentlySearchedItems.length > 0 && (
        <>
          <ResultSectionHeader title="Recently Searched" />
          <div className="py-2">
            {recentlySearchedItems.map(item => (
              <Dropdown.Item as={Link} to={item.url} key={item.label}>
                <div className="d-flex align-items-center fw-normal gap-1 text-body-highlight">
                  <FontAwesomeIcon
                    icon={faClockRotateLeft}
                    transform="shrink-2"
                  />
                  {item.label}
                </div>
              </Dropdown.Item>
            ))}
          </div>
        </>
      )} */}
      {products?.length > 0 && (
        <>
          <ResultSectionHeader title="Products" />
          <div className="py-2">
            {products?.map(item => (
              <Dropdown.Item
                as={Link}
                to={`/p-d?pid=${item?._id}`}
                key={item.name}
                className="py-2 d-flex gap-2 align-items-center"
              >
                <div className="file-thumbnail">
                  <img
                    className="fit-cover rounded-3"
                    src={item.image}
                    height={28}
                    width={28}
                    alt={item.name}
                  />
                </div>
                <div className="flex-1">
                  <h6 className="mb-0 text-body-highlight">{item?.name?.slice(0, 40)}</h6>
                  <p className="fs-10 mb-0 d-flex text-body-tertiary">
                    <span className="fw-medium text-body-tertiary text-opacity-85">
                      {item.details}
                    </span>
                  </p>
                </div>
              </Dropdown.Item>
            ))}
          </div>
        </>
      )}
    </Scrollbar>
  );
};

export default SearchResult;
