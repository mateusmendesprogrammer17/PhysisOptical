# PhysisVisionFisica
PhysisVisionFisica é um aplicativo móvel desenvolvido em React Native utilizando o Expo para ajudar no estudo de conceitos e problemas de óptica. Este projeto foi desenvolvido como parte de um trabalho acadêmico, com foco em  demonstrar o comportamento de espelhos e lentes esféricas através de cálculos utilizando a equação de Gauss e equação da ampliação, permitindo aos usuários calcular e visualizar as propriedades das imagens formadas por esses dispositivos.

Funcionalidades
Cálculos de Distância da Imagem e Ampliação: O aplicativo permite calcular a distância da imagem, ampliação e tamanho da imagem formada por lentes e espelhos.

Interface Interativa: A interface é simples e intuitiva, com campos de entrada para distância focal, distância do objeto e tipo de espelho/lente, além de exibir os resultados de forma clara e objetiva.

Funcionalidades Implementadas
Simulação de Espelhos Esféricos (Côncavo e Convexo): Cálculos baseados na fórmula de Gauss para determinar a posição da imagem, ampliação, e orientação (real ou virtual, direita ou invertida).
Simulação de Lentes Esféricas (Convergente e Divergente): Cálculos para determinar a posição da imagem, ampliação, tipo de imagem (real ou virtual) e orientação (direita ou invertida).
Exibição de Resultados: O aplicativo exibe a ampliação, o tipo e a orientação da imagem para lentes e espelhos.
Tecnologias Utilizadas
React Native: Framework utilizado para o desenvolvimento do aplicativo móvel.
Expo: Utilizado para facilitar o desenvolvimento e testes no ambiente de React Native.

A matemática para cálculos de óptica é realizada diretamente no código, utilizando funções simples para implementar as fórmulas de Gauss para espelhos e lentes.
Como Usar
Instalação do APK
O APK do aplicativo já foi carregado e pode ser instalado diretamente em dispositivos Android. Para usuários que não querem rodar o código localmente, basta baixar o APK e instalar no seu dispositivo.

Rodando o Projeto com Expo
Se você quiser rodar o projeto localmente, pode usar o Expo para facilitar o processo de desenvolvimento. Aqui estão os passos para configurar o ambiente local e testar o código:

1. Pré-requisitos
Certifique-se de ter o Node.js instalado em sua máquina. Você pode verificar isso rodando o comando abaixo no terminal:



node -v
Se o Node.js não estiver instalado, faça o download e instale a partir do site oficial.

2. Instalar o Expo CLI
O Expo CLI é uma ferramenta de linha de comando que facilita o desenvolvimento de aplicativos em React Native. Para instalar o Expo CLI globalmente, execute:


npm install -g expo-cli
3. Clonar o Repositório
Clone o repositório do projeto para sua máquina local usando o comando:





git clone https://github.com/mateusmendesprogrammer17/PhysisOptical.git


4. Instalar Dependências
Navegue até o diretório do projeto e instale as dependências:


cd PhysisOptical

npm install
5. Rodar o Projeto
Depois de instalar todas as dependências, você pode rodar o aplicativo utilizando o comando:


npx expo start
Isso abrirá uma nova janela no seu navegador com o Expo Developer Tools. A partir daí, você pode:

Escanear o QR Code com o aplicativo Expo Go no seu dispositivo móvel (Android ou iOS) para visualizar o aplicativo em tempo real.
Executar o aplicativo diretamente no emulador Android ou iOS, se você tiver o ambiente configurado.
6. Testar no Dispositivo
Se você tiver o Expo Go instalado no seu dispositivo móvel (Android ou iOS), basta escanear o QR Code que aparece no navegador ou no terminal, e o aplicativo será carregado instantaneamente.

Como Funciona
O aplicativo permite simular o comportamento de espelhos esféricos e lentes esféricas, com as seguintes etapas:

Seleção de Espelho ou Lente:
O usuário pode escolher entre espelho côncavo, espelho convexo, lente convergente ou lente divergente.
Inserção de Dados:
O usuário deve inserir a distância focal (f) e a distância do objeto (do). Estas são as entradas principais para calcular a posição da imagem.
Cálculo:
O aplicativo usa as fórmulas de Gauss para calcular a distância da imagem, a ampliação, e determinar se a imagem é real ou virtual, direita ou invertida.
Exibição dos Resultados:
O aplicativo exibe os resultados de ampliação, tamanho da imagem (maior, menor ou do mesmo tamanho), e a orientação da imagem (direita ou invertida).
Contribuições
Este projeto foi desenvolvido como parte de um trabalho acadêmico. Contribuições para o código são bem-vindas, mas esteja ciente de que o foco principal é o estudo dos conceitos de óptica.

Como Contribuir
Fork este repositório.
Crie uma branch para a sua funcionalidade (git checkout -b feature/nome-da-funcionalidade).
Faça commit das suas alterações (git commit -am 'Adicionando nova funcionalidade').
Envie para o branch principal (git push origin feature/nome-da-funcionalidade).
Abra um pull request.
Licença não especificado ,por ser um trabalho acadêmico.

Contato
Autor: Mateus Mendes
E-mail: mateusmendesprogrammer17@gmail.com
