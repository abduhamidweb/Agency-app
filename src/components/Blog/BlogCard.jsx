import React from 'react';
import "./Blog.scss";
const BlogCard = ({ CardImg, CardTitle, CardDesc, CardDate }) => {
  return (
    <div className="BlogCard">
      <div className="BlogCard__Img">
        <img src={CardImg} alt="" className='w-100' />
      </div>
      <div className="BlogCard__Body p-4">
        <h5>{CardTitle}</h5>
        <p>{CardDesc}</p>
        <span className='d-flex justify-content-between pt-3'>
          <p>#hi_tech</p>
          <p>
            <i class="bi bi-calendar-date-fill"></i> {CardDate}
          </p>
        </span>
      </div>
    </div>
  );
};

export default BlogCard;