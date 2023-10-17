import { Grid } from '@mui/material';
import PageContainer from '../../../../src/components/container/PageContainer';

import ProfileBanner from '../../../../src/components/apps/userprofile/profile/ProfileBanner';
import Form from '../../../../src/components/apps/userprofile/profile/Form';

const UserProfile = () => {
  return (
    <PageContainer>

      <Grid container spacing={3}>
        <Grid item sm={12}>
          <ProfileBanner />
        </Grid>
        <Grid item sm={12} lg={12} xs={12}>
          <Form />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default UserProfile;
