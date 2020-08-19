import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import {
  FiClock,
  FiPackage,
  FiCheckCircle,
  FiXCircle,
  FiArrowLeft,
} from 'react-icons/fi';

import { Container } from './styles';

const FoodDetails = ({ match }) => {
  const [food, setFood] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchItems() {
      const currentFood = await api.get('/foods/' + match.params.id);
      setFood(currentFood.data);
      setLoaded(true);
    }

    fetchItems();
  }, []);

  return (
    <>
      {loaded && (
        <Container>
          <header
            className="food-bg"
            style={{
              backgroundImage: 'url(' + food.image + ')',
            }}
          >
            <div className="bg-filter">
              <h1 className="viitra-rest">Viitra restaurant</h1>
            </div>
          </header>
          <section className="body">
            <h1>{food.name}</h1>
            <div className="h-divider" />
            <div className="food-info">
              <div>
                <FiPackage size={32} />
                <h5>{food.quantity}</h5>
                <h6>(Qtd. Disponível)</h6>
              </div>
              <div>
                {food.available ? (
                  <>
                    <FiCheckCircle size={32} />
                    <h5 style={{ color: '#39B100' }}>Disponível</h5>
                    <h6>(Disponibilidade)</h6>
                  </>
                ) : (
                  <>
                    <FiXCircle size={32} />
                    <h5 style={{ color: '#C72828' }}>Indisponível</h5>
                    <h6>(Disponibilidade)</h6>
                  </>
                )}
              </div>
              <div>
                <FiClock size={32} />
                <h5>{food.timeToCook}</h5>
                <h6>(Tempo p/ fazer)</h6>
              </div>
            </div>

            <Link style={{ textDecoration: 'none' }} to="/">
              <button>
                <p className="text">Voltar</p>
                <div className="icon">
                  <FiArrowLeft size={24} />
                </div>
              </button>
            </Link>
          </section>
        </Container>
      )}
    </>
  );
};

export default FoodDetails;
