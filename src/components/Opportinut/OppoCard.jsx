import React from 'react';

const OppoCard = ({data:{title,desc, img}}) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-12 mx-auto my-2 py-3">
                <div className="card mx-auto">
                    <img src={img} alt="img" className='img-card' />
                    <div className="card-body">
                        <h5>{title }</h5>
                        <p>{desc }</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OppoCard;