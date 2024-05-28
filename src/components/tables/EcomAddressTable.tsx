import React from 'react';
import { Table } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

interface AddressTableDataType {
  labelIcon: string;
  label: string;
  value: string;
}

const TableRow = ({ rowData }: { rowData: AddressTableDataType }) => {
  return (

    <tr>
      <td className="py-2 ps-0">
        <div className="d-flex">
          <FeatherIcon icon={rowData.labelIcon} size={16} className="me-2" />
          <h5 className="lh-sm me-4">{rowData.label}</h5>
        </div>
      </td>
      <td className="py-2 fw-bold lh-sm">:</td>
      <td className="py-2 px-3" style={{ maxWidth: 260 }}>
        <h5 className="lh-lg fw-normal text-body-secondary">{rowData.value}</h5>
      </td>
    </tr>
  );
};

const EcomAddressTable = ({ data }) => {
  return (
    <Table borderless>
      <tbody>
         <tr>
      <td className="py-2 ps-0">
        <div className="d-flex">
          <FeatherIcon icon={"user"} size={16} className="me-2" />
          <h5 className="lh-sm me-4">Name</h5>
        </div>
      </td>
      <td className="py-2 fw-bold lh-sm">:</td>
      <td className="py-2 px-3" style={{ maxWidth: 260 }}>
        <h5 className="lh-lg fw-normal text-body-secondary">{data?.shippingInfo?.fullName}</h5>
      </td>
    </tr>
    <tr>
      <td className="py-2 ps-0">
        <div className="d-flex">
          <FeatherIcon icon={"home"} size={16} className="me-2" />
          <h5 className="lh-sm me-4">{"Address"}</h5>
        </div>
      </td>
      <td className="py-2 fw-bold lh-sm">:</td>
      <td className="py-2 px-3" style={{ maxWidth: 260 }}>
        <h5 className="lh-lg fw-normal text-body-secondary">{data?.shippingInfo?.address}</h5>
      </td>
    </tr>
    <tr>
      <td className="py-2 ps-0">
        <div className="d-flex">
          <FeatherIcon icon={"phone"} size={16} className="me-2" />
          <h5 className="lh-sm me-4">{"Phone"}</h5>
        </div>
      </td>
      <td className="py-2 fw-bold lh-sm">:</td>
      <td className="py-2 px-3" style={{ maxWidth: 260 }}>
        <h5 className="lh-lg fw-normal text-body-secondary">+91-{data?.shippingInfo?.phone}</h5>
      </td>
    </tr>
      </tbody>
    </Table>
  );
};

export default EcomAddressTable;
