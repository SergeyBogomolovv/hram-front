import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

type Props = {
  image: string;
  title: string;
  content: string;
  teacher: string;
};

export function SectionCard({ image, teacher, title, content }: Props) {
  return (
    <Card
      sx={{
        flex: '1 1 calc(33% - 24px)',
        minWidth: '280px',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {content}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Преподаватель: {teacher}
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
        <FormControlLabel control={<Checkbox />} label="Приду" />
      </Box>
    </Card>
  );
}
