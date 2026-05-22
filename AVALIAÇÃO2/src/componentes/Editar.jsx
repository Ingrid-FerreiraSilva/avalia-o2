
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Editar() {

    // Desestruturação, para pegar apenas o componente id
    // enviado na URL ( <Link to={`/read/${d.id}`}... ):
    const {id} = useParams();

    // Estado para os valores dos campos no formulário.
    // Os dados lidos da API serão colocados aqui,
    // para exibição inicial nos campos.
    const [values, setValues] = useState( {
        name: '',
        email: '',
        phone: ''
    } );

    // Usando o id para buscar o objeto específico.
    useEffect( () => {
        axios.get('https://680924701f1a52874cdc03d7.mockapi.io/users/' + id)
            .then( res => setValues(res.data) )
            .catch( err => console.log(err) );
    }, [] );

    // Hook para navegar para a página Home:
    const navigate = useNavigate();

    // Função que efetiva a alteração dos dados na API:
    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('https://680924701f1a52874cdc03d7.mockapi.io/users/' + id, values)
            .then( res => {
                navigate('/');
            } )
            .catch( err => console.log(err) );
    }

    // A interface aqui é 99% igual a do componente Create.
    // Mas note que aqui utilizamos 'value' para colocar o valor
    // lido da API já no campo (estado values).

    return (

        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rouded'>

                <h1>Editar usuário</h1>
                <form onSubmit={handleUpdate}>
                    <div className='mb-2'>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" name='name' className='form-control'
                               placeholder='Digite o nome'
                               value={values.name}
                               onChange={ e => setValues( {...values, name: e.target.value} ) }
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name='email' className='form-control'
                               placeholder='Digite o email'
                               value={values.email}
                               onChange={ e => setValues( {...values, email: e.target.value} ) }
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="phone">Celular:</label>
                        <input type="text" name='phone' className='form-control'
                               placeholder='Digite o celular'
                               value={values.phone}
                               onChange={ e => setValues( {...values, phone: e.target.value} ) }
                        />
                    </div>
                    <button className='btn btn-success'>Atualizar</button>
                    <Link to="/" className='btn btn-primary ms-3'>Voltar</Link>
                </form>

            </div>
        </div>
    )
}

export default Editar

/*
// src/componentes/Alterar.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";

export default function Alterar() {
  const params = useParams();
  const navigate = useNavigate();

  // Se a rota vier com id (ex: /alterar/3), já preenche o campo de busca
  const [idBusca, setIdBusca] = useState(params.id || "");
  const [filme, setFilme] = useState(null);
  const [loading, setLoading] = useState(false);

  // Se a rota já tiver id, buscar automaticamente ao montar
  useEffect(() => {
    if (params.id) {
      procurarFilme(params.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  const procurarFilme = async (idToSearch) => {
    const idFinal = idToSearch || idBusca;
    if (!idFinal) {
      alert("Digite o id");
      return;
    }

    setLoading(true);
    try {
      const res = await api.get(`/filmes/${idFinal}`);
      setFilme(res.data);
    } catch (err) {
      console.error(err);
      setFilme(null);
      alert("Não achou o filme");
    } finally {
      setLoading(false);
    }
  };

  const handleAlterar = async (e) => {
    e.preventDefault();
    if (!filme) return;
    try {
      await api.put(`/filmes/${filme.id}`, {
        nome: filme.nome,
        genero: filme.genero,
        ano: filme.ano,
      });
      alert("Alterado com sucesso");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Erro ao alterar");
    }
  };

  const handleChange = (field, value) => {
    setFilme((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h2>Alterar Filme</h2>

        {/* Campo de busca por id *}
        <div className="mb-3 d-flex gap-2">
          <input
            placeholder="Digite o id"
            value={idBusca}
            onChange={(e) => setIdBusca(e.target.value)}
            className="form-control"
          />
          <button className="btn btn-primary" onClick={() => procurarFilme()}>
            {loading ? "Procurando..." : "Procurar"}
          </button>
          <button className="btn btn-secondary" onClick={() => navigate("/")}>
            Cancelar
          </button>
        </div>

        {/* Se achou, renderiza o formulário para edição *}
        {filme && (
          <form onSubmit={handleAlterar}>
            <h5>Editando id {filme.id}</h5>

            <div className="mb-2">
              <label>Nome</label>
              <input
                className="form-control"
                value={filme.nome || ""}
                onChange={(e) => handleChange("nome", e.target.value)}
                required
              />
            </div>

            <div className="mb-2">
              <label>Gênero</label>
              <input
                className="form-control"
                value={filme.genero || ""}
                onChange={(e) => handleChange("genero", e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label>Ano</label>
              <input
                className="form-control"
                value={filme.ano || ""}
                onChange={(e) => handleChange("ano", e.target.value)}
                required
              />
            </div>

            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-success">Altera</button>
              <button type="button" className="btn btn-secondary" onClick={() => navigate("/")}>Cancela</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

*/