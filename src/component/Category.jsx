import React from 'react';
import { Link } from 'react-router-dom';
import "../index.css";
import { useGetCategoriesQuery } from '../features/category/categoryApi';

function Category() {
  const { data, isLoading, isError } = useGetCategoriesQuery();
  const categories = data?.data || [];

  if (isError) return <p>Error loading categories.</p>;

  // Dummy skeleton card array
  const skeletonArray = new Array(8).fill(0);

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
                <div className="popu-category-box rounded text-center p-3 shadow-sm">
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
                    <Link to='/' className="text-dark stretched-link">
                      <h5 className="fs-18">{item.title}</h5>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
      </div>

      {/* Browse Button */}
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
    </>
  );
}

export default Category;
