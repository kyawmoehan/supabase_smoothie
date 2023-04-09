import { memo } from "react";

const ErrorMessage = memo(function ErrorMessage({
  message,
}: {
  message: string;
}) {
  return (
    <div>
      <p className="italic font-bold text-red-500">{message}</p>
    </div>
  );
});

export default ErrorMessage;
