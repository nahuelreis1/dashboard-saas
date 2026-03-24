import React from 'react';
import { 
  MessageSquare, 
  Sparkles, 
  Users,
  ArrowUpRight, 
  ArrowDownRight, 
  Phone,
  MoreVertical
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

// --- Types ---
interface MetricCardProps {
  title: string;
  value: string | number;
  change: string;
  trend: 'up' | 'down';
  icon: React.ElementType;
}

interface Conversation {
  id: string;
  phone: string;
  time: string;
  action: 'Continuar' | 'Derivar' | 'Finalizar' | 'Encuesta' | 'Presupuesto';
  aiSummary: string;
}

// --- Dummy Data ---
const topMetrics = [
  { title: 'Conversaciones Atendidas', value: 147, change: '12%', trend: 'up', icon: MessageSquare },
  { title: 'Resolución por IA', value: '85%', change: '5%', trend: 'up', icon: Sparkles },
  { title: 'Derivaciones a Humanos', value: 22, change: '2%', trend: 'down', icon: Users },
];

const agentActionsData = [
  { name: 'Continuar', value: 45, color: 'var(--color-accent-base, #3b82f6)' }, // Blue
  { name: 'Derivar', value: 22, color: '#f59e0b' }, // Amber
  { name: 'Finalizar', value: 60, color: '#10b981' }, // Emerald
  { name: 'Encuesta', value: 10, color: '#6366f1' }, // Indigo
  { name: 'Presupuesto', value: 10, color: '#8b5cf6' }, // Violet
];

const dailyData = [
  { day: 'Lun', conversations: 45 },
  { day: 'Mar', conversations: 52 },
  { day: 'Mié', conversations: 38 },
  { day: 'Jue', conversations: 65 },
  { day: 'Vie', conversations: 48 },
  { day: 'Sáb', conversations: 25 },
  { day: 'Dom', conversations: 18 },
];

const latestConversations: Conversation[] = [
  { 
    id: '1', 
    phone: '+54 341 *** 8300', 
    time: '14:22', 
    action: 'Presupuesto',
    aiSummary: 'El cliente consultó por precios de griferías FV y se le envió el PDF de la línea Puelo con un presupuesto estimado.'
  },
  { 
    id: '2', 
    phone: '+54 11 *** 9211', 
    time: '14:15', 
    action: 'Finalizar',
    aiSummary: 'Se resolvieron las dudas sobre horarios de entrega y el cliente agradeció la información.'
  },
  { 
    id: '3', 
    phone: '+34 612 *** 455', 
    time: '13:50', 
    action: 'Derivar',
    aiSummary: 'Cliente molesto por una demora en el envío de un pedido mayorista. Solicita hablar urgente con un representante comercial.'
  },
  { 
    id: '4', 
    phone: '+54 341 *** 1122', 
    time: '13:42', 
    action: 'Continuar',
    aiSummary: 'El usuario está explorando el catálogo de pisos flotantes. Todavía no tomó una decisión de compra.'
  },
  { 
    id: '5', 
    phone: '+1 415 *** 0099', 
    time: '12:30', 
    action: 'Encuesta',
    aiSummary: 'Compra finalizada con éxito. Se le envió la encuesta de satisfacción sobre la atención del bot.'
  },
];

// --- Components ---

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, trend, icon: Icon }) => (
  <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5 flex flex-col gap-2 shadow-sm transition-all hover:shadow-md">
    <div className="flex justify-between items-start">
      <div className="p-2 bg-accent/10 rounded-lg text-accent">
        <Icon size={20} className="text-[var(--color-accent-base)]" />
      </div>
      <div className={`flex items-center gap-1 text-xs font-medium ${trend === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
        {trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        {change}
      </div>
    </div>
    <div className="mt-2">
      <p className="text-sm text-muted-foreground font-medium">{title}</p>
      <h3 className="text-2xl font-bold tracking-tight">{value}</h3>
    </div>
  </div>
);

const ActionBadge: React.FC<{ action: Conversation['action'] }> = ({ action }) => {
  const styles = {
    Continuar: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    Derivar: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    Finalizar: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    Encuesta: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20',
    Presupuesto: 'bg-violet-500/10 text-violet-500 border-violet-500/20',
  };

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${styles[action]}`}>
      {action}
    </span>
  );
};

const MetricsDashboard: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 p-6 min-h-screen bg-[var(--background)] text-foreground">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard de Métricas</h1>
        <p className="text-muted-foreground">Monitoreo en tiempo real de la actividad del agente IA.</p>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {topMetrics.map((metric, idx) => (
          <MetricCard key={idx} {...metric} trend={metric.trend as 'up' | 'down'} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Pie Chart */}
        <div className="lg:col-span-5 bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-6">Distribución de Decisiones</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={agentActionsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {agentActionsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: '8px' }}
                  itemStyle={{ color: 'var(--foreground)' }}
                />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="lg:col-span-7 bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-6">Conversaciones por Día</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dailyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" opacity={0.5} />
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: 'var(--muted-foreground)' }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: 'var(--muted-foreground)' }} 
                  dx={-10}
                />
                <Tooltip 
                   cursor={{ fill: 'var(--color-accent-base)', opacity: 0.1 }}
                   contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: '8px' }}
                   itemStyle={{ color: 'var(--foreground)' }}
                />
                <Bar 
                  dataKey="conversations" 
                  fill="var(--color-accent-base, #3b82f6)" 
                  radius={[4, 4, 0, 0]} 
                  barSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Latest Conversations Table */}
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-[var(--border)] flex justify-between items-center">
          <h3 className="text-lg font-semibold">Feed de Control</h3>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <MoreVertical size={20} />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/30 text-muted-foreground text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-medium">Teléfono</th>
                <th className="px-6 py-4 font-medium">Hora</th>
                <th className="px-6 py-4 font-medium">Acción</th>
                <th className="px-6 py-4 font-medium">Resumen de la IA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {latestConversations.map((conv) => (
                <tr key={conv.id} className="hover:bg-muted/10 transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        <Phone size={14} />
                      </div>
                      <span className="text-sm font-medium">{conv.phone}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                    {conv.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <ActionBadge action={conv.action} />
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground min-w-[300px]">
                    {conv.aiSummary}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-[var(--border)] text-center">
          <button className="text-sm text-[var(--color-accent-base)] font-medium hover:underline">
            Ver todo el historial
          </button>
        </div>
      </div>
    </div>
  );
};

export default MetricsDashboard;