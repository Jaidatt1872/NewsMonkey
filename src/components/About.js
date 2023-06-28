import React, {useEffect } from 'react'

export default function About(props) {

    const getLoader= async() => {
        props.setProgress(10);
        await 
        props.setProgress(100);
    }

    const capitalizeFirstLetter = (string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    useEffect(() => {
        getLoader();
        document.title = `NewsMonkey - ${capitalizeFirstLetter(props.category)}`;
          //eslint-disable-next-line
      }, [])

  return (
    <div className='container' style={{margin: '70px'}}>
        <h1 className='my-3'>About NewsMonkey </h1>
        <div className="accordion" id="accordionExample" >
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse"  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Get Your Daily Dose News!</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" >
                NewsMonkey is a React based Web App which can be used to get any type of News Headlines
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to Use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" >
                NewsMonkey is a free News viewing App. NewsMonkey gives the Top Headlines of any News Category. Thus it is suitable for your everyday News comsupmtion.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" >
                This NewsMonkey software works in any web browsers such as Chrome, Firefox, Edge, Safari, Opera, etc.
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
