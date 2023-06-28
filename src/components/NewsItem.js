import React from 'react'

const NewsItem = (props) => {
    
    let {title, description, imgUrl, newsUrl, author, date, source} = props;  
    return (    
      <div className='my-3'>
        <div className="card">
        <img src={!imgUrl?"https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg":imgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "50%", zIndex: '1'}}>
                {source}
            </span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} Updated on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
}

export default NewsItem
