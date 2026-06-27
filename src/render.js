import { profile } from "./data/portfolio.config.js";
import { content } from "./data/portfolio.content.js";

const el = (selector) => document.querySelector(selector);

function setText(selector, text) {
  const node = el(selector);
  if (node) node.textContent = text;
}

function setAttr(selector, attr, value) {
  const node = el(selector);
  if (node) node.setAttribute(attr, value);
}

function renderSkills() {
  const wrap = el("#skillsGroups");
  if (!wrap) return;
  wrap.innerHTML = "";

  for (const group of content.skills.groups) {
    const card = document.createElement("div");
    card.className = "card skillCard";

    const h = document.createElement("h3");
    h.className = "cardTitle";
    h.textContent = group.label;

    const tags = document.createElement("div");
    tags.className = "tagGrid";

    for (const item of group.items) {
      const t = document.createElement("span");
      t.className = "tag";
      t.textContent = item;
      tags.appendChild(t);
    }

    card.appendChild(h);
    card.appendChild(tags);
    wrap.appendChild(card);
  }
}

function renderProjects() {
  const wrap = el("#projectsGrid");
  if (!wrap) return;
  wrap.innerHTML = "";

  for (const p of content.projects.items) {
    const card = document.createElement("article");
    card.className = "card projectCard";

    const h = document.createElement("h3");
    h.className = "cardTitle";
    h.textContent = p.title;

    const desc = document.createElement("p");
    desc.className = "muted";
    desc.textContent = p.description;

    const ul = document.createElement("ul");
    ul.className = "bullets";
    for (const item of p.highlights) {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    }

    const tech = document.createElement("div");
    tech.className = "techRow";
    for (const t of p.tech) {
      const tag = document.createElement("span");
      tag.className = "tag tag--soft";
      tag.textContent = t;
      tech.appendChild(tag);
    }

    card.appendChild(h);
    card.appendChild(desc);
    card.appendChild(ul);
    card.appendChild(tech);
    wrap.appendChild(card);
  }
}

function renderCertifications() {
  const wrap = el("#certGrid");
  if (!wrap) return;
  wrap.innerHTML = "";

  for (const item of content.certifications.items) {
    const card = document.createElement("div");
    card.className = "card certCard";
    card.textContent = item;
    wrap.appendChild(card);
  }
}

function renderEducation() {
  const wrap = el("#eduList");
  if (!wrap) return;
  wrap.innerHTML = "";

  for (const item of content.education.items) {
    const row = document.createElement("div");
    row.className = "eduRow";

    const left = document.createElement("div");
    left.className = "eduLeft";

    const school = document.createElement("div");
    school.className = "eduSchool";
    school.textContent = item.school;

    const degree = document.createElement("div");
    degree.className = "eduDegree";
    degree.textContent = item.degree;

    left.appendChild(school);
    left.appendChild(degree);

    const dates = document.createElement("div");
    dates.className = "eduDates";
    dates.textContent = item.dates || "";

    row.appendChild(left);
    row.appendChild(dates);
    wrap.appendChild(row);
  }
}

function init() {
  // Basic text
  setText("#profileName", profile.name);
  setText("#heroSubtitle", content.hero.subtitle);
  setText("#heroIntro", content.hero.intro);

  // Buttons
  setText("#btnViewProjects", content.hero.buttons.viewProjects);
  setText("#btnDownloadResume", content.hero.buttons.downloadResume);
  setText("#btnContactMe", content.hero.buttons.contactMe);

  // Contact links (editable via config)
  setAttr("#contactEmail", "href", `mailto:${profile.links.email}`);
  setAttr("#contactGitHub", "href", profile.links.github);
  setAttr("#contactLinkedIn", "href", profile.links.linkedin);
  setAttr("#resumeDownload", "href", profile.links.resume);

  // Section titles
  setText("#aboutTitle", content.about.title);
  setText("#skillsTitle", content.skills.title);
  setText("#internTitle", content.internship.title);
  setText("#projectsTitle", content.projects.title);
  setText("#certTitle", content.certifications.title);
  setText("#eduTitle", content.education.title);
  setText("#contactTitle", content.contact.title);

  // About bullets
  const aboutList = el("#aboutBullets");
  if (aboutList) {
    aboutList.innerHTML = "";
    for (const b of content.about.bullets) {
      const li = document.createElement("li");
      li.textContent = b;
      aboutList.appendChild(li);
    }
  }

  // Labels for accessibility
  setText("#emailLabel", content.contact.placeholders.emailLabel);
  setText("#githubLabel", content.contact.placeholders.githubLabel);
  setText("#linkedinLabel", content.contact.placeholders.linkedinLabel);

  renderSkills();
  renderProjects();
  renderCertifications();
  renderEducation();
}

init();

