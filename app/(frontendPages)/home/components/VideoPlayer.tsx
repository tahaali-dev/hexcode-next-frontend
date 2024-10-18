"use client";
import styled from "@emotion/styled";
import { DashedContainer } from "@/app/styledComps/containers";

const VideoPlayer = () => {
  return (
    <DashedContainer
      leftTop={false}
      leftBottom={true}
      rightTop={false}
      rightBottom={true}
      borderTopNone="none"
    >
      <VideoPlayerWrapper className="p-xs d-flex">
        <video
          src={"../public/homepage/fristfoldvid.mp4"}
          width={"100%"}
          height={"100%"}
          controls={true}
        />
      </VideoPlayerWrapper>
    </DashedContainer>
  );
};

export default VideoPlayer;

const VideoPlayerWrapper = styled.div`
  video {
    border-radius: 16px;
  }
`;
