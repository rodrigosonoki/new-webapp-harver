import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body, #root {
    height: 100vh
}

body {
    background: ${colors.background}
}

#root {
    display: flex;
    align-items: center;
    justify-content: center
}

body, input, button, textarea {
    font: 400 16px Poppins;
}

`;
