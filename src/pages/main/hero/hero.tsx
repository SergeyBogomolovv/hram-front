import { motion, Variants } from 'motion/react'
import { Box, Typography } from '@mui/material'

const variants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, delay: 0.2 },
  },
}

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: "url('/banner.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        aspectRatio: { xs: '1 / 1', sm: '16 / 11', md: '16 / 9', lg: '16 / 7' },
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        padding: { xs: '1.5rem', sm: '2rem', lg: '3rem' },
        boxSizing: 'border-box',
        marginBottom: '3rem',
        '::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)',
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: '100%', sm: '90%', lg: '70%' },
          position: 'relative',
          color: 'white',
          zIndex: 2,
        }}
      >
        <motion.div
          variants={variants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <Typography
            variant='h1'
            sx={{
              fontWeight: 600,
              fontSize: { xs: '1.5rem', sm: '2.25rem', lg: '3rem' },
              margin: 0,
            }}
          >
            Лучшая школа
            <br /> для лучшего мира
          </Typography>
        </motion.div>
        <motion.div
          variants={variants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <Typography
            variant='body1'
            sx={{
              fontWeight: 400,
              fontSize: { xs: '0.875rem', sm: '1.25rem' },
              marginTop: '1rem',
            }}
          >
            Здесь мы собираемся каждое воскресенье, чтобы учиться, творить и веселиться, создавая
            уникальные рукодельные проекты. Наши занятия помогут детям развить творческие
            способности, моторику рук и воображение.
          </Typography>
        </motion.div>
      </Box>
    </Box>
  )
}
