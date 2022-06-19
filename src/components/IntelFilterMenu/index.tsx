import styled from '@emotion/styled'
import { Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material'
import React from 'react'
import { Season } from '../../data/intel'

const StyledIntelFilterMenu = styled.div`
  /* background-color: var(--clr-grey-d); */
`

const StyledFormControl = styled(FormControl)`
  display: grid;
  justify-items: center;
  grid-template-columns: 50% 50%;
  div {
    width: 100%;
  }
`

export const IntelFilterMenu = () => {
  const [season, setSeason] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof season>) => {
    const {
      target: { value },
    } = event;
    setSeason(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const seasons = Object.values(Season);

  return (
    <StyledIntelFilterMenu>
      <StyledFormControl>
        <div>
          <InputLabel id="season-filter-label">Seasons</InputLabel>
          <Select
            labelId="season-filter-label"
            id="season-filter"
            multiple
            value={season}
            onChange={handleChange}
            input={<OutlinedInput id="select-season-filter" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          /* MenuProps={MenuProps} */
          >
            {seasons.map((season) => (
              <MenuItem
                key={season}
                value={season}
              /* style={getStyles(season, season, theme)} */
              >
                {season}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div>
          <InputLabel id="faction-filter-label">Factions</InputLabel>
          <Select
            labelId="faction-filter-label"
            id="faction-filter"
            multiple
            value={season}
            onChange={handleChange}
            input={<OutlinedInput id="select-faction-filter" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          /* MenuProps={MenuProps} */
          >
            {seasons.map((season) => (
              <MenuItem
                key={season}
                value={season}
              /* style={getStyles(season, season, theme)} */
              >
                {season}
              </MenuItem>
            ))}
          </Select>
        </div>
      </StyledFormControl>
    </StyledIntelFilterMenu>
  )
}
