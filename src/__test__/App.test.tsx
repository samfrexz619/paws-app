import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "../App";


test('test app', ()=> {
  render(<App />)
  const textElement = screen.getByText(`Hello Samfrexz`)
  expect(textElement).toBeInTheDocument() 
})