import { useSelector } from 'react-redux';
import Section from '../../components/base/Section';
import PageBreadcrumb from '../../components/common/PageBreadcrumb';
import EcomWishlistTable from '../../components/tables/EcomWishlistTable';
import { defaultBreadcrumbItems } from '../../data/commonData';

const Wishlist = () => {
  const { wishlistItems } = useSelector((state:any) => state.wishlist);
  return (
    <div className="pt-5 mb-9">
      <Section small className="py-0">
        <PageBreadcrumb items={[
  {
    label: 'Home',
    url: '/'
  },
  {
    label: 'Wishlist',
    active: true
  }
]} />
        <h2 className="mb-5">
          Wishlist
          <span className="text-body-tertiary fw-normal ms-2">{`(${wishlistItems?.length})`}</span>
        </h2>
        <EcomWishlistTable />
      </Section>
    </div>
  );
};

export default Wishlist;
