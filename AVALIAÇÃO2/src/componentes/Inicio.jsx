
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Inicio() {

    const [data, setData] = useState([]);

    useEffect( () => {
        axios.get('https://680924701f1a52874cdc03d7.mockapi.io/users')
            .then( res => setData(res.data) )
            .catch( err => console.log(err) );
    }, [] );

    // Função para apagar um registro:
    const handleDelete = (id) => {

        // Teria formas melhores de pegar essa confirmação,
        // por exemplo, usando um componente pronto da biblioteca 
        // Material-ui.... mas pra essa aula tá bom...
        const confirm = window.confirm("Quer mesmo apagar este usuário?");

        if(confirm) {

            // Apaga na API, e, se com sucesso, apaga no estado data.
            // Isso forçará nova renderização, para eliminar o registro da tabela.

            axios.delete(`https://680924701f1a52874cdc03d7.mockapi.io/users/${id}`)
                .then(() => {
                    // Usa filter para só copiar os registros diferentes do id que apagamos.
                    // Usa função dentro do setData, para garantir que estamos trabalhando
                    // com o último estado disponível.
                    setData( prevData => prevData.filter(user => user.id !== id) );
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className='d-flex flex-column justify-content-center 
                    align-items-center bg-light vh-100'>

            <h1>Lista de Usuários</h1>

            <div className='w-75 rounded bg-white border shadow p-4'>

                <div className='d-flex justify-content-end'>
                    <Link to="/criar" className='btn btn-success'>NOVO</Link>
                </div>

                <table className='table table-striped'>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Celular</th>
                        <th>Ação</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.map( (d,i) => (
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.phone}</td>
                                <td>
                                    <Link to={`/ler/${d.id}`} className='btn btn-sm btn-info me-2'>Ler</Link>
                                    <Link to={`/atualizar/${d.id}`} className='btn btn-sm btn-primary me-2'>Editar</Link>
                                    <button onClick={ e => handleDelete(d.id) } className='btn btn-sm btn-danger'>Apagar</button>
                                </td>
                            </tr>
                        ) )
                    }
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Inicio

/* 
// src/componentes/Inicio.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api"; // usa a instância central do Axios

export default function Inicio() {
  const [filmes, setFilmes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/filmes")
      .then(res => setFilmes(res.data))
      .catch(err => {
        console.error(err);
        alert("Erro ao carregar filmes");
      });
  }, []);

  const handleDelete = (id) => {
    const confirmar = window.confirm("Quer mesmo apagar este filme?");
    if (!confirmar) return;

    api.delete(`/filmes/${id}`)
      .then(() => {
        setFilmes(prev => prev.filter(f => f.id !== id));
      })
      .catch(err => {
        console.error(err);
        alert("Erro ao apagar o filme");
      });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1>CATÁLOGO DE FILMES</h1>

      <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end mb-3">
          <Link to="/criar" className="btn btn-success">CRIAR</Link>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Gênero</th>
              <th>Ano</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {filmes.map((f) => (
              <tr key={f.id}>
                <td>{f.id}</td>
                <td>
                  <Link to={`/ler/${f.id}`} className="text-decoration-none">
                    {f.nome}
                  </Link>
                </td>
                <td>{f.genero}</td>
                <td>{f.ano}</td>
                <td>
                  <Link to={`/ler/${f.id}`} className="btn btn-sm btn-info me-2">Ler</Link>
                  <Link to={`/alterar/${f.id}`} className="btn btn-sm btn-primary me-2">Editar</Link>
                  <button onClick={() => handleDelete(f.id)} className="btn btn-sm btn-danger">Apagar</button>
                </td>
              </tr>
            ))}
            {filmes.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center">Nenhum filme cadastrado</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

*/