import Checkbox from "@/app/components/common/Checkbox";
import { PropsWithChildren } from "react";

interface FormRecordProps {
  header: string;
  description?: string;
  onCheckboxChange?: VoidFunction;
  isChecked?: boolean;
}

const FormRecord: React.FC<PropsWithChildren<FormRecordProps>> = ({
  children,
  header,
  description,
  onCheckboxChange,
  isChecked,
}) => {
  return (
    <div className="w-full px-16 space-y-2">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl text-gray-500">{header}</h1>
        {onCheckboxChange ? (
          <Checkbox onChange={onCheckboxChange} isChecked={!!isChecked} />
        ) : null}
      </div>
      <div className="w-full">{children}</div>
      <h1 className="text-sm text-gray-500">{description}</h1>
    </div>
  );
};

export default FormRecord;
