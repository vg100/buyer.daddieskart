import React, { useState } from 'react';
import { Card, Col, Modal, Nav, Pagination, Row, Stack, Tab, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductSpecificationTables from './ProductSpecificationTables';
import Rating from '../../../components/base/Rating';
import Button from '../../../components/base/Button';
import ProductReview from '../../../components/list-items/ProductReview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReviewModal from '../../../components/modals/ReviewModal';
import UsuallyBoughtTogetherCard from '../../../components/cards/UsuallyBoughtTogetherCard';
import { suggestedProducts } from '../../../data/e-commerce/products';
import useLightbox from '../../../hooks/useLightbox';
import Lightbox from '../../../components/base/LightBox';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { ReviewRepositry } from '../../../services/reviewRepositry';
import { Utils } from '../../../utils/utils';
import { getEnvVariable } from '../../../environment';
import { LocalStorageService } from '../../../services/LocalStorage';
import { OfferRepositry } from '../../../services/offerRepositry';

const ProductDetailsTab = () => {
  const { getProductDetail, loading: productloader } = useSelector((state: any) => state?.products)
  const { reviewslist, loading: reviewloader, reload } = useSelector((state: any) => state?.reviews)
  const { offerList } = useSelector((state: any) => state?.offer)
  const [offer, setOffer] = useState('');

  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch<any>()
  const [showModal, setShowModal] = useState(false);
  const { lightboxProps, openLightbox } = useLightbox(reviewslist?.images);


  const fetchReviews = React.useCallback(() => {
    if (getProductDetail?._id) {
      dispatch(ReviewRepositry.getReviewById(getProductDetail?._id, page))
    }
  }, [dispatch, getProductDetail?._id, reload, page]);

  const fetchOffers = React.useCallback(() => {
    if (getProductDetail?._id) {
      dispatch(OfferRepositry.getoffer({
        product: getProductDetail?._id
      }))
    }
  }, [dispatch, getProductDetail?._id, reload]);

  React.useEffect(() => {
    fetchReviews();
    fetchOffers()
  }, [fetchReviews, fetchOffers]);




  const totalPages = reviewslist?.totalPages || 1;
  const pageHandler = React.useCallback((p) => {

    if (p < 1 || p > totalPages) {
      return;
    }
    setPage(p)
  }, [totalPages]);



  if (productloader) {
    return null
  }


  const handleBargain = async () => {
    try {

      const token = await LocalStorageService.getUser();
      await fetch(`${getEnvVariable().base_api_url}/offer/${getProductDetail?._id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', "authorization": token?.token },
        body: JSON.stringify({ amount: 400 })
      });
    } catch (error) {
      console.error('Error making offer:', error);
    }
  };


  return (
    <>
      <Tab.Container defaultActiveKey="description">
        <Nav variant="underline" className="mb-4">
          <Nav.Item>
            <Nav.Link eventKey="description">Description</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="specification">Specification</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="reviews">Ratings & reviews</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="chat">bargaining</Nav.Link>
          </Nav.Item>
        </Nav>
        <Row className="gx-3 gy-7">
          <Col xs={12} lg={7} xl={8}>
            <Tab.Content>
              <Tab.Pane
                eventKey="description"
                className="text-body-emphasis pe-lg-6 pe-xl-12"
              >
                <div dangerouslySetInnerHTML={{ __html: getProductDetail?.description }} />

              </Tab.Pane>
              <Tab.Pane eventKey="specification" className="pe-lg-6 pe-xl-12">
                <ProductSpecificationTables />
              </Tab.Pane>
              <Tab.Pane eventKey="reviews">
                <Card>
                  <Card.Header className="pb-0 border-bottom-0">
                    <Stack
                      gap={3}
                      direction="horizontal"
                      className="flex-wrap justify-content-between"
                    >
                      {
                        reviewslist?.reviews?.length > 0 ? (<div className="d-flex align-items-center flex-wrap">
                          <h2 className="fw-bolder me-3">
                            {reviewslist.rating}
                            <span className="fs-8 text-body-quaternary fw-bold">
                              /5
                            </span>
                          </h2>
                          <div className="me-3">
                            <Rating
                              initialValue={reviewslist.rating}
                              readonly
                              iconClass="fs-6"
                            />
                          </div>
                          <p className="text-body mb-0 fw-semibold fs-7">
                            {reviewslist?.totalRating} ratings and  {reviewslist?.totalTextReviews} reviews
                          </p>
                        </div>) : (
                          <p className="text-body mb-0 fw-semibold fs-7">
                            No reviews
                          </p>
                        )
                      }

                      <Button
                        variant="primary"
                        className="rounded-pill"
                        onClick={() => setOpenReviewModal(true)}
                      >
                        Rate this product
                      </Button>
                    </Stack>
                  </Card.Header>
                  <Card.Body className="pb-0 border-bottom-0">





                    <Lightbox {...lightboxProps} />
                    {reviewslist?.images?.slice(0, 7).map((image, index) => (
                      <>
                        <Link
                          className='position-relative'
                          onClick={index === 6 ? () => setShowModal(true) : () => openLightbox(index + 1)} key={index}>

                          <img
                            src={image}
                            key={image}
                            alt=""
                            className="fit-cover mx-2 rounded"
                            height={60}
                            style={index === 6 ? { opacity: 0.2 } : {}}
                          />
                          {
                            index === 6 && (<span className={"position-absolute top-50 start-50 translate-middle text-black"}>{reviewslist?.images?.length}</span>)
                          }

                        </Link>
                      </>
                    ))}

                    {showModal && (
                      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                        <Modal.Header closeButton>
                          <Modal.Title>User Images {`(${reviewslist?.images?.length})`}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                          {reviewslist?.images?.map((image, index) => (
                            <Link onClick={() => openLightbox(index + 1)}>
                              <img
                                src={image}
                                alt=""
                                className="fit-cover mx-2 rounded"
                                height={60}
                              />
                            </Link>

                          ))}
                        </Modal.Body>
                      </Modal>
                    )}

                  </Card.Body>
                  <Card.Body>
                    {reviewslist?.reviews?.map(review => (
                      <ProductReview key={review._id} review={review} />
                    ))}
                    {
                      Utils.safeAccess(reviewslist, "reviews.length") > 0 && (<Pagination className="mb-0 justify-content-center">
                        <Pagination.Prev onClick={() => pageHandler(page - 1)}>
                          <FontAwesomeIcon icon={faChevronLeft} />
                        </Pagination.Prev>
                        {
                          [...new Array(totalPages)].map((p: any, index: any) => {
                            return (
                              <Pagination.Item onClick={() => pageHandler(index + 1)} active={page === (index + 1) ? true : false}>{index + 1}</Pagination.Item>
                            )
                          })
                        }

                        <Pagination.Next onClick={() => pageHandler(page + 1)}>
                          <FontAwesomeIcon icon={faChevronRight} />
                        </Pagination.Next>
                      </Pagination>)
                    }
                  </Card.Body>
                </Card>
              </Tab.Pane>
              <Tab.Pane eventKey="chat">
                <Card>
                  <Card.Header className="pb-0 border-bottom-0">

                  </Card.Header>
                  <Card.Body>
                    {
                      offerList.map((item,index) => {
                        return (
                          <div style={{display:"flex",justifyContent:"space-between"}}>
                          <p>{index}{"-------->"}{item?.amount} Rs</p>
                          <p>{item?.status}...</p>
                          </div>
                        )
              
                      })
                    }
                    <input type="number" value={offer} onChange={(e) => setOffer(e.target.value)} />
                    <button onClick={handleBargain}>Make Offer</button>

                  </Card.Body>
                </Card>
              </Tab.Pane>
            </Tab.Content>
          </Col>
          <Col xs={12} lg={5} xl={4}>
            <UsuallyBoughtTogetherCard products={suggestedProducts} />
          </Col>
        </Row>
      </Tab.Container>
      <ReviewModal
        show={openReviewModal}
        handleClose={() => setOpenReviewModal(false)}
      />
    </>
  );
};

export default ProductDetailsTab;
