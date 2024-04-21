import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../../components/base/Button';
import Rating from '../../../components/base/Rating';
import ProductColorNav from '../../../components/navs/ProductColorNav';
import { productColorVariants } from '../../../data/e-commerce';
import { currencyFormat } from '../../../helpers/utils';
import ProductGallery from '../../../components/modules/e-commerce/ProductGallery';
import { useMemo, useState } from 'react';
import { Col, FormControl, InputGroup, Row, Stack } from 'react-bootstrap';
import { Link, useLocation, useParams } from 'react-router-dom';
import QuantityButtons from '../../../components/common/QuantityButtons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShareAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { CartRepositry } from '../../../services/cartRepositry';
import { ProductRepositry } from '../../../services/productRepositry';
import queryString from 'query-string';
import FeatherIcon from 'feather-icons-react';
import { WishlistReducer } from '../../../redux/wishlistReducer';
import { WishlistRepositry } from '../../../services/wishlistRepositry';

const ProductDescription = () => {
  const [selectedVariantKey, setSelectedVariantKey] = useState('blue');
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch<any>();
  const params = useParams();
  const location = useLocation();
  const queryParams: any = queryString.parse(location.search);
  const { getProductDetail } = useSelector((state: any) => state?.products)
  const { wishlistItems } = useSelector((state:any) => state.wishlist);

  React.useEffect(()=>{
    dispatch(ProductRepositry.getProductById(queryParams?.pid));
  },[dispatch,queryParams?.pid])


  const selectedVariant = useMemo(() => {
    return getProductDetail?.productColorVariants?.find(
      variant => variant.value === selectedVariantKey
    );
  }, [getProductDetail,selectedVariantKey]);


const addtocart=()=>{
  dispatch(CartRepositry.addItemsToCart(getProductDetail?._id,quantity));
}
const itemInWishlist = wishlistItems.some((i) => i._id === queryParams?.pid);
const addToWishlistHandler = () => {
 
  if (itemInWishlist) {
      dispatch(WishlistRepositry.removeFromWishlist(queryParams?.pid));
    
  } else {
      dispatch(WishlistRepositry.addToWishlist(queryParams?.pid));
  }
}
console.log(wishlistItems,'wishlistItems')

  return (
    <Row className="g-5 mb-5 mb-lg-8">
      <Col xs={12} lg={6}>
        {selectedVariant && <ProductGallery images={selectedVariant.images} />}
        <div className="d-flex">
          <Button
            onClick={addToWishlistHandler}
            variant="outline-warning"
            size="lg"
            className="rounded-pill w-100 me-3 px-2 px-sm-4 fs--1 fs-sm-0"
          >
            <FontAwesomeIcon icon={faHeart} className="me-2" />
            {itemInWishlist?"remove from wishlist":"Add to wishlist"}
          </Button>
          <Button
            onClick={addtocart}
            variant="warning"
            size="lg"
            className="rounded-pill w-100 px-2 px-sm-4 fs--1 fs-sm-0"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
            Add to cart
          </Button>
        </div>
      </Col>
      <Col xs={12} lg={6}>
        <Stack className="justify-content-between h-100">
          <div className="mb-3">
            <div className="d-flex flex-wrap">
              <div className="me-2">
                <Rating readonly initialValue={5} />
              </div>
              <p className="text-primary fw-semibold mb-2">
                6548 People rated and reviewed
              </p>
            </div>
            <h3 className="mb-3 lh-sm">
              {getProductDetail?.name}
            </h3>
            <div className="d-flex flex-wrap align-items-start mb-3">
              <span className="badge bg-success fs-9 rounded-pill me-2 fw-semibold">
                #1 Best seller
              </span>
              <Link to={`/pf?sid=${getProductDetail?.seller?._id}`} className="fw-semibold">
                in {getProductDetail?.seller?.store?.name}
              </Link>
            </div>
            <div className="d-flex flex-wrap align-items-center">
              <h1 className="me-3">{currencyFormat(getProductDetail?.salePrice)}</h1>
              <p className="text-body-quaternary text-decoration-line-through fs-6 mb-0 me-3">
                {
                  selectedVariant ? currencyFormat(selectedVariant?.price):currencyFormat(getProductDetail?.price)
                }
                {}
              </p>
              <p className="text-warning-dark fw-bolder fs-6 mb-0">{getProductDetail?.offer} off</p>
            </div>
           <p className="text-success fw-semibold fs-7 mb-2">{getProductDetail?.availability}</p>

            <p className="mb-2 text-body-secondary">
              <strong className="text-body-highlight">
                Do you want it on Saturday, July 29th?
              </strong>{' '}
              Choose{' '}
              <strong className="text-body-highlight">
                Saturday Delivery{' '}
              </strong>
              at checkout if you want your order delivered within 12 hours 43
              minutes,{' '}
              <Link className="fw-bold" to="#!">
                Details.{' '}
              </Link>
              <strong className="text-body-highlight">
                Gift wrapping is available.
              </strong>
            </p>
            <p className="text-danger-dark fw-bold mb-5 mb-lg-0">
              Special offer ends in 23:00:45 hours
            </p>
          </div>

          <div>
            <InputGroup className="mb-2 w-md-40">
              <FormControl placeholder="Delivery pincode" aria-label="voucher" />
              <Button variant="warning" className="px-4">
                Check
              </Button>
            </InputGroup>
            <p className="text-success-dark fw-bold mb-2 mb-lg-0 fs-9"> <FeatherIcon icon="truck" className="me-1" />Get it by 16 Apr, 2024</p>
            <div className="mb-3">
              <p className="fw-semibold mb-2 text-body">
                Color :{' '}
                <span className="text-body-emphasis">
                  {selectedVariant?.value}
                </span>
              </p>
              <ProductColorNav
                selectedVariantKey={selectedVariantKey}
                setSelectedVariantKey={setSelectedVariantKey}
              />
            </div>
            <div className="row g-3 g-sm-5 align-items-end">
              <div className="col-12 col-sm-auto">
                <p className="fw-semibold mb-2 text-body">Size : </p>
                <div className="d-flex align-items-center">
                  <select className="form-select w-auto">
                    <option value="44">44</option>
                    <option value="22">22</option>
                    <option value="18">18</option>
                  </select>
                  <a className="ms-2 fs-9 fw-semibold" href="#!">
                    Size chart
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm">
                <p className="fw-semibold mb-2 text-body">Quantity : </p>
                <div className="d-flex justify-content-between align-items-end">
                  <QuantityButtons
                    quantity={quantity}
                    setQuantity={setQuantity}
                  />
                  <Button variant="phoenix-primary" className="px-3 border-0">
                    <FontAwesomeIcon icon={faShareAlt} className="fs-7" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Stack>
      </Col>
    </Row>
  );
};

export default ProductDescription;
