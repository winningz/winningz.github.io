/**
 * @jest-environment jsdom
 */
 import Name from "./Name";
 import { render, unmountComponentAtNode } from "react-dom";
 import { act } from "react-dom/test-utils";
  
 let container = null;
 beforeEach(() => {
   container = document.createElement("div");
   document.body.appendChild(container);
 });
  
 afterEach(() => {
   unmountComponentAtNode(container);
   container.remove();
   container = null;
 });
  
 it("renders job title", () => {
   act(() => {
     render(<Name name="gildong Hong" />, container);
   });
   expect(container.textContent).toBe("gildong Hong");
  
   act(() => {
     render(<Name />, container);
   });
   expect(container.textContent).toBe("Anoymous");
 });