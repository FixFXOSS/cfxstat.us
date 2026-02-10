# Security Policy

## Reporting Security Vulnerabilities

If you discover a security vulnerability in FixFX Links, please **do not** open a public GitHub issue. Instead, please report it responsibly to:

**Email:** [hey@codemeapixel.dev](mailto:hey@codemeapixel.dev)

**Subject:** Security Vulnerability Report - FixFX Links

Please include:
- Description of the vulnerability
- Steps to reproduce (if applicable)
- Potential impact
- Suggested fix (if you have one)

We will acknowledge your report within 48 hours and work with you to address the issue responsibly.

## Security Considerations

### For Users/Deployers

- Keep your Cloudflare Workers account credentials secure
- Use environment variables for sensitive configuration
- Regularly update dependencies: `bun update`
- Monitor Cloudflare security advisories for your Workers deployment

### For Contributors

- Never commit secrets, API keys, or credentials
- Use environment variables (`.env`, `.env.local`) for sensitive data
- These files should be in `.gitignore` and never committed
- Review code for potential XSS or injection vulnerabilities before submitting PRs

### Known Security Best Practices in This Project

1. **Content Security:** All user-generated content is carefully handled
2. **Dependencies:** We use `bun` for reliable dependency management
3. **Deployment:** Hosted on Cloudflare Workers with edge security
4. **TypeScript:** Strict typing helps prevent runtime vulnerabilities

## Third-Party Dependencies

This project uses the following key dependencies:

- **@tanstack/react-start** - React 19 framework
- **tailwindcss** - CSS framework
- **lucide-react** - Icon library
- **@cloudflare/vite-plugin** - Cloudflare Workers integration

These dependencies are regularly updated to patch security vulnerabilities.

## Dependency Scanning

- Use `bun audit` to check for known vulnerabilities:
  ```bash
  bun audit
  ```

- Run security checks before deploying:
  ```bash
  bun audit --fix
  ```

## Environment Variables

Never expose the following:
- Cloudflare API tokens (in `wrangler.jsonc`)
- Any third-party service credentials
- Database connection strings (if added in the future)

Use Cloudflare Workers Secrets for sensitive data:
```bash
wrangler secret put SECRET_NAME
```

## Deployment Security

- Always authenticate before deploying: `wrangler login`
- Use separate staging and production environments
- Review changes before deployment
- Enable Cloudflare's DDoS protection
- Ensure HTTPS is enforced

## Security Updates

- Monitor GitHub security advisories for this repository
- Enable Dependabot alerts on your fork
- Review and test dependency updates before committing

## Responsible Disclosure

When responsibly disclosing vulnerabilities:
1. Give us reasonable time to fix the issue before publicly disclosing
2. Avoid accessing other users' data or systems
3. Don't perform any destructive testing
4. Act in good faith

## Contact

For security-related questions or concerns, please contact:
- **Email:** [hey@codemeapixel.dev](mailto:hey@codemeapixel.dev)
- **GitHub:** [CodeMeAPixel/FixFX-LinkInBio](https://github.com/CodeMeAPixel/FixFX-LinkInBio)

## Acknowledgments

We appreciate the security community's help in keeping FixFX Links safe and secure. Security researchers who report vulnerabilities responsibly will be acknowledged in this document (with permission).

---

Last Updated: February 2026
