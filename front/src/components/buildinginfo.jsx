import React, { useState } from 'react';
import { Carousel, Modal, Button } from 'react-bootstrap';
'./../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './buildinginfo.css';

export default function BuildingInfo({ data }) {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className='text-center'>
              <img src={data.img} alt={data.name} className='img-fluid' />
              <h2>{data.name}</h2>
            </div>
            <button
              className='btn btn-dark'
              style={{ backgroundColor: 'black', color: 'grey' }}
              onClick={handleButtonClick}
            >
              View Plan
            </button>
            <h1 className='spp' style={{ color: 'red', textAlign: 'center' }}>Specifications</h1>
            <div className='row'>
              <div className='col-md-4'>
                <h2>Floors</h2>
                <h3 style={{ color: 'goldenrod', fontSize: '18px' }}>10 Floor Building</h3>
                <h2>Kitchen</h2>
                <h3 style={{ color: 'goldenrod', fontSize: '18px' }}>Hi-End Vitrified Tiles: Kajaria/ Somany or Equivalent</h3>
                <h2>Balcony + Bathrooms</h2>
                <h3 style={{ color: 'goldenrod', fontSize: '18px' }}>Anti-Skid Tiles: Nitco/ Somany Equivalent(Hi-End)</h3>
                <h2>Interior</h2>
                <h3 style={{ color: 'goldenrod', fontSize: '18px' }}>Quality Emulsion</h3>
              </div>
              <div className='col-md-4'>
                <h2>Lofts</h2>
                <h3 style={{ color: 'goldenrod', fontSize: '18px' }}>Loft in one bedroom only</h3>
                <h2>Windows</h2>
                <h3 style={{ color: 'goldenrod', fontSize: '18px' }}>Aluminium Windows; Balcony - Glass handrails</h3>
                <h2>Bathroom Doors</h2>
                <h3 style={{ color: 'goldenrod', fontSize: '18px' }}>Anti-rotting door</h3>
              </div>
              <div className='col-md-4'>
                <h2>Electrical</h2>
                <h3 style={{ color: 'goldenrod', fontSize: '18px' }}>3-phase with individual meters</h3>
                <h2>Networking</h2>
                <h3 style={{ color: 'goldenrod', fontSize: '18px' }}>Network plug-in socket provision in living/Dining and all bedrooms.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{data.name} Plans</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel nextIcon={<span className="carousel-control-next-icon" />} prevIcon={<span className="carousel-control-prev-icon" />}>
            {Object.values(data.pl).map((photo, index) => (
              <Carousel.Item key={index}>
                <img
                  className='d-block w-100'
                  src={photo}
                  alt={`Slide ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
