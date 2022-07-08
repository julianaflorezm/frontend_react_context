import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: '10px',
      paddingRight: '10px',
    },
    title: {
      marginTop: '40px',
      marginBottom: '20px',
      fontWeight: 800,
      lineHeight: 1.1,
      fontSize: '1.5rem',
      letterSpacing: '0',
      opacity: 1,
      color: '#54A387',
    },
    description: {
      marginTop: '10px',
      marginBottom: '20px',
      fontWeight: 500,
      lineHeight: 1.1,
      fontSize: '1rem',
      letterSpacing: '0',
      opacity: 1,
    },
  }),
);
