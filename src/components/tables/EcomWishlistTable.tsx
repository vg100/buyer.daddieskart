import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from '../../components/base/AdvanceTable';
import { currencyFormat } from '../../helpers/utils';
import useAdvanceTable from '../../hooks/useAdvanceTable';
import AdvanceTableProvider from '../../providers/AdvanceTableProvider';
import { Link } from 'react-router-dom';
import AdvanceTableFooter from '../../components/base/AdvanceTableFooter';
import {
  WishlistProductType,
  wishlistProducts
} from '../../data/e-commerce/products';
import Button from '../../components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const columns: ColumnDef<image>[] = [
  {
    id: 'image',
    accessorKey: '',
    cell: ({ row: { original } }) => {
      const { image } = original;
      return (
        <div className="rounded-2 border border-translucent d-inline-block">
          <img src={image} alt="" width={53} />
        </div>
      );
    },
    meta: {
      cellProps: { className: 'py-0' },
      headerProps: { style: { width: '7%' } }
    }
  },
  {
    accessorKey: 'product',
    header: 'Products',
    cell: ({ row: { original } }) => {
      const { product ,_id } = original;
      return (
        <Link to={`/p-d?pid=${_id}`} className="fw-semibold line-clamp-1">
          {product}
        </Link>
      );
    },
    meta: {
      headerProps: { style: { minWidth: 250, width: '30%' } },
      cellProps: { className: 'pe-11' }
    }
  },
  {
    accessorKey: 'color',
    header: 'Color',
    meta: {
      headerProps: { style: { width: '16%' } },
      cellProps: { className: 'white-space-nowrap' }
    }
  },
  {
    accessorKey: 'size',
    header: 'Size',
    meta: {
      headerProps: { style: { width: '10%' } },
      cellProps: { className: 'text-body-tertiary fw-semibold' }
    }
  },
  {
    accessorKey: 'price',
    header: () => 'Price',
    cell: ({ row: { original } }) => currencyFormat(original.price),
    meta: {
      headerProps: { style: { width: '10%' }, className: 'text-end' },
      cellProps: { className: 'text-end fw-semibold' }
    }
  },
  {
    id: 'action',
    cell: () => (
      <div className="d-flex gap-2 justify-content-end">
        <Button
          size="sm"
          className="text-body-quaternary text-body-tertiary-hover"
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
        <Button
          variant="primary"
          className="fs-10 text-nowrap"
          startIcon={<FontAwesomeIcon icon={faShoppingCart} />}
        >
          Add to cart
        </Button>
      </div>
    ),
    meta: {
      headerProps: { style: { width: '35%' } }
    }
  }
];

const EcomWishlistTable = () => {
  const { wishlistItems } = useSelector((state:any) => state.wishlist);
  const table = useAdvanceTable({
    data: wishlistItems,
    columns,
    pageSize: 5,
    pagination: true,
    sortable: true
  });

  return (
    <div>
      <AdvanceTableProvider {...table}>
        <div className="border-y border-translucent">
          <AdvanceTable tableProps={{ className: 'phoenix-table fs-9' }} />
          <AdvanceTableFooter pagination />
        </div>
      </AdvanceTableProvider>
    </div>
  );
};

export default EcomWishlistTable;
