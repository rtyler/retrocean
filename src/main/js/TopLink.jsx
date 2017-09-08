import React from 'react';
import ReactDOM from 'react-dom';
import { SvgStatus } from '@jenkins-cd/design-language';

const _render = SvgStatus.prototype.render;
SvgStatus.prototype.render = () => {
    console.log('render!!');
    //return _render.apply(this);
    return <div className="mc-hammer"/>;
}

export default () => <div style={{height:0, width:0, padding:0, fontSize:0, display: 'inline-block'}}> </div>;
