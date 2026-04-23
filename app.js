// ─── DATA ─────────────────────────────────────────────
const AVATARS = Array.from({ length: 12 }, (_, i) => `https://i.pravatar.cc/100?img=${i + 1}`);

let collaborators = [
    { id: 1, name: "Ana Lima", role: "Gerente Comercial", team: "Comercial", status: "online", tasks: 12, done: 9, avatar: "https://i.pravatar.cc/100?img=1", phone: "46991110001" },
    { id: 2, name: "Bruno Mendes", role: "Analista de Negócios", team: "Comercial", status: "busy", tasks: 7, done: 5, avatar: "https://i.pravatar.cc/100?img=2", phone: "46991110002" },
    { id: 3, name: "Carla Souza", role: "Coordenadora de Marketing", team: "Marketing", status: "online", tasks: 15, done: 11, avatar: "https://i.pravatar.cc/100?img=3", phone: "46991110003" },
    { id: 4, name: "Diego Santos", role: "Designer Gráfico", team: "Marketing", status: "online", tasks: 9, done: 7, avatar: "https://i.pravatar.cc/100?img=4", phone: "46991110004" },
    { id: 5, name: "Elena Costa", role: "Gerente de Projetos", team: "Projetos", status: "busy", tasks: 20, done: 14, avatar: "https://i.pravatar.cc/100?img=5", phone: "46991110005" },
    { id: 6, name: "Felipe Rocha", role: "Analista de Projetos", team: "Projetos", status: "offline", tasks: 8, done: 6, avatar: "https://i.pravatar.cc/100?img=6", phone: "46991110006" },
    { id: 7, name: "Giovanna Alves", role: "Analista Financeiro", team: "Financeiro", status: "online", tasks: 11, done: 10, avatar: "https://i.pravatar.cc/100?img=7", phone: "46991110007" },
    { id: 8, name: "Henrique Dias", role: "Controller", team: "Financeiro", status: "offline", tasks: 6, done: 4, avatar: "https://i.pravatar.cc/100?img=8", phone: "46991110008" },
    { id: 9, name: "Isabela Nunes", role: "Analista de RH", team: "RH", status: "online", tasks: 13, done: 8, avatar: "https://i.pravatar.cc/100?img=9", phone: "46991110009" },
    { id: 10, name: "João Ferreira", role: "Desenvolvedor Full-Stack", team: "TI", status: "online", tasks: 18, done: 15, avatar: "https://i.pravatar.cc/100?img=10", phone: "46991110010" },
    { id: 11, name: "Karen Vieira", role: "Analista de Suporte", team: "TI", status: "busy", tasks: 10, done: 7, avatar: "https://i.pravatar.cc/100?img=11", phone: "46991110011" },
    { id: 12, name: "Lucas Martins", role: "Estagiário de Marketing", team: "Marketing", status: "online", tasks: 5, done: 3, avatar: "https://i.pravatar.cc/100?img=12", phone: "46991110012" },
];

let teams = [
    { id: 1, name: "Comercial", desc: "Vendas e relacionamento com clientes", icon: "💼", color: "#3b82f6", members: [1, 2], tasks: 19, done: 14 },
    { id: 2, name: "Marketing", desc: "Marca, conteúdo e campanhas", icon: "📣", color: "#ec4899", members: [3, 4, 12], tasks: 29, done: 21 },
    { id: 3, name: "Projetos", desc: "Gestão e entrega de projetos", icon: "📋", color: "#8b5cf6", members: [5, 6], tasks: 28, done: 20 },
    { id: 4, name: "Financeiro", desc: "Controle e análise financeira", icon: "💰", color: "#10b981", members: [7, 8], tasks: 17, done: 14 },
    { id: 5, name: "RH", desc: "Pessoas, cultura e desenvolvimento", icon: "❤️", color: "#f59e0b", members: [9], tasks: 13, done: 8 },
    { id: 6, name: "TI", desc: "Tecnologia e infraestrutura", icon: "💻", color: "#06b6d4", members: [10, 11], tasks: 28, done: 22 },
];

