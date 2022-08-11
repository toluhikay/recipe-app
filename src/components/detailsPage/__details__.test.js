import {render, screen} from '@testing-library/react'
import DetailsPage from './detailsPage'

test('renders the summary title', () => {
    render(<DetailsPage />);
    const linkElement = screen.getByText(/similar/i);
    expect(linkElement).toBeInTheDocument();
  });