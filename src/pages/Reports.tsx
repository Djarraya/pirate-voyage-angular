import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { 
  Scroll,
  ChevronDown,
  ChevronUp,
  Sword,
  Shield,
  Trophy,
  Skull,
  Users,
  Calendar,
  Target
} from "lucide-react";

interface CombatReport {
  id: string;
  date: string;
  attacker: {
    name: string;
    army: {
      marines: number;
      pirates: number;
      cannons: number;
      ships: number;
    };
    deaths: {
      marines: number;
      pirates: number;
      cannons: number;
      ships: number;
    };
  };
  defender: {
    name: string;
    army: {
      marines: number;
      pirates: number;
      cannons: number;
      ships: number;
    };
    deaths: {
      marines: number;
      pirates: number;
      cannons: number;
      ships: number;
    };
  };
  winner: "attacker" | "defender";
  pointsEarned: number;
  battleType: "attack" | "steal";
}

const Reports = () => {
  const [expandedReport, setExpandedReport] = useState<string | null>(null);

  // Mock data for combat reports
  const reports: CombatReport[] = [
    {
      id: "1",
      date: "2024-01-15 14:30",
      attacker: {
        name: "Monkey D. Luffy",
        army: { marines: 50, pirates: 120, cannons: 15, ships: 3 },
        deaths: { marines: 5, pirates: 8, cannons: 1, ships: 0 }
      },
      defender: {
        name: "Buggy the Clown",
        army: { marines: 30, pirates: 80, cannons: 8, ships: 2 },
        deaths: { marines: 12, pirates: 25, cannons: 3, ships: 1 }
      },
      winner: "attacker",
      pointsEarned: 1250,
      battleType: "attack"
    },
    {
      id: "2",
      date: "2024-01-14 09:15",
      attacker: {
        name: "Roronoa Zoro",
        army: { marines: 20, pirates: 60, cannons: 5, ships: 1 },
        deaths: { marines: 8, pirates: 15, cannons: 2, ships: 0 }
      },
      defender: {
        name: "You",
        army: { marines: 40, pirates: 90, cannons: 12, ships: 2 },
        deaths: { marines: 3, pirates: 5, cannons: 0, ships: 0 }
      },
      winner: "defender",
      pointsEarned: 800,
      battleType: "steal"
    },
    {
      id: "3",
      date: "2024-01-13 16:45",
      attacker: {
        name: "You",
        army: { marines: 80, pirates: 150, cannons: 20, ships: 4 },
        deaths: { marines: 10, pirates: 20, cannons: 3, ships: 0 }
      },
      defender: {
        name: "Captain Kuro",
        army: { marines: 25, pirates: 70, cannons: 6, ships: 1 },
        deaths: { marines: 20, pirates: 45, cannons: 4, ships: 1 }
      },
      winner: "attacker",
      pointsEarned: 2100,
      battleType: "attack"
    }
  ];

  const toggleReport = (reportId: string) => {
    setExpandedReport(expandedReport === reportId ? null : reportId);
  };

  const formatArmy = (army: any) => {
    return `${army.marines}M / ${army.pirates}P / ${army.cannons}C / ${army.ships}S`;
  };

  const getWinnerBadge = (winner: string, isAttacker: boolean) => {
    if ((winner === "attacker" && isAttacker) || (winner === "defender" && !isAttacker)) {
      return <Badge className="bg-green-600 text-white">Winner</Badge>;
    }
    return <Badge variant="destructive">Defeated</Badge>;
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="font-pirata text-4xl text-primary drop-shadow-lg">
          Battle Reports
        </h1>
        <p className="font-cinzel text-lg text-muted-foreground">
          Review your victories and defeats on the Grand Line
        </p>
      </div>

      {/* Reports List */}
      <Card className="rope-border bg-parchment shadow-ocean">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-pirata text-2xl text-primary">
            <Scroll className="h-6 w-6" />
            Combat History
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {reports.map((report) => (
            <Collapsible
              key={report.id}
              open={expandedReport === report.id}
              onOpenChange={() => toggleReport(report.id)}
            >
              <Card className="border-wood-light hover:border-primary/50 transition-colors">
                <CollapsibleTrigger asChild>
                  <CardHeader className="cursor-pointer hover:bg-primary/5 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="font-cinzel text-sm text-muted-foreground">
                            {report.date}
                          </span>
                        </div>
                        <Badge variant={report.battleType === "attack" ? "destructive" : "secondary"}>
                          {report.battleType === "attack" ? "Attack" : "Steal"}
                        </Badge>
                      </div>
                      {expandedReport === report.id ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                      {/* Attacker */}
                      <div className="flex items-center gap-2">
                        <Sword className="h-4 w-4 text-red-600" />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-cinzel font-semibold">{report.attacker.name}</span>
                            {getWinnerBadge(report.winner, true)}
                          </div>
                          <div className="font-cinzel text-xs text-muted-foreground">
                            {formatArmy(report.attacker.army)}
                          </div>
                        </div>
                      </div>

                      {/* VS */}
                      <div className="flex items-center justify-center">
                        <div className="font-pirata text-lg text-primary">VS</div>
                      </div>

                      {/* Defender */}
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-blue-600" />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-cinzel font-semibold">{report.defender.name}</span>
                            {getWinnerBadge(report.winner, false)}
                          </div>
                          <div className="font-cinzel text-xs text-muted-foreground">
                            {formatArmy(report.defender.army)}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 pt-2">
                      <div className="flex items-center gap-1">
                        <Trophy className="h-4 w-4 text-treasure" />
                        <span className="font-cinzel text-sm font-semibold">
                          {report.pointsEarned.toLocaleString()} points
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <div className="border-t border-wood-light pt-4 space-y-4">
                      <h4 className="font-cinzel font-semibold text-primary">Battle Details</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Attacker Details */}
                        <div className="space-y-3">
                          <h5 className="font-cinzel font-semibold flex items-center gap-2">
                            <Sword className="h-4 w-4 text-red-600" />
                            Attacker: {report.attacker.name}
                          </h5>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="font-cinzel text-sm">Initial Army:</span>
                              <span className="font-cinzel text-sm font-mono">
                                {formatArmy(report.attacker.army)}
                              </span>
                            </div>
                            <div className="flex justify-between text-red-600">
                              <span className="font-cinzel text-sm">Casualties:</span>
                              <span className="font-cinzel text-sm font-mono">
                                {formatArmy(report.attacker.deaths)}
                              </span>
                            </div>
                            <div className="flex justify-between font-semibold">
                              <span className="font-cinzel text-sm">Survivors:</span>
                              <span className="font-cinzel text-sm font-mono">
                                {formatArmy({
                                  marines: report.attacker.army.marines - report.attacker.deaths.marines,
                                  pirates: report.attacker.army.pirates - report.attacker.deaths.pirates,
                                  cannons: report.attacker.army.cannons - report.attacker.deaths.cannons,
                                  ships: report.attacker.army.ships - report.attacker.deaths.ships
                                })}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Defender Details */}
                        <div className="space-y-3">
                          <h5 className="font-cinzel font-semibold flex items-center gap-2">
                            <Shield className="h-4 w-4 text-blue-600" />
                            Defender: {report.defender.name}
                          </h5>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="font-cinzel text-sm">Initial Army:</span>
                              <span className="font-cinzel text-sm font-mono">
                                {formatArmy(report.defender.army)}
                              </span>
                            </div>
                            <div className="flex justify-between text-red-600">
                              <span className="font-cinzel text-sm">Casualties:</span>
                              <span className="font-cinzel text-sm font-mono">
                                {formatArmy(report.defender.deaths)}
                              </span>
                            </div>
                            <div className="flex justify-between font-semibold">
                              <span className="font-cinzel text-sm">Survivors:</span>
                              <span className="font-cinzel text-sm font-mono">
                                {formatArmy({
                                  marines: report.defender.army.marines - report.defender.deaths.marines,
                                  pirates: report.defender.army.pirates - report.defender.deaths.pirates,
                                  cannons: report.defender.army.cannons - report.defender.deaths.cannons,
                                  ships: report.defender.army.ships - report.defender.deaths.ships
                                })}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Battle Outcome */}
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Trophy className="h-5 w-5 text-treasure" />
                            <span className="font-cinzel font-semibold">
                              Victory: {report.winner === "attacker" ? report.attacker.name : report.defender.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Skull className="h-4 w-4 text-red-600" />
                            <span className="font-cinzel text-sm">
                              Total Casualties: {
                                Object.values(report.attacker.deaths).reduce((a, b) => a + b, 0) +
                                Object.values(report.defender.deaths).reduce((a, b) => a + b, 0)
                              }
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          ))}
        </CardContent>
      </Card>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="rope-border bg-parchment shadow-treasure">
          <CardContent className="p-4 text-center">
            <Trophy className="h-8 w-8 mx-auto mb-2 text-treasure" />
            <div className="font-pirata text-2xl text-primary">12</div>
            <div className="font-cinzel text-sm text-muted-foreground">Victories</div>
          </CardContent>
        </Card>
        
        <Card className="rope-border bg-parchment shadow-treasure">
          <CardContent className="p-4 text-center">
            <Skull className="h-8 w-8 mx-auto mb-2 text-red-600" />
            <div className="font-pirata text-2xl text-primary">3</div>
            <div className="font-cinzel text-sm text-muted-foreground">Defeats</div>
          </CardContent>
        </Card>
        
        <Card className="rope-border bg-parchment shadow-treasure">
          <CardContent className="p-4 text-center">
            <Target className="h-8 w-8 mx-auto mb-2 text-blue-600" />
            <div className="font-pirata text-2xl text-primary">80%</div>
            <div className="font-cinzel text-sm text-muted-foreground">Win Rate</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;