let tasks = [
    { id: 1, title: "Fechar contrato com cliente X", desc: "Finalizar proposta e enviar para aprovação", status: "progress", priority: "alta", tag: "Comercial", due: "2025-04-30", assignee: "https://i.pravatar.cc/100?img=1" },
    { id: 2, title: "Criar campanha no Instagram", desc: "Posts para semana do cliente, 5 artes", status: "todo", priority: "media", tag: "Marketing", due: "2025-05-05", assignee: "https://i.pravatar.cc/100?img=3" },
    { id: 3, title: "Atualizar planilha financeira", desc: "Q1 2025 — receitas e despesas", status: "done", priority: "alta", tag: "Financeiro", due: "2025-04-22", assignee: "https://i.pravatar.cc/100?img=7" },
    { id: 4, title: "Onboarding novo colaborador", desc: "Preparar materiais e agenda de integração", status: "todo", priority: "media", tag: "RH", due: "2025-05-01", assignee: "https://i.pravatar.cc/100?img=9" },
    { id: 5, title: "Deploy sistema de gestão", desc: "Subir versão v2.1 em produção", status: "progress", priority: "alta", tag: "TI", due: "2025-04-28", assignee: "https://i.pravatar.cc/100?img=10" },
    { id: 6, title: "Reunião com fornecedores", desc: "Alinhar prazos e valores do Q2", status: "done", priority: "baixa", tag: "Comercial", due: "2025-04-20", assignee: "https://i.pravatar.cc/100?img=2" },
    { id: 7, title: "Relatório mensal de marketing", desc: "Métricas e performance de abril", status: "todo", priority: "media", tag: "Marketing", due: "2025-05-08", assignee: "https://i.pravatar.cc/100?img=4" },
    { id: 8, title: "Revisão de contrato de TI", desc: "Verificar cláusulas e prazos de renovação", status: "progress", priority: "baixa", tag: "Financeiro", due: "2025-05-15", assignee: "https://i.pravatar.cc/100?img=8" },
    { id: 9, title: "Treinar equipe Comercial", desc: "Workshop de técnicas de vendas — 3h", status: "todo", priority: "alta", tag: "Comercial", due: "2025-05-02", assignee: "https://i.pravatar.cc/100?img=1" },
    { id: 10, title: "Migração de banco de dados", desc: "Mover dados para novo servidor AWS", status: "done", priority: "alta", tag: "TI", due: "2025-04-19", assignee: "https://i.pravatar.cc/100?img=10" },
    { id: 11, title: "Pesquisa de satisfação", desc: "Enviar formulário para todos os clientes ativos", status: "done", priority: "media", tag: "RH", due: "2025-04-21", assignee: "https://i.pravatar.cc/100?img=9" },
    { id: 12, title: "Orçamento Q3 2025", desc: "Projeção e aprovação do orçamento do terceiro trimestre", status: "todo", priority: "alta", tag: "Financeiro", due: "2025-05-10", assignee: "https://i.pravatar.cc/100?img=7" },
];

// TICKETS DATA
let tickets = [
    { id: "TK-001", title: "Criar card de relatório semanal", desc: "Desenvolver componente visual para exibir KPIs semanais por equipe no dashboard.", status: "open", type: "Card/UI", priority: "alta", team: "Marketing", author: "Carla Souza", authorAvatar: "https://i.pravatar.cc/100?img=3", date: "2025-04-20" },
    { id: "TK-002", title: "Bug no filtro de colaboradores", desc: "Filtro por equipe não está funcionando corretamente em dispositivos móveis.", status: "inprog", type: "Bug", priority: "alta", team: "TI", author: "Karen Vieira", authorAvatar: "https://i.pravatar.cc/100?img=11", date: "2025-04-19" },
    { id: "TK-003", title: "Integração com Google Calendar", desc: "Sincronizar prazos de tarefas com o calendário do Google automaticamente.", status: "open", type: "Feature", priority: "media", team: "Projetos", author: "Elena Costa", authorAvatar: "https://i.pravatar.cc/100?img=5", date: "2025-04-18" },
    { id: "TK-004", title: "Adicionar campo de telefone nos perfis", desc: "Incluir campo WhatsApp nos cards de colaboradores para facilitar contato.", status: "done", type: "Melhoria", priority: "media", team: "RH", author: "Isabela Nunes", authorAvatar: "https://i.pravatar.cc/100?img=9", date: "2025-04-17" },
    { id: "TK-005", title: "Dashboard financeiro avançado", desc: "Criar página de métricas financeiras com gráficos de receita, despesas e margem.", status: "inprog", type: "Feature", priority: "alta", team: "Financeiro", author: "Giovanna Alves", authorAvatar: "https://i.pravatar.cc/100?img=7", date: "2025-04-16" },
    { id: "TK-006", title: "Exportar relatório de tarefas em PDF", desc: "Botão para exportar Kanban atual como PDF formatado.", status: "open", type: "Feature", priority: "baixa", team: "Projetos", author: "Felipe Rocha", authorAvatar: "https://i.pravatar.cc/100?img=6", date: "2025-04-15" },
    { id: "TK-007", title: "Notificações push em tempo real", desc: "Implementar websocket para notificações de tarefas sem recarregar a página.", status: "block", type: "Infraestrutura", priority: "alta", team: "TI", author: "João Ferreira", authorAvatar: "https://i.pravatar.cc/100?img=10", date: "2025-04-14" },
];

