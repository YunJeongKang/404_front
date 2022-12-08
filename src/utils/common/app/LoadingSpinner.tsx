import ClockLoader from "react-spinners/ClockLoader";

interface LoadingSpinnerInterface {
  className?: string;
  color?: string;
}

const LoadingSpinner = ({
  className,
  color = "gray",
}: LoadingSpinnerInterface) => {
  return (
    <div
      className={`flex items-center justify-center absolute top-0 left-0 w-full h-full bg-white opacity-50 z-50 ${className}`}
    >
      <ClockLoader color={color} size="125" />
    </div>
  );
};

export default LoadingSpinner;
