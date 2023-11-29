import { useRouter } from "next/navigation";
import FormHeader from "@/app/components/headers/FormHeader";

const Header: React.FC = () => {
  const router = useRouter();

  const onBackButtonClick = () => router.push("/login");

  return (
    <FormHeader
      headerText="Rejestracja"
      onBackButtonClick={onBackButtonClick}
    ></FormHeader>
  );
};

export default Header;
