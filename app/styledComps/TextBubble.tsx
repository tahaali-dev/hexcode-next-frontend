/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import BubbleTail from "../public/homepage/bubbleTail.svg";
import { StyledImage } from "./containers";

const ChatBubble = styled.div`
  border-radius: 16px;
  background: var(--Black-black-200, #eae1e1);
  // background: red;
  width: fit-content;
  padding: 8px 16px;
  position: relative;
  z-index: 2;
  max-width: 60%;

  .bubble-tail {
    position: absolute;
    bottom: -5px;
    left: -10px;
    z-index: -1;
  }
`;

const Chat = ({ message }: any) => {
  return (
    <ChatBubble>
      <p className="to-me">{message}</p>

      <StyledImage
        src={BubbleTail}
        alt={`bubble-tail`}
        className="bubble-tail"
        width={32}
        height={32}
      />
    </ChatBubble>
  );
};

export default Chat;
