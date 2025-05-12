
# 🤖 Automação de Testes com GitHub Actions

Este projeto utiliza **GitHub Actions** para rodar automaticamente os testes unitários com **Jest** a cada commit ou pull request na branch `main`.

---

## 🚀 Como funciona

### 🛠️ Arquivo de Workflow

O arquivo de workflow se chama `test.yml` e está localizado em:

```
.github/workflows/test.yml
```

### 📋 Ações realizadas:

1. Faz checkout do código do repositório
2. Instala as dependências com `npm install`
3. Executa os testes com `npx jest`

---

## 💡 Como configurar

1. Crie a pasta `.github/workflows` na raiz do projeto.
2. Insira o arquivo `test.yml` com o conteúdo abaixo:

```yaml
name: Testes Unitários

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  run-tests:
    runs-on: ubuntu-latest

    steps:
    - name: 🔄 Checkout do código
      uses: actions/checkout@v3

    - name: 🧰 Instalar dependências
      run: npm install

    - name: 🧪 Executar testes
      run: npx jest
```

---

## 📸 Resultado esperado

Ao fazer um push para a branch `main`, o GitHub executará os testes automaticamente e mostrará o resultado na aba **Actions** do seu repositório.

Exemplo de saída esperada:

```
PASS  src/__tests__/LoginScreean.test.tsx
✓ deve renderizar os campos de e-mail e senha (50 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
```

---

## ✅ Entregáveis

- [x] Arquivo `test.yml` criado na pasta `.github/workflows`
- [x] Saída esperada descrita acima como print simulado
