import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      marginTop: '15px',
      borderRadius: '5px',
      boxShadow: '2.5px 2.5px 5px #54A387',
    },
    containerSelected: {
      backgroundColor: '#54A387',
      marginTop: '15px',
      borderRadius: '5px',
      boxShadow: '2.5px 2.5px 5px black',
    },
    position: {
      placeContent: 'center',
      alignItems: 'center',
      display: 'flex',
    },
    link: {
      color: '#54A387',
    },
    linkSelected: {
      color: 'black',
    },
  }),
);
