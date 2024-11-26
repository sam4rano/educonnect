export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="flex justify-center items-center space-x-2">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
