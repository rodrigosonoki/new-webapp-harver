import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: ${colors.background}
}

body, input, button, textarea {
    font: 400 16px Poppins;
}

`;
