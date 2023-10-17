import React from "react";
import PageContainer from "../../src/components/container/PageContainer";
import Breadcrumb from "../../src/layouts/full/shared/breadcrumb/Breadcrumb";
import { Grid } from "@mui/material";
import ParentCard from "../../src/components/shared/ParentCard";
import QuestionsLayout from "../../src/components/forms/form-vertical/QuestionsLayout";

function SendSearch() {
  const buttons = [
    {
      id: 1,
      title: "Enviar pesquisa para WhatsApp",
    },
    {
      id: 2,
      title: "Enviar Pesquisa",
    },
  ];
  return (
    <PageContainer>
      <Breadcrumb title="Pesquisas" buttons={buttons} />
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <ParentCard title="Perguntas">
            <QuestionsLayout />
          </ParentCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
}

export default SendSearch;
