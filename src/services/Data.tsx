import { useEffect, useState } from 'react'
import api from './api';

export const Data = () => {
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    api
      .get('/words.json')
      .then((response) => setWords(response.data))
      .catch((err) => {
        console.log('ops! ocorreu um erro' + err);
      })
  },[]);

  return words;
}
