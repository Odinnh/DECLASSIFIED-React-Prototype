import styled from '@emotion/styled'
import { Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, Theme, useTheme } from '@mui/material'
import React from 'react'
import { Faction, IntelType, Season } from '../../data/intel'
import { CustomIntelFilterCheckbox } from '../CustomIntelFilterCheckbox'

const StyledIntelFilterMenu = styled.div`
/* background-color: var(--clr-grey-d); */
  display: grid;
  justify-items: center;
  grid-template-columns: 50% 50%;
  .MuiFormControl-root {
    width: 100%;
  }
  .MuiInputLabel-root {
    background-color: var(--clr-white);
  }
`

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const IntelFilterMenu = () => {
  const theme = useTheme();
  const [season, setSeason] = React.useState<string[]>([]);
  const [faction, setFaction] = React.useState<string[]>([]);

  const handleSeasonChange = (event: SelectChangeEvent<typeof season>) => {
    const {
      target: { value },
    } = event;
    setSeason(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleFactionChange = (event: SelectChangeEvent<typeof season>) => {
    const {
      target: { value },
    } = event;
    setFaction(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const seasons = Object.values(Season);
  const factions = Object.values(Faction);
  const intelTypes = Object.keys(IntelType);

  return (
    <StyledIntelFilterMenu>
      <FormControl>
        <InputLabel id="season-filter-label">Seasons</InputLabel>
        <Select
          label="Seasons"
          labelId="season-filter-label"
          id="season-filter"
          multiple
          value={season}
          onChange={handleSeasonChange}
          input={<OutlinedInput id="select-season-filter" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {seasons.map((seasonItem) => (
            <MenuItem
              key={seasonItem}
              value={seasonItem}
              style={getStyles(seasonItem, season, theme)}
            >
              {seasonItem}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="faction-filter-label">Factions</InputLabel>
        <Select
          label="Factions But longer and lets see if it changes"
          labelId="faction-filter-label"
          id="faction-filter"
          multiple
          value={faction}
          onChange={handleFactionChange}
          input={<OutlinedInput id="select-faction-filter" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {factions.map((factionItem) => (
            <MenuItem
              key={factionItem}
              value={factionItem}
              style={getStyles(factionItem, faction, theme)}
            >
              {factionItem}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {intelTypes.map((intelTypeItem) => (
        <CustomIntelFilterCheckbox
          intelType={intelTypeItem}
        />
      ))}
    </StyledIntelFilterMenu>
  )
}
