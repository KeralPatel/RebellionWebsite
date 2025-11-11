import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, Users, Rocket, Lock as LockIcon } from "lucide-react";
import tokenomicsBg from "@/assets/tokenomics-bg.jpg";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

export const Tokenomics = () => {
  const chartData = [
    { name: "Presale", value: 20, color: "#ef4444" },
    { name: "Development & Operations", value: 30, color: "#f97316" },
    { name: "Team & Advisors", value: 10, color: "#f59e0b" },
    { name: "Marketing & Partnerships", value: 15, color: "#eab308" },
    { name: "Reserve Fund", value: 15, color: "#84cc16" },
    { name: "Community Rewards", value: 10, color: "#22c55e" },
  ];

  const distribution = [
    { 
      label: "Presale", 
      percentage: "20%", 
      icon: Rocket, 
      color: "from-primary to-accent", 
      details: "3 billion RBN",
      description: "2.4B RBN at 20% discount (0.008 USD). Target: USD 19.2M for USA phone production, eSIM & app store."
    },
    { 
      label: "Development & Operations", 
      percentage: "30%", 
      icon: Users, 
      color: "from-primary via-accent to-primary", 
      details: "4.5 billion RBN",
      description: "R&D, manufacturing, operations over 4 years with quarterly vesting tied to milestones."
    },
    { 
      label: "Team & Advisors", 
      percentage: "10%", 
      icon: LockIcon, 
      color: "from-accent to-primary", 
      details: "1.5 billion RBN",
      description: "24-month vesting with 12-month cliff to ensure long-term commitment."
    },
    { 
      label: "Marketing & Partnerships", 
      percentage: "15%", 
      icon: Coins, 
      color: "from-accent to-primary", 
      details: "2.25 billion RBN",
      description: "USA launch campaigns, crypto community engagement, and global expansion over 18 months."
    },
    { 
      label: "Reserve Fund", 
      percentage: "15%", 
      icon: LockIcon, 
      color: "from-primary to-accent", 
      details: "2.25 billion RBN",
      description: "Future growth, liquidity needs, or buybacks. Managed by governance with community approval."
    },
    { 
      label: "Community Rewards", 
      percentage: "10%", 
      icon: Users, 
      color: "from-accent to-primary", 
      details: "1.5 billion RBN",
      description: "Airdrops, loyalty programs, and incentives over 24 months to boost adoption."
    },
  ];

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${tokenomicsBg})` }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm text-primary px-6 py-3 rounded-full mb-6 border border-primary/20">
            <Coins className="h-5 w-5" />
            <span className="text-sm font-bold">Token Distribution</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
            Tokenomics
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Total Supply: 15 billion RBN tokens engineered to fund the mobile project, ensure economic stability, and reward participants.
          </p>
        </div>

        {/* Chart Visualization */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm pb-4">
            <CardHeader>
              <CardTitle className="text-center text-xl sm:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Token Distribution Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="px-2 sm:px-6">
              <ResponsiveContainer width="100%" height={300} className="sm:hidden">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="45%"
                    labelLine={false}
                    label={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--primary) / 0.2)',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                  />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36}
                    wrapperStyle={{ paddingTop: '10px', fontSize: '11px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <ResponsiveContainer width="100%" height={400} className="hidden sm:block">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--primary) / 0.2)',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36}
                    wrapperStyle={{ paddingTop: '20px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {distribution.map((item, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <CardHeader className="relative">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-center text-lg">{item.label}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  {item.percentage}
                </p>
                <p className="text-sm text-center text-primary font-semibold">{item.details}</p>
                <p className="text-xs text-center text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
