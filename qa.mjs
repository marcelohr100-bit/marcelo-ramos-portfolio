import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
const root=process.cwd(); const read=f=>fs.readFileSync(path.join(root,f),'utf8'); const exists=f=>fs.existsSync(path.join(root,f));
const checks=[]; function check(name,cond){checks.push({name,ok:Boolean(cond)});if(!cond) throw new Error(`Falha: ${name}`)}
const index=read('index.html'), dataSource=read('data.js'), robots=read('robots.txt'), sitemap=read('sitemap.xml');
const sandbox={window:{}};vm.createContext(sandbox);vm.runInContext(dataSource,sandbox);const data=sandbox.window.PORTFOLIO_DATA;
check('Branding antigo ausente da Home',!index.includes('Product & Project Studio'));
check('Hero executivo',index.includes('Liderança de projetos complexos conectando estratégia, negócio e tecnologia.'));
check('CTA projetos antes da seção Innovation Lab',index.indexOf('Ver projetos e cases')<index.indexOf('Product thinking como camada complementar.'));
for(const item of ['Project Management','PMO & Portfolio','Project Governance','Agile & Scrum','PMBOK & Hybrid Delivery','Stakeholder Management','Risk, Scope & Budget','Team Leadership','Digital Transformation']) check(`Core expertise: ${item}`,data.coreExpertise.some(x=>x.title===item));
for(const f of ['projetos/index.html','expertise/index.html','sobre/index.html','innovation-lab/index.html','contato/index.html','sitemap.xml','robots.txt','assets/og-cover.png']) check(`Arquivo: ${f}`,exists(f));
const strategic=['index.html','projetos/index.html','expertise/index.html','sobre/index.html','innovation-lab/index.html'];
for(const f of strategic){const h=read(f);check(`${f}: sem hash routing`,!h.includes('href="#/'));check(`${f}: title`,/<title>[^<]+<\/title>/.test(h));check(`${f}: description`,h.includes('name="description"'));check(`${f}: canonical`,h.includes('rel="canonical"'));check(`${f}: Open Graph`,h.includes('property="og:title"')&&h.includes('property="og:image"'));check(`${f}: Twitter`,h.includes('name="twitter:card"'));check(`${f}: JSON-LD`,h.includes('application/ld+json'));}
check('Seis produtos preservados',data.products.length===6);check('90 Second Shield fora do destaque',data.products.find(x=>x.slug==='90-second-shield')?.homeFeatured===false);
for(const p of data.products){check(`${p.name}: página`,exists(`innovation-lab/${p.slug}/index.html`));check(`${p.name}: Gumroad`,p.purchaseLinks.some(x=>x.platform==='Gumroad'&&x.url.startsWith('https://marceloramos3.gumroad.com/')));check(`${p.name}: Payhip`,p.purchaseLinks.some(x=>x.platform==='Payhip'&&x.url.startsWith('https://payhip.com/b/')))}
check('Dois cases reais preservados',data.projects.filter(x=>x.published).length===2);for(const p of data.projects)check(`${p.name}: case`,exists(`projetos/${p.slug}/index.html`));
check('Estrutura de 4–6 categorias de case',data.caseFramework.length===6);
check('10 certificações',data.profile.certifications.length===10);check('Sem PMP inventado',!JSON.stringify(data.profile.certifications).match(/\bPMP\b/));check('Ethical Hacking com Udemy',data.profile.certifications.some(x=>x.name==='Certified Ethical Hacking'&&x.issuer==='Udemy'));
check('5 recomendações registradas',data.profile.recommendationCount===5);check('Sínteses preservadas',data.profile.recommendations.length===2&&read('sobre/index.html').includes('Síntese editorial'));
check('LinkedIn presente',index.includes(data.site.linkedin));
check('Sitemap sem QA',!sitemap.match(/QA_|qa\./i));check('Sitemap inclui páginas estratégicas',['/projetos/','/sobre/','/expertise/','/innovation-lab/'].every(x=>sitemap.includes(x)));check('Robots aponta sitemap',robots.includes('Sitemap:'));
check('Foto preservada',exists('assets/profile.png'));check('OG 1200x630 existe',fs.statSync('assets/og-cover.png').size>10000);
check('Sem dados pessoais sensíveis',!/(99236-4334|pmo\.marcelo\.ramos@gmail\.com|Maria de Jesus)/i.test([index,read('sobre/index.html'),dataSource].join('\n')));
check('Viewport permite zoom',index.includes('viewport-fit=cover')&&!index.includes('user-scalable=no')&&!index.includes('maximum-scale=1'));
check('Skip link',index.includes('id="skip-link"'));check('Main focável',index.includes('id="main" tabindex="-1"'));
console.log(`QA aprovado: ${checks.length} verificações; 0 falhas.`);
