import React from 'react';
import { NewReservation } from '@/components/NewReservation'
import { UpcomingReservation } from '@/components/UpcomingReservation';
import { Profile } from '@/components/Profile';
import { PageWrapper } from '@/pagewrapper';
import { Grid, GridCol } from '@mantine/core';
import sideImg from '../../assets/sidebar-background.png'
import Image from 'next/image'


export default function newReservation() {
  return (
    <PageWrapper>
    <div className='bg-home'>

      <Grid className='grid-home'>

        <GridCol span='auto' w={94} h={800}>

          <Image 
          src={sideImg}
          height={900}
          />

        </GridCol>

        <GridCol span='auto'  className='right-bg'>

          <Profile />
          <UpcomingReservation />
          <NewReservation />

        </GridCol>


      </Grid>
    </div>
    </PageWrapper>
  );
}