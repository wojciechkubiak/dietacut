import { AiOutlineCheck } from "react-icons/ai";

const LoginButton: React.FC = () => (
  <button
    className="w-72 h-16 flex justify-between items-center px-20 shadow-xl text-xl bg-white border-2 rounded-2xl border-amber-300 hover:border-amber-400 text-zinc-700"
    type="submit"
  >
    <AiOutlineCheck />
    Zaloguj
  </button>
);

export default LoginButton;
