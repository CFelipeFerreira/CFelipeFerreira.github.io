import { createContext, useContext, useState } from 'react';

export type Language = 'pt' | 'en' | 'es' | 'fr' | 'it' | 'ja' | 'zh' | 'ko' | 'ru' | 'tlh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Header
    about: "Sobre",
    projects: "Projetos", 
    skills: "Skills",
    contact: "Contato",
    
    // Hero
    hello: "Olá, eu sou",
    subtitle: "Desenvolvedor Fullstack apaixonado por transformar ideias em soluções digitais",
    viewProjects: "Ver Projetos",
    downloadCV: "Baixar CV",
    
    // About
    aboutTitle: "Sobre",
    aboutMe: "Mim",
    aboutDescription: "Desenvolvedor Fullstack com mais de 3 anos de experiência criando aplicações web modernas e escaláveis. Especializado em React, Node.js e tecnologias cloud, sempre buscando as melhores práticas e soluções inovadoras.",
    
    // Skills
    skillsTitle: "Minhas",
    frontend: "Frontend",
    backend: "Backend",
    databaseTools: "Database & Tools",
    
    // Projects
    projectsTitle: "Meus",
    ecommerceTitle: "E-commerce Platform",
    ecommerceDesc: "Plataforma completa de e-commerce com carrinho, pagamentos e painel administrativo.",
    taskAppTitle: "Task Management App",
    taskAppDesc: "Aplicativo de gerenciamento de tarefas com interface kanban e colaboração em tempo real.",
    dashboardTitle: "Analytics Dashboard",
    dashboardDesc: "Dashboard interativo para análise de dados com gráficos dinâmicos e relatórios em tempo real.",
    code: "Código",
    demo: "Demo",
    
    // Contact
    contactTitle: "Entre em",
    contactSubtitle: "Contato",
    contactDescription: "Pronto para transformar sua ideia em realidade? Vamos conversar!",
    name: "Nome",
    email: "Email",
    message: "Mensagem",
    send: "Enviar Mensagem",
    
    // Footer
    allRights: "Todos os direitos reservados."
  },
  
  en: {
    about: "About",
    projects: "Projects",
    skills: "Skills", 
    contact: "Contact",
    hello: "Hello, I'm",
    subtitle: "Fullstack Developer passionate about transforming ideas into digital solutions",
    viewProjects: "View Projects",
    downloadCV: "Download CV",
    aboutTitle: "About",
    aboutMe: "Me",
    aboutDescription: "Fullstack Developer with over 3 years of experience creating modern and scalable web applications. Specialized in React, Node.js and cloud technologies, always seeking best practices and innovative solutions.",
    skillsTitle: "My",
    frontend: "Frontend",
    backend: "Backend", 
    databaseTools: "Database & Tools",
    projectsTitle: "My",
    ecommerceTitle: "E-commerce Platform",
    ecommerceDesc: "Complete e-commerce platform with cart, payments and administrative panel.",
    taskAppTitle: "Task Management App",
    taskAppDesc: "Task management application with kanban interface and real-time collaboration.",
    dashboardTitle: "Analytics Dashboard",
    dashboardDesc: "Interactive dashboard for data analysis with dynamic charts and real-time reports.",
    code: "Code",
    demo: "Demo",
    contactTitle: "Get in",
    contactSubtitle: "Touch",
    contactDescription: "Ready to turn your idea into reality? Let's talk!",
    name: "Name",
    email: "Email",
    message: "Message", 
    send: "Send Message",
    allRights: "All rights reserved."
  },
  
  es: {
    about: "Acerca",
    projects: "Proyectos",
    skills: "Habilidades",
    contact: "Contacto",
    hello: "Hola, soy",
    subtitle: "Desarrollador Fullstack apasionado por transformar ideas en soluciones digitales",
    viewProjects: "Ver Proyectos",
    downloadCV: "Descargar CV",
    aboutTitle: "Acerca",
    aboutMe: "de Mí",
    aboutDescription: "Desarrollador Fullstack con más de 3 años de experiencia creando aplicaciones web modernas y escalables. Especializado en React, Node.js y tecnologías cloud, siempre buscando las mejores prácticas y soluciones innovadoras.",
    skillsTitle: "Mis",
    frontend: "Frontend",
    backend: "Backend",
    databaseTools: "Base de Datos y Herramientas",
    projectsTitle: "Mis",
    ecommerceTitle: "Plataforma E-commerce",
    ecommerceDesc: "Plataforma completa de e-commerce con carrito, pagos y panel administrativo.",
    taskAppTitle: "App de Gestión de Tareas",
    taskAppDesc: "Aplicación de gestión de tareas con interfaz kanban y colaboración en tiempo real.",
    dashboardTitle: "Dashboard de Analíticas",
    dashboardDesc: "Dashboard interactivo para análisis de datos con gráficos dinámicos e informes en tiempo real.",
    code: "Código",
    demo: "Demo",
    contactTitle: "Ponte en",
    contactSubtitle: "Contacto",
    contactDescription: "¿Listo para convertir tu idea en realidad? ¡Hablemos!",
    name: "Nombre",
    email: "Email",
    message: "Mensaje",
    send: "Enviar Mensaje",
    allRights: "Todos los derechos reservados."
  },
  
  fr: {
    about: "À propos",
    projects: "Projets",
    skills: "Compétences",
    contact: "Contact",
    hello: "Bonjour, je suis",
    subtitle: "Développeur Fullstack passionné par la transformation d'idées en solutions digitales",
    viewProjects: "Voir les Projets",
    downloadCV: "Télécharger CV",
    aboutTitle: "À propos",
    aboutMe: "de Moi",
    aboutDescription: "Développeur Fullstack avec plus de 3 ans d'expérience dans la création d'applications web modernes et évolutives. Spécialisé en React, Node.js et technologies cloud, toujours à la recherche des meilleures pratiques et solutions innovantes.",
    skillsTitle: "Mes",
    frontend: "Frontend",
    backend: "Backend",
    databaseTools: "Base de Données et Outils",
    projectsTitle: "Mes",
    ecommerceTitle: "Plateforme E-commerce",
    ecommerceDesc: "Plateforme e-commerce complète avec panier, paiements et panneau administratif.",
    taskAppTitle: "App de Gestion de Tâches",
    taskAppDesc: "Application de gestion de tâches avec interface kanban et collaboration en temps réel.",
    dashboardTitle: "Tableau de Bord Analytique",
    dashboardDesc: "Tableau de bord interactif pour l'analyse de données avec graphiques dynamiques et rapports en temps réel.",
    code: "Code",
    demo: "Demo",
    contactTitle: "Entrer en",
    contactSubtitle: "Contact",
    contactDescription: "Prêt à transformer votre idée en réalité ? Parlons-en !",
    name: "Nom",
    email: "Email",
    message: "Message",
    send: "Envoyer le Message",
    allRights: "Tous droits réservés."
  },
  
  it: {
    about: "Chi sono",
    projects: "Progetti",
    skills: "Competenze",
    contact: "Contatto",
    hello: "Ciao, sono",
    subtitle: "Sviluppatore Fullstack appassionato di trasformare idee in soluzioni digitali",
    viewProjects: "Vedi Progetti",
    downloadCV: "Scarica CV",
    aboutTitle: "Chi",
    aboutMe: "Sono",
    aboutDescription: "Sviluppatore Fullstack con oltre 3 anni di esperienza nella creazione di applicazioni web moderne e scalabili. Specializzato in React, Node.js e tecnologie cloud, sempre alla ricerca delle migliori pratiche e soluzioni innovative.",
    skillsTitle: "Le Mie",
    frontend: "Frontend",
    backend: "Backend",
    databaseTools: "Database e Strumenti",
    projectsTitle: "I Miei",
    ecommerceTitle: "Piattaforma E-commerce",
    ecommerceDesc: "Piattaforma e-commerce completa con carrello, pagamenti e pannello amministrativo.",
    taskAppTitle: "App di Gestione Attività",
    taskAppDesc: "Applicazione di gestione attività con interfaccia kanban e collaborazione in tempo reale.",
    dashboardTitle: "Dashboard Analytics",
    dashboardDesc: "Dashboard interattiva per l'analisi dei dati con grafici dinamici e report in tempo reale.",
    code: "Codice",
    demo: "Demo",
    contactTitle: "Mettiti in",
    contactSubtitle: "Contatto",
    contactDescription: "Pronto a trasformare la tua idea in realtà? Parliamone!",
    name: "Nome",
    email: "Email",
    message: "Messaggio",
    send: "Invia Messaggio",
    allRights: "Tutti i diritti riservati."
  },
  
  ja: {
    about: "について",
    projects: "プロジェクト",
    skills: "スキル",
    contact: "連絡先",
    hello: "こんにちは、私は",
    subtitle: "アイデアをデジタルソリューションに変えることに情熱を注ぐフルスタック開発者",
    viewProjects: "プロジェクトを見る",
    downloadCV: "履歴書をダウンロード",
    aboutTitle: "私",
    aboutMe: "について",
    aboutDescription: "モダンでスケーラブルなWebアプリケーションの作成に3年以上の経験を持つフルスタック開発者。React、Node.js、クラウド技術を専門とし、常にベストプラクティスと革新的なソリューションを追求しています。",
    skillsTitle: "私の",
    frontend: "フロントエンド",
    backend: "バックエンド",
    databaseTools: "データベース & ツール",
    projectsTitle: "私の",
    ecommerceTitle: "Eコマースプラットフォーム",
    ecommerceDesc: "カート、決済、管理パネルを備えた完全なeコマースプラットフォーム。",
    taskAppTitle: "タスク管理アプリ",
    taskAppDesc: "かんばんインターフェースとリアルタイムコラボレーションを備えたタスク管理アプリケーション。",
    dashboardTitle: "分析ダッシュボード",
    dashboardDesc: "動的グラフとリアルタイムレポートを備えたデータ分析用のインタラクティブダッシュボード。",
    code: "コード",
    demo: "デモ",
    contactTitle: "お",
    contactSubtitle: "問い合わせ",
    contactDescription: "あなたのアイデアを現実に変える準備はできていますか？話しましょう！",
    name: "名前",
    email: "メール",
    message: "メッセージ",
    send: "メッセージを送信",
    allRights: "全著作権所有。"
  },
  
  zh: {
    about: "关于",
    projects: "项目",
    skills: "技能",
    contact: "联系",
    hello: "你好，我是",
    subtitle: "热衷于将想法转化为数字解决方案的全栈开发者",
    viewProjects: "查看项目",
    downloadCV: "下载简历",
    aboutTitle: "关于",
    aboutMe: "我",
    aboutDescription: "拥有3年以上经验的全栈开发者，专注于创建现代可扩展的Web应用程序。专精React、Node.js和云技术，始终追求最佳实践和创新解决方案。",
    skillsTitle: "我的",
    frontend: "前端",
    backend: "后端",
    databaseTools: "数据库和工具",
    projectsTitle: "我的",
    ecommerceTitle: "电商平台",
    ecommerceDesc: "具有购物车、支付和管理面板的完整电商平台。",
    taskAppTitle: "任务管理应用",
    taskAppDesc: "具有看板界面和实时协作的任务管理应用程序。",
    dashboardTitle: "分析仪表板",
    dashboardDesc: "用于数据分析的交互式仪表板，具有动态图表和实时报告。",
    code: "代码",
    demo: "演示",
    contactTitle: "联系",
    contactSubtitle: "我",
    contactDescription: "准备好将您的想法变为现实吗？让我们谈谈！",
    name: "姓名",
    email: "邮箱",
    message: "消息",
    send: "发送消息",
    allRights: "版权所有。"
  },
  
  ko: {
    about: "소개",
    projects: "프로젝트",
    skills: "스킬",
    contact: "연락처",
    hello: "안녕하세요, 저는",
    subtitle: "아이디어를 디지털 솔루션으로 변환하는 것에 열정적인 풀스택 개발자",
    viewProjects: "프로젝트 보기",
    downloadCV: "이력서 다운로드",
    aboutTitle: "나에",
    aboutMe: "대해",
    aboutDescription: "현대적이고 확장 가능한 웹 애플리케이션 제작에 3년 이상의 경험을 가진 풀스택 개발자입니다. React, Node.js 및 클라우드 기술을 전문으로 하며, 항상 모범 사례와 혁신적인 솔루션을 추구합니다.",
    skillsTitle: "나의",
    frontend: "프론트엔드",
    backend: "백엔드",
    databaseTools: "데이터베이스 & 도구",
    projectsTitle: "나의",
    ecommerceTitle: "전자상거래 플랫폼",
    ecommerceDesc: "장바구니, 결제 및 관리 패널을 갖춘 완전한 전자상거래 플랫폼.",
    taskAppTitle: "작업 관리 앱",
    taskAppDesc: "칸반 인터페이스와 실시간 협업을 갖춘 작업 관리 애플리케이션.",
    dashboardTitle: "분석 대시보드",
    dashboardDesc: "동적 차트와 실시간 보고서를 갖춘 데이터 분석용 대화형 대시보드.",
    code: "코드",
    demo: "데모",
    contactTitle: "연락",
    contactSubtitle: "하기",
    contactDescription: "당신의 아이디어를 현실로 바꿀 준비가 되셨나요? 이야기해 봅시다!",
    name: "이름",
    email: "이메일",
    message: "메시지",
    send: "메시지 보내기",
    allRights: "모든 권리 보유."
  },
  
  ru: {
    about: "Обо мне",
    projects: "Проекты",
    skills: "Навыки",
    contact: "Контакты",
    hello: "Привет, я",
    subtitle: "Fullstack разработчик, увлеченный превращением идей в цифровые решения",
    viewProjects: "Посмотреть проекты",
    downloadCV: "Скачать резюме",
    aboutTitle: "Обо",
    aboutMe: "мне",
    aboutDescription: "Fullstack разработчик с более чем 3-летним опытом создания современных и масштабируемых веб-приложений. Специализируюсь на React, Node.js и облачных технологиях, всегда стремлюсь к лучшим практикам и инновационным решениям.",
    skillsTitle: "Мои",
    frontend: "Фронтенд",
    backend: "Бэкенд",
    databaseTools: "База данных и инструменты",
    projectsTitle: "Мои",
    ecommerceTitle: "E-commerce платформа",
    ecommerceDesc: "Полная платформа электронной коммерции с корзиной, платежами и административной панелью.",
    taskAppTitle: "Приложение управления задачами",
    taskAppDesc: "Приложение для управления задачами с интерфейсом kanban и совместной работой в реальном времени.",
    dashboardTitle: "Аналитическая панель",
    dashboardDesc: "Интерактивная панель для анализа данных с динамическими графиками и отчетами в реальном времени.",
    code: "Код",
    demo: "Демо",
    contactTitle: "Связаться",
    contactSubtitle: "со мной",
    contactDescription: "Готовы превратить вашу идею в реальность? Давайте поговорим!",
    name: "Имя",
    email: "Email",
    message: "Сообщение",
    send: "Отправить сообщение",
    allRights: "Все права защищены."
  },
  
  tlh: {
    about: "jup",
    projects: "jup maH",
    skills: "nugh",
    contact: "jup",
    hello: "nuqneH, jIH",
    subtitle: "naDev digital DIch chenmoH naQ chenmoH DIch",
    viewProjects: "maH legh",
    downloadCV: "nav teywI' naDev",
    aboutTitle: "jup",
    aboutMe: "jIH",
    aboutDescription: "DIch chenmoHwI' DIch chenmoH nugh naDev chenmoH DIch. React, Node.js DIch lo'taHvIS, reD nugh DIch lo'taHvIS, nugh naDev DIch chenmoH.",
    skillsTitle: "jIj",
    frontend: "Frontend",
    backend: "Backend",
    databaseTools: "nugh malja' DIch",
    projectsTitle: "jIj",
    ecommerceTitle: "DIch maH nugh",
    ecommerceDesc: "DIch maH nugh DIch chenmoH DIch.",
    taskAppTitle: "DIch maH nugh",
    taskAppDesc: "DIch maH nugh kanban DIch chenmoH.",
    dashboardTitle: "DIch nugh malja'",
    dashboardDesc: "DIch nugh malja' DIch chenmoH DIch.",
    code: "nugh",
    demo: "cha'",
    contactTitle: "jup",
    contactSubtitle: "DIch",
    contactDescription: "naDev chenmoH DIch? jatlhqa'!",
    name: "pagh",
    email: "nav",
    message: "nugh",
    send: "nugh naDev",
    allRights: "Hoch DIch."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'pt';
  });

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};