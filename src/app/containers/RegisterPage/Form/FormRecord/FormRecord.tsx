import { PropsWithChildren } from "react";

interface FormRecordProps {
  header: string;
  description?: string;
}

const FormRecord: React.FC<PropsWithChildren<FormRecordProps>> = ({
  children,
  header,
  description,
}) => {
  return (
    <div className="w-full px-16 space-y-2">
      <h1 className="text-xl text-gray-500">{header}</h1>
      <div className="w-full">{children}</div>
      <h1 className="text-sm text-gray-500">{description}</h1>
    </div>
  );
};

export default FormRecord;
