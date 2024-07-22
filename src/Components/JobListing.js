import React, {useState} from 'react';
import './JobListings.css';

const JobListings = ({title, company, location, salary, description, companyWebsite}) => {
    const [isBookMarked, setIsBookMarked] = useState(false);

    const redirectToCompanyWebsite = () => {
        window.open(companyWebsite, "_blank", "noreferrer");
    }

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