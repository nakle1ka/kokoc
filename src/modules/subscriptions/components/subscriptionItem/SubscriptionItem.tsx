import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface SubscriptionCheckboxProps {
  label: string;
  isChecked: boolean;
  onChange: (checked: boolean) => void;
}

const SubscriptionCheckbox: React.FC<SubscriptionCheckboxProps> = ({
  label,
  isChecked,
  onChange,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  );
};

export default SubscriptionCheckbox;
