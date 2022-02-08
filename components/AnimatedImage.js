import ReactDOM from 'react-dom';
import React from 'react';
import {Curtains, Plane} from 'react-curtains';
import css from '../styles/curtains.module.scss'

const basicVs = `
  precision mediump float;
  #define PI 3.14159265359

  // those are the mandatory attributes that the lib sets
  attribute vec3 aVertexPosition;
  attribute vec2 aTextureCoord;

  // those are mandatory uniforms that the lib sets and that contain our model view and projection matrix
  uniform mat4 uMVMatrix;
  uniform mat4 uPMatrix;
  uniform mat4 planeTextureMatrix;

  // if you want to pass your vertex and texture coords to the fragment shader
  varying vec3 vVertexPosition;
  varying vec2 vTextureCoord;

  uniform float uTime;

  void main() {
      vec3 position = aVertexPosition;
      float x = (cos(position.x * 2.5 + ((uTime * (PI / 3.0)) * 0.03)) + cos(position.y * 2.5 + ((uTime * (PI / 2.489)) * 0.017))) * 0.008;
      float y = (sin(position.y * 2.5 + ((uTime * (PI / 2.023)) * 0.02)) + sin(position.x * 2.5 + ((uTime * (PI / 3.1254)) * 0.037))) * 0.015;

      position.x -= x;
      position.y -= y;

      gl_Position = uPMatrix * uMVMatrix * vec4(position, 1.0);
      // set the varyings
      vTextureCoord = (planeTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
      vVertexPosition = position;
  }
`;

const basicFs = `
  precision mediump float;

  varying vec3 vVertexPosition;
  varying vec2 vTextureCoord;

  uniform sampler2D planeTexture;

  void main(){
    vec2 textureCoord = vTextureCoord;
    gl_FragColor = texture2D(planeTexture, textureCoord);
  }
`;

function BasicPlane() {
  const basicUniforms = {
    direction: {
      name: 'uDirection',
      type: '1f',
      value: 0,
    },
    time: {
        name: "uTime",
        type: "1f",
        value: 0
    },
  };

  const onRender = (plane) => {
    plane.uniforms.time.value++;
  };

  return (
    <Curtains>
      <Plane
        className={css.basicPlane}
        vertexShader={basicVs}
        fragmentShader={basicFs}
        uniforms={basicUniforms}
        widthSegments={9}
        heightSegments={9}
        onRender={onRender}
      >
          <img src="/Udsnit_Organic.jpg" alt="" data-sampler="planeTexture" crossOrigin='anonymous'/>
      </Plane>
    </Curtains>
  );
}

export default BasicPlane
