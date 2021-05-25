import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import Loader from "./index";

test("Se renderizan los datos del componente correctamente", () => {
  const text = "probando";
  const {container} = render(<Loader text={text} />);
  expect(container).toHaveTextContent(text);
});
