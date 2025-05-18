# 🚗 Aceleradio.ai

![Logo](./assets/logo_sem_texto_sem_fundo.png)

## 📱 Sobre o Projeto

Aceleradio.ai é um assistente de direção inteligente que adapta sua interface e recomendações com base no seu estilo de condução. O app utiliza inteligência artificial para analisar seu comportamento ao volante e ajustar a experiência de acordo com três modos: Calmo, Moderado e Agressivo.

### 🎯 Funcionalidades

- **Interface Adaptativa**: Cores e estilos mudam de acordo com seu modo de condução
- **Assistente IA**: Receba dicas e alertas personalizados sobre seu estilo de direção
- **Player de Música**: Recomendações musicais que se adaptam ao seu humor e estilo de condução
- **Visual Dinâmico**: Ícones e temas que refletem seu estado atual de condução

## 🛠️ Tecnologias Utilizadas

- React Native
- Expo
- Tamagui (UI)
- TypeScript
- Context API talvez (?)

## Instalação

### Pré-requisitos

- Node.js (v14 ou superior)
- pnpm
- Expo CLI
- Um dispositivo móvel ou emulador

### Clonando o Repositório

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/aceleradio-ai.git

# Entre no diretório do projeto
cd aceleradio-ai
```

### Instalando Dependências

```bash
# Instale o pnpm caso ainda não tenha
npm install -g pnpm

# Instale as dependências do projeto
pnpm install
```

### Executando o Projeto

```bash
# Inicie o servidor de desenvolvimento
npx expo start

# Ou, se preferir usar diretamente o Expo
expo start
```

Escaneie o QR code com o aplicativo Expo Go no seu celular ou pressione 'a' para abrir no emulador Android, 'i' para iOS.

### Depurando

Para depurar o aplicativo:

```bash
# Inicie com modo de depuração
npx expo start --dev-client
```

Você pode usar o React Native Debugger ou as ferramentas de desenvolvimento do Expo para inspecionar o aplicativo.

## Importante

- **#1**: O nome "Aceleradio" surgiu após um desenvolvedor derramar café no teclado enquanto tentava escrever "Acelerador Inteligente".

- **#2**: A cor do modo "Agressivo" foi escolhida depois que o frontend levou uma multa por excesso de velocidade.

- **#3**: O app tem um easter egg: se você alternar entre os modos de condução 10 vezes em menos de 5 segundos, o app começa a tocar "The Fast and The Furious" theme song.

- **#4**: Uma versão inicial do app incluía um modo "Tartaruga", mas foi removido porque os testadores acabavam dormindo ao volante.

- **#5**: O assistente de IA foi treinado com dados de um taxista carioca, por isso às vezes as mensagens vêm com um "ô meu amigo" implícito.

## 🐛 Problemas Conhecidos

- O app ainda não consegue distinguir se você está dirigindo rápido porque está atrasado ou porque gosta de adrenalina.
- Ocasionalmente, o assistente de IA pode sugerir "dar um cavalo de pau" quando detecta um humor muito agressivo (estamos trabalhando nisso).
- Se você dirigir de ré por mais de 5 minutos, o app pode entrar em um estado existencial questionando suas escolhas de vida.

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

---

Desenvolvido com ☕ e 🚨 (muitas multas de trânsito para pesquisa de campo) 