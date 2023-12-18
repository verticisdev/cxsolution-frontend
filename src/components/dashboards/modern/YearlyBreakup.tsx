import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from '@mui/material/styles';
import { Grid, Stack, Typography, Avatar } from '@mui/material';
import { IconMessage2Share, IconThumbUp, IconThumbDown, IconMessage2 } from '@tabler/icons-react';

import DashboardCard from '../../shared/DashboardCard';

const YearlyBreakup = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.primary.light;
  const successlight = theme.palette.success.light;

  // chart
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
    colors: [primary, primarylight, '#F9F9FD'],
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
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
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
  const seriescolumnchart = [38, 40, 25];

  return (
      <DashboardCard title="Overview">
        <Grid container spacing={3}>
          {/* column */}
          <Grid item xs={7} sm={7}>
            <Typography variant="h3" fontWeight="700">
              Ultimas observações
            </Typography>
            <Stack direction="row" spacing={1} mt={2} alignItems="center">
              <Avatar sx={{ bgcolor: successlight, width: 27, height: 27 }}>
                <IconMessage2Share width={20} color="#39B69A" />
              </Avatar>
              <Typography variant="subtitle2" fontWeight="600">
                Precisamos atingir o nosso público alvo, VIP.
              </Typography>
            </Stack>
                <Stack spacing={3} mt={5} direction="row" justifyContent="space-between">
                  <Grid container>
                    <Grid item xs={6}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar sx={{ bgcolor: primary, width: 32, height: 32 }} variant={"rounded"}>
                        <IconThumbUp  />
                      </Avatar>
                      <Stack>
                        <Typography variant="body1" color="textSecondary">
                          2
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Likes
                        </Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                    <Grid item xs={6}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Avatar sx={{ bgcolor: theme.palette.error.main, width: 32, height: 32 }} variant={"rounded"}>
                          <IconThumbDown  />
                        </Avatar>
                        <Stack>
                          <Typography variant="body1" color="textSecondary">
                            2
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            Disikes
                          </Typography>
                        </Stack>
                      </Stack>
                    </Grid>
                  </Grid>
                </Stack>
              <Stack spacing={3} mt={1} direction="row" justifyContent="space-between">
                <Grid container>
                  <Grid item xs={6}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar sx={{ bgcolor: primary, width: 32, height: 32 }} variant={"rounded"}>
                        <IconMessage2  />
                      </Avatar>
                      <Stack>
                        <Typography variant="body1" color="textSecondary">
                          12
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Pesquisas disparadas
                        </Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid item xs={6}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar sx={{ bgcolor: primary, width: 32, height: 32 }} variant={"rounded"}>
                        <IconMessage2  />
                      </Avatar>
                      <Stack>
                        <Typography variant="body1" color="textSecondary">
                          3
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Pesquisas respondidas

                        </Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>
              </Stack>
          </Grid>
          {/* column */}
          <Grid item xs={5} sm={5}>
            <Typography sx={{ pb: 3 }} fontSize={20} fontWeight={500} textAlign={'center'}>
              Score
            </Typography>
            <Typography fontSize={56} fontWeight={700} textAlign={'center'}>
              9
            </Typography>
            <Typography sx={{ pt: 3 }} textAlign={'center'}>
              25/12/2022
            </Typography>
            {/* <Chart
                options={optionscolumnchart}
                series={seriescolumnchart}
                type="donut"
                height={150}
                width={"100%"}
            /> */}
          </Grid>
        </Grid>
      </DashboardCard>
  );
};

export default YearlyBreakup;