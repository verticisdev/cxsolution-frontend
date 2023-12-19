import {Box, Button, Grid, Typography, Stack, Avatar, Divider} from "@mui/material";
import {npsData, NpsDataType} from "../tables/tableData";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import * as React from "react";
import {useTheme} from "@mui/material/styles";
import {IconThumbUp, IconThumbDown, IconMail} from "@tabler/icons-react";

function CustomerModal(props: { id: number }){
    const theme = useTheme();
    const primary = theme.palette.primary.light;
    const primarylight = theme.palette.primary.light;
    const success = theme.palette.success.main;
    const error = theme.palette.error.main;
    const rowData = npsData.find(item => item.customer_response_id === props.id);
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1200,
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 4,
        pt: 2,
        px: 4,
        pb: 3,
    };
    const leftOver = 10 - (rowData?.answer !== undefined ? rowData.answer : 0);
    
    const seriescolumnchart = [leftOver, rowData?.answer ? rowData?.answer : 0];
    const optionscolumnchart: any = {
        chart: {
            type: 'donut',
            fontFamily: "'Plus Jakarta Sans', sans-serif;",
            foreColor: '#adb0bb',
            toolbar: {
                show: false,
            },
            height: 155,
        },
        colors: [primary, success, error],
        plotOptions: {
            pie: {
                startAngle: 0,
                endAngle: 360,
                donut: {
                    size: '75%',
                    background: 'transparent',
                },
            },
        },
        tooltip: {
            enabled: false
        },
        stroke: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        responsive: [
            {
                breakpoint: 991,
                options: {
                    chart: {
                        width: 120,
                    },
                },
            },
        ],
    };

    return (
        <Box sx={{ ...style}} >
            <Stack justifyContent="center" alignItems="center" spacing={2} mt={3}>
                <Typography variant="h1" id="child-modal-title">{rowData?.message}</Typography>
                <Typography variant="h4">{rowData?.main_question}</Typography>
            </Stack>
            <Grid container spacing={2} mt={3}>
                <Grid item xs={6}>
                    <Typography sx={{ pt: 6, pb: 10 }} fontSize={70} color={rowData?.answer! > 8 ? '#289335' : (rowData?.answer! > 6 ? '#ffcf58' : '#fa3636')} fontWeight={700} textAlign={"center"}>
                        {rowData?.answer}
                    </Typography>
                    {/* <Chart
                        options={optionscolumnchart}
                        series={seriescolumnchart}
                        type="donut"
                        height={150}
                        width={"100%"}
                    /> */}
                    <Stack direction="row" flexWrap="wrap" justifyContent="start" mt={1}>
                        <Typography variant="h5" >
                            Como podemos melhorar?
                        </Typography>
                        <Typography>{rowData?.feedback}</Typography>
                    </Stack>
                    {/*<p>{rowData?.answer}</p>*/}
                </Grid>
                <Grid item xs={6}>
                    {rowData?.questions.map(question => (
                        <Stack direction="row" mt={2}>
                            <Grid container spacing={3}>
                                <Grid item xs={8}>
                                    <Typography variant="subtitle2">{ question.question}</Typography>
                                </Grid>
                                <Grid item xs={4} >
                                    <Stack direction="row">
                                            <Avatar sx={{ bgcolor: question.answer ? primary : success, width: 40, height: 40 }} variant={"rounded"}>
                                                <IconThumbUp color={question.answer ? "#000" : "#fff"} />
                                            </Avatar>
                                            <Avatar sx={{ bgcolor: question.answer ? error : primary, width: 40, height: 40 }} variant={"rounded"}>
                                                <IconThumbDown color={question.answer ? "#fff" : "#000"}  />
                                            </Avatar>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Stack>
                    ))}
                </Grid>
            </Grid>
            <Stack justifyContent="center" alignContent="center" flexDirection="row" mt={3} mb={3}>
                <Button color="primary" variant="outlined">
                    <IconMail/><Typography padding={1}> Responder o cliente</Typography>
                </Button>
            </Stack>
        </Box>
    )
}

export default CustomerModal;