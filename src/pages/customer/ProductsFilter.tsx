import React, { useMemo } from 'react'
import PhoenixOffcanvas from '../../components/base/PhoenixOffcanvas';
import Section from '../../components/base/Section';
import { useState } from 'react';
import { Button, Col, Pagination, Row, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Scrollbar from '../../components/base/Scrollbar';
import ProductFilterItems from '../../components/modules/e-commerce/products-filter/ProductFilterItems';
import ProductCard from '../../components/common/ProductCard';
import { allProducts } from '../../data/e-commerce/products';
import queryString from 'query-string';
import {
  faChevronLeft,
  faChevronRight,
  faFilter
} from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ProductRepositry } from '../../services/productRepositry';


const ProductsFilter = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch<any>()

  const { products: pds, loading } = useSelector((state: any) => state?.products)
  const location = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [currentPage, setCurrentPage] = useState(1);


  const queryParams = useMemo(() => queryString.parse(location.search), [location.search]);

  const memoizedDispatch = React.useCallback(dispatch, []);


  React.useEffect(() => {
    memoizedDispatch(ProductRepositry.getProducts({ ...queryParams, page: currentPage }));
  }, [memoizedDispatch, queryParams.availability, currentPage, queryParams.rating,queryParams.offer,queryParams.size,queryParams.color]);

  const pageHandler = React.useCallback((p) => setCurrentPage(p), []);



  return (
    <div>
      <PhoenixOffcanvas
        open={show}
        onHide={handleClose}
        style={{ width: 300, top: 92 }}
        className="py-5 ps-5"
        fixed
      >
        <Scrollbar className="table-scrollbar">
          <div className="pe-5">
            <ProductFilterItems handleClose={handleClose} />
          </div>
        </Scrollbar>
      </PhoenixOffcanvas>
      <Section className="pt-5 pb-9">
        <Button
          variant="phoenix-secondary"
          size="sm"
          className="text-body-tertiary mb-5 d-lg-none"
          onClick={handleShow}
        >
          <FontAwesomeIcon icon={faFilter} className="me-2" />
          Filter
        </Button>
        <Row>
          <Col lg={3} xxl={2} className="d-none d-lg-block ps-xl-0 ps-xxl-3">
            <div
              className="position-sticky"
              style={{ top: '1rem', height: 'calc(100vh - 2rem) ' }}
            >
              <Scrollbar className="product-scrollbar">

                <ProductFilterItems handleClose={handleClose} />
              </Scrollbar>
            </div>
          </Col>
          <Col lg={9} xxl={10}>


            {loading ? (
              <div className="text-center mb-4">
                <Spinner animation="border" role="status" />
              </div>
            ) : pds?.product?.length > 0 ? (
              <>
                {queryParams?.seller && (<h2 className='mb-3'>{pds?.product[0]?.seller?.store?.name}</h2>)}

                <Row className="gx-3 gy-6 mb-8">
                  {pds?.product?.map(product => (
                    <Col xs={6} sm={6} md={3} xxl={2} key={product._id}>
                      <div className="product-card-container h-100">
                        <ProductCard product={product} />
                      </div>
                    </Col>
                  ))}
                </Row>

                <Pagination className="mb-0 justify-content-end">
                  <Pagination.Prev onClick={() => setCurrentPage((current) => current - 1)}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </Pagination.Prev>
                  {[...new Array(pds?.totalPages)].map((item: any, index) => {
                    return (
                      <Pagination.Item key={index} onClick={() => pageHandler(index + 1)} active={pds?.currentPage == index + 1 ? true : false}>{index + 1}</Pagination.Item>
                    )
                  })}
                  <Pagination.Next onClick={() => setCurrentPage((current) => current + 1)}>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </Pagination.Next>
                </Pagination>
              </>
            ) : ( // Display "No data found" message if no products are found
              <p>No data found</p>
            )}
          </Col>
        </Row>
      </Section>
    </div>
  );
};


export default ProductsFilter;
