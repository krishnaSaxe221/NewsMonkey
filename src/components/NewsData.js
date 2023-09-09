import React from 'react';

const NewsData =(props)=>{
        let { title, description, imageurl, newsUrl, author, date , source } = props;
        return (
            <div className='my-3'>
                <div className="card" style={{ width: "18rem" }}>
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%' , zIndex: '1'}}>{source}
                </span>
                    <img src={!imageurl ? "https://www.digitaltrends.com/wp-content/uploads/2021/03/radeon-rx-6700-xt-5.jpg?resize=1200%2C630&p=1" : imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{!title ? "Lorem ipsum dolor sit, amet consectetur" : title}</h5>
                        <p className="card-text">{!description ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quae nesciunt aut neque impedit dolorum, molestias dolores ratione mollitia officia Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quae nesciunt aut Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quae nesciunt aut " : description}</p>
                        <p className="card-text"><small className="text-muted">By {author} on {date} </small></p>
                        <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsData
