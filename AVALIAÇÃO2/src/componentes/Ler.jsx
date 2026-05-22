
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Ler() {

    const [data, setData] = useState([]);

    // Desestruturação, para pegar apenas o componente id
    // enviado na URL ( <Link to={`/read/${d.id}`}... ):
    const {id} = useParams();

    // Usando o id para buscar o objeto específico.
    // Array de dependência vazio: só vai executar uma vez,
    // na renderização inicial do componente.
    // Nao será chamado em renderizações subsequentes do componente.

    useEffect( () => {
        axios.get('https://680924701f1a52874cdc03d7.mockapi.io/users/' + id)
            .then( res => setData(res.data) )
            .catch( err => console.log(err) );
    }, [] );

    return (

        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rouded'>

                <h3>Detalhes do usuário</h3>

                <div className='mb-2'>
                    <strong>Nome: {data.name}</strong>
                </div>
                <div className='mb-2'>
                    <strong>Email: {data.email}</strong>
                </div>
                <div className='mb-3'>
                    <strong>Celular: {data.phone}</strong>
                </div>

                <Link to={`/editar/${id}`} className='btn btn-success'>Editar</Link>
                <Link to="/" className='btn btn-primary ms-3'>Voltar</Link>

            </div>
        </div>
    )
}

export default Ler;

/* 
// src/componentes/Ler.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../api";

export default function Ler() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      alert("Id inválido");
      navigate("/");
      return;
    }

    setLoading(true);
    api.get(`/filmes/${id}`)
      .then(res => {
        setFilme(res.data);
      })
      .catch(err => {
        console.error(err);
        alert("Filme não encontrado");
        navigate("/");
      })
      .finally(() => setLoading(false));
  }, [id, navigate]);

  if (loading) return <div className="d-flex justify-content-center align-items-center vh-100">Carregando...</div>;
  if (!filme) return null;

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h3>Detalhes do Filme</h3>

        <div className="mb-2"><strong>Id:</strong> {filme.id}</div>
        <div className="mb-2"><strong>Nome:</strong> {filme.nome}</div>
        <div className="mb-2"><strong>Gênero:</strong> {filme.genero}</div>
        <div className="mb-3"><strong>Ano:</strong> {filme.ano}</div>

        <div className="d-flex">
          <Link to={`/alterar/${filme.id}`} className="btn btn-success me-2">Editar</Link>
          <button className="btn btn-secondary" onClick={() => navigate("/")}>CANCELAR</button>
        </div>
      </div>
    </div>
  );
}

*/