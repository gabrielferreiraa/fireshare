import { injectGlobal } from 'styled-components';
import global from 'tools/global';

export const style = () => injectGlobal`
    ${global.fontFace}
    
    body {
        font-family: ${global.font.light};
        color: ${global.primaryColor};
    }
`;