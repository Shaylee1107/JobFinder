import React, { useState, useContext, useEffect } from 'react';
import { FavoritesContext } from '../Context/FavoritesContext';
import './JobListings.css';
import blueBookmark from '../images/blue_bookmark.png';
import bookmark from '../images/bookmark.png';

const JobListings = ({ title, company, location, salary, description, companyWebsite, id, favorite }) => {
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
            if(favorite !== undefined){
                return (
                    <div onClick={() => manageBookMark()} className="bookmark-container undo-button">
                        Undo
                    </div>
                )
            }
            return (
                <div className="bookmark-container">
                  <img 
                    src={bookmark}
                    className="bookmark-icon" 
                    onClick={() => manageBookMark()}
                    alt="bookmark icon" 
                  />
                </div>
            )
        } else {
            return (
                <div className="bookmark-container">
                  <img 
                    src={blueBookmark}
                    className="blue-bookmark-icon" 
                    onClick={() => manageBookMark()}
                    alt="bookmark icon" 
                  />
                </div>
            )
        }
    }

    const showJob = () => {
        if(favorite !== undefined && isBookMarked === false){
            return (
                <div className="JobListContainer center-removed-job">
                      <div className="title-bookmark center-removed-job-details">
                        <h3 className='montserrat job-title removed-job-title'>{title} <span className="removed-message">has been removed...</span></h3>
                        {showBookMark()}
                      </div>
                </div>
            )
        }
        return (
            <div className="JobListContainer">
                <div className="job-info">
                  <div className="title-bookmark">
                    <h3 className='montserrat job-title'>{title}</h3>
                    {showBookMark()}
                  </div>
                  <p className="dm-sans">{company}</p>
                  <p className="dm-sans">{location}</p>
                  <p className="dm-sans">${salary}</p>
                  <p className="dm-sans">{description}</p>
                  <button className="details-button montserrat" onClick={() => redirectToCompanyWebsite()}>More Details</button>
                </div>
            </div>
        )
    }

    return (
        <>
            {showJob()}
        </>
    )
}

export default JobListings;