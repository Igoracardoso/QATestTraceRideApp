
# 📱 TraceRideApp - Testes Unitários

Este projeto utiliza **React Native com TypeScript**. Abaixo estão os passos completos para configurar e executar testes unitários com **Jest** e **React Native Testing Library**.

---

## 🧪 Testes Unitários com Jest

### 📌 Requisitos

Certifique-se de ter o Node.js e o npm instalados. No terminal do projeto, execute:

```bash
npm install --save-dev jest @testing-library/react-native @testing-library/jest-native jest-expo
```

---

### 📁 Estrutura recomendada de testes

Crie a pasta `__tests__` dentro de `src/`:

```
src/
├── __tests__/
│   └── LoginScreean.test.tsx
```

---

### ✅ Exemplo de teste para a tela de login

📄 `src/__tests__/LoginScreean.test.tsx`

```tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import LoginScreen from '../screens/LoginScreean';

describe('LoginScreen', () => {
  it('deve renderizar os campos de e-mail e senha', () => {
    const { getByPlaceholderText } = render(<LoginScreen navigation={{ navigate: jest.fn() }} />);

    expect(getByPlaceholderText('Username or Email')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
  });
});
```

---

### ▶️ Como rodar os testes

No terminal:

```bash
npx jest
```

> Isso rodará todos os testes da pasta `__tests__`.

---

### ✅ Resultado esperado

O terminal mostrará algo como:

```
PASS  src/__tests__/LoginScreean.test.tsx
✓ deve renderizar os campos de e-mail e senha (50 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
```
