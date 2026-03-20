# Missao de Pesquisa: Desmistificando a OO em JavaScript

Este repositorio foi feito para a atividade sobre objetos em JavaScript. Aqui estao as respostas teoricas no `README.md` e os testes praticos nos arquivos `.js`.

## Desafio 1

### O que e um objeto literal?

Objeto literal e uma forma simples de criar objeto em JavaScript usando `{}`. Dentro dele colocamos propriedades e valores, e tambem pode ter funcoes.

### Reflexão

Mesmo usando `const`, o objeto pode ser alterado porque o que fica constante e a referencia da variavel, e nao o conteudo dentro do objeto. Ou seja, pode mudar propriedades, mas não pode trocar o objeto inteiro por outro.

## Desafio 2

### Diferenca entre função construtora e factory

A função construtora normalmente usa `new` para criar o objeto. A factory function e uma funcao comum que cria e retorna o objeto diretamente.

### Reflexão

Eu achei a factory mais simples de entender, porque ela nao depende tanto do `this` e evita alguns erros quando a gente esquece de usar `new`.

## Desafio 3

### Para que servem `get` e `set`?

O `get` serve para pegar um valor e o `set` serve para definir um valor com mais controle. Eles ajudam quando a gente quer validar alguma informacao antes de aceitar.

### Diferença entre `Object.seal()` e `Object.freeze()`

O `seal()` fecha o objeto para nao adicionar nem remover propriedades, mas ainda deixa alterar valores que ja existem. O `freeze()` bloqueia tudo, entao nao da para adicionar, remover nem alterar.

## Desafio 4

### O que e `__proto__`?

O `__proto__` e a ligacao de um objeto com o seu prototipo. E por essa ideia que o JavaScript consegue herdar comportamentos de outro objeto.

### Reflexão

No JavaScript a heranca funciona mais por prototipos do que por classes do jeito tradicional. Um objeto pode aproveitar métodos de outro pela cadeia de prototipos.

## Desafio 5

### Diferença entre JSON e objeto JavaScript

JSON e mais rigido. Ele serve para troca de dados e tem regras como usar aspas duplas nas chaves e nao aceitar funcoes. Ja o objeto JavaScript e mais livre e pode ter funcoes, por exemplo.

### Reflexão

Quando usei `JSON.stringify()`, a funcao sumiu. Isso acontece porque JSON foi feito para transportar dados, não comportamentos. Em APIs REST isso faz sentido porque normalmente cliente e servidor trocam informações em texto, não codigo executavel.

## Conclusao

Com esta atividade deu para entender melhor como o JavaScript trata objetos de um jeito bem flexivel. Também ficou mais claro como funcionam `const`, factory, construtor, getters, setters, prototipos e JSON.
