import styled from '@emotion/styled';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

const StyledFormGroup = styled(FormGroup)`
  display: flex;
  flex-direction: row;
`

export const MenuFooter = () => {
  const { control } = useFormContext();

  return (
    <StyledFormGroup>
      <Controller
        name="currentMapOnly"
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={
              <Switch
                {...field}
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
              />
            }
            label="Current Map Only"
          />
        )}
      />
      <Controller
        name="hideCollected"
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={
              <Switch
                {...field}
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
              />
            }
            label="Hide Collected"
          />
        )}
      />
    </StyledFormGroup>
  )
}
