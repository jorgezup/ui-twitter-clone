import React from 'react';

import Feed from '../Feed';

import { 
  Container, 
  Banner, 
  Avatar, 
  ProfileData, 
  LocationIcon, 
  CakeIcon, 
  Followage, 
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Jorge Zupirolli</h1>
        <h2>@jorgezup</h2>

        <p>
          Developer at <a href="http://google.com">Home</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Campo Grande, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 27 de agosto de 1991
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>45</strong>
          </span>
          <span>
            <strong>987 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  )
}

export default ProfilePage