const activity = [
    { avatar: "https://i.pravatar.cc/100?img=10", text: "<strong>João Ferreira</strong> concluiu a tarefa <em>Migração de BD</em>", time: "Há 10 min", color: "#3b82f6" },
    { avatar: "https://i.pravatar.cc/100?img=3", text: "<strong>Carla Souza</strong> criou nova campanha no Instagram", time: "Há 45 min", color: "#ec4899" },
    { avatar: "https://i.pravatar.cc/100?img=1", text: "<strong>Ana Lima</strong> atualizou o status do contrato com cliente X", time: "Há 1h", color: "#10b981" },
    { avatar: "https://i.pravatar.cc/100?img=9", text: "<strong>Isabela Nunes</strong> adicionou novo colaborador ao RH", time: "Há 2h", color: "#f59e0b" },
    { avatar: "https://i.pravatar.cc/100?img=7", text: "<strong>Giovanna Alves</strong> fechou planilha financeira do Q1", time: "Há 3h", color: "#8b5cf6" },
];

const TEAM_COLORS = { Comercial: "#3b82f6", Marketing: "#ec4899", Projetos: "#8b5cf6", Financeiro: "#10b981", RH: "#f59e0b", TI: "#06b6d4" };
const PRIORITY_COLORS = { alta: "#ef4444", media: "#f59e0b", baixa: "#10b981" };
const STATUS_LABELS = { online: "Online", offline: "Offline", busy: "Ocupado" };

let currentUser = { name: "", team: "", role: "", isAdmin: false, isTI: false };
let currentFilter = "all";
let currentTicketFilter = "all";

// ─── SIDEBAR MOBILE ────────────────────────────────────
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebarOverlay').classList.toggle('open');
}
function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('open');
}

// ─── LOGIN ────────────────────────────────────────────
function login() {
    const name = document.getElementById("loginName").value.trim() || "Colaborador";
    const team = document.getElementById("loginTeam").value || "TI";
    const isAdmin = team === "admin";
    const isTI = team === "TI" || isAdmin;

    currentUser = { name, team: isAdmin ? "HabitPAY" : team, role: isAdmin ? "Administrador" : team, isAdmin, isTI };

    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("app").style.display = "flex";
    document.getElementById("sidebarName").textContent = name;
    document.getElementById("sidebarRole").textContent = currentUser.role;
    document.getElementById("sidebarAvatar").src = `https://i.pravatar.cc/100?img=${Math.floor(Math.random() * 70) + 1}`;
    document.getElementById("settingName").value = name;
    document.getElementById("settingTeam").value = currentUser.team;

    // Show tickets nav for TI / admin
    document.getElementById("navTickets").style.display = isTI ? "flex" : "none";

    // Set sector filter if not admin
    if (!isAdmin && team !== "") {
        setTimeout(() => {
            const btn = [...document.querySelectorAll("#collabFilters .filter-btn")].find(b => b.textContent === team || (team === "TI" && b.textContent === "TI"));
            if (btn) filterCollab(team, btn);
        }, 100);
    }

    const hour = new Date().getHours();
    const greet = hour < 12 ? "Bom dia" : hour < 18 ? "Boa tarde" : "Boa noite";
    document.getElementById("bannerGreeting").textContent = `${greet}, ${name.split(" ")[0]}! 👋`;
    const days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const now = new Date();
    document.getElementById("bannerDate").textContent = `${days[now.getDay()]}, ${now.getDate()} de ${months[now.getMonth()]} de ${now.getFullYear()} · HabitPAY`;

    renderAll();
}

function logout() {
    document.getElementById("app").style.display = "none";
    document.getElementById("loginScreen").style.display = "flex";
    document.getElementById("loginName").value = "";
    document.getElementById("loginPass").value = "";
    document.getElementById("chatPanel").classList.remove("open");
}

