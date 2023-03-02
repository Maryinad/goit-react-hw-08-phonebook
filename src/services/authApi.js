import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

const publicHost = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const privatHost = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export 
