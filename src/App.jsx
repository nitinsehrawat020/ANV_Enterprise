import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./Pages/Home";
import GlobalStyle from "./Styles/GlobalStyle";

import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";
import DesignForeCeil from "./Pages/DesignForeCeil";
import DesignMolding from "./Pages/DesignMolding";
import AboutUs from "./Pages/AboutUs";
import LoginAndSignup from "./Pages/LoginAndSignup";

function App() {
  return (
    <>
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/designFalseCeil" element={<DesignForeCeil />} />
              <Route path="/designMolding" element={<DesignMolding />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/login" element={<LoginAndSignup />} />
              <Route path="*" element={<LoginAndSignup />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </StyleSheetManager>
    </>
  );
}

function shouldForwardProp(propName, target) {
  if (typeof target === "string") {
    // For HTML elements, forward the prop if it is a valid HTML attribute
    return isPropValid(propName);
  }
  // For other elements, forward all props
  return true;
}

export default App;