// ─── RENDER ───────────────────────────────────────────
function renderAll() {
    renderActivity();
    renderQuickTasks();
    renderTeamOverview();
    renderTopCollab();
    renderCollabGrid();
    renderTeamCards();
    renderKanban();
    renderTickets();
    renderChatList();
    updateStats();
}

function updateStats() {
    document.getElementById("statCollab").textContent = collaborators.length;
    document.getElementById("statDone").textContent = tasks.filter(t => t.status === "done").length;
    document.getElementById("statProgress").textContent = tasks.filter(t => t.status === "progress").length;
    document.getElementById("collabBadge").textContent = collaborators.length;
    document.getElementById("taskBadge").textContent = tasks.filter(t => t.status !== "done").length;
    document.getElementById("collabCountLabel").textContent = `${collaborators.length} colaboradores ativos`;
    // ticket badge
    const openTickets = tickets.filter(t => t.status === "open" || t.status === "block").length;
    document.getElementById("ticketBadge").textContent = openTickets;
}

function renderActivity() {
    document.getElementById("activityList").innerHTML = activity.map(a => `
          <div class="activity-item">
            <img class="act-avatar" src="${a.avatar}" alt="">
            <div class="act-content"><div class="act-text">${a.text}</div><div class="act-time">${a.time}</div></div>
            <div class="act-dot" style="background:${a.color}"></div>
          </div>`).join("");
}

function renderQuickTasks() {
    const el = document.getElementById("quickTasks");
    el.innerHTML = tasks.slice(0, 5).map(t => `
          <div class="task-mini">
            <div class="t-check ${t.status === "done" ? "done" : ""}" onclick="toggleTask(${t.id})">${t.status === "done" ? "✓" : ""}</div>
            <span class="t-text ${t.status === "done" ? "done" : ""}">${t.title}</span>
            <span class="t-tag" style="background:${TEAM_COLORS[t.tag]}22;color:${TEAM_COLORS[t.tag]}">${t.tag}</span>
          </div>`).join("");
}

function toggleTask(id) {
    const t = tasks.find(t => t.id === id);
    if (t) { t.status = t.status === "done" ? "todo" : "done"; renderAll(); }
}

function renderTeamOverview() {
    document.getElementById("teamOverview").innerHTML = teams.map(t => {
        const pct = Math.round((t.done / t.tasks) * 100);
        return `<div class="team-row">
            <div class="team-color" style="background:${t.color}"></div>
            <div class="team-info"><div class="t-name">${t.name}</div><div class="t-count">${t.members.length} colaboradores</div></div>
            <div class="team-progress"><div class="progress-bar"><div class="progress-fill" style="width:${pct}%;background:${t.color}"></div></div><div class="progress-label">${pct}% concluído</div></div>
          </div>`;
    }).join("");
}

function renderTopCollab() {
    const medals = ["🥇", "🥈", "🥉", "🏅"];
    document.getElementById("topCollab").innerHTML = [...collaborators].sort((a, b) => b.done - a.done).slice(0, 4).map((c, i) => {
        const pct = Math.round((c.done / c.tasks) * 100) || 0;
        return `<div class="team-row">
            <div style="font-size:20px;width:28px;text-align:center">${medals[i]}</div>
            <img src="${c.avatar}" style="width:32px;height:32px;border-radius:8px;object-fit:cover">
            <div class="team-info"><div class="t-name">${c.name}</div><div class="t-count">${c.done} tarefas concluídas</div></div>
            <div style="font-size:13px;font-weight:700;color:var(--green)">${pct}%</div>
          </div>`;
    }).join("");
}

