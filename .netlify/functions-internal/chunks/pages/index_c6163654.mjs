/* empty css                           */import { c as createAstro, b as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, g as renderSlot, m as maybeRenderHead, h as renderComponent } from '../astro_81cb0ba1.mjs';
import 'html-escaper';
import 'clsx';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './image-endpoint_727563e4.mjs';
import 'mime/lite.js';

const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">${renderHead()}</head><body>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "/home/victor/Developer/Personal/Proyectos/CastaDev.me/src/layouts/Layout.astro", void 0);

const avatar = {"src":"/_astro/avatar.3e67118a.png","width":750,"height":750,"format":"png"};

const $$Astro$2 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<div class="About" data-astro-cid-v2cbyr3p><div class="About-title" data-astro-cid-v2cbyr3p><h1 class="About-title_name" data-astro-cid-v2cbyr3p>Victor Arroyave Castañeda</h1><h2 class="About-title_description" data-astro-cid-v2cbyr3p>Front end developer JR</h2></div><div class="About-image" data-astro-cid-v2cbyr3p>${renderComponent($$result, "Image", $$Image, { "class": "About-image_picture", "src": avatar, "alt": "avatar image", "data-astro-cid-v2cbyr3p": true })}</div></div>`;
}, "/home/victor/Developer/Personal/Proyectos/CastaDev.me/src/components/About.astro", void 0);

const pinterest = {"src":"/_astro/pinterest.61ecca55.png","width":100,"height":90,"format":"png"};

const instagram = {"src":"/_astro/instagram.952f4361.png","width":94,"height":105,"format":"png"};

const linkedin = {"src":"/_astro/linkedin.f1bb06f7.png","width":104,"height":105,"format":"png"};

const x = {"src":"/_astro/x.350beeb1.png","width":131,"height":127,"format":"png"};

const melborp = {"src":"/_astro/melborp.75bdb6c0.gif","width":300,"height":139,"format":"gif"};

const $$Astro$1 = createAstro();
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Experience;
  return renderTemplate`${maybeRenderHead()}<div class="Experience" data-astro-cid-xpq65ryk><div class="Experience-social" data-astro-cid-xpq65ryk><div class="social-pinterest" data-astro-cid-xpq65ryk>${renderComponent($$result, "Image", $$Image, { "src": pinterest, "alt": "pinterest", "data-astro-cid-xpq65ryk": true })}</div><div class="social-instagram" data-astro-cid-xpq65ryk>${renderComponent($$result, "Image", $$Image, { "src": instagram, "alt": "Instagram", "data-astro-cid-xpq65ryk": true })}</div><div class="social-linkedin" data-astro-cid-xpq65ryk>${renderComponent($$result, "Image", $$Image, { "src": linkedin, "alt": "Linkedin", "data-astro-cid-xpq65ryk": true })}</div><div class="social-x" data-astro-cid-xpq65ryk>${renderComponent($$result, "Image", $$Image, { "src": x, "alt": "x", "data-astro-cid-xpq65ryk": true })}</div></div><div class="work" data-astro-cid-xpq65ryk><div class="work-picture" data-astro-cid-xpq65ryk>${renderComponent($$result, "Image", $$Image, { "src": melborp, "alt": "melborp", "data-astro-cid-xpq65ryk": true })}</div><div class="work-information" data-astro-cid-xpq65ryk><div class="information-title" data-astro-cid-xpq65ryk><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 32 32" data-astro-cid-xpq65ryk><path fill="#000000" d="M25.798 10a10 10 0 0 0-19.62.124A7.496 7.496 0 0 0 7.5 25H8v-2h-.5a5.496 5.496 0 0 1-.377-10.98l.837-.057l.09-.833A7.993 7.993 0 0 1 23.736 10Z" data-astro-cid-xpq65ryk></path><path fill="#000000" d="M28 12H18a2.002 2.002 0 0 0-2 2v4h-4a2.002 2.002 0 0 0-2 2v10h20V14a2.002 2.002 0 0 0-2-2ZM12 28v-8h4v8Zm16 0H18V14h10Z" data-astro-cid-xpq65ryk></path><path fill="#000000" d="M20 16h2v4h-2zm4 0h2v4h-2zm-4 6h2v4h-2zm4 0h2v4h-2z" data-astro-cid-xpq65ryk></path></svg><h2 data-astro-cid-xpq65ryk>Melborp.art</h2></div><p data-astro-cid-xpq65ryk>IT Technician and Front-end JR developer</p></div></div></div>`;
}, "/home/victor/Developer/Personal/Proyectos/CastaDev.me/src/components/Experience.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "castadev", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="main-content" data-astro-cid-j7pv25f6><div class="main-content-it" data-astro-cid-j7pv25f6><div class="main-content-about" data-astro-cid-j7pv25f6>${renderComponent($$result2, "About", $$About, { "data-astro-cid-j7pv25f6": true })}</div><div class="main-content-experience" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Experience", $$Experience, { "data-astro-cid-j7pv25f6": true })}</div><div class="main-content-study" data-astro-cid-j7pv25f6></div><div class="main-content-projects" data-astro-cid-j7pv25f6></div><div class="main-content-contact" data-astro-cid-j7pv25f6></div></div></main>` })}`;
}, "/home/victor/Developer/Personal/Proyectos/CastaDev.me/src/pages/index.astro", void 0);

const $$file = "/home/victor/Developer/Personal/Proyectos/CastaDev.me/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
