import React from 'react';

import ProfilePage from '../ProfilePage'
import { ContainerMain, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, SearchIcon, BellIcon, EmailIcon } from './styles';

const Main: React.FC = () => {
  return (
    <ContainerMain>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Lucas Roberto</strong>
          <span>612 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage/>

      <BottomMenu>
        <HomeIcon className='active' />
        <SearchIcon/>
        <BellIcon/>
        <EmailIcon/>
      </BottomMenu>
    </ContainerMain>
  );
}

export default Main;