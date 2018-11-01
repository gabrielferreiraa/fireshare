import { injectGlobal } from 'styled-components';
import global from 'tools/global';

export const style = () => injectGlobal`
    ${global.fontFace}

    body {
        font-family: ${global.font.medium};
        color: ${global.primaryColor};
        padding: 0;
        margin: 0;
    }
`;
