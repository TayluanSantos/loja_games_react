import axios from "axios";

// Criando a conexão com a API
const api = axios.create({
    baseURL : "https://lojagames-nest-ypqr.onrender.com",
})

// Função que envia requisições do tipo get
export const buscar = async (url:string,setDados : Function) => {
    const resposta = await api.get(url)
    setDados(resposta.data);
}

// Função que envia requisições do tipo post
export const cadastrar = async (url:string,dados:Object,setDados : Function) => {
    const resposta = await api.post(url,dados)
    setDados(resposta.data);
}


// Função que envia requisições do tipo put
export const atualizar = async (url:string,dados:Object,setDados : Function) => {
    const resposta = await api.put(url,dados)
    setDados(resposta.data);
}

// Função que envia requisições do tipo delete
export const deletar = async (url:string) => {
     await api.delete(url)
}