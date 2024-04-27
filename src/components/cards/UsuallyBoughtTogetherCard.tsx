import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SuggestedProductType } from '../../data/e-commerce/products';
import { currencyFormat } from '../../helpers/utils';
import { useState } from 'react';
import { Button, Card, Form, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductListItem = ({ product }: { product: SuggestedProductType }) => {
  const [checked, setChecked] = useState(product.checked);

  return (
    <div className="d-flex align-items-center">
      <Form.Check
        checked={checked}
        className="me-2"
        onChange={e => {
          setChecked(e.target.checked);
        }}
      />
      <img
        className="border border-translucent rounded"
        src={product.image}
        width="53"
        alt=""
      />
      <div className="ms-2">
        <Link className="fs-9 fw-bold line-clamp-2 mb-2" to={`/p-d?pid=${product?._id}`}>
          {product.name}
        </Link>
        <h5>{currencyFormat(product.price)}</h5>
      </div>
    </div>
  );
};

const UsuallyBoughtTogetherCard = ({
  className,
  products
}: {
  className?: string;
  products: SuggestedProductType[];
}) => {

  const { getProductDetail,loading } = useSelector((state: any) => state?.products)


  if(getProductDetail?.relatedProducts?.length < 1){
    return null
  }


  return (
    <Card className={className}>
      <Card.Body>
        <h5 className="text-body-emphasis">Usually Bought Together</h5>
        <div className="w-75">
          <p className="text-body-tertiary fs-9 fw-bold line-clamp-1">
            {getProductDetail?.name}
          </p>
        </div>
        <Stack className="border-dashed border-y border-translucent py-4 gap-5 mb-3">
          {getProductDetail?.relatedProducts?.map((product:any) => (
            <ProductListItem product={product} key={product._id} />
          ))}
        </Stack>
        <div className="d-flex align-items-end justify-content-between">
          <div>
            <h5 className="mb-2 text-body-tertiary text-opacity-85">Total</h5>
            <h4 className="mb-0 text-body-emphasis">
              {currencyFormat(958.99)}
            </h4>
          </div>
          <Button variant="outline-warning">
            Add {getProductDetail?.relatedProducts?.length} items to cart
            <FontAwesomeIcon icon={faShoppingCart} className="ms-2" />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default UsuallyBoughtTogetherCard;
