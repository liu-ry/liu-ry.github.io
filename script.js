const translations = {
  zh: {
    brand: "刘仁雨",
    navAbout: "简介",
    navNews: "经历",
    navPublications: "论文",
    navProjects: "项目",
    navPatents: "专利",
    navContact: "联系",
    name: "刘仁雨",
    headline: "机器人技术与具身智能算法工程师",
    affiliation: "中国 江苏 苏州",
    education: "苏州大学 电子与通信工程硕士",
    email: "renyu6708@gmail.com",
    cvLink: "Curriculum Vitae",
    focusText:
      "关注视觉算法、diffusion、VLA、WM\n关注视触觉/力觉等模态的应用\n关注 UMI、EGO 等数采形式以及跨本体研究进展。",
    introOne:
      "目前专注于 VLA、WM、DP 等具身算法的研究、探索及部署使用。已在越疆、瑞尔曼、UR、珞石、天机等机械臂，大寰、Robotiq、知行等夹爪，灵心巧手、兆威等灵巧手上进行算法的真机部署与调试。",
    introTwo:
      "过去的一段时间，持续在 VLA 多任务泛化、UMI/EGO 等无本体数采、跨本体应用、触觉模态融合等方向进行探索。",
    introThree:
      "当前正在探索真机强化学习后训练，以提升任务成功率，实现人类在环(DAgger介入)的数据飞轮闭环。",
    newsTitle: "经历",
    newsOne: "2025-09～至今: 上海纬钛科技有限公司",
    newsTwo: "2024-06～2025-09: 苏州天准科技股份有限公司",
    newsThree: "2021-07～2024-06: 广联达科技有限公司",
    publicationsTitle: "论文",
    pubOneTitle: "Machine-Learning-based Aortic Stenosis Detection for Electronic Stethoscope",
    pubOneAuthors: "Zhen Shi, Neng Dai, Renyu Liu, Jiajun Wang, Shengsheng Cai, Nan Hu",
    pubOneVenue: "2021 13th International Conference on Wireless Communications and Signal Processing (WCSP)",
    pubTwoTitle: "Detection of Adventitious Respiratory Sounds based on Convolutional Neural Network",
    pubTwoAuthors: "Renyu Liu, Shengsheng Cai, Kexin Zhang, Nan Hu",
    pubTwoVenue: "2019 4th International Conference on Intelligent Informatics and Biomedical Sciences (ICIIBMS)",
    pubThreeTitle: "The Automatic Repairing Method Addressing Clipping Distortions and Frictional Noises in Electronic Stethoscope",
    pubThreeAuthors: "Ning Zhou, Jiajun Wang, Bing Sun, Renyu Liu, Nan Hu",
    pubThreeVenue: "IEEE Conference Paper, 2019",
    paperLink: "[paper]",
    patentsTitle: "专利",
    patentOneTitle: "一种电子听诊器的肺部啰音人工智能实时分类方法、系统、装置及可读存储介质",
    patentOneAuthors: "蔡盛盛，胡南，刘仁雨，徐兴国",
    patentOneVenue: "CN110970042A, 申请公布日 2020-04-07",
    patentTwoTitle: "一种电子听诊器背景音干扰实时自动抵消方法",
    patentTwoAuthors: "蔡盛盛，胡南，刘仁雨，石珍，徐兴国",
    patentTwoVenue: "CN112190280A, 申请公布日 2021-01-08",
    patentLink: "[patent]",
    projectsTitle: "项目",
    projectOneTitle: "GROOT N1.5",
    projectOneDesc:
      "面向基础 pick-and-place 任务的策略验证，聚焦抓取稳定性、放置精度与整套动作链路的可靠执行。",
    projectTwoTitle: "OpenPI",
    projectTwoDesc:
      "围绕 pick-and-place 与 peg-in-hole 两类任务开展部署，重点观察策略在位姿偏差与接触阶段下的泛化表现。",
    projectThreeTitle: "DP",
    projectThreeDesc:
      "用于 USB insertion 任务的扩散策略部署，关注接触阶段的对位精度、插入稳定性与任务成功率。",
    projectFourTitle: "ACT",
    projectFourDesc:
      "在积木堆叠任务上进行策略复现与调试，重点验证时序控制、末端稳定性与连续动作衔接。",
    projectFiveTitle: "RL + OpenPI + DAgger",
    projectFiveDesc:
      "面向 insertion 任务结合强化学习与 DAgger 进行后训练，持续优化真机表现与数据闭环效率。",
    projectSixTitle: "UMI / 万象套件",
    projectSixDesc:
      "基于 UMI 与万象套件开展擦拭、花瓶抓放与堆叠等任务，探索无本体数采到真机部署的迁移路径。",
    projectSevenTitle: "VT-Touch / Parquet",
    projectSevenDesc:
      "面向视觉-触觉联合感知的策略探索，关注接触判断、细粒度操作以及跨场景迁移能力。",
    footer: "© 2026 Liu Renyu. Bilingual academic/tech homepage.",
  },
  en: {
    brand: "Liu Renyu",
    navAbout: "About",
    navNews: "Experience",
    navPublications: "Publications",
    navProjects: "Projects",
    navPatents: "Patents",
    navContact: "Contact",
    name: "Liu Renyu",
    headline: "Robotics and Embodied AI Algorithm Engineer",
    affiliation: "Suzhou, Jiangsu, China",
    education: "M.Eng. in Electronics and Communication Engineering, Soochow University",
    email: "renyu6708@gmail.com",
    cvLink: "Curriculum Vitae",
    focusText:
      "Interested in vision algorithms, diffusion, VLA, and WM\nInterested in vision-tactile, force-aware, and related multimodal applications\nInterested in UMI, EGO, and progress in cross-embodiment data collection",
    introOne:
      "I currently focus on embodied algorithms such as VLA, WM, and DP, covering research, deployment, and real-world validation. These systems have been deployed and debugged on robot arms including Dobot, Realman, UR, Rokae, and Tianji, along with grippers and dexterous hands from Dahuan, Robotiq, Zhixing, Lingxin Qiaoshou, and Zhaowei.",
    introTwo:
      "Over the past period, I have been exploring multi-task generalization in VLA, embodiment-free data collection pipelines such as UMI and EGO, cross-embodiment transfer, and tactile-modal fusion.",
    introThree:
      "I am currently exploring post-training with real-world reinforcement learning to improve task success rates and build a human-in-the-loop data flywheel with DAgger intervention.",
    newsTitle: "Experience",
    newsOne: "2025-09 to present: Shanghai VITAI Technology Co., Ltd.",
    newsTwo: "2024-06 to 2025-09: Suzhou TZTEK Technology Co., Ltd.",
    newsThree: "2021-07 to 2024-06: Glodon Technology Co., Ltd.",
    publicationsTitle: "Selected Publications",
    pubOneTitle: "Machine-Learning-based Aortic Stenosis Detection for Electronic Stethoscope",
    pubOneAuthors: "Zhen Shi, Neng Dai, Renyu Liu, Jiajun Wang, Shengsheng Cai, Nan Hu",
    pubOneVenue: "2021 13th International Conference on Wireless Communications and Signal Processing (WCSP)",
    pubTwoTitle: "Detection of Adventitious Respiratory Sounds based on Convolutional Neural Network",
    pubTwoAuthors: "Renyu Liu, Shengsheng Cai, Kexin Zhang, Nan Hu",
    pubTwoVenue: "2019 4th International Conference on Intelligent Informatics and Biomedical Sciences (ICIIBMS)",
    pubThreeTitle: "The Automatic Repairing Method Addressing Clipping Distortions and Frictional Noises in Electronic Stethoscope",
    pubThreeAuthors: "Ning Zhou, Jiajun Wang, Bing Sun, Renyu Liu, Nan Hu",
    pubThreeVenue: "IEEE Conference Paper, 2019",
    paperLink: "[paper]",
    patentsTitle: "Patents",
    patentOneTitle:
      "AI-based Real-time Classification Method, System, Device, and Readable Storage Medium for Pulmonary Adventitious Sounds in an Electronic Stethoscope",
    patentOneAuthors: "Shengsheng Cai, Nan Hu, Renyu Liu, Xingguo Xu",
    patentOneVenue: "CN110970042A, publication date 2020-04-07",
    patentTwoTitle:
      "Real-time Automatic Cancellation Method for Background Noise Interference in an Electronic Stethoscope",
    patentTwoAuthors: "Shengsheng Cai, Nan Hu, Renyu Liu, Zhen Shi, Xingguo Xu",
    patentTwoVenue: "CN112190280A, publication date 2021-01-08",
    patentLink: "[patent]",
    projectsTitle: "Projects",
    projectOneTitle: "GROOT N1.5",
    projectOneDesc:
      "Policy validation for basic pick-and-place tasks, focusing on grasp stability, placement accuracy, and reliable end-to-end execution.",
    projectTwoTitle: "OpenPI",
    projectTwoDesc:
      "Deployment around pick-and-place and peg-in-hole tasks, with attention to generalization under pose offsets and contact-rich stages.",
    projectThreeTitle: "DP",
    projectThreeDesc:
      "Diffusion-policy deployment for USB insertion, focusing on alignment precision, contact stability, and task success rate.",
    projectFourTitle: "ACT",
    projectFourDesc:
      "Policy reproduction and debugging for block stacking, with emphasis on timing control, end-effector stability, and motion continuity.",
    projectFiveTitle: "RL + OpenPI + DAgger",
    projectFiveDesc:
      "Post-training for insertion tasks by combining reinforcement learning and DAgger to improve real-world performance and data-loop efficiency.",
    projectSixTitle: "UMI / Wanxiang Toolkit",
    projectSixDesc:
      "Tasks based on UMI and the Wanxiang toolkit, including wiping, vase pick-and-place, and stacking, to explore transfer from embodiment-free data collection to deployment.",
    projectSevenTitle: "VT-Touch / Parquet",
    projectSevenDesc:
      "Exploration of vision-tactile policy learning with attention to contact understanding, fine-grained manipulation, and cross-scenario transfer.",
    footer: "© 2026 Liu Renyu. Bilingual academic/tech homepage.",
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
