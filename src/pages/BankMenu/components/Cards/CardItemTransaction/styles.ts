import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    origen: {
      color: 'red',
    },
    destino: {
      color: 'green',
    },
  }),
);
