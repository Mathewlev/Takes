export type ToggleOption<T extends string> = {
  label: string;
  value: T;
};

export type ToggleProps<T extends string> = {
  options: ToggleOption<T>[];
  value: T;
  onChange: (value: T) => void;
};
