import styled from '@emotion/styled'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import { Accordion, AccordionDetails, AccordionSummary, TextField } from '@mui/material'
import { useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { Faction, IntelType, Season } from '../../data/intel'
import { IntelActionButtons } from '../IntelActionButtons'
import { IntelFilterMenu } from '../IntelFilterMenu'

const StyledExpandableMenu = styled.form`
    display: grid;
    justify-items: center;
    background-color: var(--clr-grey-d);
    position: sticky; 
    bottom: 0;
`

const StyledAccordion = styled(Accordion)`
    width: 100%;
    margin: 0;
    box-shadow: none;
`

export type FormInputs = {
    searchTerm: string,
    seasons: Season[],
    factions: Faction[],
    intelTypes: IntelType[],
    currentMapOnly: boolean,
    hideCollected: boolean,
};

export const IntelListMenu = () => {
    const [expand, setExpand] = useState(false);
    const toggleAcordion = () => {
        setExpand((prev) => !prev);
    };
    const methods = useForm<FormInputs>({
        defaultValues: {
            searchTerm: "",
            seasons: [],
            factions: [],
            intelTypes: [],
            currentMapOnly: false,
            hideCollected: false
        }
    });
    const { register, handleSubmit, watch, trigger, formState, formState: { isValidating } } = methods;
    const onSubmit: SubmitHandler<FormInputs> = data => {

        // TODO: set filter value in context

        console.log("SUBMIT: ", data);
    }

    watch((data, { name, type }) => handleSubmit(onSubmit)())

    // console.log(watch());

    // watch((data, { name, type }) => console.log(data, name, type))

    return (
        <FormProvider {...methods} >
            <StyledExpandableMenu onSubmit={handleSubmit(onSubmit)}>
                <StyledAccordion expanded={expand}>
                    <AccordionSummary
                        expandIcon={<FilterAltIcon onClick={toggleAcordion} />}
                        aria-controls="intel-filter"
                        id="intel-filter-header"
                    >
                        <TextField id="intelSearch" label="Search Intel" variant="outlined" {...register("searchTerm")} />
                    </AccordionSummary>
                    <AccordionDetails>
                        <IntelFilterMenu />
                    </AccordionDetails>
                </StyledAccordion>
                <IntelActionButtons />
            </StyledExpandableMenu>
        </FormProvider>
    )
}
