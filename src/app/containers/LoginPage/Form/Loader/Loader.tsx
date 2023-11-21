import { ColorRing } from "react-loader-spinner";

const LoginButton: React.FC = () => (
  <ColorRing
    visible={true}
    height="128"
    width="128"
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
    colors={["#d1fae5", "#a7f3d0", "#6ee7b7", "#34d399", "#10b981"]}
  />
);

export default LoginButton;
