import React, { useState, useContext, useEffect } from 'react';
import { FavoritesContext } from '../Context/FavoritesContext';
import './JobListings.css';

const JobListings = ({ title, company, location, salary, description, companyWebsite, id }) => {
    const [isBookMarked, setIsBookMarked] = useState(null);
    const { setAddFavJob } = useContext(FavoritesContext);
  
    const redirectToCompanyWebsite = () => {
        window.open(companyWebsite, "_blank", "noreferrer");
    }

    useEffect(() => {

        function checkIfJobIsFavorited() {
            const local = JSON.parse(localStorage.favorites);
            if(local.length !== 0){
                for (let i = 0; i < local.length; i++) {
                    if (local[i].id === id) {
                        setIsBookMarked('favorited'); 
                    }
                  }
            }
          };

        checkIfJobIsFavorited();
    }, [id])

    const manageBookMark = () => {
        if(isBookMarked === null){
            setIsBookMarked(true); 
        } else if (isBookMarked === 'favorited'){
            setIsBookMarked(false);  
        } else {
            setIsBookMarked(mark => !mark);
        }
    };

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
                   }
                )
        }

        if(isBookMarked !== null && isBookMarked !== 'favorited'){
            addToFavorites();
        }
        
    }, [isBookMarked, setAddFavJob, companyWebsite, company, id, title, location, salary, description])

    const showBookMark = () => {
        if(isBookMarked === false || isBookMarked === null){
            return (
                <div>
                  <img 
                    src="https://static-00.iconduck.com/assets.00/bookmark-icon-1803x2048-3d3yni5w.png" 
                    className="bookmark-icon" 
                    onClick={() => manageBookMark()}
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
                    onClick={() => manageBookMark()}
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