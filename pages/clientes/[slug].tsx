import React, { useState } from "react";
import PageContainer from "../../src/components/container/PageContainer";
import {
  clientTableData,
  IClientTable,
} from "../../src/components/tables/tableData";
import { Box, Grid, Button, Breadcrumbs } from "@mui/material";
import YearlyBreakup from "../../src/components/dashboards/modern/YearlyBreakup";
import CustomerResponse from "../../src/components/customers/CustomerResponse";
import Breadcrumb from "../../src/layouts/full/shared/breadcrumb/Breadcrumb";
import BasicLayout from "../../src/components/forms/form-horizontal/BasicLayout";

function CustomerDetail({
  selectedClient,
}: {
  selectedClient: IClientTable | null;
}) {
  if (!selectedClient) {
    return <p>Cliente não encontrado.</p>;
  }
  const [view, setView] = useState<string>("general");

  const handleViewChange = (newView: string) => {
    setView(newView);
  };

  return (
    <PageContainer>
      <Box>
        <Breadcrumb title={selectedClient.name} />
        <Grid
          sx={{
            backgroundColor: "primary.light",
            borderRadius: "0 0 12px 12px",
            p: "0 25px 20px",
            marginBottom: "30px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Grid container>
            <Grid item xs={6} lg={6} display="flex" alignItems="center" gap={2}>
              <Button
                onClick={() => handleViewChange("general")}
                variant={view === "general" ? "contained" : "outlined"}
              >
                Visão geral
              </Button>
              <Button
                onClick={() => handleViewChange("info")}
                variant={view === "info" ? "contained" : "outlined"}
              >
                Informações
              </Button>
            </Grid>
            <Grid
              item
              xs={6}
              lg={6}
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent="flex-end"
            >
              {selectedClient.status === "active" ? (
                <>
                  <Button variant="outlined">Excluir cliente</Button>
                  <Button variant="outlined">Desativar cliente</Button>
                </>
              ) : selectedClient.status === "inactive" ? (
                <>
                  <Button variant="outlined">Ativar cliente</Button>
                  <Button variant="outlined">Excluir cliente</Button>
                </>
              ) : (
                <>
                  <Button variant="outlined">Ativar cliente</Button>
                  <Button variant="outlined">Desativar cliente</Button>
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
        {view === "general" ? (
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <YearlyBreakup />
            </Grid>
          </Grid>
        ) : (
          ""
        )}
      </Box>
      <Box mt={5}>
        {view === "general" ? (
          <CustomerResponse />
        ) : (
          <BasicLayout selectedClient={selectedClient} />
        )}
      </Box>
    </PageContainer>
  );
}

export default CustomerDetail;

export const getServerSideProps: ({
  params,
}: {
  params: any;
}) => Promise<{ props: { selectedClient: IClientTable | null } }> = async ({
  params,
}) => {
  const { slug } = params;

  // Encontre o cliente correspondente à slug na clientTableData
  const selectedClient =
    clientTableData.find((client) => client.slug === slug) || null;
  return {
    props: {
      selectedClient,
    },
  };
};
