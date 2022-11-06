import errorImage from './error.webp';
import {
  MessageContainer,
  MessageTitle,
  MessageImage,
} from './ErrorMessage.stylized';

export default function ErrorMessage({ message }) {
  return (
    <MessageContainer role="alert">
      <MessageImage
        src={errorImage}
        width="480"
        alt="nothing found"
      ></MessageImage>
      <MessageTitle>{message}</MessageTitle>
    </MessageContainer>
  );
}
