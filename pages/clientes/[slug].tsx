import React from "react";
import PageContainer from "../../src/components/container/PageContainer";
import {clientTableData, IClientTable} from "../../src/components/tables/tableData";
import {Box, Grid} from "@mui/material";
import YearlyBreakup from "../../src/components/dashboards/modern/YearlyBreakup";
import DashboardCard from "../../src/components/shared/DashboardCard";
import CustomerResponse from "../../src/components/customers/CustomerResponse";


function CustomerDetail({selectedClient}: { selectedClient: IClientTable | null }) {
    if (!selectedClient) {
        return <p>Cliente não encontrado.</p>;
    }

    return (
        <PageContainer>
            <Box>
                <Grid item xs={12} lg={12}>
                    <h1>Detalhes do Cliente: {selectedClient.name}</h1>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <YearlyBreakup/>
                    </Grid>
                    {/*<Grid item xs={6}>*/}
                    {/*    <CustomerResponse/>*/}
                    {/*</Grid>*/}
                </Grid>
            </Box>
            <Box mt={5}>
                <CustomerResponse/>
            </Box>
        </PageContainer>
    );
}

export default CustomerDetail;

export const getServerSideProps: ({params}: { params: any }) => Promise<{ props: { selectedClient: IClientTable | null } }> = async ({params}) => {
    const {slug} = params;


    // Encontre o cliente correspondente à slug na clientTableData
    const selectedClient = clientTableData.find((client) => client.slug === slug) || null;
    return {
        props: {
            selectedClient,
        },
    };
};