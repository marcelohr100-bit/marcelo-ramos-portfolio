import fs from 'node:fs'
import path from 'node:path'
import vm from 'node:vm'

const root = process.cwd()
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8')
const exists = (file) => fs.existsSync(path.join(root, file))
const checks = []

function check(name, condition) {
  checks.push({ name, ok: Boolean(condition) })
  if (!condition) throw new Error(`Falha: ${name}`)
}

const index = read('index.html')
const app = read('app.js')
const dataSource = read('data.js')
const profileDataSource = read('profile-data.js')
const profileSections = read('profile-sections.js')
const styles = read('styles.css')
const identity = read('identity.css')
const linkedin = read('linkedin-badge.css')
const quality = read('quality.css')

new Function(app)
new Function(profileDataSource)
new Function(profileSections)
check('Sintaxe JavaScript válida', true)

const sandbox = { window: {} }
vm.createContext(sandbox)
vm.runInContext(dataSource, sandbox)
vm.runInContext(profileDataSource, sandbox)
const data = sandbox.window.PORTFOLIO_DATA

check('Dados globais disponíveis', Boolean(data))
check('Seis produtos cadastrados', data.products.length === 6)
check('Dois projetos cadastrados', data.projects.length === 2)
check('Dez certificações cadastradas', data.profile.certifications.length === 10)
check('Duas recomendações públicas destacadas', data.profile.recommendations.length === 2)
check('Contagem de cinco recomendações no LinkedIn', data.profile.recommendationCount === 5)

const productSlugs = data.products.map((item) => item.slug)
const projectSlugs = data.projects.map((item) => item.slug)
check('Slugs de produtos únicos', new Set(productSlugs).size === productSlugs.length)
check('Slugs de projetos únicos', new Set(projectSlugs).size === projectSlugs.length)

for (const product of data.products) {
  check(`${product.name}: nome`, Boolean(product.name.trim()))
  check(`${product.name}: resumo`, product.summary.length >= 60)
  check(`${product.name}: público`, product.audience.length >= 20)
  check(`${product.name}: imagem existente`, exists(product.image))
  check(`${product.name}: texto alternativo`, product.imageAlt.length >= 15)
  check(`${product.name}: dois links de compra`, product.purchaseLinks.length === 2)
  check(`${product.name}: Gumroad`, product.purchaseLinks.some((link) => link.platform === 'Gumroad' && link.url.startsWith('https://marceloramos3.gumroad.com/')))
  check(`${product.name}: Payhip`, product.purchaseLinks.some((link) => link.platform === 'Payhip' && link.url.startsWith('https://payhip.com/b/')))
  check(`${product.name}: destaques`, product.highlights.length >= 4)
  check(`${product.name}: conteúdo incluído`, product.included.length >= 2)
}

for (const certification of data.profile.certifications) {
  check(`Certificação: ${certification.name}`, Boolean(certification.name && certification.issuer && certification.issued && certification.group))
}

for (const recommendation of data.profile.recommendations) {
  check(`Recomendação: ${recommendation.author}`, Boolean(recommendation.author && recommendation.summary.length >= 80))
}

const requiredFiles = [
  'index.html', 'app.js', 'data.js', 'profile-data.js', 'profile-sections.js',
  'styles.css', 'identity.css', 'linkedin-badge.css', 'quality.css',
  'assets/profile.png', 'assets/favicon.svg', '.nojekyll'
]
for (const file of requiredFiles) check(`Arquivo existente: ${file}`, exists(file))

check('Viewport permite zoom e safe area', index.includes('viewport-fit=cover') && !index.includes('user-scalable=no') && !index.includes('maximum-scale=1'))
check('Folha de qualidade carregada por último', index.indexOf('quality.css') > index.indexOf('linkedin-badge.css'))
check('Dados profissionais carregados antes da aplicação', index.indexOf('profile-data.js') < index.indexOf('app.js'))
check('Seções profissionais carregadas após a aplicação', index.indexOf('profile-sections.js') > index.indexOf('app.js'))
check('Fallback mobile do LinkedIn', index.includes('linkedin-mobile-link'))
check('Selo oficial preservado para telas amplas', index.includes('LI-profile-badge'))

check('Rotas de produtos presentes', app.includes("route[0] === 'produtos'"))
check('Rotas de projetos presentes', app.includes("route[0] === 'projetos'"))
check('Rota Sobre presente', app.includes("route[0] === 'sobre'"))
check('Rota Contato presente', app.includes("route[0] === 'contato'"))
check('Página 404 presente', app.includes('Página não encontrada'))
check('Injeção de credenciais na rota Sobre', profileSections.includes("route[0] === 'sobre'"))
check('Resumo profissional na home', profileSections.includes('prova-profissional'))

check('Overflow horizontal protegido', quality.includes('overflow-x: clip'))
check('Filhos de grids podem encolher', quality.includes('.footer-grid > *') && quality.includes('min-width: 0'))
check('Rodapé colapsa antes do mobile', quality.includes('@media (max-width: 1100px)'))
check('Rodapé mobile usa uma coluna', quality.includes('.footer-grid,') && quality.includes('grid-template-columns: 1fr !important'))
check('Selo externo ocultado quando não cabe', quality.includes('.linkedin-badge-shell') && quality.includes('display: none'))
check('Links longos podem quebrar', quality.includes('overflow-wrap: anywhere'))
check('Grid de certificações responsivo', quality.includes('.credentials-grid'))
check('Grid de recomendações responsivo', quality.includes('.recommendations-grid'))

const combinedCss = `${styles}\n${identity}\n${linkedin}\n${quality}`
check('Sem largura fixa do corpo', !/body\s*\{[^}]*width:\s*\d+px/s.test(combinedCss))
check('Sem bloqueio de zoom por CSS', !combinedCss.includes('touch-action: none'))
check('Sem dados pessoais sensíveis no HTML', !/Maria de Jesus|99236-4334|pmo\.marcelo\.ramos@gmail\.com/i.test(`${index}\n${app}\n${profileDataSource}`))

console.log(`QA aprovado: ${checks.length} verificações; 0 falhas.`)
