import { MessageContainer, MessageTitle } from './IdleMessage.stylezed';

export default function ErrorMessage({ message }) {
  return (
    <MessageContainer role="alert">
      <MessageTitle>{message}</MessageTitle>
    </MessageContainer>
  );
}
