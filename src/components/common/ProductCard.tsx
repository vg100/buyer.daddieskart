import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { faClock, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames';
import Badge from '../../components/base/Badge';
import Button from '../../components/base/Button';
import Rating from '../../components/base/Rating';

import { currencyFormat } from '../../helpers/utils';
import { WishlistRepositry } from '../../services/wishlistRepositry';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const { wishlistItems } = useSelector((state:any) => state.wishlist);

  const selectProductHandler = () => {
    navigate(`/p-d?pid=${product?._id}`);
  };

  const addToWishlistHandler = () => {
    const itemInWishlist = wishlistItems.some((i) => i._id === product?._id);
    const action:any = itemInWishlist
      ? WishlistRepositry.removeFromWishlist(product?._id)
      : WishlistRepositry.addToWishlist(product?._id);
    dispatch(action);
  };

  return (
    <div className="position-relative text-decoration-none product-card h-100">
      <div className="d-flex flex-column justify-content-between h-100">
        <div>
          <div className="border border-translucent rounded-3 position-relative mb-3">
            <Button
              onClick={addToWishlistHandler}
              variant={wishlistItems.some((i) => i._id === product?._id) ? 'primary' : 'outline-primary'}
              className="rounded-circle p-0 d-flex flex-center btn-wish z-2 d-toggle-container"
            >
              {wishlistItems.some((i) => i._id === product?._id) ? (
                <FontAwesomeIcon icon={faHeart} />
              ) : (
                <>
                  <FontAwesomeIcon icon={faHeart} className="d-block-hover" />
                  <FontAwesomeIcon icon={farHeart} className="d-none-hover" />
                </>
              )}
            </Button>



            <img
              src={product.image || product?.productVariants[0]?.images[0]}
              alt=""
              className="img-fluid"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                transition: 'transform 0.3s ease',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              }}
            />
            {product.verified && (
              <Badge bg="success" className="fs-10 product-verified-badge">
                DaddiesKart's Choice
                <FontAwesomeIcon icon={faClock} className="ms-1" />
              </Badge>
            )}
          </div>
          <Link  to={`/p-d?pid=${product?._id}`}  className="stretched-link">
            <h6 className="mb-2 lh-sm line-clamp-3 product-name">{product.name}</h6>
          </Link>
          {product.rating && (
            <p className="fs-9">
              <Rating readonly initialValue={product.rating} />
              {product.rated && (
                <span className="text-body-quaternary fw-semibold ms-1">
                  ({product.rated} people rated)
                </span>
              )}
            </p>
          )}
        </div>
        <div>
          {product.extra && <p className={classNames(product.extraClass, 'fs-9')}>{product.extra}</p>}
          {product.extra2 && <p className={classNames(product.extra2Class, 'fs-9')}>{product.extra2}</p>}

          {product.salePrice && (
            <>
              {product.price ? (
                <div className="d-flex align-items-center mb-1">
                  <p className="me-2 text-body text-decoration-line-through mb-0">{currencyFormat(product.price)}</p>
                  <h3 className="text-body-emphasis mb-0">{currencyFormat(product.salePrice)}</h3>
                </div>
              ) : (
                <h3 className="text-body-emphasis">{currencyFormat(product.salePrice)}</h3>
              )}
            </>
          )}

          {product.colors && (
            <p className={classNames('text-body-tertiary fw-semibold fs-9 lh-1', { 'mb-0': !product.dealEndTime })}>
              {product.colors} colors
            </p>
          )}

          {product.dealEndTime && (
            <p className="text-success fw-bold fs-9 lh-1 mb-0">Deal time ends in {product.dealEndTime}</p>
          )}

          {product.offer && <h6 className="text-success lh-1 mb-0">{product.offer} off</h6>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
