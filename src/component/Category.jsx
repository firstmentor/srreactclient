import React from 'react';
import { Link } from 'react-router-dom';
import "../index.css";
import { useGetCategoriesQuery } from '../features/category/categoryApi';

function Category() {
  const { data, isLoading, isError } = useGetCategoriesQuery();

  const categories = data?.data || [];

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading categories.</p>;

  return (
    <>
      <div className="row">
        {categories.map((item, index) => (
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
                <Link to={'/'} className="text-dark stretched-link">
                  <h5 className="fs-18">{item.title}</h5>
                </Link>
                {/* <p className="text-muted mb-0">{item.jobsCount || 0} Jobs</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Browse Button */}
      <div className="row">
        <div className="col-lg-12">
          <div className="mt-5 text-center">
            <Link to="/" className="btn TGreen text-white btn-hover">
              Browse All Categories <i className="uil uil-arrow-right ms-1"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
