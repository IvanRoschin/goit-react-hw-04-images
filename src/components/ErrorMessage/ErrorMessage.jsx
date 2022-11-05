import errorImage from './error.webp';
export default function ErrorMessage({ message }) {
  return (
    <div role="alert">
      <p>{message}</p>
      <img src={errorImage} width="480" alt="nothing found"></img>
    </div>
  );
}
