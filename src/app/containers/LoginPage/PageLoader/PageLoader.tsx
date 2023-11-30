import Loader from "@/app/components/common/Loader";

const PageLoader: React.FC = () => (
  <div className="flex min-h-screen flex-col items-center justify-center">
    <div className="bg-white rounded-full shadow-xl">
      <Loader size={248} />
    </div>
  </div>
);

export default PageLoader;
