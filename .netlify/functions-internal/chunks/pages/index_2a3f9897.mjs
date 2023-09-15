/* empty css                           */import { c as createAstro, b as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, g as renderSlot, m as maybeRenderHead, h as renderComponent } from '../astro_81cb0ba1.mjs';
import 'html-escaper';
import 'clsx';

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head><body>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "/home/victor/Developer/Personal/Proyectos/CastaDev.me/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<div class="About w-full h-full bg-gray-950"><div><h1 class="text-white">Victor Arroyave Castañeda</h1><h2>Front end developer JR</h2></div><div><img src="https://avatars.githubusercontent.com/u/115094771" alt="avatar"></div></div>`;
}, "/home/victor/Developer/Personal/Proyectos/CastaDev.me/src/components/About.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "castadev" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="w-full flex justify-center items-center"><div class="content-layout w-full md:w-6/12  h-96 bg-red-500"><div class="section-about w-full mt-20 h-96">${renderComponent($$result2, "About", $$About, {})}</div><div class="social-work w-full h-96 bg-blue-400 my-3"></div><div class="study w-full h-96 bg-blue-500 my-3"></div><div class="projects w-full h-96 bg-blue-600 my-3"></div><div class="contact w-full h-96 bg-blue-700"></div></div></main>` })}`;
}, "/home/victor/Developer/Personal/Proyectos/CastaDev.me/src/pages/index.astro", void 0);

const $$file = "/home/victor/Developer/Personal/Proyectos/CastaDev.me/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
