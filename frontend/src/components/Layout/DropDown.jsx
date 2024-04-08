import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/styles';

const DropDown = ({ categoriesData, setDropDown }) => {
  const navigate = useNavigate();

  const submitHandle = (category) => {
    navigate(`/products?category=${category.title}`);
    setDropDown(false);
  };

  return (
    <div>
      <div className='pb-4 w-[270px] bg-white absolute z-30 rounded-b-md shadow-sm'>
        {categoriesData &&
          categoriesData.map((category, index) => (
            <div
              key={index}
              className={`${styles.normalFlex} cursor-pointer flex`}
              onClick={() => submitHandle(category)}
            >
              {category.image_Url && Array.isArray(category.image_Url) && category.image_Url.length > 0 ? (
                category.image_Url.map((imageUrl, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={imageUrl}
                    style={{
                      width: "25px",
                      height: "25px",
                      objectFit: "contain",
                      marginLeft: "10px",
                      userSelect: "none",
                    }}
                    alt=''
                  />
                ))
              ) : (
                <img
                  src={category.image_Url}
                  style={{
                    width: "25px",
                    height: "25px",
                    objectFit: "contain",
                    marginLeft: "10px",
                    userSelect: "none",
                  }}
                  alt=''
                />
              )}
              <h3 className='m-3 select-none flex'>{category.title}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DropDown;
