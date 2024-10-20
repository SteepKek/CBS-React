import React from 'react';

import '../Page.css';
import silviaImg from '../../assets/silvia.jpg';

function PageJSX() {
    const header = React.createElement('h2', {}, 'Some Header');
    const p = React.createElement('p', {}, 'Nissan Silvia S15');
    const img = React.createElement('img', {src: silviaImg, alt: 'Nissan Silvia S15'}, null);
    const block = React.createElement('div', {className: 'wrapper'}, [header, p, img]);

    return(
        <>
            {block}
        </>
    );
}

export default PageJSX;