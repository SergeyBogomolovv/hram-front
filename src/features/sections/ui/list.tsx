import { useGetSections } from '../api/use-get-sections';
import { Box, Typography } from '@mui/material';
import { SectionCard } from './card';

export function SectionsList() {
  const { data: sections, isLoading, isError } = useGetSections();

  if (isLoading) {
    return <Typography>Загрузка данных, подождите...</Typography>;
  }

  if (isError) {
    return (
      <Typography>
        Ошибка при загрузке секций, повторите попытку позже
      </Typography>
    );
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
        }}
      >
        {sections?.map((section) => (
          <SectionCard key={section.id} {...section} />
        ))}
      </Box>
    </Box>
  );
}
