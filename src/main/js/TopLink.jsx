import React from 'react';
import ReactDOM from 'react-dom';
import { SvgStatus } from '@jenkins-cd/design-language';
import { getAdjunctURL } from '@jenkins-cd/js-modules';

const width = 40, height = 40;
const successImage = getAdjunctURL() + '/org/jenkins/ui/jsmodules/retrocean-plugin/mchammer.gif';
const failureImage = getAdjunctURL() + '/org/jenkins/ui/jsmodules/retrocean-plugin/flames.gif';

const success = () => (
    <foreignObject x={-width/2} y={-height/2} width={width} height={height}>
        <img src={successImage} style={{width, height}}/>
    </foreignObject>
);

const xPos = () => -15 - Math.floor(Math.random()*20);

const failure = () => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="-18" y="-16">
    <defs>
        <clipPath id="clip-image">
        <rect x="0" y="0" width="40" height="40" />
        </clipPath>
    </defs>
    <image xLinkHref={successImage} href={failureImage} x={xPos()} y="-10" height="50px" clipPath="url(#clip-image)" />
    </svg>
);

const _render = SvgStatus.prototype.render;
SvgStatus.prototype.render = function() {
    console.log('svg status: ', this.props);
    if (false) {
        return _render.apply(this);
    }
    return this.props.result === 'success' ? success() : failure();
}

export default () => <div style={{display: 'none'}}> </div>;
