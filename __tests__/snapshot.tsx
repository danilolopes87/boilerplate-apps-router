/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import Main from "src/Components/Main";

it("renders homepage unchanged", () => {
  const { container } = render(<Main />);
  expect(container).toMatchSnapshot();
});
