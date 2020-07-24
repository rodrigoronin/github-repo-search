import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub.</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/50460825?s=460&u=8ea2cfd3c918884f0289713384e5d99bf9cb5941&v=4"
            alt="Rodrigo Lira"
          />
          <div>
            <strong>rodrigoronin/star-wars-profiles</strong>
            <p>
              React/Typescript app to list Star Wars characters, planets and
              spaceships.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/50460825?s=460&u=8ea2cfd3c918884f0289713384e5d99bf9cb5941&v=4"
            alt="Rodrigo Lira"
          />
          <div>
            <strong>rodrigoronin/star-wars-profiles</strong>
            <p>
              React/Typescript app to list Star Wars characters, planets and
              spaceships.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/50460825?s=460&u=8ea2cfd3c918884f0289713384e5d99bf9cb5941&v=4"
            alt="Rodrigo Lira"
          />
          <div>
            <strong>rodrigoronin/star-wars-profiles</strong>
            <p>
              React/Typescript app to list Star Wars characters, planets and
              spaceships.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
