import React, { useState, useContext, useEffect } from 'react';
import { FavoritesContext } from '../Context/FavoritesContext';
import './JobListings.css';

const JobListings = ({ title, company, location, salary, description, companyWebsite, id }) => {
    const [isBookMarked, setIsBookMarked] = useState(false);
    const { setAddFavJob, addFavJob } = useContext(FavoritesContext);

    const redirectToCompanyWebsite = () => {
        window.open(companyWebsite, "_blank", "noreferrer");
    }

    useEffect(() => {
        const addToFavorites = () => {
            setAddFavJob(
                
                   {
                   id: `${id}`,
                   title: `${title}`, 
                   company: `${company}`, 
                   location: `${location}`, 
                   salary: `${salary}`, 
                   description: `${description}`, 
                   companyWebsite: `${companyWebsite}` 
                   })
        }

        if(isBookMarked === true){
            addToFavorites();
        }
    }, [isBookMarked])

    // useEffect(() => {
    //     const removeFromFavorites = () => {
    //         if(){

    //         }
    //     }

    //     if(isBookMarked === false){
    //         removeFromFavorites();
    //     }
    // }, [isBookMarked])

    const showBookMark = () => {
        if(isBookMarked === false){
            return (
                <div>
                  <img 
                    src="https://static-00.iconduck.com/assets.00/bookmark-icon-1803x2048-3d3yni5w.png" 
                    className="bookmark-icon" 
                    onClick={() => setIsBookMarked(mark => !mark)}
                    alt="bookmark icon" 
                  />
                </div>
            )
        } else {
            return (
                <div>
                  <img 
                    src="https://static-00.iconduck.com/assets.00/bookmark-icon-1567x2048-gqmwqm5z.png" 
                    className="blue-bookmark-icon" 
                    onClick={() => setIsBookMarked(mark => !mark)}
                    alt="bookmark icon" 
                  />
                </div>
            )
        }
    }

    return (
        <div className="JobListContainer">
            <h3>{title}</h3>
            {
                showBookMark()
            }
            <p>{company}</p>
            <p>{location}</p>
            <p>${salary}</p>
            <p>{description}</p>
            <button onClick={() => redirectToCompanyWebsite()}>Apply Now</button>
        </div>
    )
}

export default JobListings;