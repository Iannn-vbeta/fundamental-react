import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError() as { statusText?: string, message?: string };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
      <p className="text-lg text-gray-600">Something went wrong.</p>
      <p className="text-base text-gray-500 mt-2">{error.statusText || error.message}</p>
    </div>
  );
}

export default ErrorPage;