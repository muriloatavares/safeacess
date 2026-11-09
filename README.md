# Safe Access

Projeto de filtragem de conteúdo adulto com uma página de bloqueio personalizada.

## Estado atual

Esta primeira versão contém somente a landing page estática. Ela **não bloqueia sites por conta própria**. O bloqueio efetivo será implementado separadamente por DNS e/ou políticas de navegador gerenciadas.

## Estrutura

- `landing-page/`: página estática de aviso.
- `blocklist/sources.txt`: fontes de listas de domínios.
- `docs/architecture.md`: arquitetura e limitações técnicas.

## Publicar a landing page

1. No Cloudflare Pages, crie um projeto conectado a este repositório.
2. Use `landing-page` como diretório de saída (Build output directory).
3. Não é necessário comando de build.
4. Publique e teste o endereço HTTPS fornecido pelo Cloudflare.

## Privacidade e segurança

- Não adicione senhas, tokens ou chaves privadas a este repositório público.
- Não use redirecionamentos DNS para falsificar HTTPS ou certificados.
- DNS tradicional pode bloquear domínios, mas não consegue apresentar uma página HTTPS personalizada para qualquer domínio bloqueado sem uma camada de navegador/proxy apropriada.
- A lista de domínios pode conter falsos positivos; revise-a antes de aplicá-la em ambientes compartilhados.

## Fonte inicial da lista

Consulte `blocklist/sources.txt`.
