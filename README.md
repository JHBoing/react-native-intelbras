# React-Native-Intelbras

1. Instalar programas necessarios:
	- Java SDK 8	http://www.oracle.com/technetwork/pt/java/javase/downloads/jdk8-downloads-2133151.html
	- NodeJS (LTS)	https://nodejs.org/en/
	- Python 2 (Versao 2.7.14) 	https://www.python.org/downloads/
	- 1.1. OPCIONAL: Instalar Sourcetree e Git Bash
	- 1.2. OPCIONAL: Instalar Sublime Text 3 e ESLint
2. Baixar Android Studio	https://developer.android.com/studio/index.html
3. Abrir CMD como administrador e rodar: npm install -g react-native-cli
4. Clonar o repositório
5. Instalar Android Studio
6. Abrir Android Studio e instalar os 4 itens:
	- Android SDK
	- Android SDK Platform
	- Performance (Intel ® HAXM)
	- Android Virtual Device
7. Abrir novamente o android studio e selecionar a opção de abrir um projeto ja existente
8. Navegar até a pasta do projeto e abrir o projeto selecionando "android"
	https://i.imgur.com/uJk7K8o.png
9. Corrigir os erros apresentados pelo Android Studio
	https://i.imgur.com/a9z9TZL.png
10. Acessar o AVD Manager através da aba Tools (Tools>AVD Manager)
11. Criar um novo Virtual Device (Nexus 5) com Android versão Marshmallow ABI x86_x64 Android 6.0 (Google APIs) API Level 23
	- https://i.imgur.com/PSQdQhU.png
12. Acessar as "Propriedades do Sistema" do Windows e acessar as variaveis de ambiente
	- https://i.imgur.com/z9gFGgj.png
13. Criar uma nova variavel de usuario chamada "JAVA_HOME" e como valor o caminho pro JDK
	- https://i.imgur.com/SG0eg2f.png
14. Editar a variavel "Path" e adicionar o caminho a pasta "platform-tools" do ANDROID SDK 
	- Local padrão do android sdk é: C:\Users\SEUUSUARIOAQUI\AppData\Local\Android\sdk\platform-tools
	- https://i.imgur.com/r0RnLby.png
15. Inicializar o Virtual Device (Pelo AVD Manager, clicando no triangulo verde)
16. Na pasta raiz do projeto, rodar o comando "npm install"
16. Na pasta raiz do projeto, rodar o comando "react-native run-android"


## CONFIGURACAO DO ESLINT NO SUBLIME 3
1. Rodar "npm install -g eslint" na pasta raiz do projeto
2. Instalar o package control
3. Instalar SublimeLinter no sublime text 3
4. Instalar SublimeLinter-eslint no sublime text 3


