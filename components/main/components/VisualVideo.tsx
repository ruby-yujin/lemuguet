import React from "react";
import styled from "styled-components";

function VisualVideo() {
  return (
    <Container>
      <VideoWrap>
        <video autoPlay loop muted playsInline>
          <source src={`/assets/img/main/visual_video.mp4`} />
        </video>
      </VideoWrap>
    </Container>
  );
}
const Container = styled.div`
  overflow: hidden;
`;

const VideoWrap = styled.div`
  object-fit: cover;
  object-position: center;
  height: 500px;
  > video {
    height: 100%;
  }
`;

export default VisualVideo;
