const ErrorMessage = ({ message = "Something went wrong." }) => (
  <div className="flex justify-center items-center h-48">
    <p className="text-red-500 text-lg font-semibold">{message}</p>
  </div>
);

export default ErrorMessage;