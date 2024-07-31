import {render, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../Pages/Home';

test('if Home renders Search Bar and Filter Search Options', () => {
    const {asFragment, getByText} = render(<Home />);

    expect(getByText('Job Title:')).toBeInTheDocument();
    expect(getByText('Location')).toBeInTheDocument();
    expect(getByText('Search')).toBeInTheDocument();
   
});