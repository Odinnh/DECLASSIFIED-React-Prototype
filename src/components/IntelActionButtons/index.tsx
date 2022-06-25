import styled from '@emotion/styled'
import { FormGroup, FormControlLabel, Switch } from '@mui/material'

const StyledFormGroup = styled(FormGroup)`
  display: flex;
  flex-direction: row;
`

export const IntelActionButtons = () => {
  return (
    <StyledFormGroup>
      <FormControlLabel control={<Switch />} label="Current Map Only" />
      <FormControlLabel control={<Switch />} label="Hide Collected" />
    </StyledFormGroup>
  )
}