function renderCollabGrid(filter) {
    filter = filter || currentFilter;
    currentFilter = filter;
    let list = filter === "all" ? collaborators : collaborators.filter(c => c.team === filter);
    document.getElementById("collabGrid").innerHTML = list.length ? list.map(c => {
        const pct = Math.round((c.done / c.tasks) * 100) || 0;
        const waLink = c.phone ? `https://wa.me/55${c.phone}` : "#";
        return `<div class="collab-card">
            <div class="collab-top">
              <img class="collab-avatar" src="${c.avatar}" alt="">
              <div style="flex:1">
                <div class="collab-name">${c.name}</div>
                <div class="collab-role">${c.role}</div>
                <span class="team-tag" style="background:${TEAM_COLORS[c.team]}22;color:${TEAM_COLORS[c.team]}">${c.team}</span>
              </div>
              <span class="status-badge ${c.status}"><span class="status-dot"></span>${STATUS_LABELS[c.status]}</span>
            </div>
            <div class="collab-divider"></div>
            <div class="collab-stats">
              <div class="collab-stat"><div class="cs-value">${c.tasks}</div><div class="cs-label">Tarefas</div></div>
              <div class="collab-stat"><div class="cs-value">${c.done}</div><div class="cs-label">Concluídas</div></div>
              <div class="collab-stat"><div class="cs-value">${pct}%</div><div class="cs-label">Taxa</div></div>
            </div>
            <div class="collab-actions">
              <a class="btn-whatsapp" href="${waLink}" target="_blank" ${!c.phone ? "onclick=\"showToast('Número não cadastrado','⚠️');return false\"" : ""}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
              <button class="btn-profile" onclick="showToast('👤 ${c.name} — ${c.role}','✅')">👁 Ver perfil</button>
            </div>
          </div>`;
    }).join("") : '<div style="grid-column:1/-1;text-align:center;color:var(--text3);padding:40px">Nenhum colaborador encontrado.</div>';
}

function filterCollab(filter, btn) {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderCollabGrid(filter);
}

function renderTeamCards() {
    document.getElementById("teamCards").innerHTML = teams.map(t => {
        const pct = Math.round((t.done / t.tasks) * 100) || 0;
        const members = t.members.map(id => collaborators.find(c => c.id === id)).filter(Boolean);
        const thumbs = members.slice(0, 4).map(m => `<img class="member-thumb" src="${m.avatar}" alt="${m.name}">`).join("");
        const extra = members.length > 4 ? `<div class="member-more">+${members.length - 4}</div>` : "";
        return `<div class="team-card">
            <div class="team-card-header">
              <div class="team-card-icon" style="background:${t.color}22">${t.icon}</div>
              <div><div class="team-card-name">${t.name}</div><div class="team-card-desc">${t.desc}</div></div>
            </div>
            <div class="team-card-body">
              <div class="team-members-row">${thumbs}${extra}</div>
              <div class="team-meta"><span>👥 ${t.members.length} colaboradores</span><span>✅ ${t.done}/${t.tasks} tarefas</span></div>
              <div class="team-progress-bar"><div class="team-progress-fill" style="width:${pct}%;background:${t.color}"></div></div>
            </div>
            <div class="team-footer"><div class="team-footer-label">Progresso</div><div class="team-footer-value" style="color:${t.color}">${pct}%</div></div>
          </div>`;
    }).join("");
}

function renderKanban() {
    const todo = tasks.filter(t => t.status === "todo");
    const progress = tasks.filter(t => t.status === "progress");
    const done = tasks.filter(t => t.status === "done");
    document.getElementById("todoCount").textContent = todo.length;
    document.getElementById("progressCount").textContent = progress.length;
    document.getElementById("doneCount").textContent = done.length;
    const renderCard = t => {
        const pc = PRIORITY_COLORS[t.priority] || "#64748b";
        const tc = TEAM_COLORS[t.tag] || "#64748b";
        return `<div class="task-card">
            <div class="task-card-top"><div class="task-card-title">${t.title}</div><div class="priority-dot" style="background:${pc}" title="Prioridade ${t.priority}"></div></div>
            <div class="task-card-desc">${t.desc}</div>
            <div class="task-card-footer">
              <img class="task-assignee" src="${t.assignee}" alt="">
              <span class="task-tag" style="background:${tc}22;color:${tc}">${t.tag}</span>
              <div class="task-due">📅 ${formatDate(t.due)}</div>
            </div>
          </div>`;
    };
    document.getElementById("col-todo").innerHTML = todo.map(renderCard).join("");
    document.getElementById("col-progress").innerHTML = progress.map(renderCard).join("");
    document.getElementById("col-done").innerHTML = done.map(renderCard).join("");
}

