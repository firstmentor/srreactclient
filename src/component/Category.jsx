import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../index.css";
import { useGetCategoriesQuery } from '../features/category/categoryApi';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Category() {
  const { data, isLoading, isError } = useGetCategoriesQuery();
  const categories = data?.data || [];

  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleShow = (category) => {
    setSelectedCategory(category);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedCategory(null);
  };

  const skeletonArray = new Array(8).fill(0);

  if (isError) return <p>Error loading categories.</p>;

  return (
    <>
      <div className="row">
        {isLoading
          ? skeletonArray.map((_, index) => (
              <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                <div className="popu-category-box rounded text-center p-3 shadow-sm">
                  <div className="popu-category-icon icons-md mb-3">
                    <div
                      className="placeholder-glow d-inline-block rounded-circle"
                      style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: "#e0e0e0",
                      }}
                    ></div>
                  </div>
                  <div className="popu-category-content">
                    <h5 className="fs-18 placeholder-glow">
                      <span className="placeholder col-6"></span>
                    </h5>
                  </div>
                </div>
              </div>
            ))
          : categories.map((item, index) => (
              <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                <div
                  className="popu-category-box rounded text-center p-3 shadow-sm"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleShow(item)}
                >
                  <div className="popu-category-icon icons-md mb-3">
                    <img
                      src={item.image?.url}
                      alt={item.title}
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "contain"
                      }}
                    />
                  </div>
                  <div className="popu-category-content">
                    <h5 className="fs-18 text-dark">{item.title}</h5>
                  </div>
                </div>
              </div>
            ))}
      </div>

      {/* Browse All Categories Button */}
      {!isLoading && (
        <div className="row">
          <div className="col-lg-12">
            <div className="mt-5 text-center">
              <Link to="/" className="btn TGreen text-white btn-hover">
                Browse All Categories <i className="uil uil-arrow-right ms-1"></i>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Category Details */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCategory && (
            <div className="text-center">
              <img
                src={selectedCategory.image?.url}
                alt={selectedCategory.title}
                style={{ width: "120px", height: "100px", objectFit: "contain" }}
                className="mb-3"
              />
              <h4>{selectedCategory.title}</h4>
              <p className="text-muted">{selectedCategory.description || 'No description available'}</p>
            </div>
          )}
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

export default Category;
