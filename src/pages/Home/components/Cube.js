import { useEffect } from "react";
import styled from "styled-components";

const CubeContainer = styled.div`
  z-index: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  filter: drop-shadow(0 0 10px black);
`;

const CubeModel = styled.div`
  height: 400px;
  width: 400px;
  margin: auto;
  position: relative;
  transform-style: preserve-3d;
  transform: rotateX(-5deg) rotateY(-2deg) rotateZ(0deg);
  transition: all 0.5s ease-in-out;
`;

const CubeFace = styled.div`
  position: absolute;
  transition: all 0.5s ease-in-out;
  height: 400px;
  width: 400px;
  float: left;
  overflow: hidden;
  opacity: 0.8;
  &.face-one {
    transform: translateX(0px) translateY(0px) translateZ(200px);
    background-color: blue;
  }
  &.face-two {
    transform: rotateY(90deg) translateX(0px) translateY(0px) translateZ(200px);
    background-color: yellow;
  }
  &.face-three {
    transform: rotateY(180deg) translateX(0px) translateY(0px) translateZ(200px);
    background-color: orange;
  }
  &.face-four {
    transform: rotateY(-90deg) translateX(0px) translateY(0px) translateZ(200px);
    background-color: red;
  }
  &.face-five {
    transform: rotateX(90deg) translateX(0px) translateY(0px) translateZ(200px);
    background-color: white;
  }
  &.face-six {
    transform: rotateX(-90deg) translateX(0px) translateY(0px) translateZ(200px);
    background-color: brown;
  }
`;

export default function Cube(props) {
  useEffect(() => {
    var posX = -15,
      posY = -10,
      posZ = 0;

    function rotate(varName, degrees) {
      window[varName] = window[varName] + degrees;
      rotCube(posX, posY, posZ);
    }

    function rotCube(degX, degY, degZ) {
      let segs =
        "rotateX(" +
        degX +
        "deg) rotateY(" +
        degY +
        "deg) rotateZ(" +
        degZ +
        "deg) translateX(0) translateY(0) translateZ(0)";
      document.getElementById("#cube").css({ transform: segs });
    }

    function turnRight() {
      rotate("posY", 90);
    }

    function turnLeft() {
      rotate("posY", -90);
    }

    function flipCube() {
      rotate("posZ", -90);
    }
  }, []);

  return (
    <CubeContainer>
      <CubeModel id="cube">
        <CubeFace className="face-one"></CubeFace>
        <CubeFace className="face-two"></CubeFace>
        <CubeFace className="face-three"></CubeFace>
        <CubeFace className="face-four"></CubeFace>
        <CubeFace className="face-five"></CubeFace>
        <CubeFace className="face-six"></CubeFace>
      </CubeModel>
    </CubeContainer>
  );
}
