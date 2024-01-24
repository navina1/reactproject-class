import { screen } from "@testing-library/react";
import { render } from "@testing-library/react";
import Greet from "./Greet";


test.only('renders test', () => { 
    render(<Greet/>);
    const nameElement=screen.getByRole("heading",{
        level: 1
    });
    expect(nameElement).toBeInTheDocument();
    //expect(welcomeElement).toHaveTextContent("Welcome");
 })
test('renders properly', () => { 
    render(<Greet/>);
    const welcomeElement=screen.getByRole("heading",{level: 1,
        name: "welcome",});
    expect(welcomeElement).toBeInTheDocument();
    //expect(welcomeElement).toHaveTextContent("Welcome");
 })