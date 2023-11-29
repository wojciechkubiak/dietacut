import { useRouter } from "next/navigation";
import FormHeader from "@/app/components/headers/FormHeader";

const Header: React.FC = () => {
  const router = useRouter();

  const navigateRegister = () => router.push("/register");

  return (
    <FormHeader headerText="Logowanie">
      <p className="text-inter text-md text-gray-600 text-center mt-2 mb-12">
        Nie masz konta?{" "}
        <span
          onClick={navigateRegister}
          className="text-amber-400 cursor-pointer"
        >
          Stwórz!
        </span>
      </p>
    </FormHeader>
  );
};

export default Header;
