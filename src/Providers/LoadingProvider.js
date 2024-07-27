import React, { useState, useCallback } from 'react';
import {LoadingContext} from '../Context/LoadingContext';
import LoadingIcon from '../Components/LoadingIcon';

const LoadingProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    const enableLoading = useCallback(() =>
    {
      setIsLoading(true);
    },
    []
);

const disableLoading = useCallback(() =>
     {
       setIsLoading(false);
     },
     []
);

    const showLoadingSign = () => {
        if(isLoading === true){
          return (
              <LoadingIcon />
          )
        }
    }

    return (
      <LoadingContext.Provider value={{ enableLoading, disableLoading, showLoadingSign }}>
        {children}
      </LoadingContext.Provider>
    )
}

export default LoadingProvider;
