import type { ValueSelectorNativeProps } from '@react-querybuilder/native';
import type { Option } from '@react-querybuilder/ts';
import { Select } from 'native-base';

export const NativeBaseValueSelector = ({
  handleOnChange,
  options,
  value,
  disabled,
}: ValueSelectorNativeProps) => (
  <Select
    isDisabled={disabled}
    selectedValue={value}
    onValueChange={v => handleOnChange(v)}>
    {(options as Option[]).map(c => (
      <Select.Item key={c.name} label={c.label} value={c.name} />
    ))}
  </Select>
);

NativeBaseValueSelector.displayName = 'NativeBaseValueSelector';
