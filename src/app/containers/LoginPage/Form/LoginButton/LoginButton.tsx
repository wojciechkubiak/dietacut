import { AiOutlineCheck } from "react-icons/ai";

const LoginButton: React.FC = () => (
  <button
    className="w-72 h-16 flex justify-between items-center px-20 shadow-xl text-xl rounded-lg bg-white hover:text-gray-700  border-2 border-orange-100 hover:border-orange-200 text-gray-600"
    type="submit"
  >
    <AiOutlineCheck />
    Zaloguj
  </button>
);

export default LoginButton;