// ─── TICKETS ──────────────────────────────────────────
function renderTickets(filter) {
    filter = filter || currentTicketFilter;
    currentTicketFilter = filter;
    const list = filter === "all" ? tickets : tickets.filter(t => t.status === filter);
    const statusMap = { open: "Aberto", inprog: "Em progresso", done: "Concluído", block: "Bloqueado" };
    const badgeClass = { open: "open", inprog: "inprog", done: "done", block: "block" };
    const prioColor = { alta: "var(--red)", media: "var(--yellow)", baixa: "var(--green)" };

    // Update stats
    document.getElementById("tstat-open").textContent = tickets.filter(t => t.status === "open").length;
    document.getElementById("tstat-inprog").textContent = tickets.filter(t => t.status === "inprog").length;
    document.getElementById("tstat-done").textContent = tickets.filter(t => t.status === "done").length;
    document.getElementById("tstat-block").textContent = tickets.filter(t => t.status === "block").length;

    document.getElementById("ticketsGrid").innerHTML = list.length ? list.map(tk => `
          <div class="ticket-card">
            <div class="ticket-id">${tk.id}</div>
            <div class="ticket-body">
              <div class="ticket-title">${tk.title}</div>
              <div class="ticket-desc">${tk.desc}</div>
              <div class="ticket-meta">
                <span class="ticket-badge ${badgeClass[tk.status]}">${statusMap[tk.status]}</span>
                <span class="ticket-type">${tk.type}</span>
                <span style="font-size:10px;font-weight:700;color:${prioColor[tk.priority]}">● ${tk.priority.charAt(0).toUpperCase() + tk.priority.slice(1)}</span>
                <span class="ticket-author"><img src="${tk.authorAvatar}" alt=""> ${tk.author}</span>
                <span class="ticket-date">📅 ${formatDate(tk.date)}</span>
              </div>
            </div>
            <div class="ticket-actions-col">
              ${tk.status !== "inprog" && tk.status !== "done" ? `<button class="btn-ticket-action" onclick="updateTicket('${tk.id}','inprog')">▶ Iniciar</button>` : ""}
              ${tk.status === "inprog" ? `<button class="btn-ticket-action" onclick="updateTicket('${tk.id}','done')">✓ Concluir</button>` : ""}
              ${tk.status !== "block" && tk.status !== "done" ? `<button class="btn-ticket-action" onclick="updateTicket('${tk.id}','block')">⛔ Bloquear</button>` : ""}
              ${tk.status === "block" ? `<button class="btn-ticket-action" onclick="updateTicket('${tk.id}','open')">↩ Reabrir</button>` : ""}
            </div>
          </div>`).join("") : `<div class="tickets-empty"><div style="font-size:40px;margin-bottom:12px">🎉</div><div style="font-size:16px;font-weight:600;margin-bottom:6px">Nenhum ticket encontrado</div><div style="font-size:13px">Tudo em dia por aqui!</div></div>`;
}

