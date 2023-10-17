import { useEffect, useState } from 'react';
import { Grid, TextField, Divider, Button, Stack } from '@mui/material';
import { useDispatch } from '../../../../store/Store';
import { fetchPosts } from '../../../../store/apps/userProfile/UserProfileSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [companyName, setCompanyName] = useState("");

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Grid container spacing={3}>
      <Grid item container spacing={2}>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <TextField
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            margin="none"
            id="company_name"
            label="Nome da empresa"
            type="text"
            size="small"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <TextField
            // value={}
            onChange={(e) => {}}
            margin="none"
            id="sender_email"
            label="E-mail de contato"
            type="text"
            size="small"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
      <Divider />
      <Grid item container spacing={2}>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <TextField
            value=""
            onChange={(e) => {}}
            margin="none"
            id="user_name"
            label="Nome do usuário"
            type="text"
            size="small"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <TextField
            // value={}
            onChange={(e) => {}}
            margin="none"
            id="user_email"
            label="E-mail do usuário"
            type="text"
            size="small"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <TextField
            id="user_password"
            value=""
            onChange={(e) => {}}
            margin="none"
            label="Senha do usuário"
            type="password"
            size="small"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <TextField
            id="user_password_confirm"
            value=""
            onChange={(e) => {}}
            margin="none"
            label="Confirme a senha do usuário"
            type="password"
            size="small"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid item width="100%"> 
        <Stack direction="row" alignItems="center" spacing={2} justifyContent="flex-end">
          <Button color="primary" variant="contained">
            Salvar
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Form;
