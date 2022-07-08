import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    input: {
      marginTop: '30px',
      marginBottom: '20px',
    },
    button: {
      color: '#fff',
      backgroundColor: '#54A387',
      borderRadius: '50px',
      textTransform: 'capitalize',
      fontWeight: 'bold',
      marginBottom: '20px',
      '&:hover': {
        color: '#54A387',
        backgroundColor: '#fff',
        borderRadius: '50px',
        border: '2px #54A387 solid',
        textTransform: 'capitalize',
        fontWeight: 'bold',
      },
    },
  }),
);