function filterTickets(filter, btn) {
    document.querySelectorAll("#ticketFilters .filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderTickets(filter);
}

function updateTicket(id, newStatus) {
    const tk = tickets.find(t => t.id === id);
    if (tk) {
        tk.status = newStatus;
        renderTickets();
        updateStats();
        const labels = { open: "reaberto", inprog: "iniciado", done: "concluído", block: "bloqueado" };
        showToast(`Ticket ${id} ${labels[newStatus]}!`, newStatus === "done" ? "✅" : newStatus === "block" ? "⛔" : "▶");
    }
}

function showAddTicketModal() { document.getElementById("addTicketModal").classList.add("open") }

function addTicket() {
    const title = document.getElementById("ticketTitle").value.trim();
    if (!title) { showToast("Informe o título do ticket", "⚠️"); return; }
    const id = `TK-${String(tickets.length + 1).padStart(3, "0")}`;
    const collab = collaborators.find(c => c.team === currentUser.team) || collaborators[0];
    tickets.unshift({
        id, title,
        desc: document.getElementById("ticketDesc").value || "Sem descrição",
        status: "open",
        type: document.getElementById("ticketType").value,
        priority: document.getElementById("ticketPriority").value,
        team: document.getElementById("ticketTeam").value,
        author: currentUser.name,
        authorAvatar: document.getElementById("sidebarAvatar").src,
        date: new Date().toISOString().split("T")[0]
    });
    closeModal("addTicketModal");
    document.getElementById("ticketTitle").value = "";
    document.getElementById("ticketDesc").value = "";
    renderTickets();
    updateStats();
    showToast(`Ticket ${id} criado!`, "🎫");
}

// ─── CHAT ──────────────────────────────────────────────
function toggleChat() {
    document.getElementById("chatPanel").classList.toggle("open");
    if (document.getElementById("chatPanel").classList.contains("open")) renderChatList();
}

function renderChatList(search) {
    const q = (search || "").toLowerCase();
    let list = q ? collaborators.filter(c => c.name.toLowerCase().includes(q) || c.team.toLowerCase().includes(q)) : collaborators;
    const dotColor = { online: "#10b981", busy: "#f59e0b", offline: "#64748b" };
    document.getElementById("chatList").innerHTML = list.map(c => {
        const waLink = c.phone ? `https://wa.me/55${c.phone}` : "#";
        return `<div class="chat-contact">
            <div style="position:relative">
              <img class="chat-contact-avatar" src="${c.avatar}" alt="">
              <div class="chat-online-dot" style="background:${dotColor[c.status]}"></div>
            </div>
            <div class="chat-contact-info">
              <div class="chat-contact-name">${c.name}</div>
              <div class="chat-contact-role">${c.role}</div>
              <span class="chat-contact-team" style="background:${TEAM_COLORS[c.team]}22;color:${TEAM_COLORS[c.team]}">${c.team}</span>
            </div>
            <a class="chat-wa-btn" href="${waLink}" target="_blank" title="Abrir WhatsApp" ${!c.phone ? `onclick="showToast('Número não cadastrado','⚠️');return false"` : ""}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#25d366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>`;
    }).join("");
}

function formatDate(d) {
    if (!d) return "—";
    const [y, m, day] = d.split("-");
    return `${day}/${m}`;
}

// ─── NAVIGATION ───────────────────────────────────────
const PAGE_META = {
    dashboard: { title: "Dashboard", subtitle: "Visão geral da plataforma" },
    colaboradores: { title: "Colaboradores", subtitle: "Gerencie os membros da equipe" },
    equipes: { title: "Equipes", subtitle: "Estrutura e progresso das equipes" },
    tarefas: { title: "Tarefas", subtitle: "Kanban — acompanhe cada entrega" },
    tickets: { title: "Tickets Dev", subtitle: "Demandas abertas para o time de desenvolvimento" },
    configuracoes: { title: "Configurações", subtitle: "Conta e preferências" },
};

function navigate(page, el) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
    document.getElementById("page-" + page).classList.add("active");
    if (el) el.classList.add("active");
    const meta = PAGE_META[page];
    document.getElementById("pageTitle").textContent = meta.title;
    document.getElementById("pageSubtitle").textContent = meta.subtitle;
    if (page === "tickets") renderTickets();
}

// ─── MODALS ───────────────────────────────────────────
function showAddModal() { showAddTaskModal() }
function showAddTaskModal() { document.getElementById("addTaskModal").classList.add("open") }
function showAddCollabModal() { document.getElementById("addCollabModal").classList.add("open") }
function showAddTeamModal() { document.getElementById("addTeamModal").classList.add("open") }
function closeModal(id) { document.getElementById(id).classList.remove("open") }

document.querySelectorAll(".modal-overlay").forEach(m => {
    m.addEventListener("click", e => { if (e.target === m) m.classList.remove("open") });
});

function addTask() {
    const title = document.getElementById("taskTitle").value.trim();
    if (!title) { showToast("Informe o título da tarefa", "⚠️"); return; }
    tasks.unshift({
        id: Date.now(), title,
        desc: document.getElementById("taskDesc").value || "Sem descrição",
        status: document.getElementById("taskStatus").value,
        priority: document.getElementById("taskPriority").value,
        tag: document.getElementById("taskTag").value,
        due: document.getElementById("taskDue").value || "",
        assignee: `https://i.pravatar.cc/100?img=${Math.floor(Math.random() * 70) + 1}`,
    });
    closeModal("addTaskModal");
    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDesc").value = "";
    renderKanban(); renderQuickTasks(); updateStats();
    showToast("Tarefa criada com sucesso!", "✅");
}

function addCollab() {
    const name = document.getElementById("newCollabName").value.trim();
    if (!name) { showToast("Informe o nome do colaborador", "⚠️"); return; }
    const id = Date.now();
    collaborators.push({
        id, name,
        role: document.getElementById("newCollabRole").value || "Colaborador",
        team: document.getElementById("newCollabTeam").value,
        status: document.getElementById("newCollabStatus").value,
        tasks: 0, done: 0,
        avatar: `https://i.pravatar.cc/100?img=${Math.floor(Math.random() * 70) + 1}`,
        phone: document.getElementById("newCollabPhone").value.trim().replace(/\D/g, ""),
    });
    const team = teams.find(t => t.name === document.getElementById("newCollabTeam").value);
    if (team) team.members.push(id);
    closeModal("addCollabModal");
    document.getElementById("newCollabName").value = "";
    document.getElementById("newCollabPhone").value = "";
    renderCollabGrid(); renderTeamCards(); renderTopCollab(); updateStats(); renderChatList();
    showToast(`${name} adicionado(a)!`, "👋");
}

