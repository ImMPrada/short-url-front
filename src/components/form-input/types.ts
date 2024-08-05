export interface FormInputProps {
  label: string;
  type: string;
  inputId: string;
  inputName: string;
  value: string | number;
  handleChange: (target: HTMLInputElement) => void;
  error?: string;
}
