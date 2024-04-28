import React from 'react'
import Button from '../../components/base/Button';
import Rating from '../../components/base/Rating';
import { Form, Modal } from 'react-bootstrap';
import Dropzone from '../../components/base/Dropzone';
import { ReviewRepositry } from '../../services/reviewRepositry';
import { useDispatch, useSelector } from 'react-redux';
interface SizeModalProps {
  show: boolean;
  handleClose?: () => void;
}

const SizeModal = ({ show, handleClose }: SizeModalProps) => {



  return (
    <Modal show={show} onHide={handleClose} centered>
      <div className="p-4">
        <div className="d-flex flex-between-center mb-3">
          <h5 className="fs-8 mb-0">Size Cart</h5>
          <button className="btn p-0 fs-10" onClick={handleClose}>
            Clear
          </button>
        </div>


   
      
      </div>
    </Modal>
  );
};

export default SizeModal;
