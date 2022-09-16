export type InputProps = {
  description: string;
  name: string;
  type?: React.HTMLInputTypeAttribute;
  value: string | number;
  classnameLabel?: string;
  classnameInput?: string;
  for?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
};
