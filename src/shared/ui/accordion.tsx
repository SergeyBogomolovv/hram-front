import MaterialAccorion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import { Typography } from '@mui/material'
import styles from './accordion.module.css'
import { forwardRef } from 'react'

interface Props {
  question: string
  answer: string
}

const Accordion = forwardRef<HTMLDivElement, Props>(({ question, answer }, ref) => {
  return (
    <MaterialAccorion
      ref={ref}
      disableGutters
      elevation={0}
      sx={{
        borderRadius: '12px',
        '&:before': {
          display: 'none',
        },
      }}
    >
      <AccordionSummary
        sx={{ padding: '1rem' }}
        expandIcon={<span className={styles.icon}>?</span>}
      >
        <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }} variant='h5'>
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{answer}</AccordionDetails>
    </MaterialAccorion>
  )
})

Accordion.displayName = 'Accordion'

export default Accordion
