import React , { useEffect, useState} from 'react'
import NewsData from './NewsData'
import PropTypes from 'prop-types';

const News=(props)=>{
    const [articles, setarticles] = useState([]);
    // const [loading, setloading] = useState(true);
    const [page, setpage] = useState(1);
    // document.title = `${capitalizeFirstLetter(props.category)} - NewsMasala`;

   const  capitalizeFirstLetter = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 
            // articles = [
                
            //     {
            //         "source":{
            //         "id":"espn-cric-info","name":"ESPN Cric Info"
            //         },
            //         "author":null,
            //         "title":"PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            //         "description":"Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            //         "url":"http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            //         "urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg","publishedAt":"2020-04-27T11:41:47Z","content":"Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
            //     },
                    
            //         {"source":
            //         {
            //             "id":"espn-cric-info",
            //             "name":"ESPN Cric Info"},
            //             "author":null,
            //             "title":"What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            //             "description":"Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            //             "url":"http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            //             "urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg","publishedAt":"2020-03-30T15:26:05Z",
            //             "content":"Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
            //         }
            //  ]
            useEffect(()=>{ const updateNews = async ()=>{
                // props.setProgress(0);
                    console.log("cdm"); 
                   
                    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b0e3fa0220344b729281948c07d71cdd&page=${page}&pageSize=9`;
                    let data = await fetch(url);
                    let parsedData = await data.json()
                    console.log(parsedData);
                    // this.setState({articles : parsedData.articles})
                    setarticles(parsedData.articles)
            
                }
                updateNews();

            },[page, props.category, props.country])
       const updateNews = async ()=>{
    // props.setProgress(0);
        console.log("cdm"); 
       
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b0e3fa0220344b729281948c07d71cdd&page=${page}&pageSize=9`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        // this.setState({articles : parsedData.articles})
        setarticles(parsedData.articles)

    }

     const handleNextClick = async ()=>{
        console.log("next click")

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b0e3fa0220344b729281948c07d71cdd&page=${page + 1}&pageSize=9`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        setarticles(parsedData.articles);
        setpage(page+1);
        updateNews();
    }

    const handlePrevClick = async ()=>{
        console.log("prev clcik")
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b0e3fa0220344b729281948c07d71cdd&page=${page - 1}&pageSize=9`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        setpage(page-1)
        updateNews();
        

    }
    return (
        <div className='container my-3'>
            <h2 className='text-center' style={{margin: '35px 0px'}}>Global News Network - {capitalizeFirstLetter(props.category)} Top Headlines</h2>
            <div className="row">
            {articles.map( (element)=>{
                return <div className="col-md-4" key={element.url}>
                   {/* { console.log('element')}; */}
                <NewsData  title={element.title? element.title : ""} description={element.description? element.description : ""} imageurl={element.urlToImage} newsUrl = {element.url} author = {element.author? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} />
            </div>
            })}
            </div>

            <div className="container d-flex justify-content-between">
            <button disabled={page <= 1} type="button" class="btn btn-dark " onClick={handlePrevClick}> &larr; Previous</button>
            <button type="button" class="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
            </div>
        </div>

    )
}
News.defaultProps = {
    country : "us",
    category : PropTypes.string,
}

News.propTypes = {
    country : PropTypes.string,

}
export default News
