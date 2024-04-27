import React from 'react'
import Button from '../../components/base/Button';
import Rating from '../../components/base/Rating';
import { Form, Modal } from 'react-bootstrap';
import Dropzone from '../../components/base/Dropzone';
import { ReviewRepositry } from '../../services/reviewRepositry';
import { useDispatch, useSelector } from 'react-redux';
interface ReviewModalProps {
  show: boolean;
  handleClose: () => void;
}

const ReviewModal = ({ show, handleClose }: ReviewModalProps) => {
  const { getProductDetail } = useSelector((state: any) => state?.products)
  const { error } = useSelector((state: any) => state?.reviews)
  const dispatch = useDispatch<any>()
  const [state, setState] = React.useState({
    rating: 0,
    reviewText: "",
    files: [],
  });

  const handleRating = (newRating) => {
    setState({
      ...state,
      rating: newRating
    });
  };

  const handleTextChange = (e) => {
    setState({
      ...state,
      reviewText: e.target.value
    });
  };

  const handleFileDrop = (acceptedFiles) => {
    console.log(acceptedFiles, 'gggg')

    setState({
      ...state,
      files: acceptedFiles,
    });
  };


  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('rating', state.rating.toString());
    formData.append('reviewText', state.reviewText);
    formData.append('product', getProductDetail?._id);

      formData.append(`images`, state.files[0]);
    
    
  //   state.files.forEach((image, index) => {
  //     formData.append(`image`, image);
  //   });
  //  console.log(formData,'formData')
   
   await dispatch(ReviewRepositry.postReview(formData))
    handleClose()

  }



  return (
    <Modal show={show} onHide={handleClose} centered>
      <div className="p-4">
        <div className="d-flex flex-between-center mb-3">
          <h5 className="fs-8 mb-0">Your rating</h5>
          <button className="btn p-0 fs-10" onClick={handleClose}>
            Clear
          </button>
        </div>
        <Rating onClick={handleRating} iconClass="fs-5" className="mb-3" />
       {error?.rating && (<p>{error?.rating}</p>)}
        <div className="mb-3">
          <h5 className="text-body-highlight mb-3">Your review</h5>
          <Form.Control
            onChange={handleTextChange}
            as="textarea" rows={5} />
        </div>
        {error?.reviewText && (<p>{error?.reviewText}</p>)}
        <Dropzone
          className="mb-3"
          onDrop={handleFileDrop}
          size="sm"
          accept={{
            'image/*': ['.png', '.gif', '.jpeg', '.jpg']
          }}
        />
        <div className="d-flex flex-between-center">
          {/* <Form.Check type="checkbox" id="confirmCheck" className="flex-1">
            <Form.Check.Input type="checkbox" />
            <Form.Check.Label className="text-body-emphasis">
              Review anonymously
            </Form.Check.Label>
          </Form.Check> */}
          <button className="btn" onClick={handleClose}>
            Close
          </button>
          <Button onClick={handleSubmit} className="rounded-pill">Submit</Button>
        </div>
      </div>
    </Modal>
  );
};

export default ReviewModal;
