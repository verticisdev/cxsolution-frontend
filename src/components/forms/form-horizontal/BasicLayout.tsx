import { Grid, InputAdornment, Button } from "@mui/material";
import React from "react";
import CustomFormLabel from "../theme-elements/CustomFormLabel";
import CustomTextField from "../theme-elements/CustomTextField";
import CustomOutlinedInput from "../theme-elements/CustomOutlinedInput";
import { IClientTable } from "../../tables/tableData";
const BasicLayout = ({
  selectedClient,
}: {
  selectedClient: IClientTable | null;
}) => {
  return (
    <div>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Basic Layout */}
      {/* ------------------------------------------------------------------------------------------------ */}
      <Grid container spacing={3}>
        {/* 1 */}
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel
            htmlFor="bl-name"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
          >
            Nome do cliente
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomTextField
            id="bl-name"
            placeholder={selectedClient?.name}
            fullWidth
          />
        </Grid>
        {/* 2 */}
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel
            htmlFor="bl-company"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
          >
            Telefones
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomTextField
            id="bl-company"
            placeholder="99 99999-9999"
            fullWidth
          />
        </Grid>
        {/* 3 */}
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel
            htmlFor="bl-email"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
          >
            E-mails
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomOutlinedInput id="bl-email" placeholder="john.deo" fullWidth />
        </Grid>
        {/* 4 */}
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel
            htmlFor="bl-phone"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
          >
            Responsável
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomTextField id="bl-phone" fullWidth />
        </Grid>
        {/* 5 */}
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel
            htmlFor="bl-message"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
          >
            Observações
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomTextField
            id="bl-message"
            placeholder="Observações para o cliente"
            multiline
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} sm={9}>
          <Button variant="contained" color="primary">
            Salvar
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default BasicLayout;
