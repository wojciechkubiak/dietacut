import { ColorRing } from "react-loader-spinner";

interface LoaderProps {
  size: number;
}

const Loader: React.FC<LoaderProps> = ({ size }) => {
  return (
    <ColorRing
      visible={true}
      height={size}
      width={size}
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={["#fde68a", "#fcd34d", "#fbbf24", "#fcd34d", "#fde68a"]}
    />
  );
};

export default Loader;
