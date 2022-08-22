import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';

export function Login(){
    return (
      <div className='container-login'>
        <h1>Faça login:</h1>
        <form>
          <input type='text'
            placeholder='Email'
          />
          <input type='password'
            placeholder='Password'
          />
          <button className='button' type='submit'>Logar</button>
        </form>
      </div>
    )
}