function addTeam() {
    const name = document.getElementById("newTeamName").value.trim();
    if (!name) { showToast("Informe o nome da equipe", "⚠️"); return; }
    const colors = ["#3b82f6", "#ec4899", "#8b5cf6", "#10b981", "#f59e0b", "#06b6d4", "#ef4444"];
    teams.push({
        id: Date.now(), name,
        desc: document.getElementById("newTeamDesc").value || "",
        icon: document.getElementById("newTeamIcon").value || "🏢",
        color: colors[teams.length % colors.length],
        members: [], tasks: 0, done: 0,
    });
    closeModal("addTeamModal");
    document.getElementById("newTeamName").value = "";
    renderTeamCards();
    showToast(`Equipe ${name} criada!`, "🏢");
}

// ─── SETTINGS ─────────────────────────────────────────
function settingsNav(section, el) {
    document.querySelectorAll(".settings-nav-item").forEach(i => i.classList.remove("active"));
    el.classList.add("active");
    ["perfil", "notificacoes", "aparencia", "seguranca"].forEach(s => {
        const el2 = document.getElementById("settings-" + s);
        if (el2) el2.style.display = s === section ? "block" : "none";
    });
}

function saveSettings() {
    const name = document.getElementById("settingName").value.trim();
    if (name) {
        currentUser.name = name;
        document.getElementById("sidebarName").textContent = name;
    }
    const phone = document.getElementById("settingPhone").value.trim().replace(/\D/g, "");
    showToast("Configurações salvas!", "✅");
}

// ─── SEARCH ───────────────────────────────────────────
function handleSearch(val) {
    if (!val) { renderCollabGrid(); return; }
    const v = val.toLowerCase();
    const list = collaborators.filter(c => c.name.toLowerCase().includes(v) || c.role.toLowerCase().includes(v) || c.team.toLowerCase().includes(v));
    const el = document.getElementById("collabGrid");
    el.innerHTML = list.map(c => {
        const pct = Math.round((c.done / c.tasks) * 100) || 0;
        const waLink = c.phone ? `https://wa.me/55${c.phone}` : "#";
        return `<div class="collab-card">
            <div class="collab-top">
              <img class="collab-avatar" src="${c.avatar}" alt="">
              <div style="flex:1"><div class="collab-name">${c.name}</div><div class="collab-role">${c.role}</div><span class="team-tag" style="background:${TEAM_COLORS[c.team]}22;color:${TEAM_COLORS[c.team]}">${c.team}</span></div>
              <span class="status-badge ${c.status}"><span class="status-dot"></span>${STATUS_LABELS[c.status]}</span>
            </div>
            <div class="collab-divider"></div>
            <div class="collab-stats">
              <div class="collab-stat"><div class="cs-value">${c.tasks}</div><div class="cs-label">Tarefas</div></div>
              <div class="collab-stat"><div class="cs-value">${c.done}</div><div class="cs-label">Concluídas</div></div>
              <div class="collab-stat"><div class="cs-value">${pct}%</div><div class="cs-label">Taxa</div></div>
            </div>
            <div class="collab-actions">
              <a class="btn-whatsapp" href="${waLink}" target="_blank">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
              <button class="btn-profile" onclick="showToast('👤 ${c.name}','✅')">👁 Ver perfil</button>
            </div>
          </div>`;
    }).join("") || '<div style="grid-column:1/-1;text-align:center;color:var(--text3);padding:40px">Nenhum resultado encontrado.</div>';
    if (val.length > 0) navigate("colaboradores", document.querySelector(".nav-item:nth-child(2)"));
}

// ─── TOAST ────────────────────────────────────────────
function showToast(msg, icon = "✅") {
    const t = document.getElementById("toast");
    document.getElementById("toastMsg").textContent = msg;
    document.getElementById("toastIcon").textContent = icon;
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 3000);
}

function exportCollab() { showToast("Exportação iniciada! (CSV)", "📥") }