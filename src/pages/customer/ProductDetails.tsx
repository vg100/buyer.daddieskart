import ProductDescription from '../../components/modules/e-commerce/ProductDescription';
import ProductDetailsTab from '../../components/modules/e-commerce/ProductDetailsTab';
import { topElectronicProducts } from '../../data/e-commerce/products';
import SimilarProducts from '../../components/sliders/SimilarProducts';
import Section from '../../components/base/Section';
import PageBreadcrumb from '../../components/common/PageBreadcrumb';
import { ecomBreadcrumbItems } from '../../data/commonData';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { ProductRepositry } from '../../services/productRepositry';

const ProductDetails = () => {
  const dispatch = useDispatch<any>()
  // const {products:pds,loading}: any = useSelector<any>(state => state.products)
  // React.useEffect(() => {
  //   dispatch(ProductRepositry.getProducts())
  // }, [])


  
  return (
    <div className="pt-5 mb-9">
      <Section small className="py-0">
        <PageBreadcrumb items={ecomBreadcrumbItems} className="mb-3" />
        <ProductDescription />
      </Section>

      <Section small className="py-0">
        <div className="mb-9">
          <ProductDetailsTab />
        </div>
      </Section>

      <Section className="py-0">
        <SimilarProducts category="66118934e72ec208eb44938e" products={topElectronicProducts} />
      </Section>
    </div>
  );
};

export default ProductDetails;
