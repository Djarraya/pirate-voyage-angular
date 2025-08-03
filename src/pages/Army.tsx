import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  Swords, 
  Shield, 
  Target,
  Heart,
  Navigation,
  TrendingUp,
  Plus,
  Star,
  Crown
} from "lucide-react";

const Army = () => {
  const crewMembers = [
    {
      id: 1,
      name: "Roronoa Zoro",
      role: "First Mate",
      level: 85,
      health: 95,
      attack: 98,
      defense: 85,
      speed: 75,
      specialty: "Swordsman",
      status: "Ready",
      experience: 2400,
      nextLevel: 2850
    },
    {
      id: 2,
      name: "Nami",
      role: "Navigator", 
      level: 78,
      health: 70,
      attack: 60,
      defense: 55,
      speed: 90,
      specialty: "Weather Control",
      status: "Training",
      experience: 1980,
      nextLevel: 2200
    },
    {
      id: 3,
      name: "Usopp",
      role: "Sniper",
      level: 72,
      health: 65,
      attack: 88,
      defense: 50,
      speed: 85,
      specialty: "Long Range",
      status: "Ready",
      experience: 1650,
      nextLevel: 1900
    },
    {
      id: 4,
      name: "Sanji",
      role: "Cook",
      level: 80,
      health: 85,
      attack: 92,
      defense: 75,
      speed: 88,
      specialty: "Black Leg Style",
      status: "Ready",
      experience: 2100,
      nextLevel: 2400
    },
    {
      id: 5,
      name: "Tony Tony Chopper",
      role: "Doctor",
      level: 68,
      health: 80,
      attack: 45,
      defense: 60,
      speed: 70,
      specialty: "Medical Support",
      status: "Resting",
      experience: 1200,
      nextLevel: 1550
    }
  ];

  const getStatColor = (value: number) => {
    if (value >= 90) return "text-red-600";
    if (value >= 70) return "text-yellow-600";
    if (value >= 50) return "text-blue-600";
    return "text-gray-600";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ready": return "bg-green-500";
      case "Training": return "bg-blue-500";
      case "Resting": return "bg-yellow-500";
      case "Injured": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const armyStats = {
    totalCrew: crewMembers.length,
    averageLevel: Math.round(crewMembers.reduce((sum, member) => sum + member.level, 0) / crewMembers.length),
    readyMembers: crewMembers.filter(m => m.status === "Ready").length,
    totalPower: crewMembers.reduce((sum, member) => sum + member.attack + member.defense, 0)
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="font-pirata text-4xl text-primary drop-shadow-lg">
          Straw Hat Crew
        </h1>
        <p className="font-cinzel text-lg text-muted-foreground">
          Train and manage your legendary crew members
        </p>
      </div>

      {/* Army Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="rope-border bg-parchment shadow-treasure">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bangers text-ocean-light mb-2">
              {armyStats.totalCrew}
            </div>
            <div className="font-cinzel text-sm text-muted-foreground">
              Total Crew
            </div>
          </CardContent>
        </Card>
        
        <Card className="rope-border bg-parchment shadow-treasure">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bangers text-treasure mb-2">
              {armyStats.averageLevel}
            </div>
            <div className="font-cinzel text-sm text-muted-foreground">
              Avg Level
            </div>
          </CardContent>
        </Card>
        
        <Card className="rope-border bg-parchment shadow-treasure">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bangers text-green-600 mb-2">
              {armyStats.readyMembers}
            </div>
            <div className="font-cinzel text-sm text-muted-foreground">
              Ready for Battle
            </div>
          </CardContent>
        </Card>
        
        <Card className="rope-border bg-parchment shadow-treasure">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bangers text-accent mb-2">
              {armyStats.totalPower}
            </div>
            <div className="font-cinzel text-sm text-muted-foreground">
              Total Power
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Crew Members Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {crewMembers.map((member) => (
          <Card key={member.id} className="rope-border bg-parchment shadow-ocean">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-3 font-pirata text-xl text-primary">
                  <Avatar className="w-12 h-12 border-2 border-gold">
                    <AvatarFallback className="bg-ocean text-white font-bangers">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-lg">{member.name}</div>
                    <div className="text-sm font-cinzel text-muted-foreground">
                      {member.role}
                    </div>
                  </div>
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Badge className={getStatusColor(member.status)}>
                    {member.status}
                  </Badge>
                  <Badge variant="outline" className="text-treasure">
                    Lv.{member.level}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Specialty */}
              <div className="flex items-center gap-2">
                <Crown className="h-4 w-4 text-gold" />
                <span className="font-cinzel text-sm font-semibold">
                  {member.specialty}
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span className="font-cinzel text-sm">Health</span>
                    </div>
                    <span className={`font-bangers ${getStatColor(member.health)}`}>
                      {member.health}
                    </span>
                  </div>
                  <Progress value={member.health} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Swords className="h-4 w-4 text-red-600" />
                      <span className="font-cinzel text-sm">Attack</span>
                    </div>
                    <span className={`font-bangers ${getStatColor(member.attack)}`}>
                      {member.attack}
                    </span>
                  </div>
                  <Progress value={member.attack} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-blue-600" />
                      <span className="font-cinzel text-sm">Defense</span>
                    </div>
                    <span className={`font-bangers ${getStatColor(member.defense)}`}>
                      {member.defense}
                    </span>
                  </div>
                  <Progress value={member.defense} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Navigation className="h-4 w-4 text-green-600" />
                      <span className="font-cinzel text-sm">Speed</span>
                    </div>
                    <span className={`font-bangers ${getStatColor(member.speed)}`}>
                      {member.speed}
                    </span>
                  </div>
                  <Progress value={member.speed} className="h-2" />
                </div>
              </div>

              {/* Experience Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-cinzel text-sm">Experience</span>
                  <span className="font-cinzel text-xs text-muted-foreground">
                    {member.experience}/{member.nextLevel}
                  </span>
                </div>
                <Progress 
                  value={(member.experience / member.nextLevel) * 100} 
                  className="h-2"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  className="flex-1 bg-treasure text-wood-dark hover:bg-gold transition-bounce"
                  disabled={member.status === "Training"}
                >
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Train
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1 border-ocean text-ocean hover:bg-ocean hover:text-white"
                  disabled={member.status !== "Ready"}
                >
                  <Target className="h-4 w-4 mr-2" />
                  Deploy
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recruitment Card */}
      <Card className="rope-border bg-parchment shadow-ocean">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-pirata text-2xl text-primary">
            <Plus className="h-6 w-6" />
            Recruit New Members
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="font-cinzel text-muted-foreground">
              Visit different islands to find and recruit powerful crew members. 
              Each island may have unique characters waiting to join your adventure!
            </p>
            <Button className="bg-ocean text-white hover:bg-ocean-light transition-bounce">
              <Users className="h-4 w-4 mr-2" />
              Visit Recruitment Islands
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Army;