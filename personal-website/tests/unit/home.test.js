import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../../src/pages/home/home";

afterEach(() => {
    cleanup();
});

test('render page', () => {
    render(<Home/>);
});