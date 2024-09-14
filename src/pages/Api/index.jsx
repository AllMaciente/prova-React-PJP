import { useEffect, useState } from "react";
import Post from "../../components/Post";
import "./styles.css";

export default function Api() {
  const [conteudo, setConteudo] = useState(<p>Carregando Posts ...</p>);

  async function carregarUser(id) {
    const reqOptions = {
      method: "GET",
      redirect: "follow",
    };

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        reqOptions
      );

      if (!response.ok) {
        throw new Error("Erro ao carregar o usuário");
      }

      const responseApi = await response.json();
      return responseApi;
    } catch (error) {
      console.error(error);
      setConteudo(<p>Erro ao carregar o Usuário</p>);
    }
  }

  async function carregarTodosOsPosts() {
    const reqOptions = {
      method: "GET",
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        reqOptions
      );

      if (!response.ok) {
        throw new Error("Erro ao carregar os posts");
      }

      const responseApi = await response.json();
      return responseApi;
    } catch (error) {
      console.error(error);
      setConteudo(<p>Erro ao carregar os Posts</p>);
    }
  }

  async function listarPosts() {
    try {
      const posts = await carregarTodosOsPosts();

      const postsComUsuarios = await Promise.all(
        posts.map(async (post) => {
          const user = await carregarUser(post.userId);
          return <Post key={post.id} dataPost={post} dataUser={user} />;
        })
      );

      return postsComUsuarios;
    } catch (error) {
      console.error(error);
      setConteudo(<p>Erro ao carregar os Posts</p>);
    }
  }

  useEffect(() => {
    async function getConteudo() {
      const posts = await listarPosts();
      setConteudo(posts);
    }

    getConteudo();
  }, []);

  return <div id="ApiPage">{conteudo}</div>;
}
