
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Copyright from './copyright';

export const FooterWidget = () => {
  return (
    <Box sx={{ bgcolor: 'transparent', p: 6, mt: 3 }} component="footer">
      <Copyright />
    </Box>
  );
};
