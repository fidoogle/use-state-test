import { fireEvent, render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { queryByTestId } = render(<App />);
  expect(queryByTestId('btn-show')).toBeInTheDocument();
  expect(queryByTestId('new-div')).not.toBeInTheDocument();

  fireEvent.click(queryByTestId('btn-show'));
  expect(queryByTestId('new-div')).toBeInTheDocument();
});
