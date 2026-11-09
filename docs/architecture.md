# Arquitetura Safe Access

## Componentes

1. **Fonte de domínios:** lista externa versionada pelo mantenedor original.
2. **Filtro DNS:** resolve domínios bloqueados para uma resposta de bloqueio. DNS não transporta uma página HTML.
3. **Landing page:** site estático HTTPS hospedado em Cloudflare Pages.
4. **Camada de apresentação:** para exibir a landing page em navegadores, usar uma extensão/política de navegador gerenciada ou um portal de bloqueio fornecido pelo produto DNS.

## Limitação de HTTPS

Não redirecionar arbitrariamente um domínio HTTPS bloqueado para o domínio da landing page por meio de DNS. O navegador espera um certificado válido para o hostname original; apresentar outro certificado causa erro de segurança. Não instalar certificados-raiz para interceptar tráfego como solução padrão.

## Cobertura de navegadores

Não existe um mecanismo universal de extensão que funcione em absolutamente todos os navegadores. A cobertura deverá ser validada por navegador e sistema operacional. O bloqueio DNS é a camada comum; a experiência visual depende de integração adicional.

## Requisitos antes de ativar em produção

- Normalizar domínios e remover comentários/linhas inválidas.
- Revisar falsos positivos e manter uma allowlist explícita.
- Atualizar listas com frequência controlada e registrar a versão/fonte.
- Testar em ambiente piloto antes de aplicar a toda a rede.
- Manter procedimento de rollback.
- Não armazenar credenciais no repositório público.
