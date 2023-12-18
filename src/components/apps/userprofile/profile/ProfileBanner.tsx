import {
  Grid,
  Box,
  Typography,
  Avatar,
  Stack,
  CardMedia,
  styled,
} from '@mui/material';
import {
  IconCalendarStats,
  IconSend,
  IconChecklist
} from '@tabler/icons-react';
import BlankCard from '../../../shared/BlankCard';

const ProfileBanner = () => {
  const ProfileImage = styled(Box)(() => ({
    backgroundImage: 'linear-gradient(#50b2fc,#f44c66)',
    borderRadius: '50%',
    width: '110px',
    height: '110px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  return (
    <>
      <BlankCard>
        <CardMedia component="img" image={'/images/backgrounds/profilebg.jpg'} alt={"profilecover"} width="100%" height="190px" />
        <Grid container spacing={0} justifyContent="center" alignItems="center">
          {/* Post | Followers | Following */}
          <Grid
            item
            lg={4}
            sm={12}
            md={5}
            xs={12}
            sx={{
              order: {
                xs: '2',
                sm: '2',
                lg: '1',
              },
            }}
          >
            <Stack direction="row" textAlign="center" alignItems="center" justifyContent="center" gap={4} m={3}>
              <Box>
                <Typography color="text.secondary">
                  <IconChecklist width="20" />
                </Typography>
                <Typography variant="h4" fontSize={18} fontWeight="600">
                  Premium
                </Typography>
                <Typography color="textSecondary" variant="h6" fontWeight={400}>
                  Plano
                </Typography>
              </Box>
              <Box>
                <Typography color="text.secondary">
                  <IconSend width="20" />
                </Typography>
                <Typography variant="h4" fontSize={18} fontWeight="600">
                  5/100
                </Typography>
                <Typography color="textSecondary" variant="h6" fontWeight={400}>
                  Disparos por ciclo
                </Typography>
              </Box>
              <Box>
                <Typography color="text.secondary">
                  <IconCalendarStats width="20" />
                </Typography>
                <Typography variant="h4" fontSize={18} fontWeight="600">
                  10/09
                </Typography>
                <Typography color="textSecondary" variant="h6" fontWeight={400}>
                  Próxima renovação
                </Typography>
              </Box>
            </Stack>
          </Grid>
          {/* about profile */}
          <Grid
            item
            lg={4}
            sm={12}
            xs={12}
            sx={{
              order: {
                xs: '1',
                sm: '1',
                lg: '2',
              },
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              textAlign="center"
              justifyContent="center"
              sx={{
                mt: '-85px',
              }}
            >
              <Box>
                <ProfileImage>
                  <Avatar
                    src={"/images/profile/user-2.jpg"}
                    alt="profileImage"
                    sx={{
                      borderRadius: '50%',
                      width: '100px',
                      height: '100px',
                      border: '4px solid #fff',
                    }}
                  />
                </ProfileImage>
                <Box mt={1}>
                  <Typography fontWeight={600} variant="h5">
                    Julia Roberts
                  </Typography>
                  {/* <Typography color="textSecondary" variant="h6" fontWeight={400}>
                    Project Manager
                  </Typography> */}
                </Box>
              </Box>
            </Box>
          </Grid>
          {/* friends following buttons */}
          <Grid
            item
            lg={4}
            sm={12}
            xs={12}
            sx={{
              order: {
                xs: '3',
                sm: '3',
                lg: '3',
              },
            }}
          >
            {/* <Stack direction={'row'} gap={2} alignItems="center" justifyContent="center" my={2}>
              <Fab size="small" color="primary" sx={{ backgroundColor: '#1877F2' }}>
                <IconBrandFacebook size="16" />
              </Fab>
              <Fab size="small" color="primary" sx={{ backgroundColor: '#1DA1F2' }}>
                <IconBrandTwitter size="18" />
              </Fab>
              <Fab size="small" color="success" sx={{ backgroundColor: '#EA4C89' }}>
                <IconBrandDribbble size="18" />
              </Fab>
              <Fab size="small" color="error" sx={{ backgroundColor: '#CD201F' }}>
                <IconBrandYoutube size="18" />
              </Fab>
              <Button color="primary" variant="contained">
                Add To Story
              </Button>
            </Stack> */}
          </Grid>
        </Grid>
        {/**TabbingPart**/}
        {/* <ProfileTab /> */}
        {/* <UserProfile /> */}
      </BlankCard>
    </>
  );
};

export default ProfileBanner;
