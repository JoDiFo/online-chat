import cls from "./ErrorFallback.module.scss";

interface ErrorFallbackProps {
  errorMessage: string;
}

export const ErrorFallback = ({ errorMessage }: ErrorFallbackProps) => {
  const handleReload = () => {
    location.reload();
  };

  return (
    <div className={cls.ErrorFallback}>
      <h1>Oops... Looks like there is an error</h1>
      <p>Try to reload the page</p>
      <button onClick={handleReload}>Reload</button>
      {/* TODO: This should be only in debug mode */}
      <pre>{errorMessage}</pre>
    </div>
  );
};
