import { TextField } from '@mui/material'
import React from 'react'

export const ExpandableMenu = ({ children }) => {
    return (
        <div>
            <div>ExpandableMenu</div>
            {/* <TextField id="intelSearch" label="Outlined" variant="outlined" /> */}
            {children}
        </div>
    )
}
