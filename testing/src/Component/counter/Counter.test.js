import { render, screen, fireEvent } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter Component", () => {
    beforeEach(()=>{
        console.log("before each")
    })
    afterEach(()=>{
        console.log("After each");
    })
  test('Render counter properly', () => { 
    render(<Counter />);
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toBeInTheDocument();

    const buttonElement=screen.getByRole("button" , {
        name: "+"
    });
    expect(buttonElement).toBeInTheDocument();
  });
  test("Should counter render zero by default", () => {
    render(<Counter />);
    const counterElement=screen.getByRole("heading");
    expect(counterElement).toHaveTextContent(0);

    const buttonElement=screen.getByRole("button" , {
        name:"+"
    });
    expect(buttonElement).toHaveTextContent("+");
  });
  test("should render after clicking increment", async ()=>{
    render(<Counter/>);
    const buttonElement=screen.getByRole("button", {
        name: "setcount"
    });
    await user.click(buttonElement);
    const counterElement=screen.getByRole("heading");
    expect(counterElement).toHaveTextContent(0);
  })
  //introduced new functionality fireEvent
  //if we are using fit inplace of test then only that test case will run in that test suit
  test("should render after clicking increment", ()=>{
    render(<Counter/>);
    const buttonElement=screen.getByRole("button", {
        name: "setcount"
    });
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);
    const counterElement=screen.getByRole("heading");
    expect(counterElement).toHaveTextContent(0);
  });
  //we can use it also
  it("render 100 after providing input", ()=>{
    render(<Counter/>);
    const inputElement=screen.getByRole("spinbutton");
    fireEvent.change(inputElement, {target : {value : 100}});
    expect(inputElement).toHaveValue(100);

    const buttonElement=screen.getByRole("button", {
        name: "setcount"
    });
    fireEvent.click(buttonElement);
    expect(screen.getByRole("heading")).toHaveTextContent(100);
    
  })
});
