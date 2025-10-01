# 📅 Fácil Consulta - Agendamento Simplificado

Este projeto foi desenvolvido como parte de um teste técnico com o objetivo de **simular um sistema simples de
agendamento de consultas médicas**.

## 🎯 Finalidade do Projeto

A aplicação permite que pacientes visualizem médicos disponíveis e agendem consultas nos horários livres da agenda de
cada médico.  
Além disso, o usuário autenticado conta com uma **tela de perfil**, onde é possível consultar:

- 📌 **Consultas agendadas** (próximas consultas);
- ✅ **Consultas realizadas** (histórico).

O foco do sistema é oferecer uma interface simples e responsiva, garantindo uma experiência clara para pacientes ao
acessar as agendas médicas disponíveis.

---

## ⚙️ Ambiente de Desenvolvimento Utilizado no Teste

- **Sistema operacional**: Ubuntu rodando no **WSL2**
- **Gerenciador de versão de Node**: [nvm](https://github.com/nvm-sh/nvm)
- **Versão do Node utilizada**: `v22.13.1`
- **Build tool**: [Vite](https://vitejs.dev/)
- **Frameworks**:
    - [Vue 3](https://vuejs.org/) com Composition API e TypeScript
    - [Tailwind CSS v4](https://tailwindcss.com/) para estilização
    - [Pinia](https://pinia.vuejs.org/) para gerenciamento de estado
    - [Axios](https://axios-http.com/) para integração com a API

---

## 🎨 Layout

O layout utilizado neste projeto está disponível no Figma no link abaixo:

- [Teste Fácil Consulta - Layout a ser implementado - Figma](https://www.figma.com/design/E3HHElYDdrRSfgjyXWiVqT/Projeto-teste?node-id=0-1&t=oZEscbOZarL4cdOo-1)

---

## 🚀 Como rodar o projeto

1. **Clonar o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd facil-consulta-frontend
   ```
2. Instalar dependências

```bash
npm install
```

3. Rodar em ambiente de desenvolvimento

```bash 
npm run dev
```

4. Build para produção

```bash
npm run build
```