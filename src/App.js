import Collections from './pages/collection/index';
import Grid from '@material-ui/core/Grid'


export default function App() {

  return (
    <>
      <Grid container>
        <Grid item>
          <Collections />
        </Grid>
      </Grid>
    </>
  );
}
