import { ColorRing } from "react-loader-spinner";

const LoginButton: React.FC = () => (
  <ColorRing
    visible={true}
    height="128"
    width="128"
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
    colors={["#ecfccb", "#a3e635", "#84cc16", "#a3e635", "#ecfccb"]}
  />
);

export default LoginButton;
