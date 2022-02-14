import axios from 'axios';
import React from 'react';

const apiKey = process.env.REACT_APP_MYAPIKEY;

export default async function deleteMessage(index: number): Promise<any[]> {
  let data: any[] = [];
  await axios
    .get(`http://localhost:8080/delete/message?index=${index}&apiKey=${apiKey}`)
    .then((response) => {
      data = response.data;
    });
  return data;
}
