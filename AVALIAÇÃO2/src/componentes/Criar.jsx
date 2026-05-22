
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Criar() {

    const [values, setValues] = useState( {
        name: '',
        email: '',
        phone: ''
    } );

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://680924701f1a52874cdc03d7.mockapi.io/users', values)
            .then( res => {
                console.log(res);
                navigate('/');
            } )
            .catch( err => console.log(err) );
    }

    return (

        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rouded'>
                <h1>Adicionar usuário</h1>

                <form onSubmit={handleSubmit}>

                    <div className='mb-2'>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" name='name' className='form-control'
                               placeholder='Digite o nome'
                               onChange={ e => setValues( {...values, name: e.target.value} ) }
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name='email' className='form-control'
                               placeholder='Digite o email'
                               onChange={ e => setValues( {...values, email: e.target.value} ) }
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="phone">Celular:</label>
                        <input type="text" name='phone' className='form-control'
                               placeholder='Digite o celular'
                               onChange={ e => setValues( {...values, phone: e.target.value} ) }
                        />
                    </div>
                    <button className='btn btn-success'>Enviar</button>
                    <Link to="/" className='btn btn-primary ms-3'>Voltar</Link>

                </form>
            </div>
        </div>
    )
}

export default Criar;

/* 
// src/componentes/Criar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function Criar() {
  const [values, setValues] = useState({
    nome: "",
    genero: "",
    ano: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.post("/filmes", values);
      alert("Filme criado com sucesso!");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Erro ao criar o filme");
    }
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h2>Criar Filme</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label>Nome:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Digite o nome"
              value={values.nome}
              onChange={(e) => setValues({ ...values, nome: e.target.value })}
              required
            />
          </div>

          <div className="mb-2">
            <label>Gênero:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Digite o gênero"
              value={values.genero}
              onChange={(e) => setValues({ ...values, genero: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label>Ano:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Digite o ano"
              value={values.ano}
              onChange={(e) => setValues({ ...values, ano: e.target.value })}
              required
            />
          </div>

          <div className="d-flex">
            <button type="submit" className="btn btn-success">Criar</button>
            <button type="button" className="btn btn-secondary ms-3" onClick={() => navigate("/")}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

*/

