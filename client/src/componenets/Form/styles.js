import { styled } from '@mui/system';

export const StyledForm = styled('div')({
  root: {
    '& .MuiTextField-root': {
      margin: '8px', // You can replace this with your desired margin
    },
  },
  paper: {
    padding: '16px', // You can replace this with your desired padding
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: '10px', // You can replace this with your desired marginBottom
  },
});
