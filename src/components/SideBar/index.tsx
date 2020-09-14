import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';

import FollowSugestion from '../FollowSugestion';

import News from '../News';

import { 
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body
 } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput  placeholder="Buscar no Twitter"/>
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List 
            title="Talvez você curta"
            elements={[
              <FollowSugestion 
                name="Eiva Tiago"
                nickname="@eivatiago"
              />,
              <FollowSugestion 
              name="João Zupirolli"
              nickname="@joaozupirolli"
              />,
              <FollowSugestion 
              name="Pedro Zupirolli"
              nickname="@pedrozupirolli"
              />,
              <FollowSugestion 
              name="João Francisco B Zupirolli"
              nickname="@joaofbzupirolli"
              />
            ]}
          />

          <List 
            title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
          <List 
            title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
          <List 
            title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
        </Body>
      </StickyBox>

    </Container>
  );
};

export default SideBar;
