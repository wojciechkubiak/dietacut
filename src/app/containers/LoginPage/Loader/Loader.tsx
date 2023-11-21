import { ColorRing } from "react-loader-spinner";

const Loader: React.FC = () => (
  <div className="bg-indigo-300 flex min-h-screen flex-col items-center justify-center">
    <div className="bg-white rounded-full shadow-xl">
      <ColorRing
        visible={true}
        height="178"
        width="178"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#d1fae5", "#a7f3d0", "#6ee7b7", "#34d399", "#10b981"]}
      />
    </div>
  </div>
);

export default Loader;
