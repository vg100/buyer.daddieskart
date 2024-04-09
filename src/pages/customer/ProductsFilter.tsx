import React from 'react'
import PhoenixOffcanvas from '../../components/base/PhoenixOffcanvas';
import Section from '../../components/base/Section';
import { useState } from 'react';
import { Button, Col, Pagination, Row } from 'react-bootstrap';
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
  const navigation = useNavigation();
  const params = useParams();
  const [page, setPage] = React.useState(1)
  const { products: pds } = useSelector((state: any) => state?.products)
  const location = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [price, setPrice] = useState([0, 200000]);
  const queryParams: any = queryString.parse(location.search);
  const [ratings, setRatings] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);





  // React.useEffect(() => {

  //   const handleFocus = () => {
  //     dispatch(ProductRepositry.getProducts())
  //   };
  //   document.addEventListener('focus', handleFocus);
  //   return () => {
  //     document.removeEventListener('focus', handleFocus);
  //   };
  // }, [dispatch, page])



  const fetchProducts = React.useCallback(() => {
    
    dispatch(ProductRepositry.getProducts(queryParams?.keyword, queryParams?.category, price, ratings, currentPage, queryParams?.store));
  }, [dispatch, queryParams?.keyword, queryParams?.category, price, ratings, currentPage, queryParams?.store]);

  const memoizedParams = React.useMemo(() => ({
    keyword: queryParams?.keyword,
    category: queryParams?.category,
    store: queryParams?.store
  }), [queryParams?.keyword, queryParams?.category, queryParams?.store]);

  React.useEffect(() => {
    fetchProducts();
  }, [fetchProducts, memoizedParams]);


  const pageHandler = (p) => {
    setCurrentPage(p)
  }
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
            <Row className="gx-3 gy-6 mb-8">
              {pds?.product?.map(product => (
                <Col xs={12} sm={6} md={4} xxl={2} key={product.id}>
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
              {
                [...new Array(pds?.totalPages)].map((item: any, index) => {
                  return (
                    <Pagination.Item onClick={() => pageHandler(index + 1)} active={pds?.currentPage == index + 1 ? true : false}>{index + 1}</Pagination.Item>
                  )
                })
              }
              {/* <Pagination.Item>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item active>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item> */}
              <Pagination.Next onClick={() => setCurrentPage((current) => current + 1)}>
                <FontAwesomeIcon icon={faChevronRight} />
              </Pagination.Next>
            </Pagination>
          </Col>
        </Row>
      </Section>
    </div>
  );
};

export default ProductsFilter;
