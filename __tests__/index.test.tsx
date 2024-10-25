// __tests__/index.test.tsx
import { render, screen } from "@testing-library/react";
import Main from "../src/Components/Main"; // Caminho correto para o componente

it("renders a heading", () => {
  render(<Main />);
  
  // Atualize o teste para o novo texto esperado
  const heading = screen.getByRole("heading", {
    name: /React Avançado/i,
  });
  
  expect(heading).toBeInTheDocument();
});
