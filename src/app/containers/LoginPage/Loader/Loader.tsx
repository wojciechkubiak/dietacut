import { ColorRing } from "react-loader-spinner";

const Loader: React.FC = () => (
  <div className="flex min-h-screen flex-col items-center justify-center">
    <div className="bg-white rounded-full shadow-xl">
      <ColorRing
        visible={true}
        height="248"
        width="248"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#ecfccb", "#a3e635", "#84cc16", "#a3e635", "#ecfccb"]}
      />
    </div>
  </div>
);

export default Loader;
