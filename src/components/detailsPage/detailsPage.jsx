import React, { Fragment } from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './detailsPage.css'

const DetailsPage = () => {
    let params = useParams()
    const [details, setDetails] = useState({})
    const [similar, setSimilar] = useState([])
    


    const getDetails = async ()=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_SPOON_KEY}`)
        const detailsData = await data.json();
        console.log(detailsData);
        setDetails(detailsData)
    }

    const getSimilar = async () =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/similar?apiKey=${process.env.REACT_APP_SPOON_KEY}`)
        const similarData = await data.json()
        // console.log(similarData);
        setSimilar(similarData)
    }


    useEffect(()=>{
        getDetails();
    }, [params.name])

    useEffect(()=>{
        getSimilar()
    }, [params.name])
  return (
    <Fragment>
        <div className="details-div">
            <div className="details-img-div">
                <img src={details.image} alt="" />
            </div>
            <h2>{details.title}</h2>
            <div className="details-details-div2">
                <div className="details-ul-ingredients">
                    <h5>It will be prepared in {details.preparationMinutes} minute(s)</h5>
                    <h5>Number of servings is {details.servings}</h5>
                </div>
                <div className="details-instruction-div">
                    <p className="details-summary-p" dangerouslySetInnerHTML={{__html:details.summary}}></p>

                    <h5>Check the Intructions to cook below</h5>
                    <p className="details-summary-p" dangerouslySetInnerHTML={{__html:details.instructions}}></p>
                </div>
            </div>
        </div>

        <div className="similar-recipes">
            <h2 className="similar-recipes-p">SIMILAR RECIPES</h2>
            <h4>Click on each recipe for more information</h4>
                {
                    similar.map((items)=>{
                        return (
                            <div className="similar" key={items.id}>
                                <ul>
                                    <li>
                                        <a href={items.sourceUrl}>{items.title}</a>
                                    </li>            
                                </ul>
                            </div>
                        )
                    })
                }
        </div>
    </Fragment>
  )
}

export default DetailsPage