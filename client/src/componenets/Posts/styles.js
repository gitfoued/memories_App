import { styled } from '@mui/system';

export const StyledContainer = styled('div')({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: '8px', // You can specify the margin directly without using theme.spacing
  },
  actionDiv: {
    textAlign: 'center',
  },
});
