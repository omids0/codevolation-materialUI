import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function MuiTypography() {
  return (
    <Stack>
      <Typography variant="h6" gutterBottom>test typo</Typography>
      <Typography variant="body1">test typo</Typography>
      <Typography variant="subtitle1">test typo</Typography>
    </Stack>
  )
}
