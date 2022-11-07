import errorImage from './error.webp';

import {
  MessageContainer,
  MessageTitle,
  MessageImage,
} from './Message.stylized';

export default function Message({ message, status }) {
  return (
    <>
      <MessageContainer role="alert">
        {status === 'idle' && <MessageTitle>{message}</MessageTitle>}
        {status === 'resolved' && <MessageTitle>{message}</MessageTitle>}
        {status === 'rejected' && (
          <MessageImage
            src={errorImage}
            width="480"
            alt="nothing found"
          ></MessageImage>
        )}
        {status === 'rejected' && <MessageTitle>{message}</MessageTitle>}
      </MessageContainer>
    </>
  );
}
