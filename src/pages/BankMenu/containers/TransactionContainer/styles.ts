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
      marginTop: '50px',
    },
    containerText: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: '10px',
      paddingRight: '10px',
      marginTop: '100px',
    },
    containerImg: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '50px',
    },
    img: {
      width: '50%',
      height: '50%',
    },
    title: {
      marginTop: '40px',
      marginBottom: '20px',
      fontWeight: 800,
      lineHeight: 1.1,
      fontSize: '1.7rem',
      letterSpacing: '0',
      opacity: 1,
      color: '#000',
    },
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
      '&:hover': {
        color: '#54A387',
        backgroundColor: '#fff',
        borderRadius: '50px',
        border: '2px #54A387 solid',
        textTransform: 'capitalize',
        fontWeight: 'bold',
      },
    },
    buttonReg: {
      color: '#54A387',
      backgroundColor: '#fff',
      borderRadius: '50px',
      border: '2px #54A387 solid',
      textTransform: 'capitalize',
      fontWeight: 'bold',
      '&:hover': {
        color: '#fff',
        backgroundColor: '#54A387',
        borderRadius: '50px',
        textTransform: 'capitalize',
        fontWeight: 'bold',
      },
    },
    position: {
      float: 'right',
    },
    success: {
      fontSize: '1rem',
      color: '#54A387',
    },
    error: {
      fontSize: '1rem',
      color: 'red',
    },
  }),
);
