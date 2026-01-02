export interface Article {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    image?: string;
    readTime?: string;
    content: string;
    featured?: boolean;
    tags?: string[];
}

// Sample articles data
export const articles: Article[] = [
    {
        slug: 'implementando-sast-en-jenkins',
        title: 'Implementando SAST en Jenkins',
        excerpt: 'Aprende a integrar herramientas de análisis estático de código seguro directamente en tus pipelines de Jenkins para detectar vulnerabilidades antes de que lleguen a producción.',
        date: '24 Oct, 2023',
        category: 'SEGURIDAD',
        readTime: '8 min',
        featured: true,
        tags: ['SAST', 'Jenkins', 'Security'],
        content: `
## Introducción al Análisis Estático de Seguridad

El análisis estático de seguridad de aplicaciones (SAST) es una metodología fundamental en el desarrollo seguro de software. Permite identificar vulnerabilidades en el código fuente antes de que la aplicación se despliegue en producción.

## ¿Por qué integrar SAST en Jenkins?

Jenkins es una de las herramientas de CI/CD más utilizadas en la industria. Integrar SAST directamente en nuestros pipelines nos permite:

- **Detección temprana**: Encontrar vulnerabilidades en cada commit
- **Automatización**: No depender de revisiones manuales
- **Trazabilidad**: Histórico de vulnerabilidades detectadas
- **Bloqueo de builds**: Evitar despliegues con vulnerabilidades críticas

## Configuración del Pipeline

\`\`\`groovy
pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('SAST Analysis') {
            steps {
                sh 'semgrep --config auto --json -o sast-results.json .'
            }
        }
        
        stage('Quality Gate') {
            steps {
                script {
                    def results = readJSON file: 'sast-results.json'
                    if (results.results.size() > 0) {
                        error "Se encontraron vulnerabilidades de seguridad"
                    }
                }
            }
        }
    }
}
\`\`\`

## Herramientas Recomendadas

1. **SonarQube**: Análisis completo de calidad y seguridad
2. **Semgrep**: Rápido y con reglas personalizables
3. **Checkmarx**: Solución enterprise con gran cobertura
4. **Snyk Code**: Integración nativa con repositorios

## Conclusiones

Implementar SAST en tus pipelines de Jenkins es un paso fundamental hacia el desarrollo seguro. La clave está en configurar correctamente los umbrales y no bloquear el desarrollo con falsos positivos.
    `
    },
    {
        slug: 'testing-de-microservicios',
        title: 'Testing de Microservicios',
        excerpt: 'Estrategias efectivas para realizar pruebas de integración y contrato en arquitecturas distribuidas complejas.',
        date: '10 Nov, 2023',
        category: 'TESTING',
        readTime: '6 min',
        tags: ['Testing', 'Microservices', 'Integration'],
        content: `
## El Reto del Testing en Microservicios

Las arquitecturas de microservicios presentan desafíos únicos para las estrategias de testing tradicionales. La naturaleza distribuida de estos sistemas requiere un enfoque más sofisticado.

## Pirámide de Testing para Microservicios

En el contexto de microservicios, la pirámide de testing tradicional se modifica:

- **Unit Tests**: Prueban la lógica de negocio aislada
- **Integration Tests**: Verifican la comunicación entre componentes
- **Contract Tests**: Aseguran la compatibilidad entre servicios
- **E2E Tests**: Validan flujos completos de usuario

## Contract Testing con Pact

\`\`\`javascript
const { Pact } = require('@pact-foundation/pact');

const provider = new Pact({
  consumer: 'UserService',
  provider: 'OrderService',
  port: 1234
});

describe('Order API', () => {
  beforeAll(() => provider.setup());
  afterAll(() => provider.finalize());

  it('should return orders for user', async () => {
    await provider.addInteraction({
      state: 'user has orders',
      uponReceiving: 'a request for orders',
      withRequest: {
        method: 'GET',
        path: '/orders',
        headers: { 'Authorization': 'Bearer token' }
      },
      willRespondWith: {
        status: 200,
        body: [{ id: 1, status: 'completed' }]
      }
    });
    
    // Test implementation
  });
});
\`\`\`

## Estrategias de Mocking

Para testing efectivo de microservicios, considera:

1. **WireMock**: Simulación de APIs HTTP
2. **Testcontainers**: Contenedores para dependencias
3. **LocalStack**: Emulación de servicios AWS

## Conclusiones

El testing de microservicios requiere inversión en infrastructure as code para testing y una cultura de contratos bien definidos entre equipos.
    `
    },
    {
        slug: 'optimizacion-de-dockerfiles',
        title: 'Optimización de Dockerfiles',
        excerpt: 'Reduciendo el tamaño de las imágenes y mejorando los tiempos de build mediante multi-stage builds y buenas prácticas.',
        date: '02 Dic, 2023',
        category: 'DEVOPS',
        readTime: '5 min',
        tags: ['Docker', 'DevOps', 'Optimization'],
        content: `
## ¿Por qué optimizar tus Dockerfiles?

Imágenes Docker más pequeñas significan:

- **Despliegues más rápidos**: Menos bytes que transferir
- **Menor superficie de ataque**: Menos componentes vulnerables
- **Ahorro de costes**: Menos almacenamiento y ancho de banda

## Multi-stage Builds

La técnica más efectiva para reducir el tamaño de imágenes:

\`\`\`dockerfile
# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:18-alpine AS production
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "dist/main.js"]
\`\`\`

## Mejores Prácticas

### 1. Ordenar instrucciones por frecuencia de cambio

Las capas que cambian menos deben ir primero para aprovechar la caché:

\`\`\`dockerfile
# ✅ Correcto
COPY package*.json ./
RUN npm install
COPY . .

# ❌ Incorrecto
COPY . .
RUN npm install
\`\`\`

### 2. Usar .dockerignore

Excluir archivos innecesarios:

\`\`\`
node_modules
.git
*.md
.env
\`\`\`

### 3. Combinar comandos RUN

\`\`\`dockerfile
# ✅ Una sola capa
RUN apt-get update && \\
    apt-get install -y curl && \\
    rm -rf /var/lib/apt/lists/*

# ❌ Múltiples capas
RUN apt-get update
RUN apt-get install -y curl
\`\`\`

## Conclusiones

Optimizar Dockerfiles es una inversión que se paga en cada build y despliegue. Implementa estas prácticas desde el inicio de tus proyectos.
    `
    },
    {
        slug: 'github-actions-workflows-avanzados',
        title: 'GitHub Actions: Workflows Avanzados',
        excerpt: 'Patrones avanzados y mejores prácticas para crear workflows reutilizables y eficientes en GitHub Actions.',
        date: '15 Dic, 2023',
        category: 'CICD',
        readTime: '10 min',
        tags: ['GitHub Actions', 'CI/CD', 'Automation'],
        content: `
## Workflows Reutilizables

Los workflows reutilizables permiten definir pipelines una vez y usarlos en múltiples repositorios:

\`\`\`yaml
# .github/workflows/reusable-build.yml
name: Reusable Build

on:
  workflow_call:
    inputs:
      node-version:
        required: true
        type: string
    secrets:
      npm-token:
        required: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: \${{ inputs.node-version }}
      - run: npm ci
      - run: npm test
\`\`\`

## Composite Actions

Para lógica compartida más granular:

\`\`\`yaml
# action.yml
name: 'Setup Project'
description: 'Setup Node.js and install dependencies'
inputs:
  node-version:
    description: 'Node.js version'
    required: false
    default: '18'
runs:
  using: 'composite'
  steps:
    - uses: actions/setup-node@v4
      with:
        node-version: \${{ inputs.node-version }}
        cache: 'npm'
    - run: npm ci
      shell: bash
\`\`\`

## Matriz de Builds

Ejecutar tests en múltiples configuraciones:

\`\`\`yaml
jobs:
  test:
    strategy:
      matrix:
        os: [ubuntu-latest, macos-latest]
        node: [16, 18, 20]
    runs-on: \${{ matrix.os }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node }}
      - run: npm test
\`\`\`

## Conclusiones

GitHub Actions ofrece potentes capacidades de automatización. Invertir tiempo en crear workflows reutilizables mejora la mantenibilidad de tus pipelines.
    `
    },
    {
        slug: 'seguridad-shift-left',
        title: 'Implementando Seguridad Shift-Left en Jenkins',
        excerpt: 'Descubre cómo integrar herramientas SAST y DAST en tus pipelines de Jenkins para detectar vulnerabilidades antes de que el código llegue a producción.',
        date: '12 Oct, 2023',
        category: 'DEVSECOPS',
        readTime: '5 min',
        featured: true,
        tags: ['Security', 'Shift-Left', 'DevSecOps'],
        content: `
## La Importancia de Shift-Left Security

Shift-Left security significa mover las pruebas de seguridad lo más temprano posible en el ciclo de desarrollo. En lugar de esperar a una auditoría de seguridad antes de producción, detectamos vulnerabilidades desde el primer commit.

> "Security is not a gate that opens at the end of the project. It's a continuous path that we walk alongside development."

## Pipeline Configuration Example

Here's an example of how we can configure a GitHub Actions workflow to include security testing:

\`\`\`yaml
name: Security Pipeline
on: [push, pull_request]

jobs:
  security-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Run SAST
        uses: github/codeql-action/analyze@v2
        
      - name: Run Dependency Check
        run: npm audit --audit-level=high
        
      - name: Run Container Scan
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: 'my-app:latest'
\`\`\`

## Automated Testing Strategies

Beyond static analysis, dynamic testing (DAST) is equally important. We can configure automated scanners to test our applications during CI:

- **Unit Tests**: Verify individual components in isolation
- **Integration Tests**: Ensure components work together correctly
- **Security Regression**: Re-test previously fixed vulnerabilities

## Conclusiones

Implementar seguridad shift-left requiere un cambio cultural además de herramientas. Los equipos deben ver la seguridad como responsabilidad compartida.
    `
    },
    {
        slug: 'pruebas-carga-k6',
        title: 'Introducción a las pruebas de carga con k6',
        excerpt: 'Aprende a escribir scripts de pruebas de rendimiento eficientes y escalables utilizando k6 y JavaScript.',
        date: '28 Sep, 2023',
        category: 'TESTING',
        readTime: '8 min',
        tags: ['k6', 'Performance', 'Load Testing'],
        content: `
## ¿Qué es k6?

k6 es una herramienta moderna de pruebas de carga escrita en Go, con scripts en JavaScript. Es ideal para pruebas de rendimiento en pipelines CI/CD.

## Script Básico

\`\`\`javascript
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  const res = http.get('https://api.example.com/users');
  
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 200ms': (r) => r.timings.duration < 200,
  });
  
  sleep(1);
}
\`\`\`

## Escenarios Avanzados

k6 soporta múltiples escenarios para simular patrones de tráfico realistas:

\`\`\`javascript
export const options = {
  scenarios: {
    smoke: {
      executor: 'constant-vus',
      vus: 1,
      duration: '1m',
    },
    load: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '2m', target: 100 },
        { duration: '5m', target: 100 },
        { duration: '2m', target: 0 },
      ],
    },
  },
};
\`\`\`

## Conclusiones

k6 es una excelente opción para equipos que buscan integrar pruebas de rendimiento en sus pipelines sin complicaciones.
    `
    },
];

export function getAllArticles(): Article[] {
    return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): Article | undefined {
    return articles.find(article => article.slug === slug);
}

export function getFeaturedArticles(): Article[] {
    return articles.filter(article => article.featured);
}

export function getArticlesByCategory(category: string): Article[] {
    return articles.filter(article =>
        article.category.toLowerCase() === category.toLowerCase()
    );
}

export function searchArticles(query: string): Article[] {
    const lowercaseQuery = query.toLowerCase();
    return articles.filter(article =>
        article.title.toLowerCase().includes(lowercaseQuery) ||
        article.excerpt.toLowerCase().includes(lowercaseQuery) ||
        article.category.toLowerCase().includes(lowercaseQuery) ||
        article.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
}

export function getRelatedArticles(currentSlug: string, category: string): Article[] {
    return articles
        .filter(article => article.slug !== currentSlug && article.category === category)
        .slice(0, 3);
}

export const categories = ['Todos', 'CI/CD', 'Testing', 'Seguridad', 'DevSecOps', 'DevOps'];
