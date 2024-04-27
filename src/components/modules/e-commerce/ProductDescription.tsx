import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../../components/base/Button';
import Rating from '../../../components/base/Rating';
import ProductColorNav from '../../../components/navs/ProductColorNav';
import { productColorVariants } from '../../../data/e-commerce';
import { currencyFormat } from '../../../helpers/utils';
import ProductGallery from '../../../components/modules/e-commerce/ProductGallery';
import { useMemo, useState } from 'react';
import { Col, FormControl, InputGroup, Nav, Row, Spinner, Stack } from 'react-bootstrap';
import { Link, useLocation, useParams } from 'react-router-dom';
import QuantityButtons from '../../../components/common/QuantityButtons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShareAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { CartRepositry } from '../../../services/cartRepositry';
import { ProductRepositry } from '../../../services/productRepositry';
import queryString from 'query-string';
import FeatherIcon from 'feather-icons-react';
import { WishlistRepositry } from '../../../services/wishlistRepositry';
import classNames from 'classnames';
import moment from 'moment';
const ProductDescription = () => {

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch<any>();
  const params = useParams();
  const location = useLocation();
  const queryParams: any = queryString.parse(location.search);
  const { getProductDetail, loading } = useSelector((state: any) => state?.products)
  const { reviewslist, loading: reviewloader, reload } = useSelector((state: any) => state?.reviews)


  const { wishlistItems } = useSelector((state: any) => state.wishlist);
  const [remainingTime, setRemainingTime] = useState('');
  const [pincode, setPincode] = React.useState('')

  const [selectSize, setslectSize] = useState('m');
  const [data, setData] = useState<any>(null)
  const [isloading, setIsloading] = useState<any>(false)

  const size = ['xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl']
  const [selectedVariantKey, setSelectedVariantKey] = useState('m');



  React.useEffect(() => {
    dispatch(ProductRepositry.getProductById(queryParams?.pid));
  }, [dispatch, queryParams?.pid])

  React.useEffect(() => {
    if (getProductDetail && getProductDetail.productVariants && getProductDetail.productVariants.length > 0) {
      setSelectedVariantKey(getProductDetail.productVariants[0].value);
    }
  }, [getProductDetail]);

  const selectedVariant = useMemo(() => {
    return getProductDetail?.productVariants?.find(
      variant => variant.value === selectedVariantKey
    );
  }, [getProductDetail, selectedVariantKey]);


  const addtocart = React.useCallback(() => {
    dispatch(CartRepositry.addItemsToCart(getProductDetail?._id, quantity));
  }, [dispatch, getProductDetail, quantity]);

  const itemInWishlist = wishlistItems.some((i) => i._id === queryParams?.pid);
  const addToWishlistHandler = React.useCallback(() => {
    if (wishlistItems.some((item) => item._id === queryParams?.pid)) {
      dispatch(WishlistRepositry.removeFromWishlist(queryParams?.pid));
    } else {
      dispatch(WishlistRepositry.addToWishlist(queryParams?.pid));
    }
  }, [dispatch, queryParams?.pid, wishlistItems]);

  const checkpinHandler = React.useCallback(async () => {
    if (!pincode) {
      setData({ isValid: false, message: "Enter Pincode" });
      return;
    }
    setIsloading(true);
    const data = await dispatch(ProductRepositry.checkpincode({ pid: getProductDetail?._id, pincode }));
    setData(data);
    setIsloading(false);
  }, [dispatch, getProductDetail, pincode]);


  const calculateRemainingTime = React.useCallback((offerEndTime) => {
    const currentTime = moment();
    const endTime = moment(offerEndTime);
    if (endTime.isBefore(currentTime)) {
      setRemainingTime('');
      return;
    }
    const duration = moment.duration(endTime.diff(currentTime));
    const hoursRemaining = Math.floor(duration.asHours()).toString().padStart(2, '0');
    const minutesRemaining = Math.floor(duration.asMinutes() % 60).toString().padStart(2, '0');
    const secondsRemaining = Math.floor(duration.asSeconds() % 60).toString().padStart(2, '0');
    const remainingTimeString = `${hoursRemaining}:${minutesRemaining}:${secondsRemaining}`;
    
    setRemainingTime(remainingTimeString);

  }, []);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      calculateRemainingTime(getProductDetail?.specialOfferEndTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [calculateRemainingTime, getProductDetail?.specialOfferEndTime]);



  if (loading) {
    return null
  }

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
            {itemInWishlist ? "remove from wishlist" : "Add to wishlist"}
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
        <Stack className="justify-content-between">
          <div className="mb-3">

            {
              getProductDetail?.productReviews?.length > 0 && (
                <div className="d-flex flex-wrap">
                  <div className="me-2">
                    <Rating readonly initialValue={reviewslist.rating} />
                  </div>
                  <p className="text-primary fw-semibold mb-2">
                  {reviewslist?.totalRating} rated and  {reviewslist?.totalTextReviews} reviewed
                  </p>
                </div>
              )
            }


            <h3 className="mb-3 lh-sm">
              {getProductDetail?.name}
            </h3>
            <div className="d-flex flex-wrap align-items-start mb-3">
              <span className="badge bg-success fs-9 rounded-pill me-2 fw-semibold">
                #1 Best seller
              </span>
              <Link to={`/pf?seller=${getProductDetail?.seller?._id}`} className="fw-semibold">
                in {getProductDetail?.seller?.store?.name}
              </Link>
            </div>
            <div className="d-flex flex-wrap align-items-center">
              <h1 className="me-3">{currencyFormat(getProductDetail?.salePrice)}</h1>
              <p className="text-body-quaternary text-decoration-line-through fs-6 mb-0 me-3">
                {
                  selectedVariant ? currencyFormat(selectedVariant?.price) : currencyFormat(getProductDetail?.price)
                }
              </p>
              <p className="text-warning-dark fw-bolder fs-6 mb-0">{getProductDetail?.offer}</p>
            </div>

            {
              selectSize && selectedVariant?.size?.includes(selectSize) ? (
                <>
                  {/* <p className="text-success fw-semibold fs-7 mb-2">{getProductDetail?.availability}</p> */}
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
                  {
                    remainingTime && (
                      <p className="text-danger-dark fw-bold mb-5 mb-lg-0">
                        Special offer ends in {remainingTime} hours
                      </p>
                    )
                  }

                </>
              ) : (
                <div className='my-2'>
                  <h3 className='text-danger'>Sold Out</h3>
                  <h4 className='text-gray'>This item is currently out of stock</h4>
                </div>
              )
            }
          </div>

          <div>
            {
              selectSize && selectedVariant?.size?.includes(selectSize) && (
                <div>
                  <InputGroup className="mb-2 w-md-50 w-100" >
                    <FormControl value={pincode} placeholder="Delivery pincode" aria-label="voucher"
                      onChange={(e: any) => setPincode(e.target.value)} />
                    <Button onClick={checkpinHandler} variant="warning" className="px-4">
                      {isloading ? (
                        <Spinner animation="border" size="sm" />
                      ) : "Check"}
                    </Button>
                  </InputGroup>
                  {data && (
                    <p className={`text-${data.isValid ? 'success' : 'danger'}-dark fw-bold mb-2 mb-lg-0 fs-9 text-align-center`}>
                      {data.isValid && <FeatherIcon icon="truck" size={"15px"} className="me-1" />}
                      {data.message}
                    </p>
                  )}

                </div>

              )
            }

            <div className="mb-3">
              <p className="fw-semibold mb-2 text-body">
                Color :{' '}
                <span className="text-body-emphasis">
                  {selectedVariant?.value}
                </span>
              </p>

              <Nav
                className="gap-2"
                activeKey={selectedVariantKey}
                onSelect={selectedKey => setSelectedVariantKey(selectedKey as string)}
              >
                {getProductDetail?.productVariants?.map(variant => (

                  <Nav.Item className="">
                    <Nav.Link
                      //  disabled={selectSize ? !variant?.size?.includes(selectSize) : undefined}
                      eventKey={variant?.value}
                      className={classNames('border rounded-1 p-0', {
                        'border-primary': variant?.value === selectedVariantKey
                      })}
                      style={{
                        zIndex: 10,
                        borderWidth: '2px',
                        ...(selectSize && !variant?.size?.includes(selectSize) ? { opacity: 0.5 } : {})
                      }}
                    >
                      <img src={variant?.images[0]} width={38} alt="" />
                    </Nav.Link>
                  </Nav.Item>


                ))}
              </Nav>


              {/* <ProductColorNav
                selectedVariantKey={selectedVariantKey}
                setSelectedVariantKey={setSelectedVariantKey}
              /> */}
            </div>
            <div className="row g-3 g-sm-5 align-items-end">
              <div className="col-12 col-sm-auto">
                <p className="fw-semibold mb-2 text-body">Size : </p>
                <div className="d-flex align-items-center">
                  <select className="form-select w-auto"
                    defaultValue={'m'}
                    onChange={(e: any) => setslectSize(e.target.value)}>
                    {
                      size.map((s) => {
                        return (<option value={s}>{s}</option>)
                      })
                    }
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
