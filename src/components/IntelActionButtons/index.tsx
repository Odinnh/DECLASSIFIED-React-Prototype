import styled from '@emotion/styled';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { useFormContext } from 'react-hook-form';

const StyledFormGroup = styled(FormGroup)`
  display: flex;
  flex-direction: row;
`

export const MenuFooter = () => {
  const { register } = useFormContext();

  return (
    <StyledFormGroup>
      <FormControlLabel {...register("currentMapOnly")} control={<Switch />} label="Current Map Only" />
      <FormControlLabel {...register("hideCollected")} control={<Switch />} label="Hide Collected" />
    </StyledFormGroup>
  )
}
