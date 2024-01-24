import Greet from "./Greet";
import {render,screen} from "@testing-library/react";
test('renders properly', () => { 
    render(<Greet/>);
    const welcomeElement=screen.getByRole("heading");
    expect(welcomeElement).toBeInTheDocument();
 })