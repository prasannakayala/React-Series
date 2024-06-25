import React from 'react'

import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("should load contact us component", ()=>{
    render(<Contact/>);

    const heading = screen.getByRole("heading");
    //assertion
    expect(heading).toBeInTheDocument()
})

test("should load button inside component", ()=>{
    render(<Contact/>);
 
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument()
});
test("should load input inside component", ()=>{
    render(<Contact/>);
 
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument()
});

test("should load 2 input boxes on contact component", ()=>{
    render(<Contact/>);
 
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes).toBeInTheDocument()
});

