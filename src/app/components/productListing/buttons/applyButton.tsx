import PrimaryButton, { ButtonType } from "../../buttons/primaryButton";

export const ApplyFooter: React.FC<{ onApply: () => void }> = ({ onApply }) => {
  return (
    <div className="left-0 w-full p-4 bg-white border-t border-gray-300">
      <PrimaryButton
        buttonType={ButtonType.Secondary}
        className="w-full"
        onClick={onApply}
      >
        Apply
      </PrimaryButton>
    </div>
  );
};
