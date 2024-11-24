import { useState, forwardRef } from 'react'
import styles from './accordion.module.css'

interface Props {
  question: string
  answer: string
}

const Accordion = forwardRef<HTMLDivElement, Props>(({ question, answer }, ref) => {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen(!open)

  return (
    <div
      ref={ref}
      onClick={toggle}
      className={`${styles.container} ${open ? styles.opened : styles.closed}`}
    >
      <div className={styles.header}>
        <h3 className={styles.question}>{question}</h3>
        <span className={styles.icon}>?</span>
      </div>

      <div className={`${styles.content} ${open ? styles.opened : ''}`}>
        <p className={styles.contentText}>{answer}</p>
      </div>
    </div>
  )
})

Accordion.displayName = 'Accordion'

export default Accordion
