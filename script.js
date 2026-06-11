const translations = {
  zh: {
    brand: "刘若源",
    navAbout: "简介",
    navNews: "动态",
    navPublications: "论文",
    navProjects: "项目",
    navContact: "联系",
    name: "刘若源",
    headline: "Robotics & Embodied AI Researcher / Research Engineer",
    affiliation: "Independent Research Builder, based in Shanghai",
    email: "li.ruyuan@example.com",
    cvLink: "Curriculum Vitae",
    focusText: "关注通用机器人操作、实验数据系统、视觉-触觉学习，以及把研究原型转成可复现工具链。",
    introOne:
      "我目前专注于通用机器人操作与研究工程系统，工作内容横跨数据采集、策略训练、回放诊断、实验可视化和公开展示页面。",
    introTwo:
      "过去几年里，我持续在“研究想法如何真正落地”为团队工具这个问题上投入精力，尤其关注双臂操作、实验观测性、视觉-触觉融合和数据驱动控制。",
    introThree:
      "目前也在持续寻找有趣的研究合作与系统型项目，特别是机器人学习、交互式实验工具和学术内容展示方向。",
    newsTitle: "动态",
    newsOne: "2026-05: 一篇关于双臂操作评测系统的论文被 RSS Workshop 接收。",
    newsTwo: "2026-03: 发布新的实验回放工具链，用于机器人训练日志筛选与视频诊断。",
    newsThree: "2025-12: 受邀在研究工程分享中介绍可观测性驱动的机器人实验平台设计。",
    newsFour: "2025-09: 一项视觉-触觉联合策略学习工作完成开源整理。",
    publicationsTitle: "精选论文",
    pubOneTitle: "Dexterous Replay Studio: Observability-first Evaluation for Bimanual Manipulation",
    pubOneAuthors: "Li Ruyuan, Wenqi Zhou, Minghao Chen, Yiting Xu",
    pubOneVenue: "RSS Workshop 2026",
    pubTwoTitle: "Vision-Tactile Coordination for Data-efficient Robotic Transfer",
    pubTwoAuthors: "Li Ruyuan, Hao Lin, Xinyu Deng, Shuo Ren",
    pubTwoVenue: "ICRA 2026",
    pubThreeTitle: "From Logs to Interfaces: Building Reproducible Tooling for Robot Learning Teams",
    pubThreeAuthors: "Li Ruyuan, Jiayi Sun, Ke Chen",
    pubThreeVenue: "RA-L 2025",
    paperLink: "[paper]",
    projectLink: "[project]",
    projectsTitle: "项目",
    projectOneTitle: "Replay Atlas",
    projectOneDesc: "一个把训练回放、关键帧、奖励变化和视频片段放在一起的本地实验浏览器。",
    projectTwoTitle: "Policy Bench Deck",
    projectTwoDesc: "用于多任务策略评测、结果导出与横向阅读的轻量研究工具包。",
    projectThreeTitle: "Signal Page",
    projectThreeDesc: "服务于个人研究展示与公开写作的双语静态站点系统。",
    teachingTitle: "教学",
    teachOne: "2026: Guest Lecturer, Research Tooling for Robot Learning",
    teachTwo: "2025: Teaching Assistant, Embodied Intelligence Seminar",
    teachThree: "2024: Internal Workshop, Experiment Visualization for Robotics",
    talksTitle: "近期报告",
    talkOne: "2026/04: Data Interfaces for General Robotic Manipulation",
    talkTwo: "2025/11: Observability and Replay in Embodied AI Systems",
    talkThree: "2025/08: From Prototypes to Durable Research Tools",
    serviceTitle: "公共服务",
    serviceOne: "担任多个机器人与机器学习会议和期刊的审稿人。",
    serviceTwo: "组织研究工具与 embodied AI 相关的小型读书会和分享活动。",
    serviceThree: "维护实验可视化、回放与评测相关的内部工具。",
    footer: "© 2026 Li Ruyuan. Bilingual academic/tech homepage.",
  },
  en: {
    brand: "Li Ruyuan",
    navAbout: "About",
    navNews: "News",
    navPublications: "Publications",
    navProjects: "Projects",
    navContact: "Contact",
    name: "Li Ruyuan",
    headline: "Robotics & Embodied AI Researcher / Research Engineer",
    affiliation: "Independent Research Builder, based in Shanghai",
    email: "li.ruyuan@example.com",
    cvLink: "Curriculum Vitae",
    focusText: "Interested in general robotic manipulation, experiment data systems, vision-tactile learning, and turning research prototypes into reproducible tooling.",
    introOne:
      "I currently focus on general robotic manipulation and research engineering systems, spanning data collection, policy training, replay diagnosis, experiment visualization, and public-facing sites.",
    introTwo:
      "Over the last few years, I have spent most of my time on one recurring question: how to turn research ideas into tools that teams can actually use, especially around bimanual manipulation, observability, vision-tactile fusion, and data-driven control.",
    introThree:
      "I am also actively interested in research collaborations and systems-oriented projects, especially around robot learning, interactive experiment tooling, and academic presentation.",
    newsTitle: "News",
    newsOne: "2026-05: A paper on bimanual manipulation evaluation systems was accepted to an RSS Workshop.",
    newsTwo: "2026-03: Released a new replay tooling stack for robot training logs, filtering, and video diagnosis.",
    newsThree: "2025-12: Invited to speak on observability-driven experiment platform design for research engineering.",
    newsFour: "2025-09: Open-sourced a vision-tactile policy learning project.",
    publicationsTitle: "Selected Publications",
    pubOneTitle: "Dexterous Replay Studio: Observability-first Evaluation for Bimanual Manipulation",
    pubOneAuthors: "Li Ruyuan, Wenqi Zhou, Minghao Chen, Yiting Xu",
    pubOneVenue: "RSS Workshop 2026",
    pubTwoTitle: "Vision-Tactile Coordination for Data-efficient Robotic Transfer",
    pubTwoAuthors: "Li Ruyuan, Hao Lin, Xinyu Deng, Shuo Ren",
    pubTwoVenue: "ICRA 2026",
    pubThreeTitle: "From Logs to Interfaces: Building Reproducible Tooling for Robot Learning Teams",
    pubThreeAuthors: "Li Ruyuan, Jiayi Sun, Ke Chen",
    pubThreeVenue: "RA-L 2025",
    paperLink: "[paper]",
    projectLink: "[project]",
    projectsTitle: "Projects",
    projectOneTitle: "Replay Atlas",
    projectOneDesc: "A local experiment browser that places replay, keyframes, reward shifts, and video snippets in one place.",
    projectTwoTitle: "Policy Bench Deck",
    projectTwoDesc: "A compact research toolkit for multi-task policy evaluation, exports, and cross-run reading.",
    projectThreeTitle: "Signal Page",
    projectThreeDesc: "A bilingual static site system for personal research presentation and public writing.",
    teachingTitle: "Teaching",
    teachOne: "2026: Guest Lecturer, Research Tooling for Robot Learning",
    teachTwo: "2025: Teaching Assistant, Embodied Intelligence Seminar",
    teachThree: "2024: Internal Workshop, Experiment Visualization for Robotics",
    talksTitle: "Recent Talks",
    talkOne: "2026/04: Data Interfaces for General Robotic Manipulation",
    talkTwo: "2025/11: Observability and Replay in Embodied AI Systems",
    talkThree: "2025/08: From Prototypes to Durable Research Tools",
    serviceTitle: "Public Services",
    serviceOne: "Reviewer for robotics and machine learning venues.",
    serviceTwo: "Organizer for small reading groups on research tooling and embodied AI.",
    serviceThree: "Maintainer of internal utilities for experiment visualization, replay, and evaluation.",
    footer: "© 2026 Li Ruyuan. Bilingual academic/tech homepage.",
  },
};

const root = document.documentElement;
const langButtons = document.querySelectorAll(".lang-btn");
const styleButtons = document.querySelectorAll(".style-btn");

const savedLang = localStorage.getItem("language") || "zh";
const savedStyle = localStorage.getItem("page_style") || "academic";

function setActiveButtons(buttons, activeValue, attributeName) {
  buttons.forEach((button) => {
    const isActive = button.dataset[attributeName] === activeValue;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function applyLanguage(language) {
  const dictionary = translations[language];
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  setActiveButtons(langButtons, language, "lang");
  localStorage.setItem("language", language);
}

function applyStyle(style) {
  root.dataset.style = style;
  setActiveButtons(styleButtons, style, "style");
  localStorage.setItem("page_style", style);
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

styleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyStyle(button.dataset.style);
  });
});

applyLanguage(savedLang);
applyStyle(savedStyle);
